import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { NgOptimizedImage, CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Removido EffectCreative
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Removido o import do CSS do zoom e do efeito criativo
import { EmailFormComponent } from '../email-form/email-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, CommonModule, BtnPrimaryComponent, EmailFormComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  selectedImage: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay], // Removido EffectCreative
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
      });
    }
  }

  selectedCaneca: { frente: string, verso: string } | null = null;
  showDetails = false;

  // Lista de canecas com frente e verso
  canecas = [
    { frente: 'buldoguefrente.jpg', verso: 'buldogueverso.jpg', nome: 'Caneca Buldogue de Engels', descricao: 'Caneca de porcelana Capacidade de 350ml Altura de 9,7cm.', preco: 'R$ 34,99' },
    { frente: 'epicurofrente.jpg', verso: 'epicuroverso.jpg', nome: 'Caneca Epicuro', descricao: 'Caneca de porcelana Capacidade de 350ml Altura de 9,7cm.', preco: 'R$ 34,99' },
    { frente: 'materialismofrente.jpg', verso: 'materialismoverso.jpg', nome: 'Caneca Materialismo Gostoso Demais', descricao: 'Caneca de porcelana Capacidade de 350ml Altura de 9,7cm.', preco: 'R$ 34,99' },
    { frente: 'vidrofrente.jpg', verso: 'vidroverso.jpg', nome: 'Caneca Não Coma Vidro', descricao: 'Caneca de porcelana Capacidade de 350ml Altura de 9,7cm.', preco: 'R$ 34,99' },
    { frente: 'vacafrente.jpg', verso: 'vacaverso.jpg', nome: 'Caneca Vaca', descricao: 'Caneca de porcelana Capacidade de 350ml Altura de 9,7cm.', preco: 'R$ 34,99' }
  ];

  // Método para exibir os detalhes da caneca
  showCanecaDetails(caneca: { frente: string, verso: string }) {
    this.selectedCaneca = caneca;
    this.showDetails = true;
  }

  // Método para ocultar os detalhes da caneca
  hideCanecaDetails() {
    this.showDetails = false;
    this.selectedCaneca = null;
  }
}
