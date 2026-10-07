import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { helloUrl } from './hello-url';

@Component({
  selector: 'app-root',
  template: `
    <main>
      @if (message(); as text) {
        <h1>{{ text }}</h1>
      } @else if (error()) {
        <p class="error">Could not reach the API. Is the backend running on port 5000?</p>
      } @else {
        <p>Loading…</p>
      }
    </main>
  `,
  styles: `
    main {
      font-family: sans-serif;
      text-align: center;
      margin-top: 4rem;
    }
    .error {
      color: #c0392b;
    }
  `,
})
export class App {
  private readonly http = inject(HttpClient);

  protected readonly message = signal<string | null>(null);
  protected readonly error = signal(false);

  constructor() {
    this.http.get<{ message: string }>(helloUrl()).subscribe({
      next: (res) => this.message.set(res.message),
      error: () => this.error.set(true),
    });
  }
}
