import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/services/ng-auth.service';
import { AccountLoginService } from 'src/app/services/account-login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService,
    private accountLoginService: AccountLoginService) { }

  ngOnInit(): void {
  }
  signUp(name, password) {
    console.log(name, password);
    
    this.accountLoginService.register({username: name, password: password}).subscribe(res => console.log('HTTP response', res),
    err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'));
  }
  
}
