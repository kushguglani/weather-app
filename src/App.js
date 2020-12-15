import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import LeftMenu from './container/leftMenu'
import MainMenu from './container/menu'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { searchWeather, deleteWeather, clearWeather } from "./redux/action";

import { Grid} from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Grid>
          <Grid.Column width={4}>

            <LeftMenu
              searchList={this.props.searchList}
              searchCallback={this.props.searchWeather}
              deleteWeatherCallback={this.props.deleteWeather}
              clearWeatherCallback={this.props.clearWeather}
            />
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <MainMenu data={this.props.data} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


function initMapStateToProps(state) {
  return {
    searchList: state.weather.searchList,
    error: state.weather.error,
    data: state.weather.data
  }
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    clearWeather,
    searchWeather,
    deleteWeather
  }, dispatch)
}

export default connect(initMapStateToProps, initMapDispatchToProps)(App);
