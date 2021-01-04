import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'Example/UncontrolledInput',
    //component:
}
export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const getValue = (e:ChangeEvent<HTMLInputElement>) => {
      const actualValue = e.currentTarget.value
      setValue(actualValue)
    }
    return <> <input value={value} onChange={getValue} /> -- {value} </>
}
export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    let textInput = useRef<HTMLInputElement>(null)
    const onClick = () => {
        let el = textInput.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={textInput}/>
        <button onClick={onClick}>save
        </button>
        -- {value}
    </>
}
export const ControlledInputWithFixedValue = () => <input value={'It-incubator.by'}/>




