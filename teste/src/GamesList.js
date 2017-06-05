import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

export default function GamesList ({ games }) {
    const emptyMessage = (
        <p>Você não tem nenhum jogo na sua coleção!</p>
    );
    
    const gamesList = (
        <div className="ui four cards">
            { games.map((game) => <GameCard game={game} key={game.id}/>)}
        </div>
    );

    return (
        <div>
            {games.length === 0 ? emptyMessage : gamesList}
        </div>
    );
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}