import Link from 'next/link';

function IconAccountCircleOutline(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="2em"
        width="2em"
        {...props}
      >
        <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0112 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0112 8a1.5 1.5 0 011.5 1.5A1.5 1.5 0 0112 11z" />
      </svg>
    );
  }

  function IconCart3(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1.89em"
        width="1.89em"
        {...props}
      >
        <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    );
  }


export default function Header(){
    return(
    <header>
        <nav style={{color: 'black'}}>
        <Link href="/"><h1 className='top-logo'>RCClub</h1></Link>
        <div className='search'>
            <input placeholder='Find more here...' className='search-input-field' ></input>
        </div>
        <ul className="">
            <li className='tooltip'><Link href="/account"><IconAccountCircleOutline/>
                <span className='tooltiptext'>Account</span>
            </Link></li>
            <li className='tooltip'><Link href="/cart"><IconCart3 />
                <span className='tooltiptext'>Cart</span>
            </Link></li>
        </ul>
        </nav>
        <menu>
            <ul className='menu-items'>
                <li><Link href="/">Makeup</Link></li>
                <li><Link href="/">Skin</Link></li>
                <li><Link href="/">Hair</Link></li>
                <li><Link href="/">Appliances</Link></li>
                <li><Link href="/">Natural</Link></li>
                <li><Link href="/">Fragrances</Link></li>
                <li><Link href="/">Accessories</Link></li>
            </ul>
        </menu>
    </header>
    );
}
