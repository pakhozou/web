import React from 'react';



import Login from './pages/Login'
import Index from './pages/Index'


import {Route,Redirect} from 'react-router-dom'
import './App.css';



function App() {
  return (
      <div className='App'>
        <Route path='/' exact render={()=><Redirect to='/login'/>}/>
        <Route path='/login' component={Login}/>
        <Route path='/index' component={Index}>

        </Route>
      </div>
  )
}

export default App;
