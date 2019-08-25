import React, { Component } from "react";
import "../../App.css";
import Card from '../Card';
import Header from '../Header/index';
import characterCards from '../../characters.json';

class Board extends Component {
    state = {
        characters: characterCards,
        score: 0
    }

    resetGame = () => {
        this.setState({
            score: 0,
            characters: characterCards
        })
    }

    handleCorrect = newCharacters => {
        this.setState({
            characters: this.shuffleArray(newCharacters),
            score: this.state.score + 1,
        });

        if (this.state.score === 11) {
            this.resetGame();
            console.log("Nice...you're a winner");
        }

    };

    handleWrong = () => {
        this.resetGame();
    };

    handleClick = name => {
        let guessedCorrect = false;
        const newCharacters = this.state.characters.map(character => {
            const newPic = { ...character };
            if (newPic.name === name) {
                if (!newPic.clicked) {
                    console.log("Already guessed------------");
                    newPic.clicked = true;
                    guessedCorrect = true;
                }

            }
            return newPic;
        })
        console.log("GUESSED CORRECT: ", guessedCorrect)
        guessedCorrect ? this.handleCorrect(newCharacters) : this.handleWrong(newCharacters)
    };

    shuffleArray = characters => {
        for (let i = characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        return (characters);
    };

    render() {
        return (
            <div>
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
