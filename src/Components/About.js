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

         {/* <div className="waveWrapper  hidden-sm hidden-xs">
            <div className="waveWrapperInner bgBack">
               <div className="wave waveAnimation waveBack hidden"></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
               <div className="wave waveAnimation waveMiddle"></div>
            </div>
            <div className="waveWrapperInner bgBottom">
               <div className="wave waveAnimation waveBottom"></div>
            </div>
         </div> */}
         
         <div className="three columns">
            <img className="profile-pic sticker"  src={profilepic} alt="Rodrigo A. Melo foto de perfil" />
         </div>
         <div className="nine columns main-col">
            <h2>Sobre</h2>

            <p className="text-adjust">{bio} <br/> Saiba mais baixando o meu currículo completo: </p>
            <div className="row">
               <div className="columns contact-details hidden">
                  <h2>Informações de Contato</h2>
                  <p className="address">
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button no-underline"><i className="fa fa-download"></i>Baixar currículo completo </a>
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
