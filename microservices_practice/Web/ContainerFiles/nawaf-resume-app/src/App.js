import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactMe from './ContactMe';
import CoursesAndProjects from './CoursesAndProjects';
import GoalsAndVision from './GoalsAndVision';
import WorkExpirience from './WorkExpirience';
import {Route, Link} from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import styles from './appStyles.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:8085/products")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className= {styles.headerStyle}>
          <div> hhh</div>
        </header>
        <div>
        <NavBar> </NavBar>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/CoursesAndProjects" component = {CoursesAndProjects} />
          <Route exact path = "/WorkExpirience" component = {WorkExpirience} />
          <Route exact path = "/GoalsAndVision" component = {GoalsAndVision} />
          <Route exact path = "/ContactMe" component = {ContactMe} />
        </div>
        <p>
          {this.state.apiResponse}
        </p>
      </div>
    );
  }
}
export default App;
