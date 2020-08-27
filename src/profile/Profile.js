import React from 'react';

import PropTypes from 'prop-types';

function showName() {
    alert("Rania Fatnassi")
}

const Profile = (props) => {
    return (
        <tr>
            <th>{props.name}</th>
            <th>{props.bio} </th>
            <th>{props.profession}</th>
            <th>{props.children}</th>
            <th><button onClick={showName}>click me</button></th>
        </tr>
    );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
}

export default Profile;