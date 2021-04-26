import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditCategoriesComponent } from './create-edit-categories/create-edit-categories.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = [];
  totalRecords:number;
  page: number = 1;
  searchText;
  constructor(
    private cateService: CategoriesService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.cateService.getAllItems().subscribe(data => {
      this.categories = data;
      this.totalRecords = data.length;
      console.log("categories: ", this.categories);
    })
  }
  // CRUD item
  createItem() {
    let item = {};
    this.openDialog(item);
  }
  editItem(item) {
    this.openDialog(item);
  }
  deleteItem(item) {
    if(confirm('Delete this item?')) 
    this.cateService.deleteItem(item).subscribe(res => {
      this.toastr.info('Delete item succesfully', 'Notification');
      this.getAllCategories();
    });
  }
  openDialog(item) {
    let obj = { _id: item._id, name: item.name }
    const dialogRef = this.dialog.open(CreateEditCategoriesComponent, {
      data: obj,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.cateService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllCategories();
          })
        }
        else {
          this.cateService.updateItem(result).subscribe(res => {
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllCategories();
          })
        }
      }
    });
  }
}
