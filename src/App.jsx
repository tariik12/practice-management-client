
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [users, setUsers] = useState()
  

  console.log(users)
  useEffect(() =>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])
  return (
    <>
     <h1>practice management clint</h1>

    </>
  )
}

export default App
