import React from "react";
import { useState } from "react";
import user from "../Images/user.jpg";
import style from "../style/PostModal.css";
import GifModal from "./GifModal";


 const PostModal = () => {
  const [toggleGifBox, setToggleGifBox] = useState(false);

  const [selectedGifShow, setSelectedGifShow] = useState();

  const [writtenPost, setWrittenPost] = useState("");

  const [posts, setPosts] = useState([]);

  const toggleGifSearchBox = () => {
    setToggleGifBox(!toggleGifBox);
  };

  const handleGifUpdate = (elem) => {
    setSelectedGifShow(elem);
    setToggleGifBox(!toggleGifBox);
  };

  const handlePosts = () => {
    if ( writtenPost !== "" && selectedGifShow ) {
        setPosts([
            ...posts,
            {
              text: writtenPost,
              image: selectedGifShow.images.downsized.url,
            },
        ]);
        setSelectedGifShow()
        setWrittenPost("")
    }
    else if ( writtenPost === "" && !selectedGifShow ) {
        alert("write something in post and select a gif")
    }
    else if ( writtenPost === "" ) {
        alert("write something in post")
    }
    else if ( !selectedGifShow ) {
        alert("select a gif")
    }
  };
     
  return (
    <>
    <div className={style.input}>
        <div>
          <img src={user} alt="userImg" />
          <textarea
            name="text"
            id="Post"
            placeholder="post something..."
            value={writtenPost}
            onChange={(e) => setWrittenPost(e.target.value)}
          ></textarea>
        </div>

        {selectedGifShow && (
          <img src={selectedGifShow.images.downsized.url} alt="gif" />
        )}

        <div className={style.boxes}>
         
          <div onClick={toggleGifSearchBox}>GIF</div>
        
        </div>

        {toggleGifBox && <GifModal selectedElem={handleGifUpdate} />}

        <div className={style.buttonDiv}>
          <button onClick={handlePosts}>Post</button>
        </div>
      </div>
      <div className={style.posts}>
        {posts === []
          ? null
          : posts.map((post) => (
              <div key={post.image}>
                <p>{post.text}</p>
                <img src={post.image} alt="" />
              </div>
            ))}
      </div>
     </>
  );
}

export default PostModal;
