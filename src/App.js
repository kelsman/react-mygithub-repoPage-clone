import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
// import { Route } from 'react-router-dom';
import ProfileTab from './components/profiletab';
import { connect } from 'react-redux';
import { fetchUserInfo } from './redux/Actions/userActions'
import Explore from './containers/overview';

class App extends Component {

  unsubscribeFromAsync = null;
  componentDidMount() {
    const { fetchUserInfo } = this.props;

    fetchUserInfo();

  }
  // componentWillUnmount() {
  //   this.unsubscribeFromAsync()
  // }
  render() {

    return (
      <div className="App">
        <Header />

        <main>
          <ProfileTab />
          <Explore />
        </main>

      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  laoding: user.loading
})


export default connect(mapStateToProps, { fetchUserInfo })(App)
