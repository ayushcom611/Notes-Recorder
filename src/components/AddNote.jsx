import React, { useState } from "react";
import Note from "./Note";
import { v4 as uuidv4 } from 'uuid';

function AddNote() {
  const [Notess, setNote] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editedContent, setEditedContent] = useState(""); 
  const [editedHeading, setEditedHeading] = useState("");

  function AddNewNote() {
    const newNote = {
      id: uuidv4(),
      heading: prompt("Enter a note title"),
      content: prompt("Add note content")
    };
    setNote((prevNotes) => [...prevNotes, newNote]);
  }

  function DeleteNote(id) {
    setNote((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  function EditNote(id) {
    setSelectedNote(id);
    const noteToEdit = Notess.find((note) => note.id === id);
    setEditedContent(noteToEdit.content); 
    setEditedContent(noteToEdit.heading); 
  }

  function onEditContent(id, content) {
    
    setEditedContent(content);
  }
  function onEditHeading(id, heading) {
    
    setEditedHeading(heading);
  }

  function SaveEdit(id) {
    const updatedNotes = Notess.map((note) =>
      note.id === id ? { ...note, content: editedContent, heading:editedHeading} : note
    );
    setNote(updatedNotes);
    setSelectedNote(null); 
  }

  return (
    <div>
      {Notess.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          heading={note.heading}
          content={note.content}
          onDelete={DeleteNote}
          onEdit={EditNote}
          isEditing={selectedNote === note.id}
          onEditContent={onEditContent}
          editedContent={editedContent}
          onEditHeading={onEditHeading}
          editedHeading={editedHeading}
          onSaveEdit={SaveEdit}
        />
      ))}
      <button className="newbutton" type="submit" onClick={AddNewNote}>
        NEW
      </button>
    </div>
  );
}

export default AddNote;