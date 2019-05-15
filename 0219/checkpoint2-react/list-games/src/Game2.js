import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Game2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { name , image1, image2, id, deleteGame} = this.props;
        return (<div>
            <h5>{name}</h5>
            <img src={image1} style={{width:'100px'}} alt=""/>
            <img src={image2} style={{width:'100px'}} alt=""/>
            <button><Link to={`/jeu/promo/${id}`}>details</Link></button>
            <button onClick={()=>deleteGame(name)}>delete</button>
        </div>);
    }
}

export default Game2;