import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.1440.jpg' width='800px'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;