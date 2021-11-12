import logo from './Components/Images/logo.svg';
import './Components/Styles/App.css';
import Home from './Components/Home.js'
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Login from './Components/Login';
import { Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProfilePage from './Components/Profile';
import film from './Components/film';
import aboutuser from './Components/aboutuser';
import SetUsers from './Components/SetUsers';
import RegisterUser from './Components/RegisterUser';
import GetUsers from './Components/GetUsers';
import Testing from './Components/testing';
import Profile from './Components/Profile';
import Friends from './Components/Friends';
import TeamInfo from './Components/TeamInfo';
import Teams from './Components/Teams';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Route exact path="/testing" component={Testing} />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/profile-film" component={film} />
      <Route path="/profile-about" component={Profile} />
      <Route path="/profile-friends" component={Friends} />
      <Route path="/register-info" component={SetUsers} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/users" component={GetUsers} />
      <Route path="/team-info" component={TeamInfo} />
      <Route path="/teams" component={Teams} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
