import React, {useState} from "react";

type PropsType = {
    // value: boolean
}

export function OnOff(props: PropsType) {
    console.log('OnOff is rendering')

    const [onOff, setOnOff] = useState(false)

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: onOff ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: onOff ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        border: '1px solid',
        borderRadius: '15px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: onOff ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={() => setOnOff(true)}>On</div>
            <div style={offStyle} onClick={() => setOnOff(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}