import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BrandsService } from '../../services/brands.service';
import { CreateEditBrandsComponent } from './create-edit-brands/create-edit-brands.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands = [];
  totalRecords:number;
  page: number = 1;
  searchText;

  constructor(
    private brandsService: BrandsService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllBrands();
  }
  getAllBrands() {
    this.brandsService.getAllItems().subscribe(data => {
      this.brands = data;
      this.totalRecords = data.length;
    })
  }
  createItem() {
    let item = {};
    this.openDialog(item);
  }
  editItem(item) {
    this.openDialog(item);
  }
  deleteItem(item) {
    if(confirm('Delete this item?')) 
    this.brandsService.deleteItem(item).subscribe(res => {
      this.toastr.info('Delete item succesfully', 'Notification');
      this.getAllBrands();
    });
  }
  openDialog(item) {
    let obj = { _id: item._id, name: item.name , cate_id: item.cate_id };
    const dialogRef = this.dialog.open(CreateEditBrandsComponent, {
      data: obj,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.brandsService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllBrands();
          })
        }
        else {
          this.brandsService.updateItem(result).subscribe(res => {
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllBrands();
          })
        }
      }
    });
  }
}
