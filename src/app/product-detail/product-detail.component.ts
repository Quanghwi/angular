import { Component, Input } from '@angular/core';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() data!: IProduct;
}



// function ProductDetail(props){
//   props.data
// }