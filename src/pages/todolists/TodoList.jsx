/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Popup from "../../components/Popup";
import ToDo from "../../components/ToDo";
import useAxiosPublic from "../../hook/useAxiosPublic";

const TodoList = () => {
    const [toDos, setToDos] = useState([]);
    const [input, setInput] = useState("");
    const [updateUI, setUpdateUI] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});
    const axiospublic =useAxiosPublic()
  
    useEffect(() => {
        axiospublic
        .get('/get')
        .then((res) => setToDos(res.data))
        .catch((err) => console.log(err));
    }, [updateUI]);
  
    const saveToDo = () => {
        axiospublic
        .post('/save', { toDo: input })
        .then((res) => {
          console.log(res.data);
          setUpdateUI((prevState) => !prevState);
          setInput("");
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <main className="pt-[100px]">
        <div className="container m border border-red-600 w-[350px] p-[20px]">
          <h1 className="title text-center font-bold text-2xl my-7">ToDo List</h1>
  
          <div className="input_holder">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add a ToDo..."
              className="border border-red-500 py-[3px] px-3"
            />
            <button className="px-3 py-1 bg-red-500 text-white" onClick={saveToDo}>Add</button>
          </div>
  
          <div className="list">
            {toDos.map((el) => (
              <ToDo
                key={el._id}
                text={el.toDo}
                id={el._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
              />
            ))}
          </div>
        </div>
        {showPopup && (
          <Popup
            setShowPopup={setShowPopup}
            popupContent={popupContent}
            setUpdateUI={setUpdateUI}
          />
        )}
      </main>
    );
};

export default TodoList;