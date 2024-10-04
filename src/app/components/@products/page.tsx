import Link from "next/link";
// import { useState } from "react";

export default async function Products(){
    // const [oepn, setOpen]= useState(false)
    const res=await fetch('https://dummyjson.com/products');
    const productsData= await res.json();
    return(
    <div>
    <div className="trending">
        <div className="container">
        <h1>Explore Our Top Products</h1>
        <p>A-List of Obsess overs</p>
            <div className="products-slider">
            <div className="row-container" id="slider">
                {
                productsData.products.slice(0, 7).map((item) => (
                    <div key={item.id} className="row-item">
                    <Link href={`/`} className="link">
                        <div className="item-header">
                        <img src={item.thumbnail} alt="product" />
                        </div>
                        <div className="item-title">
                        <p>{item.title}</p>
                        <p className="item-price">{item.price}$</p>
                        </div>
                    </Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </div>
    <div className="products-home">
        <h1>All Products</h1>
        <ul className="products-list">
        {
            productsData.products.map((item)=>
                { return <li key={item.id}>
                    <img src={item.thumbnail} alt="product-thumbnail"></img>
                    <div className="item-text">
                    <h3 className="title-home">{item.title}</h3>
                    <h4>${item.price}</h4>
                    </div>
                    </li>
                }
            )
        }
        </ul>
    </div>
    </div>
)
}
