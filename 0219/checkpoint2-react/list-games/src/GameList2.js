import React, { Component } from 'react';
import axios from 'axios';
import Game2 from './Game2';
import { HTMLSelect } from '@blueprintjs/core';


class GameList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            themeSelected: null,
        }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        axios.get('http://www.campus-bordeaux.ovh:3002/joysticks/api/games')
            .then(result => {
                console.log(result.data[0])
                this.setState({ games: result.data })
            })
    }

    deleteGame = (name) => {
        const { games } = this.state;
        console.log("je souhaite delete " + name)
        games.find((game, i) => {
            if (game.name === name) {
                games.splice(i, 1)
                this.setState({ games })
                return true;
            }
            return false;
        })
    }

    render() {
        const { games, themeSelected } = this.state;
        return (<div>
            <HTMLSelect options={
                games
                    .map(game => game.theme)
                    .filter((theme, i, themes) => themes.indexOf(theme) === i)
            } onChange={e => this.setState({ themeSelected: e.target.value })} />
            {
                games
                    .filter(game => themeSelected ? game.theme === themeSelected : true)
                    .map(game => <Game2 key={game.name} {...game} deleteGame={this.deleteGame} />)
            }
        </div>);
    }
}

export default GameList2;