import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/services/ng-auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: any;
  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    const user = JSON.parse(localStorage.getItem('userToken'));
    this.user = user;
    console.log("this.usr: ", this.user);
  }
}
