import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nesma Manasra';
  jobTitle = 'Front-End Developer';
  img = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  aboutMe = 'Front-end developer with experience designing interfaces with frameworks and the ability to understand';
  newDate = new Date();
  counter = 0;
  increment(){
    this.counter ++ ;
  };
  decrement(){
    this.counter --;
  }
  name = 'nesma nale manasra';
  UpperCase(){
    this.name.toUpperCase();
  };

  LowerCase(){
    this.name.toLowerCase()
  }

}
