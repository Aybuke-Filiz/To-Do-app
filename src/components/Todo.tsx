import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TodoType } from "../types/Types";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import {  useState } from "react";

interface TodoProps{
  todoProps:TodoType
}


function Todo({todoProps}:TodoProps) {
  const dispatch=useDispatch();
  const{id,content}=todoProps;

  const[editable,setEditable]=useState<boolean>(false);
  const[newTodo,setNewTodo]=useState<string>(content);

  const handleRemoveTodo=()=>{
    dispatch(removeTodoById(id));

  }

  const handleUpdateTodo=()=>{
    const payload:TodoType={
      id,
      content:newTodo
    }
    dispatch(updateTodo(payload))
    setEditable(false);
  }

  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",border:"1px solid lightgrey",
    padding:"15px",marginTop:"25px",borderRadius:"5px"}}>
      {editable?<input type="text" style={{width:"400px",border:"none",outline:"none",borderBottom:"1px solid lightgrey"}}
      value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/>:<div>{content}</div>}
      <div>
      <CiCircleRemove onClick={handleRemoveTodo}className="icons" style={{marginRight:"5px"}}/>
      {editable ? < CiCircleCheck onClick={handleUpdateTodo} className="icons"/>:<CiEdit onClick={()=>setEditable(!editable)}className="icons"/>}
      </div>
    </div>
  )
}

export default Todo