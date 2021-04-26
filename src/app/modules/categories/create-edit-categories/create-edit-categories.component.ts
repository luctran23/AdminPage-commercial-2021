import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-categories',
  templateUrl: './create-edit-categories.component.html',
  styleUrls: ['./create-edit-categories.component.css']
})
export class CreateEditCategoriesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateEditCategoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
