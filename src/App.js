import './App.css';
import { cards } from './components/Cards.js'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Musu Gallery"
  }, []);

  return (

    <div className="App">
      <header className="App-header">
        <h1>Musu Gallery</h1>
        <h2>Inktober 2022</h2>
        <div className="wrapper">
          {cards.map((card) => {
            return (
              <ul className="grid">
                <li>
                  <div class="grid__figure">
                    <div className="image">
                      <img src={card.image} />
                      <div className="caption">{card.caption}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            )
          })}

        </div>
      </header>
      <footer>
        <div className="center">
          <span>Disclaimer: This site is for personal use only</span>
        </div>
      </footer>
    </div>

  );
}
export default App;