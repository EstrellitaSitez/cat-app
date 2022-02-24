import './Home.css'
import ButtonContainer from './ButtonContainer'
import catpic from './cat.jpeg'

export default function Home() {
    let cat = catpic

    return(
        <>
              <i><h6 style={{color:'grey'}}>The only place on the internet (besides literally every place on the internet) where you can look at cats!</h6></i>
        <div className='imgBackground'>
        <img src={cat} className="App-logo" alt="cat" />
        </div>
        <ButtonContainer />
        </>
    )
}