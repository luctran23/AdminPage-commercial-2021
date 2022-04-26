import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountLoginService } from 'src/app/services/account-login.service';
import { NgAuthService } from 'src/app/services/ng-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService,
    private accountLoginService: AccountLoginService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }
  login(username, pass) {
    this.accountLoginService.login({username: username, password: pass}).subscribe(res => {
      localStorage.setItem('userToken', JSON.stringify(res));
      this.router.navigate(['home']);
    },
    err => {
      this.toastr.error("Thông tin đăng nhập chưa chính xác", "Lỗi");
    },
    () => console.log('HTTP request completed.'));
  }
}
