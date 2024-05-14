import './App.css';
import InfoBox from './Components/InfoBox';
import TextBox from './Components/TextBox';
import Store from './Components/Store';
import HomeOptions from './Components/HomeOptions';
import { useState } from 'react';

function App() { 
  const handleStoreClick = () => {
    setGameWindow(<Store />);
  };
  const handleHomeClick =() =>{
    setGameWindow(<HomeOptions handleStoreClick={handleStoreClick}/>)
  }
  // const ChangeGameWindow = ()=>{
  //   switch (gameWindow){
  //     case 'homeOptions':
  //       return()
  //   }
  }
  const [gameWindow, setGameWindow] = useState(<HomeOptions handleStoreClick={handleStoreClick}/>);
  return (
    <div className="App">
      <div className='homebase'>
        <img className='backImg' src="https://cdn.gamedevmarket.net/wp-content/uploads/20191203183738/5bec25061fb394106a6f5398fd4f06d0.jpg" alt="" />
        <div className="StatsWindow">
          <InfoBox  handleHomeClick={handleHomeClick}/>
        </div>
        <div className="gameWindow">
          {gameWindow}
        </div>
        <div className="messageWindow">
          <TextBox />
        </div>
      </div>
    </div>
  );
}

export default App;