import { Component } from '@angular/core';
// decorators

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular';
  myName: string ="nguyễn ngọc sỹ";
  myStatus:boolean = false;
  showInfo(name:string): string{
    return ` tên tôi là :${name ? name : this.myName}`;
  }
}
