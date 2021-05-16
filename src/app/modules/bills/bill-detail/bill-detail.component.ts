import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillsService } from 'src/app/services/bills.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {
  billDetail;
  page: number = 1;
  total: number;
  constructor(private activatedRoute: ActivatedRoute,
    private billService: BillsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
   this.getBillDetail();
  }
  getBillDetail() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.billService.getSpecificItem(params.id).subscribe(res => {
        this.billDetail = res;
        console.log("res: ", res);
        this.total = res.products.reduce((sum, item) => {
          return sum + item.salePrice * item.quantity;
        },0);
      });
    });
  }
  deleteItem(item) {
    if (confirm('Delete this item?'))
      this.billService.deleteItem(item).subscribe(res => {
        this.toastr.info('Delete item succesfully', 'Notification');
        this.getBillDetail();
      });
  }
}
