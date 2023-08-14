import './App.css';
import { useState } from 'react';
import {Text} from './Text';

function App() {
  const [showText,SetshowText] =useState(false);
  return (
    <div className="App">
     <button onClick={() => {
      SetshowText(!showText);
     }}>
      Show Text
     </button>
     {showText && <Text/>}
    </div>
  );
}

export default App;
