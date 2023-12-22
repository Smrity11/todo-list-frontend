/* eslint-disable react/prop-types */
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import useAxiosPublic from "../hook/useAxiosPublic";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
const axiospublic =useAxiosPublic()

  const deleteTodo = () => {
    axiospublic.delete('/delete/${id}').then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateToDo} />
        <RxCross1 className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;