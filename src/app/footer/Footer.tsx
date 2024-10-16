import { IconBxlFacebookCircle, IconBxlTiktok, IconInstagram, IconLogoPinterest, IconYoutube } from '@/src/lib/Icons';
import Link from 'next/link';

const ABOUT_ITEMS=['About logo',
                  'Proffessional',
                  'Careers',
                  'Gift cards',
                  'Sell on RCC',
                  'Locations']

const CUSTOMER_SERVICES=[
  'My Orders',
  'My Account',
  'Track my Order',
  'Return Policy',
  'Help Center',
  'Product Recalls'
]
const BRANDS=[
  'Addidas',
  'Spark',
  'LensCart',
  'Tropicana'
]
const ICONS=[
  <IconBxlFacebookCircle/>,
<IconLogoPinterest/>,
<IconInstagram/>,
<IconBxlTiktok/>,
<IconYoutube/>
]
export default function Footer(){
    return(
    <footer>
        <section className="first-footer-section">
            <div className="about-footer">
                <h1>About Us</h1>
                <ul className='about-items list'>
                  {ABOUT_ITEMS.map((item,id)=>
                    <li key={id}>
                      <Link href={`/`}>
                        {item}
                      </Link>
                    </li>
                  )}
                </ul>
            </div>
            <div className="service-footer">
            <h1>Customer Service</h1>
                <ul className='cs-items list'>
                {CUSTOMER_SERVICES.map((item,id)=>
                    <li key={id}>
                      <Link href={`/`}>
                        {item}
                      </Link>
                    </li>
                  )}
                </ul>
            </div>
            <div className="contacts-footer">
            <h1>Contact Us</h1>
                <p>Customer Service
                    Closed. Opens at 8:00 AM.

                    Mon - Fri: 8:00 AM - 11:59 PM

                    Sat: 8:00 AM - 8:00 PM

                    Sun: 9:00 AM - 6:00 PM

                    All times Eastern
                </p>
            </div>
        </section>
        <section className="bottom-footer-section">
            <ul className='brands'>
            {BRANDS.map((item,id)=>
                    <li key={id}>
                        {item}
                    </li>
                  )}
            </ul>
            <ul>
            {ICONS.map((item,id)=>
                    <li key={id}>
                        {item}
                    </li>
                  )}
            </ul>
            <ul className='tnc'>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Your Privacy Rights & Choices</li>
            </ul>
            <p>© 2002 - 2024 by RCC LLC, 12th floor, Angkor west building, Bagmane Conseltation Business Park, Banglore, KA, India, 560016</p>
        </section>
    </footer>
    );
}
