import React, { Component } from "react";
import "../../App.css";
import Card from '../Card';
import characterCards from '../../characters.json';

class Board extends Component {
    state = {
        characters: characterCards,
        score: 0
    }



    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newCharacters = this.state.characters.map(character => {
            const newPic = { ...character };
            if (newPic.name === name) {
                if (!newPic.clicked) {
                    newPic.clicked = true;
                    guessedCorrect = true;

                }

            }
            return newPic;
        })
        guessedCorrect ? this.handleCorrect(newCharacters) : this.handleWrong(newCharacters)
    };



    handleCorrect = newCharacters => {
        this.setState({
            characters: this.shuffleArray(newCharacters),
            score: this.state.score + 1,
        });

        if (this.state.score === 11) {
            this.resetGame();
        }

    };

    shuffleArray = characters => {
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        return (characters);
    };

    resetGame = () => {
        this.setState({
            score: 0,
            characters: characterCards
        })
    }

    render() {
        return (
            <div>
                <div className="scoreBelt">
                    <div id="scoreDiv">Score: {this.state.score}</div>
                </div>
                <br />
                <div className="boardWrapper">
                    <div className="board">
                        {this.state.characters.map(character => {
                            return (<Card
                                name={character.name}
                                key={character.name}
                                handleClick={this.handleClick}
                                src={character.image}
                                alt={character.name}
                            />)
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default Board;
