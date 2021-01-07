import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Example/UncontrolledSelect',
  component: Select
}

const callback = action('Select item was chose')

export const CustomSelectWithValue = () => {
  const [currentValue, setCurrentValue] = useState<string>('2')
 return  (
     <Select items={[
       {title: 'Minsk', value: '1'},
       {title: 'Moscow', value: '2'},
       {title: 'Kiev', value: '3'},
     ]} value={currentValue} onChange={setCurrentValue}/>
 )
}


export const CustomSelectWithoutValue = () => {
  const [currentValue, setCurrentValue] = useState<string | null>(null)
 return <Select items={[
    {title: 'Minsk', value: '1'},
    {title: 'Moscow', value: '2'},
    {title: 'Kiev', value: '3'},
  ]} value={currentValue} onChange={setCurrentValue}/>
}





