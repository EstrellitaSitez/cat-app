import { useEffect, useState } from "react";
import './ButtonContainer.css'
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";
import APIKEY from "./APIKey";
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

export default function ButtonContainer(){
    let navigate = useNavigate();

    const [breeds, setBreeds] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        //make fetch call to set the breeds
        if ((breeds== null) && (error == null)){
            const header = {'x-api-key': APIKEY}
        fetch('https://api.thecatapi.com/v1/breeds?limit=10', {header})
        .catch(err => setError(err))
        .then(resp => resp.json())
        .then(data => setBreeds(data))
        }

        if ((breeds != null)|| (error != null)){
            setIsLoading(false)
        }

    }, [breeds, error, isLoading])

    const handleClick = () => {
        let num = Math.floor(Math.random()*(breeds.length))
        let randomBreed = breeds[num]
        navigate(`/breed/${randomBreed.name}`);
    }

    return(
        <div className="button-group">
           {
               isLoading === false?
                    <>
                        {(error == null) ?
                         <>
                             <Button 
                                onClick={handleClick}
                                style={{color:'rgba(0, 0, 0, 0.6)', 
                                borderColor:'rgba(0, 0, 0, 0.3)', 
                                marginRight:'5%'}} 
                                variant="outlined"> 
                                 Random 
                                </Button>
                            <DropDown breeds={breeds}/>
                        </>
                            :
                        <div>
                            Sorry! Looks like there's been an error! Please check your internet connection and try again.
                        </div>
                        }
                    </>
                    :
                    <>
                       <CircularProgress />
                    </>
           }
        </div>
    )
}