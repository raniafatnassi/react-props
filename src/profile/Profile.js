import React from 'react';

import PropTypes from 'prop-types';



const Profile = (props) => {
    function showName() {
        alert(`${props.name}`)
    }
    return (
        <div>
            <div>{props.children}</div>
            <div>
            <p className = 'textualData'>{props.name}</p>
            <p>{props.bio} </p>
            <p className = 'textualData'>{props.profession}</p>
            </div>
            <div ><button className = 'button' onClick={showName}>click me</button></div>
        </div>
    );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
}

export default Profile;