import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import CardComponent from './components/CardComponent';
import Courses from './components/Courses';
import Avaibles from './components/Avaibles';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/footer';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Header /> 
      <CardComponent/>
      <Courses/>
      <Avaibles/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;
