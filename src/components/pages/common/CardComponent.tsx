import React, { Component } from 'react';
import { IProductProps } from 'components/utils/type';

export class CardComponent extends Component<IProductProps> {
  constructor(props: IProductProps) {
    super(props);
  }

  render() {
    const item = this.props.product;

    return (
      <div className="item-card">
        <h2>{item.title}</h2>
        <p className="item-description">{item.description}</p>
        <div className="img-container">
          <img src={item.image} alt="card-img" />
        </div>
      </div>
    );
  }
}
