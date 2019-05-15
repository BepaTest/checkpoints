import React from 'react';
import { Button, Card, Elevation, Classes, H5 } from "@blueprintjs/core";
import { Link } from 'react-router-dom';


const Game = ({ id, name, image1, image2, description, deleteGame }) => {
    return (
        <div style={{ margin: '50px' }}>
            <Card interactive={false} elevation={Elevation.FOUR}>
                <H5><a href="_blank">{name}</a></H5>
                <p>{description}</p>
                <p>
                    <img src={image1} style={{
                        width: '40%',
                    }} alt='' />
                    <img src={image2} style={{
                        width: '40%',
                    }} alt='' />
                </p>

                <Link to={`/jeu/promo/${id}`}> <Button text='Promo' className={Classes.BUTTON} /></Link>
                <Button text='Delete' className={Classes.BUTTON} onClick={() => deleteGame(name)} />
            </Card>
        </div>
    );
}

export default Game;