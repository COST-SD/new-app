   
import './App.css';
 import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 export default class App extends Component {
       pageSize=8;
      // apiKey= process.env.React_App_News_api;
      apiKey="afdd01eb26f840c29de1acd5b329d212";
       state = {
        progress:0
       }
       setProgress=(progress)=>{
        this.setState({progress:progress})
       }
   render() {
     return (
       <div>
       <Router> 
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
         />
         <Switch> 
          <Route exact path="/"> <News setProgress={this.setProgress} apiKey={this.apiKey}  key="" pageSize={this.pageSize} country="in" category="General"/> </Route> 
          <Route exact path="/Business"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="business" pageSize={this.pageSize} country="in" category="Business"/></Route> 
          <Route exact path="/Entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}    key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/></Route>
          <Route exact path="/General"><News setProgress={this.setProgress}  apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" category="General"/></Route>
          <Route exact path="/Health"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="health" pageSize={this.pageSize} country="in" category="Health"/></Route>
          <Route exact path="/Science"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="science" pageSize={this.pageSize} country="in" category="Science"/></Route>
          <Route exact path="/Sports"><News setProgress={this.setProgress} apiKey={this.apiKey}    key="sports" pageSize={this.pageSize} country="in" category="Sports"/></Route>
          <Route exact path="/Technology"><News setProgress={this.setProgress} apiKey={this.apiKey}   key="technology" pageSize={this.pageSize} country="in" category="Technology"/></Route>  
          </Switch>
        </Router>
       </div>
        
     )
   }
 }
 
 