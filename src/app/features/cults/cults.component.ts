import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cults',
  imports: [],
  templateUrl: './cults.component.html',
  styleUrl: './cults.component.scss',
})
export class CultsComponent {
  cultos = [
    {
      id: 1,
      nome: 'Culto da Familia',
      dia: 'DOMINGO',
      horario: '10:00H',
      descricao: 'Nossa celebração semanal com louvor, palavra e comunhão.',
      color: '#f0c040',
      link: '#',
    },
    {
      id: 2,
      nome: 'Quarta Profetica',
      dia: 'QUARTA',
      horario: '19:30H',
      descricao: 'Quarta Profetica com louvor, palavra e comunhão.',
      color: '#10b981',
      link: '#',
    },
    {
      id: 3,
      nome: 'Culto de ensino',
      dia: 'SEGUNDA',
      horario: '19:30H',
      descricao: 'Um culto especial de fé, intercessão e crescimento.',
      color: '#a78bfa',
      link: '#',
    },
    {
      id: 4,
      nome: 'Instituto saber',
      dia: 'DOMINGO',
      horario: '08:00H',
      descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.',
      color: '#da47c6',
      link: '#',
    },
        {
      id: 5,
      nome: 'Instituto saber',
      dia: 'DOMINGO',
      horario: '08:00H',
      descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.',
      color: '#27cbd6',
      link: '#',
    },
        {
      id: 6,
      nome: 'Instituto saber',
      dia: 'DOMINGO',
      horario: '08:00H',
      descricao: 'Todo domingo uma oportunidade de aprendizado e crescimento espiritual.',
      color: '#e41717',
      link: '#',
    },
  ];
}
