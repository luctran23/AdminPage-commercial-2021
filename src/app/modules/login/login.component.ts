import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  login(username, pass) {
    this.accountLoginService.login({username: username, password: pass}).subscribe(res => {
      localStorage.setItem('userToken', JSON.stringify(res));
      this.router.navigate(['home']);
    },
    err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'));
  }
}
