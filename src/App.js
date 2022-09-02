import { useRef, useState } from 'react';
import './css/App.css';
import Footer from './Footer';
import ImageGallery from './ImageGallery';

function App() {

  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // APIを叩いていく〜〜〜！
    const endPointURL = `https://pixabay.com/api/?key=29624944-4aa14d401f8bfb5f0fd1e31d9&q=${ref.current.value}&image_type=photo&pretty=true`;
    // fetch とはJSのAPIを叩くための関数
    fetch(endPointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
    })
  }



  return (
    <div className="container">
      <h2>Picture Digg</h2>
      <form onSubmit={ (e) => handleSubmit(e) } >
        <input type="text" placeholder="画像を探す" ref={ ref } />
      </form>
      <ImageGallery fetchData={fetchData} />
      <Footer />
    </div>
  );
}

export default App;
