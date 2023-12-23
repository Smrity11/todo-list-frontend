/* eslint-disable react/prop-types */
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import useAxiosPublic from "../hook/useAxiosPublic";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);
  const axiospublic =useAxiosPublic()

  const updateToDo = () => {
    axiospublic
      .put('/updateTodo/${popupContent.id}', { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
