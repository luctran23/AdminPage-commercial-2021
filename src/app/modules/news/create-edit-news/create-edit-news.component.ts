import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-edit-news',
  templateUrl: './create-edit-news.component.html',
  styleUrls: ['./create-edit-news.component.css']
})
export class CreateEditNewsComponent implements OnInit {
  images = [];
  isDisabled = true;
  downloadURL: Observable<string>;
  constructor(public dialogRef: MatDialogRef<CreateEditNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
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
              this.data.image = this.images;
              this.isDisabled = false;
            }
          });
        })
      )
      .subscribe();
  }
}
