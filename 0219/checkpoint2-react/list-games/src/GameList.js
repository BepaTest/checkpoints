import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';
import { HTMLSelect } from '@blueprintjs/core';


class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = { games: [],selectedTheme:null }
        axios.get('http://www.campus-bordeaux.ovh:3002/joysticks/api/games')
            .then(result => {
                console.log(result.data)
                this.setState(() => {
                    return { games: result.data, themes: result.data.map(game=>game.theme).filter((theme,i,themes)=>themes.indexOf(theme)===i ) };
                });
            })
    }

    deleteGame = (name) => {
        const { games } = this.state;
        games.find((game, i) => {
            if (game.name === name) {
                this.setState(prevState => {
                    const newGames = prevState.games;
                    newGames.splice(i, 1);
                    console.log(games, i, newGames);
                    return { games: newGames };
                });
                return true;
            }
            return false;
        })
    }

    render() {
        const { games ,themes, selectedTheme} = this.state;
        return (<div>
            <HTMLSelect options={themes} onChange={(e)=>this.setState({selectedTheme: e.currentTarget.value})}></HTMLSelect>
            {games.filter(game=>selectedTheme?game.theme===selectedTheme:true).map(game => <Game key={game.name} {...game} deleteGame={this.deleteGame} />)}
        </div>);
    }
}

export default GameList;