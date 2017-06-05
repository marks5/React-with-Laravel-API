import React from 'react';
import PropTypes from 'prop-types';

export default function GameCard({game}){
    return (
      <div className="ui card">
        <div className="image">
            <img src={game.url} alt="Game Album"/>
        </div>
        <div className="content">
            <div className="header">{game.nome}</div>
        </div>
      </div>  
    );
}

GameCard.propType = {
    game: PropTypes.object.isRequired
}