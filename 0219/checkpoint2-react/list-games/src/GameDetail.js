import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, H5, Elevation } from '@blueprintjs/core';
import { Link } from 'react-router-dom';


class GameDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { game: {} };
        axios.get(`http://www.campus-bordeaux.ovh:3002/joysticks/api/games/${this.props.match.params.id}`)
            .then(result => {
                console.log(result.data)
                this.setState(() => {
                    return { game: result.data };
                });
            })
    }
    render() {
        return (
            <div style={{ margin: '50px' }}>
                <Card interactive={false} elevation={Elevation.FOUR}>
                    <H5><a href="_blank">{this.state.game.name}</a></H5>
                    <p>
                        <img src={this.state.game.promo} alt="" style={{ width: '100%' }} />
                    </p>

                    <Button text={<Link to="/">Retour</Link>} />
                </Card>
            </div>
        );
    }
}

export default GameDetail;