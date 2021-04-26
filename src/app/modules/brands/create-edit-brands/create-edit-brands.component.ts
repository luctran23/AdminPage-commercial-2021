import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-create-edit-brands',
  templateUrl: './create-edit-brands.component.html',
  styleUrls: ['./create-edit-brands.component.css']
})
export class CreateEditBrandsComponent implements OnInit {
  categories = [];
  constructor(public dialogRef: MatDialogRef<CreateEditBrandsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cateService: CategoriesService,) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getAllCategories() {
    this.cateService.getAllItems().subscribe(data => {
      this.categories = data;
    })
  }
}
