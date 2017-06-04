export const SET_GAMES = 'SET_GAMES';

export function setGames(games){
    return {
        type: SET_GAMES,
        games
    }
}

export function fetchGames(){
    //const server = 'http://localhost:8000';
    return dispatch => {
        fetch('/api/games')
            .then(function(response){
                return response.json()
            })
            .then(function(json){
                console.log(json)
                return dispatch(setGames(json))
            });
    }
}