import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-edit-promotions',
  templateUrl: './create-edit-promotions.component.html',
  styleUrls: ['./create-edit-promotions.component.css']
})
export class CreateEditPromotionsComponent implements OnInit {
  categories = [];
  products = [];
  searchText = '';
  myControl = new FormControl();
  constructor(public dialogRef: MatDialogRef<CreateEditPromotionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cateService: CategoriesService,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    if(this.data.cate_id) {
      this.getSpecificProd(this.data.cate_id);
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getAllCategories() {
    this.cateService.getAllItems().subscribe(data => {
      this.categories = data;
    })
  }
  onSelectedCate(event) {
    this.getSpecificProd(event.value);
  }
  getSpecificProd(id: string) {
    this.productService.getSpecificItem(id).subscribe(data => {
      this.products = data;
      console.log("products: ", data, "id: ", id);
    });
  }

}
