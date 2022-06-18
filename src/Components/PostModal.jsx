import React from "react";
import { useState } from "react";
import user from "../Images/user.jpg";
import GifModal from "./GifModal";
import '../style/PostModal.css'


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
    <div className= 'input'>
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

        <div className='boxes'>
         
          <div onClick={toggleGifSearchBox}>GIF</div>
        
        </div>

        {toggleGifBox && <GifModal selectedElem={handleGifUpdate} />}

        <div className='buttonDiv'>
          <button onClick={handlePosts}>Post</button>
        </div>
      </div>
      <div className='posts'>
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
