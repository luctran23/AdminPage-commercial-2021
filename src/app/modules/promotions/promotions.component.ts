import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PromotionsService } from 'src/app/services/promotions.service';
import { CreateEditPromotionsComponent } from './create-edit-promotions/create-edit-promotions.component';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  promotions = [];
  totalRecords: number;
  page: number = 1;
  searchText;
  constructor(
    private accountsService: PromotionsService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllPromotions();
  }
  getAllPromotions() {
    this.accountsService.getAllItems().subscribe(data => {
      this.promotions = data;
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
    if (confirm('Delete this item?'))
      this.accountsService.deleteItem(item).subscribe(res => {
        this.toastr.info('Delete item succesfully', 'Notification');
        this.getAllPromotions();
      });
  }
  openDialog(item) {
    let obj = {
      _id: item._id,
      name: item.name,
      cate_id: item.cate_id,
      prod_id: item.prod_id
      
    };
    const dialogRef = this.dialog.open(CreateEditPromotionsComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.accountsService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllPromotions();
          })
        }
        else {
          this.accountsService.updateItem(result).subscribe(res => {
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllPromotions();
          })
        }
      }
    });
  }
  refresh() {
    this.getAllPromotions();
  }

}
