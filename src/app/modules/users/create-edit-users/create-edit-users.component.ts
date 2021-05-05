import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-users',
  templateUrl: './create-edit-users.component.html',
  styleUrls: ['./create-edit-users.component.css']
})
export class CreateEditUsersComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateEditUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
