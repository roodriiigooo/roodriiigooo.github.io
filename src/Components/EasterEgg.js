import React, { Component, useState, useEffect } from 'react';
import Konami from "konami";
import jsnes from "jsnes";


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

    const handleClick = event => {
        setIsShown(current => !current);
    };
 

    return (
       
            <div>
                {
                    isShown && (
                        <footer>
                        <div>
                       
                        </div>
                        </footer>
                    ) 
                }
                {isShown && <EGG />}
            </div>
      
    );
  }

  function EGG() {

    // nes_load_url("nes-canvas", "..egg/InterglacticTransmissing.nes");

    return (
      <div>
        <footer>  
            <div id="nes-div" >
                <canvas id="nes-canvas" />
            </div>
            <p>DPad: Arrow keys<br/>Start: Return, Select: Tab<br/>A Button: A, B Button: S</p>
        </footer>
      
      </div>
    );
  }

