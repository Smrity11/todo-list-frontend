/* eslint-disable react/prop-types */
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import useAxiosPublic from "../hook/useAxiosPublic";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
const axiospublic =useAxiosPublic()
console.log('al todo list data', text);
  const deleteTodo = () => {
    axiospublic.delete('/allTodo/${id}').then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="toDo border px-3 py-9 m-9">
     <p className="text-lg"> {text}</p>
      <div className="icons flex justify-between">
        <div>
        <AiFillEdit className="icon" onClick={updateToDo} />
        </div>
        <div>
        <RxCross1 className="icon" onClick={deleteTodo} />

        </div>
      </div>
    </div>
  );
};

export default ToDo;