import './App.css';
import { cards } from './components/Cards.js'
import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import moment from 'moment';
import subwoolfer from './images/subwoolfer.jpg'


function App() {

  useEffect(() => {
    document.title = "Musu Gallery"
  }, []);

  const [toggler, setToggler] = useState(false)
  const [slide, setSlide] = useState(1)

  const clickImage = (index) => {

    setToggler(!toggler)
    setSlide(index)

  };

  //Fetches current timestamp
  const currentDate = moment().format('X')

  //Filter out future cards
  const filtered = cards.map((card) => {
    const timestamp = moment(card.date, 'DD.MM.YYYY').format('X');
    if (timestamp < currentDate) return card;
    const placeHolderImage = { image: subwoolfer }
    const newCard = { ...card, ...placeHolderImage }
    return newCard;
  });

  console.log(filtered)

  const sources = filtered.map(card => card.image)

  return (

    <div className="App">
      <>
        <FsLightbox
          toggler={toggler}
          sources={sources}
          slide={slide}
        />
      </>
      <div className='modal'>
      </div>
      <header className='heading'>
        <h1>Musu Gallery</h1>
        <h2>Inktober 2022</h2>
      </header>
      <div className='wrapper'>
        {filtered.map((card, index) => {
          return (
            <div key={card.image + index} className='gallery-image'>
              <div className='img-box' onClick={() => clickImage(index + 1)}>
                <img src={card.image} />
                {/* <div className='transparent-box'> */}
                {/*  <div className="caption">{card.caption} */}
              </div>
            </div>
            /* </div> */
            /*    </div> */


          )
        })}
      </div>


      <footer>
        <div className="center">
          <span>Disclaimer: This site is for personal use only</span>
        </div>
      </footer>
    </div >

  );
}
export default App;