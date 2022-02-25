import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {LinkedinShareButton, LinkedinIcon, WhatsappShareButton, WhatsappIcon} from 'react-share'


export default function BreedCard(props){
    let currentURL = window.location.href
    let breed = props.breed
    console.log(breed)
    return(
     <>
       {breed != null?
        <Card sx={{ maxWidth: 400, maxHeight: 'fit-content' }}>
        <CardMedia
          component="img"
          height="300"
          image={breed.image.url}
          alt={breed.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {breed.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {breed.description}
          </Typography>
        </CardContent>
        <CardActions style={{display: 'flex', justifyContent: 'center'}}>
          {/* <Button size="small">Share</Button> */}
              <h5 style={{color:'grey', marginRight:'2%'}}>
                  Share
              </h5>
              <span >
             <LinkedinShareButton url = {currentURL} style={{marginRight:'1%'}}>
              <LinkedinIcon size={32}/>
              </LinkedinShareButton>
  
              <WhatsappShareButton url = {currentURL} title={`Hey check out this cat. It's breed is ${breed.name}`} >
                  <WhatsappIcon size={32}/>
              </WhatsappShareButton>
              </span>
              
          <Button target="_blank" href={breed.wikipedia_url} size='small'>Learn More</Button>
        </CardActions>
      </Card>
      :
      <div>
        Looks like you have not chosen a breed
      </div>
      
      }
     </>
    )
}