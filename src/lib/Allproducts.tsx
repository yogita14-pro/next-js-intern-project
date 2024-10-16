// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Link from "next/link";
import Image from "next/image";
import Rating from "./Rating";
import { CartItem, ProductData } from "../app/types";

export default function Allproducts({
  allproductsData,
}: {
  allproductsData: ProductData;
}) {
  return (
    <div className="products-home">
      <div>
        <h1>All Products</h1>
        <p>A-List of Obsess overs</p>
        <ul className="products-list">
          {allproductsData.products.edges.map((item: CartItem) => {
            return (
              <li key={item.node.id} className="item">
                <Link
                  href={`/products/${item.node.id}`}
                  target="_blank"
                >
                  <Image
                    src={item.node.thumbnail.url}
                    alt="product-thumbnail"
                    className="product-thumbnail"
                    width='200'
                    height='200'
                    layout="responsive"
                  ></Image>
                  <div className="item-text">
                    <h2 className="title-home">{item.node.name}</h2>
                    <Rating page={"product"} />
                    <h3>
                      $
                      {parseFloat(
                        item.node.pricing.priceRange.start.gross.amount -
                          item.node.pricing.priceRange.start.gross.amount / 10
                      ).toFixed(2)}
                      <span className="actual-price">
                        {" "}
                        ${item.node.pricing.priceRange.start.gross.amount}
                      </span>
                    </h3>
                    <p>Free delivery</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
