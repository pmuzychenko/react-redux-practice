import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props:SelectPropsType) {
    const selectedItem = props.items.find(item => item.value === props.value)
    return (
      <div>
          <h3>{selectedItem && selectedItem.title}</h3>
        {props.items.map((item,index) => <div key={index}>{item.title}</div>)}
      </div>
    )
}