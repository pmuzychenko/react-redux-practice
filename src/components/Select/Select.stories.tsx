import React from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Example/UncontrolledSelect',
  component: Select
}

const callback = action('Select item was chose')
export const CustomSelectWithValue = () => <Select items={[
  {title: 'Minsk', value: '1'},
  {title: 'Moscow', value: '2'},
  {title: 'Kiev', value: '3'},
]} value={'1'} onChange={callback}/>

export const CustomSelectWithoutValue = () => <Select items={[
  {title: 'Minsk', value: '1'},
  {title: 'Moscow', value: '2'},
  {title: 'Kiev', value: '3'},
]} onChange={callback}/>





