import React, { Component } from "react";
import { Link } from "react-router-dom";

import KeyboardController from "./KeyboardController";

// import NESCntlr from 'nes-cntlr';
import NESCntlr from './nes-cntlr';

class VirtualController extends Component {
    render() {
        return (
            <div style={{"z-index": "10000"}} id="controle-nes">
                <input id="simulated" hidden></input>
            </div>
            
        );
    }
    
    componentDidMount() {
        let player1 = new NESCntlr({
          virtual: 'auto',
          location: '#controle-nes',
          keys: {
                start: 'Enter',
                select: 'ControlLeft',
                left: 'ArrowLeft',
                up: 'ArrowUp', 
                right: 'ArrowRight',
                down: 'ArrowDown',
                b: 'KeyZ',
                a: 'KeyX'
            }
        });


        this.bindEvents();
        player1.setVirtualCntlrPos();
        player1.init();
      }
    
      componentWillUnmount() {
        // window.removeEventListener("resize", this.layout);
        // if (this.currentRequest) {
        //   this.currentRequest.abort();
        // }
      }

      bindEvents() {
        document.addEventListener('player1:up-right', e => this.simulateMultiKeyPress(e, 39, 38));
        document.addEventListener('player1:up-left', e => this.simulateMultiKeyPress(e, 37, 38));
        document.addEventListener('player1:down-left', e => this.simulateMultiKeyPress(e, 40, 37));
        document.addEventListener('player1:down-right', e => this.simulateMultiKeyPress(e, 40, 39));

        document.addEventListener('player1:left', e => this.simulateKeyPress(e, 37));
        document.addEventListener('player1:right', e => this.simulateKeyPress(e, 39));
        document.addEventListener('player1:up', e => this.simulateKeyPress(e, 38));
        document.addEventListener('player1:down', e => this.simulateKeyPress(e, 40));
       
        document.addEventListener('player1:b', e => this.simulateKeyPress(e, 89));
        document.addEventListener('player1:a', e => this.simulateKeyPress(e, 88));
        document.addEventListener('player1:start', e => this.simulateKeyPress(e, 13));
        document.addEventListener('player1:select', e => this.simulateKeyPress(e, 17));

      }
      
      simulateKeyPress(e, key) {
        if (e.detail.pressed) {
          this.isBusy = true;
          const event = new KeyboardEvent('keydown', {
                key: key,
                keyCode: key,
                which: key
            });
            document.dispatchEvent(event);
        }
        
        if (!e.detail.pressed) {
          this.isBusy = false;
          const event = new KeyboardEvent('keyup', {
                key: key,
                keyCode: key,
                which: key
            });
            document.dispatchEvent(event);
        }

        console.log(e);
      }

      simulateMultiKeyPress(e, key1, key2) {
        if (e.detail.pressed) {
          this.isBusy = true;
          const event = new KeyboardEvent('keydown', {
                key: key1,
                keyCode: key1,
                which: key1
            });
            document.dispatchEvent(event);
        }
        
        if (!e.detail.pressed) {
          this.isBusy = false;
          const event = new KeyboardEvent('keyup', {
                key: key1,
                keyCode: key1,
                which: key1
            });
            document.dispatchEvent(event);
        }

        if (e.detail.pressed) {
            this.isBusy = true;
            const event = new KeyboardEvent('keydown', {
                  key: key2,
                  keyCode: key2,
                  which: key2
              });
              document.dispatchEvent(event);
          }
          
          if (!e.detail.pressed) {
            this.isBusy = false;
            const event = new KeyboardEvent('keyup', {
                  key: key2,
                  keyCode: key2,
                  which: key2
              });
              document.dispatchEvent(event);
          }

        console.log(e);
      }
      
}



export default VirtualController;