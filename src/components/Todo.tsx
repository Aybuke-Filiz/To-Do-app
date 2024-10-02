import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { TodoType } from "../types/Types";

interface TodoProps{
  todoProps:TodoType
}

function Todo({todoProps}:TodoProps) {
  const{id,content}=todoProps;
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",border:"1px solid lightgrey",
    padding:"15px",marginTop:"25px",borderRadius:"5px"}}>
    <div>{content}</div>
      <div>
      <CiCircleRemove className="icons" style={{marginRight:"5px"}}/>
      <CiEdit className="icons"/>
      </div>
    </div>
  )
}

export default Todo