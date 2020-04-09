import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre</a></li>
	          <li><a className="smoothscroll" href="#resume">Formação</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
         <div className='control-pane'>
              <div className="sample_container card_sample">
                    <div className="e-card e-custom-card">
                        <div className="e-card-header">
                            
                            <div className="e-avatar e-avatar-circle e-avatar-xlarge">
                                <img src='../images/profile.png' alt="profile_pic"/>
                            </div>
                            &nbsp;
                    </div>
                        <div className="e-card-header">
                            <div className="e-card-header-caption center">
                                <div className="e-card-header-title name responsive-headline">{name}</div>
                                <div className="e-card-sub-title">Analista de Sistemas / Full Stack Developer</div>
                            </div>
                        </div>
                        <div className="e-card-content">
                                <p className="avatar-content"> Formado na <i>Universidade Tecnológica Federal do Paraná</i>, atualmente trabalha como <i>Full Stack Web Developer</i>.</p>
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
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
