import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import {RatingValueType, UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log('App is rendering')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false)


    return (
        <div className={'App'}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'Menu'} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
            <UncontrolledRating/>
            <UncontrolledOnOff onChange={setOnOff}/> {onOff.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
