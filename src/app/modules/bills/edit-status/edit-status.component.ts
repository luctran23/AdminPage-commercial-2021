import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { STATUS } from 'src/app/mock-data.ts/status';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css']
})
export class EditStatusComponent implements OnInit {
  status = STATUS;

  constructor(public dialogRef: MatDialogRef<EditStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('data', this.data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
