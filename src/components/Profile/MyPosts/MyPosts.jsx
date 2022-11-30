import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="My first name is Roman" count='30'/>
        <Post message="My last name is Volkov" count="20"/>
        <Post message="I am work in MMZ"/>
        <Post message="My last name is Volkov" count="12"/>
      </div>
    </div>
  )
}

export default MyPosts;