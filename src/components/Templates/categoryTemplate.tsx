import React from "react";
import Header from "../Header";
import Products from "../../JSONs/products.json";

export interface CategoryProps {
  pageContext: {
    category: string;
    image: string;
  };
}

interface Product {
  name: string;
  url: string;
  price: string;
  page: string;
  category: string;
}

const CategoryTemplate = ({ pageContext }: CategoryProps) => {
  const { category, image } = pageContext;

  const categoryProducts: Product[] = Products.ProdsForYou.filter(
    (product: Product) => product.category === `${category}`
  );

  return (
    <main>
      <title>{category}</title>
      <Header />
      <div className="container max-w-[1120px]">
        <img
          src={require(`../../images/${image}`).default}
          alt={category}
          className="mt-4 mb-8 rounded-lg"
        />
      </div>
      <div className="border-y py-2  border-color-hover/30">
        <div className="container max-w-[1120px] text-sm flex text-color-preto">
          To Do
        </div>
      </div>
      <div className="container max-w-[1120px]">
        <h1 className="flex text-2xl my-4">{category}</h1>
        {categoryProducts.map((product) => {
          return <div>{product.category}</div>;
        })}
        <div>{category}</div>
      </div>
    </main>
  );
};

export default CategoryTemplate;
