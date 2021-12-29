import React, { useState } from "react";
import classes from "./AddPost.module.css";
import { v4 as uuidv4 } from "uuid";
const AddPost = () => {
  const [inputFields, setInputFields] = useState([]);
  const addButtonHandler = () => {
    if (inputType === "") {
      return;
    }
    const itype = inputType === "1" ? "image" : "description";
    setInputFields((value) => [
      ...value,
      { id: uuidv4(), type: itype, value: "" },
    ]);
    console.log(inputFields);
  };
  const onDeleteHandler = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    console.log("InputFields", inputFields);
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i["value"] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };
  const [inputType, setInputType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const classValue = "form-group " + classes.formInput;
  const container = "container " + classes.container;

  return (
    <>
      <div className={container}>
        <form onSubmit={handleSubmit}>
          <h2 className={classes.title}>Add Post</h2>
          <div className="form-row">
            <div className={classValue}>
              <label for="bannerImage">Add banner Image</label>
              <br />
              <input
                type="file"
                className="form-control-file"
                id="bannerImage"
              />
            </div>

            <div className={classValue}>
              <label for="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                placeholder="Add Post Title Here..."
                required
              />
            </div>
            <div className={classValue}>
              <label for="parah1">Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                placeholder="Add Description Here..."
                required
              ></textarea>
            </div>
            {inputFields.map((inputField) => {
              if (inputField.type === "image") {
                return (
                  <div key={inputField.id} className={classValue}>
                    <label for="bannerImage">Add Image</label>
                    <br />
                    <input type="file" className="form-control-file" />
                    <button
                      onClick={() => {
                        onDeleteHandler(inputField.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <hr />
                  </div>
                );
              }
              return (
                <div key={inputField.id} className={classValue}>
                  <label for="parah1">Description</label>
                  <textarea
                    className="form-control"
                    placeholder="Add Description Here..."
                    required
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  ></textarea>
                  <button
                    onClick={() => {
                      onDeleteHandler(inputField.id);
                    }}
                    style={{ marginTop: "1em" }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <hr />
                </div>
              );
            })}
            <div className={classValue}>
              <div className="form-group">
                <div className={classes.dropdown}>
                  <select
                    className="custom-select"
                    onChange={(e) => {
                      setInputType(e.target.value);
                    }}
                    required
                  >
                    <option value="">Select type of Input</option>
                    <option value="1">Image</option>
                    <option value="2">Description</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={addButtonHandler}
                className="btn btn-success"
              >
                Add
              </button>
              <br />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPost;
