import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CreateEditAccountsComponent } from './create-edit-accounts/create-edit-accounts.component';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts = [];
  totalRecords: number;
  page: number = 1;
  searchText;
  constructor(
    private accountsService: AccountsService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }
  getAllAccounts() {
    this.accountsService.getAllItems().subscribe(data => {
      this.accounts = data;
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
        this.getAllAccounts();
      });
  }
  openDialog(item) {
    let obj = {
      _id: item._id,
      username: item.username,
      password: item.password
    };
    const dialogRef = this.dialog.open(CreateEditAccountsComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (item._id == null) {
          this.accountsService.createItem(result).subscribe(res => {
            this.toastr.success('Create item succesfully', 'Notification');
            this.getAllAccounts();
          })
        }
        else {
          this.accountsService.updateItem(result).subscribe(res => {
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
  hidePassword(str): string {
    return str.replace(/\w/g, '*');
  }
  
}
