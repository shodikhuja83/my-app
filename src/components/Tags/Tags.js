import React from 'react';
function Tags({ tags }) {
    return (
        <>
            теги: { tags.map(t => <button key={t}>#{t}</button>)}
        </>
    )
}
export default Tags;