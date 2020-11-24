import React, {useReducer, useMemo} from 'react'
import PostContext from './PostsContext'
import { reducer, initialState} from '../store/reducers';

export default function PostsProvide(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    const value = useMemo(() => ({state, dispatch}), [state]);

    return (
        <PostContext.Provider value={value}>
            {props.children}
        </PostContext.Provider>
    )
}