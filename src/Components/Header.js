import React, { Component,  useEffect  } from 'react';

import data from './../Json/data';

const jsonData = data;

class Header extends Component {

  render() {
    // console.log(jsonData);
    if(jsonData){
      var name = jsonData.main.name;
      var image = './images/' + jsonData.main.image;
      var networks= jsonData.main.social.map(function(network){
        return <li key={network.name} alt={network.name} title={network.name} ><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
    }
    
    return (
      <header id="home">
        
      <nav id="nav-wrap">

        <a className="mobile-btn hidden-xs hidden-sm" href="#nav-wrap" title="Show navigation">Mostrar botão de navegação</a>
	      <a className="mobile-btn hidden-xs hidden-sm" href="#home" title="Hide navigation">Esconder botão de navegação</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre</a></li>
	          <li><a className="smoothscroll" href="#resume">Formação</a></li>
            <li><a className="smoothscroll" href="#skill">Tecnologias</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
         <div className='control-pane'>
              <div className="sample_container card_sample">
                    <div className="e-card e-custom-card">
                        <div className="e-card-header">
                            
                            <div className="e-avatar e-avatar-circle e-avatar-xlarge">
                                <img src='./images/rodrigo_profile_picture.png' alt="Rodrigo A. Melo" id="picbox"  />
                            </div>
                            &nbsp;
                    </div>
                        <div className="e-card-header">
                            <div className="e-card-header-caption center">
                                <div className="e-card-header-title name responsive-headline">{name}</div>
                                <div className="e-card-sub-title">Full Stack Developer Sênior | CyberSecurity | Business Inteligence<br/>Londrina - PR</div>
                            </div>
                        </div>
                        <div className="e-card-content hidden">
                                <p className="avatar-content"> Londrina/PR </p>
                        </div>
                    </div>
                    <ul className="social">
                                  {networks}
                    </ul>
                </div>
         </div>
           
         </div>
      </div>
     
      <p className="scrolldown">
         <a className="smoothscroll float-ease-out" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
  
}

export default Header;
