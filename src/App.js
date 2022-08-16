import './App.css';
import { cards } from './components/Cards.js'
import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import moment from 'moment';


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

  const sources = cards.map(card => card.image)

  const currentDate = moment().format('X')
  console.log(currentDate)

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
        {cards.map((card, index) => {
          return (
            <div key={card.image + index} className='gallery-image'>
              <div className='img-box' onClick={() => clickImage(index + 1)}>
                <img src={card.image} />
                <div className='transparent-box'>
                  <div className="caption">{card.caption}
                  </div>
                </div>
              </div>
            </div>


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