/* eslint-disable react/prop-types */
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosPublic from "../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent, handleDelete }) => {
  const axiospublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const surveyUnpublished = () => {
    Swal.fire({
      title: "Enter your updated Task",
      input: "text",
      inputPlaceholder: "Update task...",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
      preConfirm: (updatedText) => {
        if (!updatedText) {
          Swal.showValidationMessage("Task cannot be empty");
        }
        return updatedText;
      },
    })
      .then((result) => {
        if (result.isConfirmed) {
          const updatedText = result.value;
  
          axiospublic
            .put(`/updateTodo/${id}`, { task: updatedText }) // Use 'task' as the key
            .then((res) => {
              console.log(res);
              // Handle success or show a message to the user
              setUpdateUI((prevState) => !prevState);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <div className="toDo border px-3 py-9 my-8">
     <p className="text-lg mb-5">{text}</p>
     
      <div className="icons flex justify-between">
        <div>
          <AiFillEdit className="icon" onClick={surveyUnpublished} />
        </div>
        <div>
          <RxCross1 onClick={() => handleDelete(id)} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
