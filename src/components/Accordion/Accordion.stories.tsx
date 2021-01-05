import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
  title: 'Example/Accordion',
  component: Accordion
}


const callback = action('Accordion was clicked')
const onClickedCallback = action('Some list item was clicked')

export const AccordionMenuCollapsed = () => <Accordion title={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickedCallback}/>
export const AccordionUsersUnCollapsed = () => <Accordion title={'Users'} collapsed={false}
                                                          onChange={callback}
                                                          items={[
                                                                {title: 'Dima', value: 1},
                                                            {title: 'Valera', value: 2},
                                                            {title: 'Artem', value: 3},
                                                            {title: 'Viktor', value: 4}
                                                            ]}
                                                          onClick={onClickedCallback}
/>
export const AccordionCollapsedSwitching = () =>{
  const [value, setValue] = useState<boolean>(true)
  return <Accordion title={'Menu'} collapsed={value} onChange={ () => setValue(!value)}
                    items={[
    {title: 'Dima', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4}
  ]}
  onClick={(value) => alert(`user with ID ${value} should be happy`)}
  />
}





