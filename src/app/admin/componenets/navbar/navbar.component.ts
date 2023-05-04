import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/model/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  firstname : string;
  lastname : string;
  picture : any;
  user : User;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    console.log(environment.userid);
  this.userService.getUser(environment.userid).subscribe((res : any) => {this.user = res;
    this.firstname = this.user.firstName;
    this.lastname = this.user.lastName;
  });
    console.log(this.user);
  
  this.picture = this.userService.host+'user/getpicture/'+environment.picture;
  }

}
