import React, { memo } from "react";

const Addform = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.addEntry(name);
    formRef.current.reset();
  };

  return (
    <div>
      <form className="add-form" ref={formRef} onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" class="addform"></input>
        <button class="add-button">Add</button>
      </form>
    </div>
  );
});

export default Addform;
