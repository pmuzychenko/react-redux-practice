import {reducer, StateType, TOOGLE_CONSTANT} from "./reducer";

test('reducer should change its value to opposite',() => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const resultState = reducer(state, {type: TOOGLE_CONSTANT})

    //expectation
    expect(resultState.collapsed).toBe(true)
})

test('reducer should change its value to opposite value',() => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const resultState = reducer(state, {type: TOOGLE_CONSTANT})

    //expectation
    expect(resultState.collapsed).toBe(false)
})

test('reducer should return case with Error notation',() => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action

    //expectation
    expect(() => {
        reducer(state, {type: 'ACTION'})
    }).toThrowError()
})
