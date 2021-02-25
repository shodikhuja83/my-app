import React, {useRef, useContext} from 'react';
import PostsContext from '../../contexts/PostsContext';
import { editCancel, editChange, editSubmit } from '../../store/actions';

export default function PostForm() {
    const {state: {edited}, dispatch} = useContext(PostsContext);
    const firstFocusEl = useRef(null);
    
    const handleSubmit = ev => {
        ev.preventDefault();
        dispatch(editSubmit());
        firstFocusEl.current.focus();
    };

    const handleChange = ev => {
        const {name, value} = ev.target;
        dispatch(editChange(name, value));
    };

    const handleCancelEdit = () => dispatch(editCancel());
    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea 
                    ref={firstFocusEl} name="content" 
                    placeholder="content" value={edited?.content || ''} 
                    onChange={handleChange}>
                </textarea>
                <input 
                    name="tags" placeholder="tags" 
                    value={edited?.tags?.join(' ') || ''} 
                    onChange={handleChange} />
                
                <input name="photo" placeholder="photo" 
                    value={edited?.photo?.url || ''} 
                    onChange={handleChange} />
                
                <input name="alt" placeholder="alt" 
                    value={edited?.photo?.alt || ''} 
                    onChange={handleChange} />
                
                <button>Ok</button>
            </form>
            {(edited !== undefined && edited?.id !== 0) && <button onClick={handleCancelEdit}>Отменить</button>}
        </>
    )
}