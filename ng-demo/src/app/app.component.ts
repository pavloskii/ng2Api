import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { IProduct } from './products/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing WCF Services';
  result: string = 'The result from the service';
  productId: number = 1;
  productName: string;
  url:string;
  public product: IProduct;
  public products: IProduct[];
  public text:string;

  constructor(private productService: ProductService) {

  }

  getProduct() {
    this.productService.getProduct(this.url, this.productId).subscribe(res => {
      this.product = res;
      this.productId = this.product.Id;
      this.productName = this.product.Name;
      console.log(this.product);
    })
  }

  getProducts() {
    this.productService.getProducts(this.url).subscribe(res => {
      this.products = res;
      console.log(this.products);
    })
  }

  postProduct(formValues) {
    this.productService.postProduct(this.url, formValues).subscribe();
  }

  getText(){
    this.productService.getText(this.url).subscribe(res =>{
      this.text = res;
      console.log(this.text);
    })
  }
}