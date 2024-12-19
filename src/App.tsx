import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {


  return (
    <>

      <Container></Container>
      <Home></Home>
    </>
  )
}


const Container = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleSumbit = async (e: any) => {

    try {
      const res = await axios.post('',
        {
          name: name,
          email: email,
          password: password,


        })

      console.log(res)

    } catch (error) {

      console.log(error)

    }


  }

  return (
    <>

      <div className="sign">
        <h2 className='sing-up'>Sign Up</h2>
        <input className='name' type='name' placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input className='email' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input className='password' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button className='sub-btn' onClick={handleSumbit}>Submit</button>


      </div>

    </>
  )


}



export default App
