import React, { Component } from 'react'
import Navbar from './route/Navbar';
import { BrowserRouter,Route} from 'react-router-dom'
import Home from './route/Home';
import Contact from './route/Contact'
import About from './route/About'

export default class App extends Component {
    render() {
        return (
            <div style={{backgroundColor:"red"}}>
            <BrowserRouter>
            <div>
                <Navbar />
                <Route exact path='/Home' component={Home} />
                <Route path='/Contact' component={Contact} />
                <Route path='/About' component={About} />
            </div>
            </BrowserRouter>
             </div>
          
        )
    }
}
