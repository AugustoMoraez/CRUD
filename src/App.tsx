import { useState, ChangeEvent } from "react";
import { Reducer } from "./reducers/reducer";
import { ModalComponent } from "./components/modal/modal";
import { person } from "./types/person";
import { ToDo } from "./style";
import { BiTrashAlt } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";


function App() {

  const [showModal, setShowModal] = useState(false);
  const [personEdit, setPersonEdit] = useState<person | null>(null);
  const [state, despatch] = Reducer()
  const [inputName, setInputName] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value)
  }

  const handleAdd = () => {
    if (inputName) {
      despatch({
        type: "ADD",
        payload: {
          name: inputName
        }
      })
      setInputName("");
    }
  }

  const handleDelet = (id: string) => {
    if (id) {
      despatch({
        type: "DEL",
        payload: { id: id }
      })
    }
  }



  const handleEdit = (index: number) => {

    setPersonEdit(state[index]);
    setShowModal(true);

  }

  const SavePerson = (name: string) => {
    despatch({
      type:"EDIT",
      payload:{
        name:name,
        id:personEdit?.id
      }
    })   
    setPersonEdit(null);
    setShowModal(false);
  }
    

  return (
    <ToDo>
      {
        personEdit === null
          ?
          <div></div>
          :
          <ModalComponent
            see={showModal}
            person={personEdit}
            savePerson={SavePerson}
            closeModal={() => { setShowModal(false); setPersonEdit(null) }}
          />

      }
      <h1>CRUD</h1>

      <div className="inputBox">
        <input type="text" value={inputName} onChange={handleInput} maxLength={10} min={2} />
        <button onClick={handleAdd}>+</button>
      </div>
      
      <ul>
        {state.map((item, index) => (
          <li key={index}>
            <div>
              <p>{`${index+1}.${item.name}`}</p>
              <div>
                <button onClick={() => handleEdit(index)} ><AiFillEdit/></button>
                <button onClick={() => handleDelet(item.id)} ><BiTrashAlt/></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ToDo>
  )
}

export default App
