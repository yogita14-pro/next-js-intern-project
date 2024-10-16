import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../../lib/apolloClient";
import CartButtons from "./CartButtons";
import Rating from "../../../lib/Rating";
import NotFound from "../../not-found";
import { IconTag } from "@/src/lib/Icons";
import Image from "next/image";
import { ProductData } from "../../types";
type Params = {
  params: {
    title: string;
  };
};

const BANK_OFFERS = [
  "Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
  "Bank Offer 10% off on Axis Bank Credit Card (incl. migrated ones) on orders of $45.3 and above",

  "Bank Offer 10% off on Axis Bank Credit EMI (incl. migrated ones) on orders of $46.9 and above",

  "Special Price Get extra 46% off (price inclusive of cashback/coupon)",
];
export default async function Product({ params }: Params) {
  // decodeURIComponent( params.title.replace(/\+/g, '%20') );
  const productId = decodeURIComponent(params.title.replace(/\+/g, "%20")); //decode
  if (productId.length !== 16)
    return (
      <>
        <NotFound />
      </>
    );
  const response = await client.query({
    query: gql`{
            product(id: "${productId}", channel: "default-channel") {
                id
                name
                description
                productType {
                    id
                    name
                  }
                    pricing(address: {country: PL}){
          priceRange{
            start{
              gross{
                amount
              }
            }
          }
        }
        thumbnail(size:100){
          url
        }
            }
            }
            `,
  });
  const { data }: { data: ProductData } = response;
  return (
    <div className="products-home">
      <Link href="/" className="remove">
        Back
      </Link>
      {data && data.product && (
        <div className="product-item">
          <section>
            <Image src={data.product.thumbnail.url} alt="item" height={'200'} width={"300"}></Image>
          </section>
          <section className="single-product-details">
            <section className="top-details">
              <h1>{data.product.name}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: JSON.parse(data.product.description)?.blocks.map(
                    (item: {data: {text: string}}) => (item.data.text)
                  )[0],
                }}
              ></p>
              <h5>
                <Rating page={"pdp"} />
              </h5>
              <p>Category: {data.product.productType.name}</p>

              <h4>
                Special price
                <div className="price">
                  $
                  {(data.product.pricing.priceRange.start.gross.amount -
                      data.product.pricing.priceRange.start.gross.amount / 10
                  ).toFixed(2)}
                  <span className="actual-price">
                    {" "}
                    ${data.product.pricing.priceRange.start.gross.amount}
                  </span>
                  <span className="discount"> 10% off</span>
                </div>
              </h4>
              <ul style={{ marginTop: "10px" }}>
                <h5>Available offers</h5>
                {BANK_OFFERS.map((offer, id) => {
                  return (
                    <li key={id}>
                      <IconTag color="rgb(51 122 177)" />
                      {offer}{" "}
                      <Link href="/" style={{ color: "green" }}>
                        TnC
                      </Link>
                    </li>
                  );
                })}
                <div className="hardcode-offers">View 23 more offers</div>
              </ul>
            </section>
            <section>
              <CartButtons productData={data} />
            </section>
          </section>
        </div>
      )}
    </div>
  );
}
