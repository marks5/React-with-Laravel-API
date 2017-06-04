export const SET_GAMES = 'SET_GAMES';
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

export function saveGame(data){
    console.log(data);
    return dispatch => {
        return fetch(SERVER + '/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse);
    }
}

export function fetchGames(){
    return dispatch => {
        fetch(SERVER + 'games')
            .then(function(response){
                return response.json()
            })
            .then(function(json){
                console.log(json)
                return dispatch(setGames(json))
            });
    }
}