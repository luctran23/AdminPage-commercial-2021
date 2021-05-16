import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateEditCamerasComponent } from './create-edit-cameras/create-edit-cameras.component';
import { CamerasService } from '../../services/cameras.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  cameras = [];
  totalRecords:number;
  page: number = 1;
  searchText;

  constructor(
    private camerasService: CamerasService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllCameras();
  }
  getAllCameras() {
    this.camerasService.getAllItems().subscribe(data => {
      this.cameras = data;
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
    this.camerasService.deleteItem(item).subscribe(res => {
      this.toastr.info('Delete item succesfully', 'Notification');
      this.getAllCameras();
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
    const dialogRef = this.dialog.open(CreateEditCamerasComponent, {
      data: obj,
      width: '800px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.camerasService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllCameras();
          })
        }
        else {
          this.camerasService.updateItem(result).subscribe(res => {
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllCameras();
          })
        }
      }
    });
  }
  refresh() {
    this.getAllCameras();
  }

}
