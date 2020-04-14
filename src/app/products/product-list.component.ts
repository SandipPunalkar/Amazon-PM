import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  products: IProduct[] = [];
  showImage = false;
  errorMessage: string;

  toggleImage() {
    this.showImage = !this.showImage;
  }

  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  performFilter(listFilter: string): IProduct[] {
    listFilter = listFilter.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(listFilter) !== -1
    );
  }
  filteredProducts: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  onNotify(message: string) {
    this.pageTitle = 'Product List ' + message;
  }
}
