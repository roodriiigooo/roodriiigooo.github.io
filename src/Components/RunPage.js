import React, { Component } from "react";
import { Button, Progress } from "reactstrap";
import { Link } from "react-router-dom";

import config from "./config";
import ControlsModal from "./ControlsModal";
import Emulator from "./Emulator";
import RomLibrary from "./RomLibrary";
// import NESCntlr from 'nes-cntlr';


import "./RunPage.css";
import VirtualController from "./VirtualController";

function loadBinary(path, callback, handleProgress) {
  var req = new XMLHttpRequest();
  req.open("GET", path);
  req.overrideMimeType("text/plain; charset=x-user-defined");
  req.onload = function() {
    if (this.status === 200) {
      if (req.responseText.match(/^<!doctype html>/i)) {
        // Got HTML back, so it is probably falling back to index.html due to 404
        return callback(new Error("Page not found"));
      }

      callback(null, this.responseText);
    } else if (this.status === 0) {
      // Aborted, so ignore error
    } else {
      callback(new Error(req.statusText));
    }
  };
  req.onerror = function() {
    callback(new Error(req.statusText));
  };
  req.onprogress = handleProgress;
  req.send();
  return req;
}

/*
 * The UI for the emulator. Also responsible for loading ROM from URL or file.
 */
class RunPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      romName: null,
      romData: null,
      running: false,
      paused: false,
      controlsModalOpen: false,
      loading: true,
      loadedPercent: 3,
      error: null
    };
  }

  render() {
    return (
      <div className="RunPage">  
          {/* <ul className="navbar-nav ml-auto mr-auto">
            <li className="navitem">
             <p><span className="navbar-text mr-3">{this.state.romName}</span></p> 
             <p><span className="navbar-text mr-3">DPad: Setas | Start: Enter | Select: CTRL Direito | Botão A: Z | Botão B: X</span></p>
            </li>
          </ul> */}
        <div style={{margin: "auto", width: "65%"}}>
            
               {/* <Button
                outline
                color="primary"
                onClick={this.toggleControlsModal}
                className="mr-3"
              >
                Controles
              </Button>  */}
              
              {/* <Button
                outline
                color="primary"
                onClick={this.handlePauseResume}
                disabled={!this.state.running}
              >
                {this.state.paused ? "Continue" : "Pause"}
              </Button> */}
        {this.state.error ? (
          this.state.error
        ) : (
          <div
            className="screen-container"
            ref={el => {
              this.screenContainer = el;
            }}
          >
            <div>
              <div>
                <p style={{margin: "0"}}>{this.state.romName}</p> 
              </div>
                <p style={{margin: "0"}}>Padrão: DPad: Setas | Start: Enter | Select: CTRL | Botão A: X | Botão B: Z 
              </p>
                {this.state.paused ? (
                  <a style={{"text-decoration": "none"}} onClick={this.handlePauseResume} className="no-underline"> Continuar Emulador ( <i className="fa fa-play-circle "></i> ) </a>
                ) : (
                  <a style={{"text-decoration": "none"}} onClick={this.handlePauseResume} className="no-underline"> Pausar Emulador ( <i className="fa fa-pause"></i> ) </a>
                ) }
               -  <a style={{"text-decoration": "none"}} onClick={this.toggleControlsModal} className="no-underline"> Configurar Controles ( <i className="fa fa-gamepad"></i> )</a>
            </div>
            {this.state.loading ? (
              <Progress
                value={this.state.loadedPercent}
                style={{
                  position: "absolute",
                  width: "70%",
                  left: "15%",
                  top: "48%"
                }}
              />
            ) : this.state.romData ? (
              <Emulator
                romData={this.state.romData}
                paused={this.state.paused}
                ref={emulator => {
                  this.emulator = emulator;
                }}
              />
            ) : null}

            {/* TODO: lift keyboard and gamepad state up */}
            {this.state.controlsModalOpen && (
              <ControlsModal
                isOpen={this.state.controlsModalOpen}
                toggle={this.toggleControlsModal}
                keys={this.emulator.keyboardController.keys}
                setKeys={this.emulator.keyboardController.setKeys}
                promptButton={this.emulator.gamepadController.promptButton}
                gamepadConfig={this.emulator.gamepadController.gamepadConfig}
                setGamepadConfig={
                  this.emulator.gamepadController.setGamepadConfig
                }
              />
            )}
            <div style={{"z-index": "10000"}} id="nes-pad">
              <VirtualController/>
            </div>
           

          </div>
        )}
        </div>
        <nav
          className="navbar"
          ref={el => {
            this.navbar = el;
          }}
        >
        </nav>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this.layout);
    this.layout();
    this.load();
    // let player1 = new NESCntlr({
    //   virtual: 'always',
    //   location: '#controle-nes'
    // });
    
    // player1.init();
    
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.layout);
    if (this.currentRequest) {
      this.currentRequest.abort();
    }
  }

  load = () => {
    if (true) {
      const eggs = ["gradius", "lf", "contra", "dh", "duckh"];
      var egg = eggs[Math.floor(Math.random()*eggs.length)];
      const slug = egg;
      const isLocalROM = /^local-/.test(slug);
      const romHash = slug.split("-")[1];
      const romInfo = isLocalROM
        ? RomLibrary.getRomInfoByHash(romHash)
        : config.ROMS[slug];

      if (!romInfo) {
        this.setState({ error: `ROM inválida: ${slug}` });
        return;
      }

      if (isLocalROM) {
        this.setState({ romName: romInfo.name });
        const localROMData = localStorage.getItem("blob-" + romHash);
        this.handleLoaded(localROMData);
      } else {
        this.setState({ romName: romInfo.description });
        this.currentRequest = loadBinary(
          romInfo.url,
          (err, data) => {
            if (err) {
              this.setState({ error: `Error loading ROM: ${err.message}` });
            } else {
              this.handleLoaded(data);
            }
          },
          this.handleProgress
        );
      }
    } else if (this.props.location.state && this.props.location.state.file) {
      let reader = new FileReader();
      reader.readAsBinaryString(this.props.location.state.file);
      reader.onload = e => {
        this.currentRequest = null;
        this.handleLoaded(reader.result);
      };
    } else {
      this.setState({ error: "No ROM provided" });
    }
  };

  handleProgress = e => {
    if (e.lengthComputable) {
      this.setState({ loadedPercent: (e.loaded / e.total) * 100 });
    }
  };

  handleLoaded = data => {
    this.setState({ running: true, loading: false, romData: data });
  };

  handlePauseResume = () => {
    this.setState({ paused: !this.state.paused });
  };

  layout = () => {
    let navbarHeight = parseFloat(window.getComputedStyle(this.navbar).height);
    // this.screenContainer.style.height = `${window.innerHeight -
    //   navbarHeight}px`;
    // this.screenContainer.style.height = '65%';
    this.screenContainer.style.height = `${window.innerHeight -
    145}px`;
    if (this.emulator) {
      this.emulator.fitInParent();
    }
  };

  toggleControlsModal = () => {
    this.setState({ controlsModalOpen: !this.state.controlsModalOpen });
  };
}

export default RunPage;
