import React from "react";

const config = {
  ROMS: {
    duckh: {
      name: "Duck Hunt",
      description: (
        <span>
          <a
            href="https://www.nintendo.com/pt-br/store/games/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Duck Hunt 
          </a> {" "}
          by Nintendo
        </span>
      ),
      url: "https://rodrigo.londrina.br/egg/0798754378991881328-DH"
    },
    dh: {
      name: "2 in 1",
      description: (
        <span>
          <a
            href="https://www.nintendo.com/pt-br/store/games/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Duck Hunt + Super Mario Bros.
          </a> {" "}
          by Nintendo
        </span>
      ),
      url: "https://rodrigo.londrina.br/egg/0798754378991881328-DM"
    },
    76: {
      name: "76 in 1",
      description: (
        <span>
          <a
            href="https://en.wikipedia.org/wiki/Gradius"
            target="_blank"
            rel="noopener noreferrer"
          >
            76 in 1
          </a> {" "}
          by Tsang Hai
        </span>
      ),
      url: "https://rodrigo.londrina.br/egg/0798715678991771238-76"
    },
    gradius: {
      name: "Gradius (USA)",
      description: (
        <span>
          <a
            href="https://en.wikipedia.org/wiki/Gradius"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gradius (USA)
          </a> {" "}
          by Konami
        </span>
      ),
      url: "https://rodrigo.londrina.br/egg/0798715678991771238-01"
    },
    lf: {
      name: "Life Force (USA)",
      description: (
        <span>
          <a
            href="https://gradius.fandom.com/wiki/Life_Force"
            target="_blank"
            rel="noopener noreferrer"
          >
            Life Force (USA)
          </a> {" "}
          by Konami
        </span>
      ),
      url: "https://rodrigo.londrina.br/egg/0798715678991771328-01"
    },
    contra: {
      name: "Contra (USA)",
      description: (
        <span>
          <a
            href="https://pt.wikipedia.org/wiki/Contra_(jogo_eletr%C3%B4nico)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contra (USA)
          </a> {" "}
          by Konami
        </span>
      ),
      url: "https://rodrigo.londrina.br/egg/0798754378991881328-01"
    }
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;
