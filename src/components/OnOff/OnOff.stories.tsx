import React, {useState} from 'react';
import {RatingValueType} from "../UncontrolledRating/UncontrolledRating";
import { OnOff } from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
  title: 'Example/OnOff',
  component: OnOff
}

const callback = action('On or Off was clicked')
export const OnMode = () => <OnOff onOff={true} onChange={callback}/>
export const OffMode = () => <OnOff onOff={false} onChange={callback}/>
export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOff onOff={value} onChange={setValue}/>
}



