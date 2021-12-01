import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product: Product = {
    image: '../../../assets/resources/banner4.jpg',
    name: 'Xiaomi Poco X3PRO',
    price: 920000,
    selected: false,
    stars: 5,
    description: 'Celular Nuevo'
  }
}
