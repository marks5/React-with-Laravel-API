import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {saveGame} from './actions';

class GameForm extends Component {
    state = {
        nome: '',
        url: '',
        errors: {},
        loading: false,
        done: false
    }

    handleChange = (e) => {
        if(!!this.state.errors[e.target.name]){
            let errors = Object.assign( {} , this.state.errors);
            delete errors[e.target.name];
            this.setState({ 
                  [e.target.name]: e.target.value,
                  errors
                });
        }else {
            this.setState({ [e.target.name ]: e.target.value})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if (this.state.nome === '') errors.nome = "Campo vazio";
        if (this.state.url === '') errors.url = "Campo vazio";
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0

        if (isValid) {
            const { nome, url } = this.state;
            this.setState({ loading: true });
            this.props.saveGame({ nome, url })
                .then(
                    () => { this.setState({done:true})},
                    (err) => err.response.json()
                        .then((errors) => this.setState({ errors, loading: false }))
            );
        }
    }

    

    render() {
        const form = (
            <form className={classnames('ui','form',{loading:this.state.loading})} onSubmit={this.handleSubmit}>
                <h1>Add new Game</h1>

                {!!this.state.errors.Status && 
                <div className="ui negative message">
                    <p>
                        {this.state.errors.Status}
                    </p>
                </div>}

                <div className={classnames('field', {error: !!this.state.errors.nome})}>
                    <label htmlFor="nome">Nome</label>
                    <input 
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleChange}
                    id="nome"
                    />
                    <span>{this.state.errors.nome}</span>
                </div>

                <div className={classnames('field', {error: !!this.state.errors.url})}>
                    <label htmlFor="url">Url album</label>
                    <input 
                    name="url"
                    value={this.state.url}
                    onChange={this.handleChange}
                    id="url"/>
                    <span>{this.state.errors.url}</span>
                </div>

                <div className="field">
                    {this.state.url !== '' && <img src={this.state.url} alt="url" className="ui small bordered image"/>}
                </div>

                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
           </form>
        )
        
        return (
        <div>
            {this.state.done ? <Redirect to="/games"/> : form }
        </div>
        );
    }
}

export default connect(null,{saveGame}) (GameForm);