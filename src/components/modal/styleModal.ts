import styled from "styled-components";


type ModalType={
    show:boolean,
}

export const Modal = styled.div<ModalType>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    display: ${ (props) => props.show ? "block" : "none"};
    width: 100%;
    max-width: 600px;
    height: 600px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0px 2px 5px #333;
    border-radius: 10px;
    padding: 10px;
    h5{
        font-size: 1.2em;
        margin-bottom: 10px;
        text-align: center;
    }
    label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    }
    input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    }
    button {
    background-color: #4CAF50;
    color: white;
    width: 80px;
    height: 40px;
    
    cursor: pointer;
    margin-right: 10px;
    }

    button:last-child {
    background-color: #f44336;
    }
    .btns{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top:40px ;
    }
`;

