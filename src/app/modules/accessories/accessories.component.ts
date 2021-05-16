import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AccessoriesService } from '../../services/accessories.service';
import { CreateEditAccessoriesComponent } from './create-edit-accessories/create-edit-accessories.component';


@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  accessories = [];
  totalRecords:number;
  page: number = 1;
  searchText;

  constructor(
    private accessoriesService: AccessoriesService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllAccessories();
  }
  getAllAccessories() {
    this.accessoriesService.getAllItems().subscribe(data => {
      this.accessories = data;
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
    this.accessoriesService.deleteItem(item).subscribe(res => {
      this.toastr.info('Delete item succesfully', 'Notification');
      this.getAllAccessories();
    });
  }
  openDialog(item) {
    let obj = { 
      _id: item._id, 
      name: item.name , 
      cate_id: item.cate_id,
      brand_id: item.brand_id,
      inputPrice: item.inputPrice,
      price: item.price,
      salePrice: item.salePrice,
      quantity: item.quantity,
      origin: item.origin,
      description: item.description,
      descriptionImages: item.descriptionImages
    };
    const dialogRef = this.dialog.open(CreateEditAccessoriesComponent, {
      data: obj,
      width: '800px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.accessoriesService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllAccessories();
          })
        }
        else {
          this.accessoriesService.updateItem(result).subscribe(res => {
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllAccessories();
          })
        }
      }
    });
  }
  refresh() {
    this.getAllAccessories();
  }

}
