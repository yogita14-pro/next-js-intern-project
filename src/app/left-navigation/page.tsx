'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const navdata=[
    {name:'Skills', href:'/skills'},
    {name:'Education', href:'/education'},
    {name:'Experience', href:'/experience'},
  ]
export default function LeftNavigationPanel(){
    const router=useRouter();
    return (
        <section className="main">
            <button onClick={()=>router.push('/')}>Back</button>
            <ul>
              {
                navdata.map((item)=>{
                return(
                  <li key={item.name}>
                    <Link href={item.href}>
                    {item.name}
                    </Link>
                  </li>
                )
              }
              )
              }
            </ul>
        </section>
    );
}
