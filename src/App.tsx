import React, {useReducer} from 'react';
import './App.css';

function App() {
    return (
        <div>
            This is App Component
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
        </div>
    )
}

function Star() {
    return <>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
        <div>Star</div>
    </>
}

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
