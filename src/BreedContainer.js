import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BreedCard from "./BreedCard"
import APIKEY from "./APIKey";

export default function BreedContainer() {
    const [currentBreed, setCurrentBreed] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [image, setImage] = useState(null)

    const params = useParams()
    const breed = params.breed


    useEffect(()=>{
        const header = {'x-api-key': APIKEY}

        if (currentBreed == null){
            fetch('https://api.thecatapi.com/v1/breeds/search?q='+breed, {header})
            .then(resp => resp.json())
            .then(data => {
                if (data.length == 0){
                    setError(true)
                } else {
                    setCurrentBreed(data[0])
                }
            })
            
        }

        if (currentBreed != null){
            let imageId = currentBreed.reference_image_id
            fetch(' https://api.thecatapi.com/v1/images/'+imageId, {header})
            .then(resp => resp.json())
            .then(data => setImage(data.url))
           
        }

        if (((currentBreed != null)&&(image !=null)) || (error == true)){
            setLoading(false)
        }
    }, [isLoading, error, currentBreed, image])


    console.log("Errorrrrr", error)
    return(
        <div style= {{display:'flex', justifyContent:'center'}}>
            {   
                isLoading?
                <CircularProgress/>
                :
                <>
                    {
                        error == false?
                        <BreedCard breed = {currentBreed} image={image}/>
                        :
                        <div>
                            Looks like there's been an error fetching this breed. 
                        </div>
                    }
                </>
            }
        </div>
    )
}