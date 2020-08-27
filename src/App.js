import React from 'react';

import Profile from './profile/Profile'

import './App.css';

let person = [
  {name : "Rania Fatnassi", bio : "07/01/1993", profession: "IT engineer"},
  {name : "Jhon Doe", bio : "05/11/1998", profession : "Teacher"},
  {name : "Sarah Baker", bio : "12/05/1989", profession : "Astronaute"}
];
function App() {

  const personItem = person.map(el => <Profile name={el.name} bio={el.bio} profession = {el.profession} />)

  return (
    <div className="App">
      <h1>Profiles List</h1>
      <table className="list" style={{ width: '100%', backgroundColor: 'lightseagreen'}}>
        <tr>
          <th>Full Name</th>
          <th>Bio</th>
          <th>Profession</th>
          <th>Image</th>
        </tr>
        {personItem}

        <img style = {{width : '200px', textAlign: 'center'}} src = './profile.png' alt = 'profile'/>
      </table>
      
    </div>
  );
}

export default App;
