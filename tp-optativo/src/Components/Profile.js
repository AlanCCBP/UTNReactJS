import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import City from './City';
import './Profile.css';

function Profile() {
  return (
    <div>
        <ProfilePhoto></ProfilePhoto>
        <h3>Alan C. Nevot</h3>
        <City></City>
        <ul>
            <li><strong>Learning</strong> <small>Front-End Development</small></li>
            <li><strong>Improving</strong> <small>Back-End Development</small></li>
            <li><strong>Trying to not forget</strong> about <small>Mobile Development</small></li>
            <li><strong>Wanna learn someday</strong> <small>UX/UI</small></li>
        </ul>
    </div>
  );
}

export default Profile;
