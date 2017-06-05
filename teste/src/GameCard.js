import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function GameCard({game}){
    return (
      <div className="ui card">
        <div className="image">
            <img src={game.url} alt="Game Album"/>
        </div>
        <div className="content">
            <div className="header">{game.nome}</div>
        </div>
        <div className="extra content">
            <div className="ui two buttons">
                <Link to={`/game/${game.id}`} className="ui basic button green">Edit</Link>
                <div className="ui basic button red">Deletar</div>
            </div>
        </div>
      </div>  
    );
}

GameCard.propType = {
    game: PropTypes.object.isRequired
}