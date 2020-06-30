import React from 'react';

import Demo3 from './demo3';
import Nav from './testRouter/Nav'
import About from './testRouter/About'
import Index from './testRouter/Index'
import Test from './testRouter/Test'
import Err from './testRouter/Error404'
import ShowDetail from './testRouter/ShowDetail'

import {Route,Switch,Redirect} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
      <Switch>  {/*</Switch> 只能匹配一个*/}
        <Route path='/Demo' render={()=>
          <Demo3>
            <Route path='/Demo/ShowDetail' component={ShowDetail}/>
          </Demo3>
        }/>
        <Route path='/Test' render={()=>
          <Redirect to='/About'/>
        }/>
        <Route path='/About' component={About}/>
        <Route path='/' exact component={Index}/> {/*exact 完全匹配*/}
        <Route  component={Err}/>   {/*不写path，默认匹配所有路径，路径不对才会显示*/}
      </Switch>
    </div>
  );
}

export default App;
