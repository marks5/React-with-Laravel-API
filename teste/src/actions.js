export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME = 'ADD_GAME';
export const GAME_FETCHED = 'GAME_FETCHED';

const SERVER = 'http://localhost:8000/api';

function handleResponse(response){
    if(response.ok){
        return response.json();
    }else{
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function setGames(games){
    return {
        type: SET_GAMES,
        games
    }
}

export function addGame(game){
    return {
        type: ADD_GAME,
        game
    }
}

export function gameFetched(game){
    return {
        type: GAME_FETCHED,
        game
    }
}

export function saveGame(data){
    console.log(data);
    return dispatch => {
        return fetch(SERVER + '/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => dispatch(addGame(data)));
    }
}

export function fetchGames(){
    return dispatch => {
        fetch(SERVER + '/games')
            .then(function(response){
                return response.json()
            })
            .then(function(json){
                return dispatch(setGames(json))
            });
    }
}

export function fetchGame(id){
    return dispatch => {
        fetch(SERVER + `/games/${id}`)
            .then(function(response){
                return response.json()
            })
            .then(function(json){
                return dispatch(gameFetched(json))
            });
    }
}