import React from "react";
import ProductCard from "./card";

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products &&
        products.map((product) => {
          return (
            <div key={product.id} className="col-md-3 col-12">
              <ProductCard product={product} />
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
