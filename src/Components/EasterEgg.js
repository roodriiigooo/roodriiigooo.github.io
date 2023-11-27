import React, { Component, useState, useEffect } from 'react';
import Konami from "konami";
import jsnes from "jsnes";
import Emulator from './Emulator';
import Runpage from './RunPage';
import data from './InterglacticTransmissing.nes';


export default function EasterEgg()  
  {

    useEffect(()=>{
        const easterEgg = new Konami(() => {
            var audio = new Audio('../sfx/egg_sfx.wav');
            audio.play();
            handleClick();
        });
      },[])

    const [isShown, setIsShown] = useState(false);
    var isEgg = false;

    const handleClick = event => {
        setIsShown(current => !current);
        isEgg = !isEgg;

        if (isEgg) {
            window.location.replace("/#egg")
        } else {
            window.location.replace("/#home")
        }
    };
 
    return (
        <section id="egg">
            <div>
                {
                    isShown && (
                        <footer style={{margin:"0"}}>
                           
                                {/* <p>DPad: Setas | Start: Enter | Select: CTRL Direito | Botão A: Z | Botão B: X</p> */}
                                <Runpage />
                           
                        </footer>
                    ) 
                }
                {isShown && <EGG />}
            </div>
      </section>
    );
  }

  function EGG() {

    
    return (
      <div>
        <footer>  
            
            {/* <p>DPad: Arrow keys<br/>Start: Return, Select: Tab<br/>A Button: A, B Button: S</p> */}
        </footer>
      
      </div>
    );
  }

