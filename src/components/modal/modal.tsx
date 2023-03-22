import { ChangeEvent, useState } from "react"
import { person } from "../../types/person"
import { Modal } from "./styleModal"


type modal = {
    see:boolean,
    person:person|null,
    savePerson:(name:string)=>void,
    closeModal:()=> void
    
}

export const ModalComponent = ({see,person,savePerson,closeModal}:modal) => {
    const[inputName,setInputName] = useState(`${person == null ? "" : person.name}`)

    const inputEdit = (e:ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    }
    
    return(
        <Modal show={see}>

            <h5>Edite</h5>

            <div className="input">
                <label htmlFor="Name">Nome:</label>
                <input maxLength={14} min={2} type="text" value={inputName} onChange={inputEdit} name="Name" placeholder="Preencha" required />
            </div>

            <div className="btns">
                <button onClick={()=> savePerson(inputName)}>Concluir</button>
            
                <button onClick={closeModal}>Cancelar</button>
            </div>
            
        </Modal>
    )
}