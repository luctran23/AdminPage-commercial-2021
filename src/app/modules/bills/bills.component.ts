import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillsService } from 'src/app/services/bills.service';

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
  constructor(
    private accountsService: BillsService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllBills();
  }
  getAllBills() {
    this.accountsService.getAllItems().subscribe(data => {
      this.bills = data;
      this.totalRecords = data.length;
    })
  }
  
  viewDetail(value) {
    this.router.navigate(['bills' ], {relativeTo: this.route, queryParams: { id: value._id } ,replaceUrl: true})
  }
  refresh() {
    this.getAllBills();
  }

}
