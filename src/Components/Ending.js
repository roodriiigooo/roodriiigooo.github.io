import React, { Component } from 'react';
import data from './../Json/data';

const jsonData = data.main;
class About extends Component {
  render() {

    if(jsonData){
      var name = jsonData.name;
      var profilepic= "./images/"+jsonData.image;
      var bio = jsonData.bio;
      var street = jsonData.address.street;
      var city = jsonData.address.city;
      var state = jsonData.address.state;
      var zip = jsonData.address.zip;
      var phone= jsonData.phone;
      var email = jsonData.email;
      var resumeDownload = jsonData.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">

         
         <div className="twelve columns main-col">
            <h2 alt="Obrigado!">Vamos conversar?</h2>

            <p alt="Se você chegou até aqui, talvez eu tenha algo a contribuir com o seu projeto. No rodapé estão as formas de enttrar em contato comigo, prometo responder o mais breve possível!" className="text-adjust">Se você chegou até aqui, talvez eu tenha algo a contribuir com o seu projeto.  <br/>{bio}<br/><br/>Mais informações estão disponíveis no meu currículo completo: </p>
            <div className="row">
               <div className="columns contact-details hidden">
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button no-underline"><i className="fa fa-download"></i>Baixar currículo completo</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
