import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'Example/ReactMemoWork',
}
const NewMessagesCounterSectet = (props: { counter: number }) => {
    console.log('NewMessagesCounter is rendering')
    return (
        <div>{props.counter}</div>
    )
}
const NewMessagesCounter = React.memo(NewMessagesCounterSectet)

const UsersSectet = (props: { users: string[] }) => {
    console.log('Users is rendering')
    return (
        <div>
            {props.users.map((user, ind) => <div key={ind}>{user}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSectet)


export const ReactMemoExample = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Dimych', 'Valera', 'Artem', 'Ignat'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter counter={counter}/>
        <Users users={users}/>
        </>
}




