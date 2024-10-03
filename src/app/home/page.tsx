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

    const res=await fetch('https://dummyjson.com/products');
    const productsData= await res.json();
    return (
        <ul>
            <li>This is th home page!!!</li>
            {
            productsData.products.map((item:any)=>{
            return  <li key={item.id}>
                        <h1>{item.title}</h1>
                    </li>
                }
                )
            }
        </ul>
    )
}
