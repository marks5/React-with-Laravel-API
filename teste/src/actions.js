export function fetchGames(){
    //const server = 'http://localhost:8000';
    return dispatch => {
        fetch('/api/games');
    }
}