import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ReplyCommentsComponent } from './reply-comments/reply-comments.component';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments = [];
  totalRecords: number;
  page: number = 1;
  searchText;
  constructor(
    private commentsService: CommentsService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllComments();
  }
  getAllComments() {
    this.commentsService.getAllItems().subscribe(data => {
      this.comments = data.filter(item => item.parent_id == "0");
      this.totalRecords = this.comments.length;
    })
  }
  // CRUD item
  createItem() {
    let item = {};
    this.openDialog(item);
  }
  reply(item) {
    let reply = {} as any;
    reply.prod_id = item.prod_id;
    reply.parent_id = item._id;
    reply.time = new Date();
    reply.isAdmin = true;

    this.openDialog(reply);
  }
  deleteItem(item) {
    if (confirm('Delete this item?'))
      this.commentsService.deleteItem(item).subscribe(res => {
        this.toastr.info('Delete item succesfully', 'Notification');
        this.getAllComments();
      });
  }
  openDialog(item) {
    let obj = { _id: item._id, prod_id: item.prod_id, content: item.content, parent_id: item.parent_id, time: item.time, user_name: item.user_name, isAdmin: item.isAdmin };
    const dialogRef = this.dialog.open(ReplyCommentsComponent, {
      data: obj,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.commentsService.createItem(result).subscribe(res => {
          this.toastr.success('Create item succesfully', 'Notification');
          this.getAllComments();
        })
      }
    });
  }

}
