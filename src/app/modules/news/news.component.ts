import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/services/news.service';
import { CreateEditNewsComponent } from './create-edit-news/create-edit-news.component';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news = [];
  totalRecords: number;
  page: number = 1;
  searchText;
  constructor(
    private newsService: NewsService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }
  getAllAccounts() {
    const user = JSON.parse(localStorage.getItem('userToken'));
    this.newsService.getAllItems().subscribe(data => {
      this.news = data;
      this.totalRecords = data.length;
    })
  }
  createItem() {
    let item = {} as any;
    item.time = new Date();
    this.openDialog(item);
  }
  editItem(item) {
    item.time = new Date();
    this.openDialog(item);
  }
  deleteItem(item) {
    if (confirm('Delete this item?'))
      this.newsService.deleteItem(item).subscribe(res => {
        this.toastr.info('Delete item succesfully', 'Notification');
        this.getAllAccounts();
      });
  }
  openDialog(item) {
    let obj = {
      _id: item._id,
      title: item.title,
      content: item.content,
      time: item.time,
      image: item.image
    };
    const dialogRef = this.dialog.open(CreateEditNewsComponent, {
      data: obj,
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.newsService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllAccounts();
          })
        }
        else {
          this.newsService.updateItem(result).subscribe(res => {
            console.log(res);
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllAccounts();
          })
        }
      }
    });
  }
  refresh() {
    this.getAllAccounts();
  }
}
