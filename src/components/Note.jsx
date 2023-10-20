
import React from "react";

function Note(props) {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const handleEdit = () => {
    props.onEdit(props.id);
  };

  const handleSaveEdit = () => {
    props.onSaveEdit(props.id);
  };

  return (
    <div className="note">
      <h1>{props.heading}</h1>
      {props.isEditing ? (
        <div>
          <textarea
            value={props.editedContent}
            onChange={function(event){ return(props.onEditContent(props.id, event.target.value),
            console.log(event.target))}}
      
          /><br/>
          <button className="newbutton3" onClick={handleSaveEdit}>SAVE</button>
        </div>
      ) : (
        <p>{props.content}</p>
      )}

      <button className="newbutton1" onClick={handleDelete}>DELETE</button>
      <button  className="newbutton2"onClick={handleEdit}>EDIT</button>
    </div>
  );
}

export default Note;