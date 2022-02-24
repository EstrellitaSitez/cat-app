import { useLocation } from "react-router-dom"
import BreedCard from "./BreedCard"

export default function BreedContainer() {
    let location = useLocation()
    return(
        <div style= {{display:'flex', justifyContent:'center'}}>
            <BreedCard breed = {location.state}/>
        </div>
    )
}