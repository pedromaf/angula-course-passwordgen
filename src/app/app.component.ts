import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  password: string = "";
  validLengthInput: boolean = false;
  length: number = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  setButtonState() : boolean {
    return !(this.validLengthInput && (this.useLetters || this.useNumbers || this.useSymbols))
  }

  onButtonClick() {
    const numbers = "0123456789";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";
    let validChars = "";
    let generatedPassword = "";

    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    for (let i= 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeLength(event: Event) {
    var valueString: string = (event.target as HTMLInputElement).value;
    var value: number = Number(valueString);

    if (valueString != "" && !isNaN(value)) {
      this.validLengthInput = true;
      this.length = value;
    }
    else {
      this.validLengthInput = false;
    }
  }

  onChangeNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  
  onChangeLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeSymbols() {
    this.useSymbols = !this.useSymbols;
  }
}
