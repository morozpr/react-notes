import React from 'react';

function Main() {
    return <div className='main'>
        <div className='main-note-edit'>
            <input type="text" id='title' autoFocus />
            <textarea id='body' placeholder='write your note' />
        </div>
        <div className='main-note-preview'>
            <h1 className='preview-title'>Title</h1>
            <div className='markdown-preview'>Note preview</div>
        </div>
    </div>
}

export default Main;