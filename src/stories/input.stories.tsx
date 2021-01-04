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
export const ControlledInput = () => {
  const [value, setValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }
  return <> <input value={value} onChange={onChange}/> </>
}
export const ControlledCheckbox = () => {
  const [value, setValue] = useState(true)
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.checked)
  }
  return <> <input type={'checkbox'} checked={value} onChange={onChange}/> </>
}
export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>('1')
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value)
  }
  return <select value={value} onChange={onChange}>
  <option>None</option>
  <option value={'1'}>Kiev</option>
  <option value={'2'}>Minsk</option>
  <option value={'3'}>Moscow</option>
   </select>
}




export const ControlledInputWithFixedValue = () => <input value={'It-incubator.by'}/>




