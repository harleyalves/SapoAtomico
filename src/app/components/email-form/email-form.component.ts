import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'email-form',
  standalone: true, // Adicione isso
  imports: [
    CommonModule,
    BtnPrimaryComponent, // Importe o BtnPrimaryComponent
  ],
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  formEnviado = false;
  loading = false;

  onSubmit(event: Event) {
    event.preventDefault(); // Impede o redirecionamento
    this.loading = true;

    // Simula o envio do formulário
    setTimeout(() => {
      this.formEnviado = true;
      this.loading = false;

      // Aqui você pode adicionar lógica para enviar os dados do formulário
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      // Exemplo de como enviar os dados (substitua pela sua lógica)
      fetch(form.action, {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            console.log('Formulário enviado com sucesso!');
          } else {
            console.error('Erro ao enviar o formulário.');
          }
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
    }, 1500); // Aguarda 1.5s para exibir a mensagem de sucesso
  }
}
