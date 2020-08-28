import React from 'react';

import Profile from './profile/Profile'

import './App.css';
import './style.css'

let person = [
  {name : "Rania Fatnassi", bio : "Née en 07/01/1993 à Kairouan de nationalité Tunisienne", profession: "IT engineer"}
];
function App() {

  const personItem = person.map(el => <Profile name={el.name} bio={el.bio} profession = {el.profession} />)

  return (
    <div className="ProfileItem">
      <img style = {{width : '200px', textAlign: 'center', padding : '30px'}} src = './profile.jpg' alt = 'profile'/> 
      {personItem}
    </div>
  );
}

export default App;
