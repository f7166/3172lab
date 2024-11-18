import React from 'react';
import {picture} from './data/picture';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>{picture.title}</h1>
                <img src={picture.imageUrl} alt={"pic1"} className="pictureName"/>
                <p>{picture.description}</p>
            </header>
        </div>
    );
}

export default App;
