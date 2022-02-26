import { useCallback, useReducer } from 'react';


interface MyComponentLogicState {
    a: number;
    b: number;
    result: number | null;
}

const MyComponentLogicInitialState: MyComponentLogicState = {
    a: 0,
    b: 0,
    result: null,
};

interface SetAAction {
    type: 'set-a';
    value: number,
}

interface SetBAction {
    type: 'set-b';
    value: number;
}

interface ComputeAction {
    type: 'compute';
}

type MyComponentLogicAction = SetAAction | SetBAction | ComputeAction;

function myComponentLogicReducer(state: MyComponentLogicState, action: MyComponentLogicAction) {
    switch(action.type) {
        case 'set-a': return {
            ...state,
            a: action.value,
        };
        case 'set-b': return {
            ...state,
            b: action.value,
        };
        case 'compute': return {
            ...state,
            result: 2*state.a + state.b,
        }
    }
}   

export function  useMyComponentLogic() {
    const [state, dispatch] = useReducer(myComponentLogicReducer, MyComponentLogicInitialState);
    const compute = useCallback(() => dispatch({type: 'compute'}), []);
    const setA = useCallback((value: number) => dispatch({type: 'set-a', value}), []);
    const setB = useCallback((value: number) => dispatch({type: 'set-b', value}), []);

    return {
        a: state.a,
        b: state.b,
        result: state.result,
        setA,
        setB,
        compute,
    };
}