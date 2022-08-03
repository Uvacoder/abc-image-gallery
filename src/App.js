import { useState } from 'react';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import UploadForm from './components/UploadForm';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
    </div>
  );
};

export default App;