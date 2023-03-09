import React, { Component } from 'react';
import { SearchComponent } from './common/SearchComponent';
import { IProductList } from 'components/utils/interfaces';
import { CardComponent } from './common/CardComponent';
import { HeadProps } from 'components/utils/type';

export class MainPage extends Component<HeadProps, IProductList> {
  constructor(props: HeadProps) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('https://fakestoreapi.com/products?limit=15');
    const productList = await response.json();

    this.setState({ products: productList });
  }

  render() {
    console.log(this.state.products);
    return (
      <div>
        <SearchComponent />
        <div className="product-list">
          {this.state.products?.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}
