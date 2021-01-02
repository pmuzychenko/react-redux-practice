import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';

import { OnOff } from './components/OnOff/OnOff';
import {Rating} from "./components/Rating/Rating";
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log('App is rendering')
    return (
        <div>
            {/*<PageTitle title={'This is App Component'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<UncontrolledAccordion title={'Menu'} collapsed={true}/>*/}
            {/*<UncontrolledAccordion title={'Users'} collapsed={false}/>*/}
            {/*<PageTitle title={"These are my friends"}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledAccordion title={'Users'}/>
            <UncontrolledRating/>
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
