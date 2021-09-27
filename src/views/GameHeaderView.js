import React from 'react';
import './Game.css';
import PropTypes from 'prop-types';
// import images from 'images/logo.png';

const GameHeaderView = (props) =>
    <>
        <header className='game-header'>
            <div className='game-title'> CETANIL-TM</div>
        </header>
        <div><h2>{props.gameName}</h2></div>
    </>;

// function Home() {
//     return (
//         <div>
//             <img src={images / logo.png} alt="Centanil.logo" />
//         </div>
//     );
// }

GameHeaderView.propTypes = {
    gameName: PropTypes.string,
};

export default GameHeaderView;