import Gallery from "react-photo-gallery";
import './App.css'
import { photos } from "./components/Photos";

const App = () => {
  return (
    <div className='App'>
      <h1>Inktober 2022</h1>
      <h2>Musu Gallery</h2>
      <div className='wrapper'>
        <Gallery photos={photos} />;
      </div>
    </div >
  );
};

export default App;