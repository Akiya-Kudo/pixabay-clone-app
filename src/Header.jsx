import React, { useEffect, useRef, useState } from 'react';
import './css/Header.css';

function Header(props) {

    const ref = useRef();
    const refNum = useRef();
    const [input, setInput] = useState('さくら');
    const [numPhoto, setNumPhoto] = useState(10);

    useEffect(() => {
      serchApi();
    }, []);

    useEffect(() => {
      serchApi();
    }, [input, numPhoto]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setInput(ref.current.value);
      setNumPhoto(refNum.current.value);
    }
    const serchApi = () => {
      // APIを叩いていく〜〜〜！
      const endPointURL = `https://pixabay.com/api/?key=29624944-4aa14d401f8bfb5f0fd1e31d9&q=${input}&image_type=photo&pretty=true&per_page=${ numPhoto }`;
      // const endPointURL = `https://pixabay.com/api/?key=29624944-4aa14d401f8bfb5f0fd1e31d9&q=${ref.current.value}&image_type=photo&pretty=true&per_page=100&page=2`;
      // fetch とはJSのAPIを叩くための関数
      fetch(endPointURL)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          props.setFetchData(data.hits);
      })
    }

    const num = [10, 20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,];

  return (
    <div className='header'>
        <h2>Picture Digg</h2>
        <form onSubmit={ (e) => handleSubmit(e)}>
          <input className="text-input" type="text" placeholder="画像を探す" ref={ ref }/>
          <select className="num-input" name="photoNum" id="photoNum" ref={ refNum }>
            {
              num.map((i) => (
                <option value={i}>{i}</option>
              ))}

          </select>
          <input className="submit-input" type="submit" value="検索する" />
        </form>
    </div>
  )
}

export default Header