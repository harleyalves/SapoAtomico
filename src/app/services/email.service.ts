import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface EmailPayload {
  from: string;
  to: string;
  subject: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private resendApiUrl = 'https://api.resend.com/emails'; // Endpoint da Resend
  private apiKey = 'YOUR_RESEND_API_KEY'; // Substitua pela sua API Key
  private recipientEmail = 'seuemail@example.com'; // Seu email para receber notificações

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<any> {
    const payload: EmailPayload = {
      from: 'noreply@seusite.com',
      to: this.recipientEmail,
      subject: 'Novo Cadastro no Formulário',
      text: `Novo cadastro recebido:\nNome: ${name}\nEmail: ${email}`
    };

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.resendApiUrl, payload, { headers });
  }
}