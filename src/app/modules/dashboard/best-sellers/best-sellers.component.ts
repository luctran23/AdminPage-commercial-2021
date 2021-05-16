import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  products = [];
  totalSoldProds = 0;
  constructor(private salesService: SalesService,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.getAllSales();
    }
    getAllSales() {
      this.salesService.getAllItems().subscribe(data => {
        this.products = data;
        this.totalSoldProds = data.reduce((total, item) => total + item.quantity, 0);
        //this.products.splice(3);
        this.products.sort((a, b) => (a.quantity < b.quantity)?1:((b.quantity < a.quantity)?-1 : 0))
      })
    }
  getTimeRange(startDate, endDate) {
    try {
      const s = moment(new Date(startDate).toISOString());
      const e = moment(new Date(endDate).toISOString());
      if (!s.isBefore(e) || startDate == undefined || endDate == undefined) {
        this.toastr.error('The start date must be before the end date', 'Error');
        return;
      }
      this.salesService.getProdByDateRange(s.format('YYYY-MM-DD'), e.format('YYYY-MM-DD')).subscribe(data => {
        this.products = data;
        this.totalSoldProds = data.reduce((total, item) => total + item.quantity, 0)
        //this.products.splice(3);
        this.products.sort((a, b) => (a.quantity < b.quantity)?1:((b.quantity < a.quantity)?-1 : 0))
      })

    } catch (err) {
      this.toastr.error(err, 'Error');
    }

  }
}
