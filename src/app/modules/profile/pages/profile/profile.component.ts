import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/classes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userToShow: User = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUser().subscribe((user: User) => {
      this.userToShow = user;
      console.log(this.userToShow);
    });
  }

}
