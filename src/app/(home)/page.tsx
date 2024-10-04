// 'use client'
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { gql, useQuery } from '@apollo/client';
// const GET_PRODUCTS= gql `
//     query GetProducts{
//     products{
//         id
//         title
//     }
//     }
// `;

import Products from "../components/@products/page";

// function Products(){
//     const {loading, error, data}= useQuery(GET_PRODUCTS);

//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;
//     if (data) console.log(">>>>>data", data);
//     return
//         <ul>
//             {
//             data.products.map((item:any)=>{
//                 return <li key={item.id}>
//                 <h1>{item.title}</h1>
//                 </li>
//             }
//                 )
//             }
//         </ul>
// }

export default async function Home(){

    // const res=await fetch('https://dummyjson.com/products');
    // const productsData= await res.json();
    return (
        <main>
        <img style={{width: '100%', height: '70%' }} src="https://t3.ftcdn.net/jpg/07/09/06/38/360_F_709063880_4O0ZMHg4Nyk8rbK2qR1JrtjLZX9M1U97.jpg"></img>
        <Products/>
        {/* <ul>
            <li>This is th home page!!!</li>
            {
            productsData.products.map((item:any)=>{
            return  <li key={item.id}>
                        <h1>{item.title}</h1>
                    </li>
                }
                )
            }
        </ul> */}
        </main>
    )
}
