
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
      
      {props.isEditing ? (
        <div className="editor">
        <textarea
            value={props.editedHeading}
            onChange={(event) => props.onEditHeading(props.id, event.target.value)}
          />
          <textarea
            value={props.editedContent}
            onChange={function(event){ return(props.onEditContent(props.id, event.target.value),
            console.log(event.target))}}
      
          /><br/>
          <button className="newbutton3" onClick={handleSaveEdit}>SAVE</button>
        </div>
      ) : (
        <div className="textContainer">
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
        </div>
      )}
        <div className="buttoncontainer">
      <button className="newbutton1" onClick={handleDelete}>DELETE</button>
      <button  className="newbutton2"onClick={handleEdit}>EDIT</button>
      </div>
    </div>
  );
}

export default Note;