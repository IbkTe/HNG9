import '../styles/Home.css';
import Link from '../components/Link.js';
import slackIcon from '../img/slack-icon.svg';
import profile from '../img/download (3).jpeg';
import footimg from "../img/download (1).png" ;
import gitIcon from "../img/github-icon.svg";
import ingressive from "../img/images (2).png";
import share from '../img/download (2).png';


export default function () {
  const links = [
    {id: 'btn__zuri', href: 'https://training.zuri.team/', title: 'Zuri Team'},
    {id: 'books', href: 'https://books.zuri.team/', title: 'Zuri Books',
      subtext: 'This is where you find books about design and coding'},
    {id: 'book__python', href: 'https://books.zuri.team/python-for-beginners?HNG003735SGG', title: 'Python Books', subtext: 'A descriptive guide for Python beginners'},
    {id: 'pitch', href: 'https://background.zuri.team/', title: 'Background Check for Coders',
      subtext: 'A standalone service that does excellent background checks on developers'},
    {id: 'book__design', href: 'https://books.zuri.team/design-rules', title: 'Design Books',
      subtext: 'A guide to the right design principles and patterns for modern web designers'},
      {id: 'contact', href: '/contact', title: 'Contact'},

  ];

  return (
    <div className="container">
    <div className='icon'>
      <img id='share' src={share}/>
      <div id='span'> 
              <span>.</span>
      <span>.</span>
   <span>.</span>
</div>
    </div>
      <header>
        <img id="profile__img" src={profile} alt="" /> 
        <p className="name">Annette Black</p>
      </header>
      <div className="sub-container">
        <Link id="twitter" href="https://twitter.com/Ibukunoluwatbk">Twitter Link</Link>
        <div id ='slack' style ={{display: 'none'}} >
          Damilola Blessing Tolufashe
        </div>
        {links.map(link => (
          <Link key ='link.id' id={link.id} href={link.href} subtext={link.subtext}>{link.title}</Link>
        ))}
        <div className ='img'>        
        <img src={slackIcon} alt="" />
        <img src={gitIcon} alt="" /></div>

      </div>

      <footer>
        <img src= {footimg} alt="" />
        <span>HNG Internship 9 Frontend Task </span>

        <img src= {ingressive} alt="" className="ingressive" />
      </footer>
    </div>
    );
}
