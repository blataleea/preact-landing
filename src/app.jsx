// app.jsx
import { h } from 'preact';
import Header from '../src/components/Header'
import About from '../src/components/About';
import Contacts from '../src/components/Contacts/';
import Footer from '../src/components/Footer'

import './app.css';

const App = () => {
  return (
    <div id='root'>
    <Header/>
    <About id="about"/>
    <Contacts id="contacts" />
    <Footer/>
    </div>
  );
}

export default App;
