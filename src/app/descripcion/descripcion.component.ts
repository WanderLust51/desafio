import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {

  ngOnInit(): void {
    // console.log('aee')
  }

  constructor(private route: ActivatedRoute){
    console.log('aee')

  }

  articulos = [
    {
      id: 1,
      titulo: 'Fender Stratocaster',
      precio: 2100,
      tipoEnvio: 'Internacional',
      imagen: 'https://www.stars-music.es/medias/fender/strat-player-mex-sss-pf-hd-146087.webp'
    },
    {
      id: 2,
      titulo: 'Fender Telecaster',
      precio: 1800,
      tipoEnvio: 'Internacional',
      imagen: 'https://www.casainstrumental.com/wp-content/uploads/2022/10/310045501.png'
    },
    {
      id: 3,
      titulo: 'Guitar Pick (Jazz III)',
      precio: 2,
      tipoEnvio: 'Internacional',
      imagen: 'https://cdn11.bigcommerce.com/s-n26aknlnlm/images/stencil/1280x1280/products/237/5247/22047138106.BACK__82630.1663877719.jpg?c=2'
    },
    {
      id: 4,
      titulo: 'Cuerdas de guitarra Ernie Ball (.10)',
      precio: 12,
      tipoEnvio: 'Internacional',
      imagen: 'https://m.media-amazon.com/images/I/81WCHa-czBL.jpg'
    },
    {
      id: 5,
      titulo: 'Gibson SG',
      precio: 800,
      tipoEnvio: 'Nacional',
      imagen: 'https://d1aeri3ty3izns.cloudfront.net/media/47/472654/600/preview_1.jpg'
    },
    {
      id: 6,
      titulo: 'Hohner Special Blues',
      precio: 50,
      tipoEnvio: 'Nacional',
      imagen: 'https://www.ramrock.cl/tienda/298-thickbox_default/hohner-armonica-special-20-classic-do-blues.jpg'
    },
    {
      id: 7,
      titulo: 'Fender Jaguar',
      precio: 520,
      tipoEnvio: 'Nacional',
      imagen: 'https://shop.jbonamassa.com/cdn/shop/products/1962_Fender_Jaguar_in_Fiesta_Red_Mini_Guitar_Replica_Front_800x.jpg?v=1531167399'
    },
    {
      id: 8,
      titulo: 'Epiphone Les Paul',
      precio: 200,
      tipoEnvio: 'Internacional',
      imagen: 'https://marinimport.com.pe/wp-content/uploads/2020/11/preview-28.jpg'
    },
    {
      id: 9,
      titulo: 'Amplificador Marshall 10 watts',
      precio: 80,
      tipoEnvio: 'Internacional',
      imagen: 'https://i.ebayimg.com/thumbs/images/g/XroAAOSw-otjJY~a/s-l640.jpg'
    },
    {
      id: 10,
      titulo: 'Estuche Fender para guitarra eléctrica',
      precio: 60,
      tipoEnvio: 'Nacional',
      imagen: 'https://musicbox.com.co/wp-content/uploads/2022/06/6030782-2.jpg'
    },
    
  ];

  id : any = this.route.snapshot.paramMap.get('id')
  art = this.articulos[this.id]

}
