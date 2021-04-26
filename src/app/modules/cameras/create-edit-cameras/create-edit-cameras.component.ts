import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BrandsService } from 'src/app/services/brands.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-create-edit-cameras',
  templateUrl: './create-edit-cameras.component.html',
  styleUrls: ['./create-edit-cameras.component.css']
})
export class CreateEditCamerasComponent implements OnInit {

  categories = [];
  brands = [];
  title = "cloudsSorage";
  selectedFile: File = null;
  images = [];
  downloadURL: Observable<string>;
  constructor(public dialogRef: MatDialogRef<CreateEditCamerasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cateService: CategoriesService,
    private brandService: BrandsService,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllBrands();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getAllCategories() {
    this.cateService.getAllItems().subscribe(data => {
      this.categories = data;
      console.log("all categories: ", this.categories);
    })
  }
  getAllBrands() {
    this.brandService.getAllItems().subscribe(data => {
      this.brands = data;
    });
  }
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.images.push(url);
              console.log("url: ", url);
              this.data.descriptionImages = this.images;
            }
          });
        })
      )
      .subscribe();
  }

}
