import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComputedSignalComponent } from "./computed-signal/computed-signal.component";

@Component({
  selector: 'app-root',
  imports: [ComputedSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code';
}
