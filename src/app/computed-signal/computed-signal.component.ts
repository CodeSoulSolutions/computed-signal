import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent {
  a = signal(10);
  b = signal(20);

  sum = computed(() => this.a() + this.b());

  increaseA() {
    this.a.set(this.a() + 1);
  }

  increaseB() {
    this.b.set(this.b() + 1);
  }
}
