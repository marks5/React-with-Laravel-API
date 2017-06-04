import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import GamesPage from './GamesPage';
import GameForm from './GameForm';
import './App.css';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )}/>
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Inicio"/>
          <ActiveLink activeOnlyWhenExact to="/games" label="Jogos"/>
          <ActiveLink activeOnlyWhenExact to="/games/new" label="Adicionar novos Jogos" />
        </div>

        <Route exact path="/games" component={GamesPage}/>
        <Route path="/games/new" component={GameForm}/>
      </div>
    );
  }
}

export default App;