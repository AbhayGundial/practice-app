import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-app';
  // color: string;
  showPara = true;
  count = 0;
  onClick(){
    
    this.count++;

    if (this.showPara) {
      this.showPara = false;
    } else {
      this.showPara = true;
    }
    console.log(this.count);
    
  }
}
