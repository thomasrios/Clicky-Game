import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import players from "./players.json";
import "./App.css";

let currentScore = 0;
let highScore = 0;

const styles = {
  navbarStyle: {
    background: "black",
    color: "white",
    width: "100%",
    height: "20%"
  },
  navElements: {
    justifyContent: "center",
    width: "100%",
    fontSize: "32px"
  }
};

class App extends React.Component {

  state = {
    players
  };


  clicker = (id) => {
    const players = this.state.players.map(friend => {
      if (friend.id === id && friend.clicked === false) {
        friend.clicked = true;
        currentScore++
        console.log(friend)
      }
      else if (friend.id === id && friend.clicked === true) {
        alert("You're an idiot!")
        if (currentScore > highScore) {
          highScore = currentScore
        }
        this.gameOver()
      }
      if (currentScore === 12) {
        alert("You watch basketball! You're a winner!")
        highScore = 12
        this.gameOver()
      }
      return friend
    })
    console.log("clicked")
    console.log(players)
    this.setState({ players })
  }

  shuffle = () => {
    this.setState({
      players: this.state.players.sort(function (a, b) {
        return 0.5 - Math.random();
      }
      )
    })
  }

  gameOver = () => {
    const players = this.state.players.map(friend => {
      friend.clicked = false;
      return friend
    })
    currentScore = 0;
    this.setState({ players })
  }

  render() {
    return (
      <Wrapper>
        <div className="row" style={styles.navbarStyle}>
          <nav className="navbar" style={styles.navElements}>
            <div className="col-md-4">
              <p>Click on a player to get started</p>
            </div>
            <div className="col-md-4">
              <p>Score: {currentScore} | High Score: {highScore}</p>
            </div>
          </nav>
        </div>
        
        {
          this.state.players.map((friend) => {
            return (
              <FriendCard
                key={friend.id}
                name={friend.name}
                image={friend.image}
                click={this.clicker}
                clicked={friend.clicked}
                shuffle={this.shuffle}
                id={friend.id}
              />
            )
          })
        }

      </Wrapper >
    );
  }

}
export default App;
