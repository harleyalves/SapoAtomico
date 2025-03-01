import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
  imports: [
    CommonModule, 
  ],
})
export class EmailFormComponent {
  formEnviado = false;
  loading = false;

  onSubmit(event: Event) {
    event.preventDefault(); // Impede o redirecionamento
    this.loading = true;

    setTimeout(() => { // Simula o envio
      this.formEnviado = true;
      this.loading = false;
    }, 1500); // Aguarda 1.5s para exibir a mensagem de sucesso
  }
}
