import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionSecond from './components/SectionSecond';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Counter from './components/Counter';
import Process from './components/Process';
import Pricesection from './components/Pricesection';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><Header /><Hero /> <Section /><SectionSecond /><Section3 /><Section4 /><Section5 /><Section6 /><Counter />
  <Process/><Pricesection /><Testimonial /><Contact /><Footer /></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
