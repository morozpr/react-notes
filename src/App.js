import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';

// 30ая

function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled',
      body: '',
      lastModified: Date.now(),
    }

    setNotes([newNote, ...notes]);

  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  return (
    <div className="App">
      <Sidebar notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  );
}

export default App;
