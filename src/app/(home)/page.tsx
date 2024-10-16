import Allproducts from "../../lib/Allproducts";
import client from "@/src/lib/apolloClient";
import { ALLPRODUCTS_QUERY } from "@/src/lib/Queries";

export default async function Home(){
    const { data } = await client.query({
        query: ALLPRODUCTS_QUERY.query,
      });
    return (
        <main>
        <img src="https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg"></img>
        <Allproducts allproductsData={data}/>
        </main>
    )
}
