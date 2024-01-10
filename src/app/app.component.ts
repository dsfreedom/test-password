import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-password';
  strengths = ['Easy', 'Medium', 'Strong']
  passwordStrength = '';

  handlePasswordChange(event: Event) {
    const input = (event.target as HTMLInputElement).value.trim();

    if (input === '') {
      this.passwordStrength = '';
      return;
    }

    if (input.length < 8) {
      this.passwordStrength = 'unfinished';
      return;
    }

    const specialCharecters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const hasLetters = /[a-zA-Z]/g.test(input);
    const hasNumbers = /\d/.test(input);
    const hasSymbols = specialCharecters.test(input);

    const strength = Number(hasLetters) + Number(hasNumbers) + Number(hasSymbols);

    switch (strength) {
      case 1:
        this.passwordStrength = this.strengths[0];
        break;
      case 2:
        this.passwordStrength = this.strengths[1];
        break;
      case 3:
        this.passwordStrength = this.strengths[2];
        break;
    }
  }
}
