import { useState } from 'react';
import './css/App.css';
import Footer from './Footer';
import Header from './Header';
import ImageGallery from './ImageGallery';


function App() {

  const [fetchData, setFetchData] = useState([]);

  return (
    <div className="container">
      <Header setFetchData={setFetchData}/>
      <ImageGallery fetchData={fetchData} />
      <Footer />
    </div>
  );
}

export default App;
