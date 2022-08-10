import './App.css';
import { cards } from './components/Cards.js'
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    document.title = "Musu Gallery"
  }, []);

  return (

    <div className="App">
      <header className='heading'>
        <h1>Musu Gallery</h1>
        <h2>Inktober 2022</h2>
      </header>
      <div className='wrapper'>
        {cards.map((card) => {
          return (

            <div className='gallery-image'>
              <div className='img-box'>
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