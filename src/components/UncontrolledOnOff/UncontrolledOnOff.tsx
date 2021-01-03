import React, {useState} from "react";

type PropsType = {
    onChange: (onOff: boolean) => void
}

export function UncontrolledOnOff(props: PropsType) {
    console.log('UncontrolledOnOff is rendering')

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

    const onClicked = () => {
        setOnOff(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOnOff(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}