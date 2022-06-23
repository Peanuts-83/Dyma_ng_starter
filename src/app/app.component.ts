import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public color: string = 'red'

  public changeColor(): void {
    this.color = this.color == 'red' ? 'green' : 'red'
  }

  public users: Array<{nom: string}> = [
    {nom: 'Georges'}, {nom: 'Tom'}, {nom: 'Julie'}
  ]
}
