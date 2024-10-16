import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = [
    {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available'},
    {id:3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', },
    {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available'}
  ]

}
