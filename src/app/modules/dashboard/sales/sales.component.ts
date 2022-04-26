import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  products = [];
  totalSoldProds = 0;
  profits = 0;
  constructor(private salesService: SalesService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllSales();
  }
  getAllSales() {
    this.salesService.getAllItems().subscribe(data => {
      this.products = data;
      this.totalSoldProds = data.reduce((total, item) => total + item.quantity, 0)
      this.profits = data.reduce((total, item) => total + (item.salePrice - item.inputPrice) * item.quantity,0);
    })
  }
  getTimeRange(startDate, endDate) {
    try {
      const s = moment(new Date(startDate).toISOString());
      const e = moment(new Date(endDate).toISOString());
      if (!s.isBefore(e) || startDate == undefined || endDate == undefined) {
        this.toastr.error('Ngày bắt đầu phải nhỏ hơn ngày kết thúc', 'Lỗi');
        return;
      }
      this.salesService.getProdByDateRange(s.format('YYYY-MM-DD'), e.format('YYYY-MM-DD')).subscribe(data => {
        this.products = data;
        this.totalSoldProds = data.reduce((total, item) => total + item.quantity, 0);
        this.profits = data.reduce((total, item) => total + (item.salePrice - item.inputPrice) * item.quantity,0);
      })
    } catch (err) {
      this.toastr.error(err, 'Lỗi');
    }

  }
}
