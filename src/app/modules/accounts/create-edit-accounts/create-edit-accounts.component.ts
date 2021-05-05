import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-accounts',
  templateUrl: './create-edit-accounts.component.html',
  styleUrls: ['./create-edit-accounts.component.css']
})
export class CreateEditAccountsComponent implements OnInit {

  inputType = "password";
  constructor(public dialogRef: MatDialogRef<CreateEditAccountsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  showHidePassword() {
    if(this.inputType == "password") {
      this.inputType = "text";
    }
    else {
      this.inputType = "password";
    }
  }
}
