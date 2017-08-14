import React, { Component }from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Router from '../Router';

export default class MainRoute extends Component {
  constructor(){
    super();

    this.state={
      search: null
    }
  this.updateSearch = this.updateSearch.bind(this);
  }

 updateSearch(val){
   this.setState({
     search: val
   })
 }


  render(){
    console.log(this.state.search, 'mainroute state')
  return (
  <div>
    <Header updateSearch={this.updateSearch}/>
    <Sidebar />
    <Router />
  </div>
)}
}
