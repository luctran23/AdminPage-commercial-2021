import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { STATUS } from 'src/app/mock-data.ts/status';
import { BillsService } from 'src/app/services/bills.service';
import { EditStatusComponent } from './edit-status/edit-status.component';


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bills = [];
  totalRecords: number;
  page: number = 1;
  searchText;
  status = STATUS;
  constructor(
    private billsService: BillsService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllBills();
  }
  getAllBills() {
    this.billsService.getAllItems().subscribe(data => {
      this.bills = data.reverse();
      this.totalRecords = data.length;
    })
  }

  viewDetail(value) {
    this.router.navigate(['bills'], { relativeTo: this.route, queryParams: { id: value._id }, replaceUrl: true })
  }
  refresh() {
    this.getAllBills();
  }
  editStatus(item) {
    this.openDialog(item);
  }
  openDialog(item) {
    let obj = { _id: item._id, prod_Ids: item.prod_Ids, date: item.date, user_id: item.user_id, status: item.status };
    const dialogRef = this.dialog.open(EditStatusComponent, {
      data: obj,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.billsService.updateItem(result).subscribe(res => {
          this.toastr.success('Cập nhật trạng thái thành công', 'Thông báo');
          this.getAllBills();
        })

      }
    });
  }
  deleteBill(item) {
    if(confirm('Xóa đơn này?')) 
    this.billsService.deleteItem(item).subscribe(res => {
      this.toastr.info('Xóa đơn thành công', 'Thông báo');
      this.getAllBills();
    });
  }
}
