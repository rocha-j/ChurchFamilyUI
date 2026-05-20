import { Component } from '@angular/core';

@Component({
  selector: 'app-offer.component',
  imports: [],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
    cards = [
    {
      id: 1,
      tag: 'PROJETO',
      title: 'UMA NOVA CASA',
      desc: 'Faça parte deste projeto! Doe através do QR Code ou pela chave PIX.',
      pix: 'familiaemprojeto.ofc@gmail.com',
      qr: 'assets/qrcodevermelho.png',
      color: '#c0284a'
    },
    {
      id: 2,
      tag: 'DÍZIMOS',
      title: 'DÍZIMOS & OFERTAS',
      desc: 'Cada um dê conforme determinou em seu coração, pois Deus ama quem dá com alegria. 2 Cor 9:7',
      pix: 'igrejafamiliaa@gmail.com',
      qr: 'assets/qrcodeazul.png',
      color: '#1a3a7a'
    },
    {
      id: 3,
      tag: 'MISSÃO',
      title: 'MISSÃO FAMÍLIA',
      desc: 'Contribua e nos ajude nas ações sociais. Para mais informações fale com Paulo César.',
      pix: 'missaoigrejafamiliaa@gmail.com',
      qr: 'assets/qrcodeverde.png',
      color: '#1a7a3a'
    },
  ];

}
