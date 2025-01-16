// app.jsx
import { h } from 'preact';
import Header from '../src/components/Header'
import About from '../src/components/About';
import Contacts from '../src/components/Contacts/';
import Footer from '../src/components/Footer';
import Team from '../src/components/Team';
import Documents from '../src/components/Documents';

import './app.css';

const App = () => {
  return (
    <div id='root'>
    <Header/>
    <About id="about"/>
    <Team id="team"/>
    <Documents id="documents" />
    <Contacts id="contacts" />
    <Footer/>
    </div>
  );
}

export default App;
