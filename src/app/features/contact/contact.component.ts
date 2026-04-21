import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  currentStep = 0;

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
    comoConheceu: ''
  };

  next() { this.currentStep++; }
  prev() { this.currentStep--; }
  submit() { this.currentStep = 2; }
}
