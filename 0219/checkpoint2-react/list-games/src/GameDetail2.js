import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class GameDetail2 extends Component {
    constructor(props) {
        super(props);
        this.state = { game:{} }
    }

    componentWillMount() {
        const {match} = this.props;
        axios.get(`http://www.campus-bordeaux.ovh:3002/joysticks/api/games/${match.params.id}`)
            .then(result => {
                console.log(result.data)
                this.setState({game: result.data})
            })
    }

    render() { 
        const {game}=this.state;
        return ( <div>
            <img src={game.promo} alt="" style={{width:"200px"}}/>
            <button ><Link to='/'>retour</Link></button>
        </div> );
    }
}
 
export default GameDetail2;