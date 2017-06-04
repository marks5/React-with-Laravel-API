import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList ({ games }) {
    const emptyMessage = (
        <p>Você não tem nenhum jogo na sua coleção!</p>
    );
    
    const gamesList = (
        <p>Lista de Jogos</p>
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