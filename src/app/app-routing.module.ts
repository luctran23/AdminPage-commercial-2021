import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { LoginComponent } from './modules/login/login.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { ErrorComponent } from './modules/error/error.component';
import { PhonesComponent } from './modules/phones/phones.component';
import { LaptopsComponent } from './modules/laptops/laptops.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { BrandsComponent } from './modules/brands/brands.component';
import { CamerasComponent } from './modules/cameras/cameras.component';
import { AccessoriesComponent } from './modules/accessories/accessories.component';
import { UsersComponent } from './modules/users/users.component';
import { AccountsComponent } from './modules/accounts/accounts.component';
import { PromotionsComponent } from './modules/promotions/promotions.component';
import { BillsComponent } from './modules/bills/bills.component';
import { BillDetailComponent } from './modules/bills/bill-detail/bill-detail.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { EmailVerificationComponent } from './modules/email-verification/email-verification.component';
import { AuthGuard } from "../app/services/auth.guard";
import { CommentsComponent } from './modules/comments/comments.component';
import { SalesComponent } from './modules/dashboard/sales/sales.component';
import { BestSellersComponent } from './modules/dashboard/best-sellers/best-sellers.component';
import { ProfitsComponent } from './modules/dashboard/profits/profits.component';
import { NewsComponent } from './modules/news/news.component';
import { NewsDetailComponent } from './modules/news/news-detail/news-detail.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: PhonesComponent, canActivate: [AuthGuard] },
      { path: 'about', component: AboutComponent },
      { path: 'categories', component: CategoriesComponent},
      { path: 'brands', component: BrandsComponent },
      { path: 'phones', component: PhonesComponent },
      { path: 'laptops', component: LaptopsComponent },
      { path: 'cameras', component: CamerasComponent },
      { path: 'accessories', component: AccessoriesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'promotions', component: PromotionsComponent },
      { path: 'bills', component: BillsComponent },
      { path: 'bills/:id', component: BillDetailComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'best-sellers', component: BestSellersComponent },
      { path: 'profits', component: ProfitsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsDetailComponent }
    ]
  },
  {
    path: '',
    component: FullwidthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'email-verification',
        component: EmailVerificationComponent
      },
    ]
  },
  { path: '**', component: ErrorComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
