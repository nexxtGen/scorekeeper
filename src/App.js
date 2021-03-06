import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: [
       {
         name: 'Marian',
         score: 5,
       },
       {
         name: 'Józef',
         score: 0,
       }
     ]
   }
 }

 onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
}

 render() {
   return (
     <div className="App">
       <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate}/>
     </div>
   );
 }
}

export default App;