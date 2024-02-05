import React from "react";
import Header from "../Header";

export interface CategoryProps {
  pageContext: {
    category: string;
  };
}

const CategoryTemplate = ({ pageContext }: CategoryProps) => {
  const { category } = pageContext;

  return (
    <main>
      <Header />
      <title>{category}</title>
      <div>{category}</div>
    </main>
  );
};

export default CategoryTemplate;
