import React, { Component, useState } from 'react';
import data from './../Json/data';
const d = new Date();
let year = d.getFullYear();



const jsonData = data.main;
class Footer extends Component {
  render() {

    if(jsonData){
      var networks= jsonData.social.map(function(network){
        return <li alt={network.name} title={network.name} key={network.name}><a target="_blank" href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>Made with <span className="love">♥</span> using <b>ReactJS</b></li>
              <li><b>Rodrigo A. Melo</b></li>
              <li><b>Londrina</b>/PR - <b>{year}</b></li>
           </ul>
           <ul className="copyright">
              <li className="konami-hidden">↑ ↑ ↓ ↓ ← → ← → B A</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Voltar ao topo" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
