import React from 'react';
import TopBar from './TopBar/TopBar';
import Main from './main/Main';
import Footer from './Footer/Footer';
import BackToTop from './backToTop/BackToTop';
import SearchBar from './searchBar/SearchBar';


function Base() {
  return ( 
      <div>
          <TopBar/>
          <div className="container searchbar">
              <SearchBar/>
          </div>
          <Main/>
          <BackToTop/>
          <Footer/>      
      </div>
  );
}

export default Base;