import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
  title: 'Example/Accordion',
  component: Accordion
}

const callback = action('Accordion was clicked')
export const AccordionMenuCollapsed = () => <Accordion title={'Menu'} collapsed={true} onChange={callback}/>
export const AccordionUsersUnCollapsed = () => <Accordion title={'Users'} collapsed={false} onChange={callback}/>
export const AccordionCollapsedSwitching = () =>{
  const [value, setValue] = useState<boolean>(true)
  return <Accordion title={'Menu'} collapsed={value} onChange={ () => setValue(!value)}/>
}





