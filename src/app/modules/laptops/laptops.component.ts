import { Component, OnInit } from '@angular/core';
import { CreateEditLaptopsComponent } from './create-edit-laptops/create-edit-laptops.component';
import { LaptopsService } from '../../services/laptops.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  laptops = [];
  totalRecords:number;
  page: number = 1;
  searchText;

  constructor(
    private laptopsService: LaptopsService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllLaptops();
  }
  getAllLaptops() {
    this.laptopsService.getAllItems().subscribe(data => {
      this.laptops = data;
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
    this.laptopsService.deleteItem(item).subscribe(res => {
      this.toastr.info('Delete item succesfully', 'Notification');
      this.getAllLaptops();
    });
  }
  openDialog(item) {
    let obj = { 
      _id: item._id, 
      name: item.name , 
      cate_id: item.cate_id,
      brand_id: item.brand_id,
      cpu: item.cpu,
      inputPrice: item.inputPrice,
      price: item.price,
      salePrice: item.salePrice,
      quantity: item.quantity,
      ram: item.ram,
      screen: item.screen,
      origin: item.origin,
      launched: item.launched,
      description: item.description,
      descriptionImages: item.descriptionImages
    };
    const dialogRef = this.dialog.open(CreateEditLaptopsComponent, {
      data: obj,
      width: '800px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.laptopsService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllLaptops();
          })
        }
        else {
          this.laptopsService.updateItem(result).subscribe(res => {
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllLaptops();
          })
        }
      }
    });
  }
  refresh() {
    this.getAllLaptops();
  }
}
