import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { DefaultComponent } from './default.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ErrorComponent } from 'src/app/modules/error/error.component';
import { PhonesComponent } from 'src/app/modules/phones/phones.component';
import { LaptopsComponent } from 'src/app/modules/laptops/laptops.component';
import { CategoriesComponent } from 'src/app/modules/categories/categories.component';
import { CreateEditCategoriesComponent } from 'src/app/modules/categories/create-edit-categories/create-edit-categories.component';

//import angular material
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatBadgeModule } from '@angular/material/badge'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatNativeDateModule } from '@angular/material/core'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSliderModule } from '@angular/material/slider'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSortModule } from '@angular/material/sort'
import { MatStepperModule } from '@angular/material/stepper'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatTreeModule } from '@angular/material/tree'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrandsComponent } from 'src/app/modules/brands/brands.component';
import { CreateEditBrandsComponent } from 'src/app/modules/brands/create-edit-brands/create-edit-brands.component';
import { CreateEditPhonesComponent } from 'src/app/modules/phones/create-edit-phones/create-edit-phones.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { EditorModule } from "@tinymce/tinymce-angular";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { CreateEditLaptopsComponent } from 'src/app/modules/laptops/create-edit-laptops/create-edit-laptops.component';
import { CamerasComponent } from 'src/app/modules/cameras/cameras.component';
import { CreateEditCamerasComponent } from 'src/app/modules/cameras/create-edit-cameras/create-edit-cameras.component';
import { AccessoriesComponent } from 'src/app/modules/accessories/accessories.component';
import { CreateEditAccessoriesComponent } from 'src/app/modules/accessories/create-edit-accessories/create-edit-accessories.component';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { CreateEditUsersComponent } from 'src/app/modules/users/create-edit-users/create-edit-users.component';
import { AccountsComponent } from 'src/app/modules/accounts/accounts.component'
import { CreateEditAccountsComponent } from 'src/app/modules/accounts/create-edit-accounts/create-edit-accounts.component';
import { PromotionsComponent } from 'src/app/modules/promotions/promotions.component';
import { CreateEditPromotionsComponent } from 'src/app/modules/promotions/create-edit-promotions/create-edit-promotions.component';
import { BillsComponent } from 'src/app/modules/bills/bills.component';
import { BillDetailComponent } from 'src/app/modules/bills/bill-detail/bill-detail.component';
import { CommentsComponent } from 'src/app/modules/comments/comments.component';
import { ReplyCommentsComponent } from 'src/app/modules/comments/reply-comments/reply-comments.component';
import { SalesComponent } from 'src/app/modules/dashboard/sales/sales.component';
import { BestSellersComponent } from 'src/app/modules/dashboard/best-sellers/best-sellers.component';
import { ProfitsComponent } from 'src/app/modules/dashboard/profits/profits.component';
import { EditStatusComponent } from 'src/app/modules/bills/edit-status/edit-status.component';
import { NewsComponent } from 'src/app/modules/news/news.component';
import { NewsDetailComponent } from 'src/app/modules/news/news-detail/news-detail.component';
import { CreateEditNewsComponent } from 'src/app/modules/news/create-edit-news/create-edit-news.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    PhonesComponent,
    LaptopsComponent,
    CategoriesComponent,
    CreateEditCategoriesComponent,
    BrandsComponent,
    CreateEditBrandsComponent,
    CreateEditPhonesComponent,
    CreateEditLaptopsComponent,
    CamerasComponent,
    CreateEditCamerasComponent,
    AccessoriesComponent,
    CreateEditAccessoriesComponent,
    UsersComponent,
    CreateEditUsersComponent,
    AccountsComponent,
    CreateEditAccountsComponent,
    PromotionsComponent,
    CreateEditPromotionsComponent,
    BillsComponent,
    BillDetailComponent,
    CommentsComponent,
    ReplyCommentsComponent,
    SalesComponent,
    BestSellersComponent,
    ProfitsComponent,
    EditStatusComponent,
    NewsComponent,
    NewsDetailComponent,
    CreateEditNewsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    EditorModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "Angular Image Gallery")
  ],
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    Ng2SearchPipeModule,
    EditorModule,
  ]
})
export class DefaultModule { }
