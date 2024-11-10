import './src/css/style.css';
import { Header } from './src/components/Header';
import { Main } from './src/components/Main';
import { Footer } from './src/components/Footer';

// Inserta los componentes en las áreas correspondientes
document.querySelector('header').innerHTML = Header();
document.querySelector('main').innerHTML = Main();
document.querySelector('footer').innerHTML = Footer();
