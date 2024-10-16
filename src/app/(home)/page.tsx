import Allproducts from "../../lib/Allproducts";
import client from "@/src/lib/apolloClient";
import { ALLPRODUCTS_QUERY } from "@/src/lib/Queries";
import Image from "next/image";
export default async function Home(){
    const { data } = await client.query({
        query: ALLPRODUCTS_QUERY.query,
      });
    return (
        <main>
        <Image src="https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="home-banner" width='1260' height="400" layout="responsive"></Image>
        <Allproducts allproductsData={data}/>
        </main>
    )
}
