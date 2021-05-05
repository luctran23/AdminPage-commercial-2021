import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateEditUsersComponent } from './create-edit-users/create-edit-users.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  totalRecords: number;
  page: number = 1;
  searchText;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.usersService.getAllItems().subscribe(data => {
      this.users = data;
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
      this.usersService.deleteItem(item).subscribe(res => {
        this.toastr.info('Delete item succesfully', 'Notification');
        this.getAllUsers();
      });
  }
  openDialog(item) {
    let obj = {
      _id: item._id,
      name: item.name,
      email: item.email,
      address: item.address,
      phone: item.phone
    };
    const dialogRef = this.dialog.open(CreateEditUsersComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.usersService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllUsers();
          })
        }
        else {
          this.usersService.updateItem(result).subscribe(res => {
            this.toastr.success('Update item succesfully', 'Notification');
            this.getAllUsers();
          })
        }
      }
    });
  }
  refresh() {
    this.getAllUsers();
  }

}
