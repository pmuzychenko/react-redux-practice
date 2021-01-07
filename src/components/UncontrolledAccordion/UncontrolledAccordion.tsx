import React, {useReducer} from "react";
import {reducer, TOOGLE_CONSTANT} from "./reducer";

type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => dispatch({type: TOOGLE_CONSTANT})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}