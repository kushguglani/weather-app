import React, { Component } from 'react'
import { Menu, Input, Button } from 'semantic-ui-react';

export default class LeftMenu extends Component {
    handleChange = (event) => {
        // Number 13 is the "Enter" key on the keyboard
        if (event.charCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            this.props.searchCallback(event.target.value)
            event.target.value = ""
        }
    }
    render() {
        return (
            <>
                <Menu fluid vertical tabular>
                    <Menu.Item>
                        <Input icon='search' placeholder='Type city name' onKeyPress={(e) => this.handleChange(e)} />
                    </Menu.Item>
                    <p className="recent-location">Recent Locations</p>
                    <hr />

                    {this.props.searchList.length > 0 ? this.props.searchList.map((curr, index) =>
                        <Menu.Item
                            name='spam'
                            key={curr}
                        >
                            <>
                                <i className="delete icon" onClick={() => this.props.deleteWeatherCallback(curr, this.props.searchList)}></i>
                                <i className="refresh icon" onClick={() => this.props.searchCallback(curr)}></i></>
                            <p>{curr}</p>
                            <hr className="light-line" />
                        </Menu.Item>
                    ) : <p>No city searched yet</p>}

                </Menu>
                <Button className="clear" onClick={this.props.clearWeatherCallback}>Clear</Button>
            </>
        )
    }
}
