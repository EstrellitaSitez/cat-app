import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DropDown(props){

    let navigate = useNavigate();
    const [breeds, setBreeds] = useState(null)
    const [selectedBreed, selectBreed] = useState('')
   
    //once selectBreed state is updated, the page will shift to /:selectedBreed, and along a prop will be passed containing the information of the selected breed
    useEffect(()=>{
        if (props.breeds != null) {
            setBreeds(props.breeds)
        }
        if (selectedBreed !== ''){
            console.log("SELECTED BREED", selectedBreed)
            //would be good in this case to just filter out the selected breed from the breeds array to get the breed object
            // in a bigger application it would be more efficient to just make the fetch call using the breed name
            let breedParam = breeds.filter((breed)=> breed.name === selectedBreed)
            navigate(`/breed/${selectedBreed}`, { state: breedParam[0] });
        }
    }, [props.breeds, selectedBreed])
  
    //handle change will update the state
    const handleChange = (event) => {
        selectBreed(event.target.value)
   
      };


    return (
        <>
           <Box sx={{ minWidth: 200 }}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Breed</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedBreed}
                    label="Select Breed"
                    onChange={handleChange}
                >
                    {
                        breeds && breeds.map(
                            (breed)=> {
                                return(
                                    <MenuItem key={breed.name} value={breed.name}>{breed.name}</MenuItem>
                                )
                            }
                        )
                    }
                 </Select>
                 </FormControl>
             </Box>
    
      
      </>
    )
}