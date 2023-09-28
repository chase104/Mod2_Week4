
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [nameState, setNameState] = useState('');
  const [color, setColor] = useState('blue');

  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log("getting the users")
    let usersArrayAsString= localStorage.getItem('usersInStorage')
    let users = JSON.parse(usersArrayAsString);
    console.log(users);
    let matchedUsers = users.filter((user) => {
      let usersName = user.name.toLowerCase();
      if (usersName.includes(nameState.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    console.log(matchedUsers);
    setUsers(matchedUsers)
  }, [nameState])
  
  useEffect(() => {
    console.log("color changed, going to do someting important");
  }, [color])

  useEffect(() => {
    console.log('the name or color changed, so something')
  }, [color, nameState])

  return (
    <>
     <h3>search for people</h3>
     <input value={nameState} onChange={(e) => setNameState(e.target.value)} />
     <button
     onClick={() => color == "blue" ? setColor("red") : setColor("blue")}
     >Change the color!</button>
     <div 
     style={{height: "40px", width: "40px", backgroundColor: color}} 
     ></div>
    {
      users.map((user) => {
        return <div key={user.name}>{user.name}</div>
      })
    }
    </>
  )
}

export default App
