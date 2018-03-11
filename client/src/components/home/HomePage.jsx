import React from 'react';
import Header from '../landing/Header'
import Sections from '../landing/Sections'
import Footer from '../landing/Footer'

export default class HomePage extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div>
          <Sections />
        </div>
        <Footer />
      </div>
    );
  }
}