import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PhonesService } from '../../services/phones.service';
import { CreateEditPhonesComponent } from './create-edit-phones/create-edit-phones.component';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones = [];
  totalRecords:number;
  page: number = 1;
  searchText;

  constructor(
    private phonesService: PhonesService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllPhones();
  }
  getAllPhones() {
    this.phonesService.getAllItems().subscribe(data => {
      this.phones = data;
      this.totalRecords = data.length;
    })
  }
  createItem() {
    let item = {} as any;
    item.descriptionImages = [];
    this.openDialog(item);
  }
  editItem(item) {
    console.log("emit edititem: ", item);
    this.openDialog(item);
  }
  deleteItem(item) {
    if(confirm('Delete this item?')) 
    this.phonesService.deleteItem(item).subscribe(res => {
      this.toastr.info('Delete item succesfully', 'Notification');
      this.getAllPhones();
    });
  }
  openDialog(item) {
    let obj = { 
      _id: item._id, 
      name: item.name , 
      cate_id: item.cate_id,
      brand_id: item.brand_id,
      descriptionImages: item.descriptionImages,
      inputPrice: item.inputPrice,
      price: item.price,
      salePrice: item.salePrice,
      quantity: item.quantity,
      screen: item.screen,
      camera: item.camera,
      selfieCamera: item.selfieCamera,
      ram: item.ram,
      capacity: item.capacity,
      cpu: item.cpu,
      gpu: item.gpu,
      power: item.power,
      sim: item.sim,
      system: item.system,
      origin: item.origin,
      launched: item.launched,
      description: item.description
    };
    const dialogRef = this.dialog.open(CreateEditPhonesComponent, {
      data: obj,
      width: '800px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.phonesService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllPhones();
          })
        }
        else {
          this.phonesService.updateItem(result).subscribe(res => {
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllPhones();
          })
        }
      }
    });
  }
  refresh() {
    this.getAllPhones();
  }
  
}
