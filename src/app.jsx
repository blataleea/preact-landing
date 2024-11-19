// app.jsx
import { h } from 'preact';
import Header from '../src/components/Header'
import About from '../src/components/About';
import Contacts from '../src/components/Contacts/';
import Footer from '../src/components/Footer';
import Team from '../src/components/Team';

import './app.css';

const App = () => {
  return (
    <div id='root'>
    <Header/>
    <About id="about"/>
    <Team id='team'/>
    <Contacts id="contacts" />
    <Footer/>
    </div>
  );
}

export default App;
