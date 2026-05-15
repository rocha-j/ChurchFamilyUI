import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  currentStep = 0;
  readonly WHATSAPP_NUMBER = '5511948803773';
  steps = [
    { id: 1, label: 'Contato' },
    { id: 2, label: 'Pessoal' },
  ];

  form = {
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    mensagem: '',
    nascimento: '',
    estadoCivil: '',
    endereco: '',
    comoConheceu: '',
  };

  next() {
    this.currentStep++;
  }
  prev() {
    this.currentStep--;
  }

submit() {
  const mensagem = `
*Contato pelo site - Igreja Família SBC*

*INFORMACOES DE CONTATO*
Nome: ${this.form.nome} ${this.form.sobrenome}
Telefone: ${this.form.telefone}
E-mail: ${this.form.email}
Mensagem: ${this.form.mensagem}

*INFORMACOES PESSOAIS*
Nascimento: ${this.form.nascimento || 'Nao informado'}
Estado Civil: ${this.form.estadoCivil || 'Nao informado'}
Endereco: ${this.form.endereco || 'Nao informado'}
Como nos conheceu: ${this.form.comoConheceu || 'Nao informado'}
  `.trim();

  const url = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
  this.currentStep = 2;
}
}
