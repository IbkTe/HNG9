import './styles/App.css';
import Link from './components/Link.js';
import slackIcon from './img/slack-icon.svg';
import profile from './img/download (3).jpeg';
import footimg from "./img/download (1).png" ;
import gitIcon from "./img/github-icon.svg";
import ingressive from "./img/images (2).png";


function App() {
  const links = [
    {id: ''}
  ];

  return (
    <div className="container">
      <header>
        <img id="profile__img" src={profile} alt="" /> 
        <p className="name">Annette Black</p>
      </header>
      <div className="sub-container">
        <Link id="twitter" href="https://twitter.com/Ibukunoluwatbk">Twitter Link</Link>
        <div className ='img'>        <img src={slackIcon} alt="" />
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

export default App;
