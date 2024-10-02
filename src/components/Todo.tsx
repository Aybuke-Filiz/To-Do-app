import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
function Todo() {
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",border:"1px solid lightgrey",
    padding:"15px",marginTop:"25px",borderRadius:"5px"}}>
    <div>Ben ilk todo'yum...</div>
      <div>
      <CiCircleRemove className="icons" style={{marginRight:"5px"}}/>
      <CiEdit className="icons"/>
      </div>
    </div>
  )
}

export default Todo