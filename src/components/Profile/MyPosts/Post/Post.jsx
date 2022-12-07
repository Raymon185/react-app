import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg" alt="" />
      {props.message}
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post;