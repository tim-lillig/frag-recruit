import logo from './Components/Images/logo.svg';
import './Components/Styles/App.css';
import Home from './Components/Home.js'
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Login from './Components/Login';
import { Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProfilePage from './Components/ProfilePage';
import film from './Components/film';
import aboutuser from './Components/aboutuser';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/profile/film" component={film} />
      <Route path="/profile/about" component={aboutuser} />
    </div>
  );
}

export default App;
