import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'My first name is Roman', likesCount: 12 },
    { id: 2, message: 'My last name is Volkov', likesCount: 2 },
    { id: 3, message: 'I am work in MMZ', likesCount: 123 },
    { id: 4, message: 'My cat Zahar is so fun', likesCount: 334 },
  ];

  return (
    <div className={s.myPosts}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
        <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
        <Post message={postsData[3].message} likesCount={postsData[3].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts;