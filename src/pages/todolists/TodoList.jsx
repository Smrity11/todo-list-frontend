/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Popup from "../../components/Popup";
import ToDo from "../../components/ToDo";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/AuthProvider";

const TodoList = () => {
    const [toDos, setToDos] = useState([]);
    // const [input, setInput] = useState("");
    const [updateUI, setUpdateUI] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});
    const axiospublic =useAxiosPublic()
    const { reset } = useForm();
    const { user } = useContext(AuthContext);
  
    const fetchData = async () => {
      try {
        const response = await axiospublic.get("/allTodo");
        setToDos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchData(); // Fetch initial data
      const intervalId = setInterval(() => {
        fetchData(); // Poll for updates every 5 seconds
      }, 5000);
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [updateUI]);
 
  const UserEmail = toDos.filter(webData => webData.email === user.email);
  const NewTodo = UserEmail.filter(webData => webData.todo === "newposted");
  const Ongoing = UserEmail.filter(webData => webData.todo === "onGoing");
  const Completed = UserEmail.filter(webData => webData.todo === "completed");
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      const form = e.target;
     
      const  task = form.task.value;
     
      const newTodo = {
         task,
         todo:'newposted',
         email:user?.email
         
      };

      try {
        
        const todoRes = await axiospublic.post('/allTodo', newTodo);
    
        if (todoRes.data.insertedId) {
          // show success popup
          toast('🦄 Task added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
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
    const handleDelete = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiospublic
            .delete(`/allTodo/${_id}`)
            .then((res) => {
              if (res.data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                const remaining = toDos.filter((jobb) => jobb._id !== _id);
                setToDos(remaining);
              }
            })
            .catch((error) => {
              console.error("Error deleting todo:", error);
              // Handle error as needed
            });
        }
      });
    };
    
  
    return (
      <div>
       <ToastContainer />
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
      <div className="grid grid-cols-3 justify-center border p-5">
  <div className="list m-5 p-5 border">
  <p className="text-red-500 font-bold text-xl text-center">Todo</p>
            {NewTodo.map((el) => (
              <ToDo
                key={el._id}
                text={el.task}
                id={el._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <div className="list m-5 p-5 border">
          <p className="text-red-500 font-bold text-xl text-center">On Going</p>
            {Ongoing.map((el) => (
              <ToDo
                key={el._id}
                text={el.task}
                id={el._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <div className="list p-5 m-5 border">
          <p className="text-red-500 font-bold text-xl text-center">Completed</p>
            {Completed.map((el) => (
              <ToDo
                key={el._id}
                text={el.task}
                id={el._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
                handleDelete={handleDelete}
              />
            ))}
          </div>
  </div>
      </div>
     
    );
};

export default TodoList;