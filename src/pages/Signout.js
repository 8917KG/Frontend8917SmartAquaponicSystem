import { useNavigate, } from "react-router-dom"
import { useEffect } from "react"
export function Signout(props){

 const navigate = useNavigate()

 useEffect(()=>{
  if(props.auth){
   props.handler().then ((res) => navigate('/'))
  }
 }, [props.auth])

 return(
  <div className="container-fluid">
   <div className="row">
    <h3>Signout</h3>
   </div>
  </div>
 )
}