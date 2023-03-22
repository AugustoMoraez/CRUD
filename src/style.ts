import styled from "styled-components";

export const ToDo = styled.div`
width:100%;
max-width:600px ;
height: 750px;
margin: auto;
margin-top: 20px;
padding: 10px;
background-color: #fff;
box-shadow: 0px 2px 5px #333;
border: none;
border-radius: 10px;
overflow-x: hidden;



h1 {
   margin: 10px;
   text-align: center;
}


div button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0077cc;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}
div button:hover {
  background-color: #005ea8;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

li div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li div button {
  background-color: #d11d1d;
  margin-left: 10px;
}

li div button:hover {
  background-color: #b41919;
}

li div button:nth-of-type(1) {
  background-color: #0077cc;
}

li div button:nth-of-type(1):hover {
  background-color: #005ea8;
}

.inputBox{
  display: flex;
  width: 100%;
  max-width: 300px;
  margin: auto;
  
}
.inputBox input{
  max-width: 250px;
  padding: 5px;
}
.inputBox button{
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
@media(max-width:600px){
  height: 600px ;
}
`;