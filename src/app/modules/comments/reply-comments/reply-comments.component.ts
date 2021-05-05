import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reply-comments',
  templateUrl: './reply-comments.component.html',
  styleUrls: ['./reply-comments.component.css']
})
export class ReplyCommentsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReplyCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
