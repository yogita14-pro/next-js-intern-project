import Link from 'next/link';
import CartIconQuantity from '../cart/items-quantity';
import { IconAccountCircleOutline, IconBxMenu, IconCart3 } from '@/src/lib/Icons';

const MENU_ITEMS=['Jackets', 'T-Shirts', 'Juices', 'Sunglasses','Shoes', 'Gift cards', 'Pillows', 'Masks']
export default function Header(){
    return(
    <header>
        <nav>
          <div className='icons'>
            <div className='menu-icon'><IconBxMenu color='rgb(51 122 177)'/></div>
        <Link href="/"><h1 className='top-logo'>RRClub</h1></Link>
        </div>
        <div className='search'>
            <input placeholder='Find more here...' className='search-input-field' ></input>
        </div>
        <ul>
            <li className='tooltip'><Link href="/"><IconAccountCircleOutline/>
                <span className='tooltiptext'>Account</span>
            </Link></li>
            <li className='tooltip'><Link href="/cart"><IconCart3 />
                <CartIconQuantity/>
                <span className='tooltiptext'>Cart</span>
            </Link></li>
        </ul>
        </nav>
        <menu>
            <ul className='menu-items'>
              {MENU_ITEMS.map((item, id)=>
                <li key={id}>
                  <Link href={`/`}>
                    {item}
                  </Link>
                </li>
              )}
            </ul>
        </menu>
    </header>
    );
}
