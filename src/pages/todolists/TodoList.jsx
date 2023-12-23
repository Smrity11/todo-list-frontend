/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Popup from "../../components/Popup";
import ToDo from "../../components/ToDo";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useForm } from "react-hook-form";

const TodoList = () => {
    const [toDos, setToDos] = useState([]);
    // const [input, setInput] = useState("");
    const [updateUI, setUpdateUI] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});
    const axiospublic =useAxiosPublic()
    const { reset } = useForm();
  
    useEffect(() => {
      fetch('http://localhost:5000/allTodo' )
      .then(res  => res.json())
      .then( data => setToDos(data))
  }, [updateUI]);
  console.log(toDos);
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      const form = e.target;
     
      const  task = form.task.value;
     
      const newTodo = {
         task
         
      };

      try {
        
        const todoRes = await axiospublic.post('/allTodo', newTodo);
    
        if (todoRes.data.insertedId) {
          // show success popup
          alert('added')
          reset();
         
        }
      } catch (error) {
        console.error('Error posting todo:', error);
        // Handle error as needed
      }

        // axiospublic.post('/allTodo', { toDo: input })
        // .then((res) => {
        //   console.log(res.data);
        //   setUpdateUI((prevState) => !prevState);
        //   setInput("");
        // })
        // .catch((err) => console.log(err));
    };
  
    return (
      <div>
 <div className="pt-[100px] grid justify-center">
        <div className="container  w-[470px] p-[20px]">
          <h1 className="title text-center font-bold text-2xl my-7">Add Todo List</h1>
  
         <form onSubmit={handleSubmit}>
         <div className="input_holder">
  <input
    name="task"
    type="text"
    placeholder="Add a ToDo..."
    className="border border-red-500 py-[3px] px-3 w-[370px]"
  />
  <button type="submit" className="px-3 py-1 bg-red-500 text-white">
    Add
  </button>
</div>

         </form>
  
 
         
        </div>
      
        {showPopup && (
          <Popup
            setShowPopup={setShowPopup}
            popupContent={popupContent}
            setUpdateUI={setUpdateUI}
          />
        )}
      </div>
      <div className="grid grid-cols-3 justify-center items-center border p-5">
  <div className="list m-5 p-5 border">
  <p className="text-red-500 font-bold text-xl text-center">Todo</p>
            {toDos.map((el) => (
              <ToDo
                key={el._id}
                text={el.task}
                id={el._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
              />
            ))}
          </div>
          <div className="list m-5 p-5 border">
          <p className="text-red-500 font-bold text-xl text-center">On Going</p>
            {toDos.map((el) => (
              <ToDo
                key={el._id}
                text={el.task}
                id={el._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
              />
            ))}
          </div>
          <div className="list p-5 m-5 border">
          <p className="text-red-500 font-bold text-xl text-center">Completed</p>
            {toDos.map((el) => (
              <ToDo
                key={el._id}
                text={el.task}
                id={el._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
              />
            ))}
          </div>
  </div>
      </div>
     
    );
};

export default TodoList;