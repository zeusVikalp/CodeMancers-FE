import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import style from  '../style/GifModal.css'

const GifModal = ({selectedElem}) => {
     
    const [search, setSearch] = useState("trending");

  const [gifs, setGifs] = useState();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const api_key = "qfxZHH8Vx7Eakn3ZHOUMZaALPAvDZwHA";

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=10`)
    .then((res) => res.json())
    .then((resData) => setGifs(resData));
  }, [search])

  const onSelectedGif = (item) => {
      selectedElem(item)
  }


  return (
    <div className={style.main}>
        <div>
            <input type="text" onChange={handleInputChange} />
        </div>
      <div>
        { gifs ? (
            gifs.data.map((item) => (
                <img key={item.id} src={item.images.downsized.url} alt={item.title} onClick={() => onSelectedGif(item)} />
            ))
        ) : null }
      </div>
    </div>
  )
}

export default GifModal