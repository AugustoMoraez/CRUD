import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { person,reducerAction } from "../types/person";



export const Reducer = () => {

    const initialState: person[] = [];

    const reducer = (state: person[], action: reducerAction) => {
        
        switch (action.type) {
            case 'ADD':
                if (action.payload.name) {
                    let newState = [...state];
                    newState.push({
                        name: action.payload.name,
                        id: uuidv4()
                    })
                    return newState
                }
                break;

            case "DEL":
                if (action.payload.id) {
                    let newState = [...state];
                    state = newState.filter(item => item.id !== action.payload?.id);
                    return state
                }
                break;
            case "EDIT":
                if (action.payload.id && action.payload.name) {
                    let newState = state.filter(item => item.id !== action.payload.id);
                    newState.push({
                        name:action.payload.name,
                        id:action.payload.id
                    })
                    state = newState
                    
                }
                break;

        }
        return state
    }



    return useReducer(reducer, initialState)
}