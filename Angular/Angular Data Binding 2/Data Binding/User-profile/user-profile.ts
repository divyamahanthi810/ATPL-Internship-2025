import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  userName = 'John Doe';
userAge = 25;
userImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdocs.angularjs.org%2Fguide%2Fdatabinding&psig=AOvVaw2u7DV01hU4F6wYqBwdg7he&ust=1752818595205000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCOkKKcw44DFQAAAAAdAAAAABAE';

clickMessage="";
onClick(){
  this.clickMessage=`Button clicked by ${this.userName}`;
  console.log("clicked");
}

message:string=""

showDetails=false;

skills = ['Angular', 'TypeScript', 'HTML', 'CSS'];

isPremiumUser=true;

}
