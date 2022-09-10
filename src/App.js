

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state={
    progress:0
  }
  setmyprogress=(progress)=>{
    this.setState({progress:progress})
  }
  apikey=process.env.REACT_APP_API_KEY
  render() {
    

    return (
      <>

        <div>

          <BrowserRouter>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />
            <Routes>
              <Route exact path="/" element={<News setmyprogress={this.setmyprogress} apikey={this.apikey} key="general" pagesize={15} country="in" category="general" />} />
              <Route exact path="/business" element={<News setmyprogress={this.setmyprogress} apikey={this.apikey} key="business" pagesize={15} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News setmyprogress={this.setmyprogress} apikey={this.apikey} key="entertainment" pagesize={15} country="in" category="entertainment" />} />
              <Route exact path="/health" element={<News setmyprogress={this.setmyprogress} apikey={this.apikey} key="health" pagesize={15} country="in" category="health" />} />
              <Route exact path="/sports" element={<News setmyprogress={this.setmyprogress} apikey={this.apikey} key="sports" pagesize={15} country="in" category="sports" />} />
              <Route exact path="/science" element={<News setmyprogress={this.setmyprogress} apikey={this.apikey} key="science" pagesize={15} country="in" category="science" />} />
              <Route exact path="/technology" element={<News setmyprogress={this.setmyprogress} apikey={this.apikey} key="technology" pagesize={15} country="in" category="technology" />} />

            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
}


