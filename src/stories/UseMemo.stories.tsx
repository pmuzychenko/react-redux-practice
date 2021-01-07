import React, {useMemo, useState} from 'react';

export default {
    title: 'Example/UseMemo',
}
export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
            <div>
                result for A : {resultA}
            </div>
            <div>
                result for B : {resultB}
            </div>
    </>
}

const UsersSectet = (props: { users: string[] }) => {
    console.log('Users is rendering')
    return (
        <div>
            {props.users.map((user, ind) => <div key={ind}>{user}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSectet)

export const WorkWithReactMemo = () => {
    console.log('WorkWithReactMemo is rendering')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Dimych', 'Valera', 'Artem', 'Ignat'])

    const newArray = useMemo(() => {
        return users.filter( user => user.toLowerCase().indexOf('a') > -1)
    },[users])
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}