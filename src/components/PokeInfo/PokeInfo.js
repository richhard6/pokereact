import React, { useEffect, useRef } from 'react';
import PokeTypes from '../PokeTypes/PokeTypes';
import ReactDOM from 'react-dom';
import './PokeInfo.css';

const PokeInfo = ({ isShowing, hide, poke }) => {
  const hectogramsToKg = (hectg) => {
    return hectg / 10;
  };

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="poke__Info">
                <h1>{poke.name}</h1>
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`}
                  alt={poke.name}
                  className="poke__Info__img"
                />
                <h3 className="weight">
                  weight: {hectogramsToKg(poke.weight)} kg
                </h3>
                <div className="poke__Info__types">
                  <PokeTypes types={poke.types} />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default PokeInfo;
