import { useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Menu from './Menu.js';
import Container from './Container.js'
import React from 'react';
import {Routes,Route} from 'react-router-dom'
 
function FormProject() {
  return (
    
     <div >
       <Header/>
       <Container/>
       <Footer/>
        
      </div>
  );
}

export default FormProject;