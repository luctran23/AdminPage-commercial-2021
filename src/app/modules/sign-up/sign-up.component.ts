import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/services/ng-auth.service';
import { AccountLoginService } from 'src/app/services/account-login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService,
    private accountLoginService: AccountLoginService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }
  signUp(name, password) {
    console.log(name, password);
    
    this.accountLoginService.register({username: name, password: password}).subscribe(res => {
      this.toastr.success('Đăng ký tài khoản thành công', 'Thông báo');
    });
  }
  
}
