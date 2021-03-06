import React, {useState} from "react";

type PropsType = {
    onOff: boolean
    onChange: (onOff: boolean) => void
}

export function OnOff(props: PropsType) {
    console.log('UncontrolledOnOff is rendering')

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: props.onOff ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: props.onOff ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.onOff ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={()=> props.onChange(true)}>On</div>
            <div style={offStyle} onClick={()=> props.onChange(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}