interface IHeadInput {
  searchInput: string;
}

interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface IProductList {
  products: IProduct[];
}

export { IHeadInput, IProductList, IProduct };
