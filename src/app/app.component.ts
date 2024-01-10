import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { FormControl } from '@angular/forms';

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
    const input = (event.target as HTMLInputElement).value;

    const specialCharecters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const hasLetters = /[a-zA-Z]/g.test(input);
    const hasNumbers = /\d/.test(input);
    const hasSymbols = specialCharecters.test(input);

    if (input.length < 8) {
      this.passwordStrength = 'unfinished';
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.passwordStrength = this.strengths[2];
    } else if (
      (hasLetters && hasNumbers && !hasSymbols)
      || (hasLetters && !hasNumbers && hasSymbols)
      || (!hasLetters && hasNumbers && hasSymbols)
    ) {
      this.passwordStrength = this.strengths[1];
    } else {
      this.passwordStrength = this.strengths[0];
    }
  }
}
