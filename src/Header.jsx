import React, { useRef } from 'react';
import './css/Header.css';

function Header(props) {
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
            props.setFetchData(data.hits);
        })
      }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.setFetchData(ref.current.value);
    // }

  return (
    <div className='header'>
        <h2>Picture Digg</h2>
        <form onSubmit={ (e) => handleSubmit(e)}>
            <input type="text" placeholder="画像を探す" ref={ ref }/>
        </form>
    </div>
  )
}

export default Header