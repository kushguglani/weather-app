import React, { Component } from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react';

export default class LeftMenu extends Component {
    render() {
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thur";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        const show = this.props.data.cod === "200" ?
            <Segment>
                <Header as='h3'>{this.props.data.city.name} <i className="refresh icon header-icon"></i></Header>

                <Grid>
                    <Grid.Column width={4}>
                        {/* <i className="refresh icon img-weather"></i> */}
                        <img className="img-weather"
                         src={`http://openweathermap.org/img/wn/${this.props.data.list[0].weather[0].icon}@4x.png`} 
                         alt={this.props.data.list[0].weather[0].description}/>
                    </Grid.Column>

                    <Grid.Column width={8}>
                        <p>{Math.round((this.props.data.list[0].temp.day - 273.15) * 100) / 100} C</p>
                        <p>{this.props.data.list[0].weather[0].description}</p>
                        <p>Wind : {this.props.data.list[0].speed + "ms " + this.props.data.list[0].deg + "deg"}</p>
                        <p>Pressure : {this.props.data.list[0].pressure}</p>
                    </Grid.Column>
                </Grid>

                <div className="container">
                    <Grid>
                        {this.props.data.list.map((curr, index) => (
                            <Grid.Column width={3} key={curr.dt} className={index === 0 ? 'display-none tile' : 'tile'}>
                                <p>{new Date(curr.dt * 1000).getDate()}</p>
                                <p>{weekday[new Date(curr.dt * 1000).getDay()]}</p>
                                <img className="sub-img-weather" 
                                src={`http://openweathermap.org/img/wn/${curr.weather[0].icon}@2x.png`} 
                                alt={curr.weather[0].description}/>
                                <p>{curr.weather[0].description}</p>
                                <p>{Math.round((curr.temp.day - 273.15) * 100) / 100} C</p>
                            </Grid.Column>
                        ))
                        }
                    </Grid>
                </div>
            </Segment>
            :
            "No citty selected"
        return show

    }
}
