import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Ending from './Components/Ending';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/Json/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  getEggConfig(){
    $.ajax({
      url:'/Json/egg.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({eggData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    //this.getResumeData(); 
    //this.getEggConfig();
  }

  render() {
  
        //<Route exact path="/" component={ListPage} />
        //<Route exact path="/run" component={RunPage} />
        //<Route exact path="/run/:slug" component={RunPage} />
        //<Route path="/" render={this.recordPageview} />
        // <RunPage />
        // <Hobby />
    return (
      <React.StrictMode>

      <BrowserRouter>
          <Switch>
           <Route path="/">
           <div className="App">
              <Header data={this.state.resumeData.main}/>
              <About />
              <Resume />
              <Ending />
              <Footer />
            </div>
            </Route>
          </Switch>
     
      </BrowserRouter>
      </React.StrictMode>
    );
  }
}

export default App;
