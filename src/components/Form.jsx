import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function Form(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const [ready, setReady] = useState(false);

  function handleChange(e) {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  return (
    <form className="create-note">
      <input
        onChange={handleChange}
        value={input.title}
        name="title"
        placeholder={ready === true ? "Enter Title" : "Please click to enter"}
        onClick={() => setReady(true)}
      ></input>
      {ready === true && (
        <div>
          <textarea
            onChange={handleChange}
            value={input.content}
            name="content"
            placeholder="Enter Content"
          ></textarea>
          <Zoom in={true}>
            <Fab
              onClick={(e) => {
                props.addNote(input);
                e.preventDefault();
                setInput({
                  title: "",
                  content: "",
                });
              }}
            >
              <AddIcon />
            </Fab>
          </Zoom>
        </div>
      )}
    </form>
  );
}

export default Form;
