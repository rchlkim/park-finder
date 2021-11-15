import React from "react";
import axios from 'axios';
import './Post.css'

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.parks = [{name: "Loading...", text: "Loading..."}];
    }

    handleChange(event) {
        if (event !== "temp") { // in order to update the dropdown w/o rendering again
            console.log(event.target.value);
            this.setName({value: event.target.name});
        } else {
            this.setState({value: "trubbo"});
        }
    }

    async componentDidMount() {
        var parks; // API call
        await getParksByActivity('AUTO').then(
            value => {parks = value;}
        );
        this.parks = parks;
        this.handleChange("temp"); // workaround for updating dropdown
    }

    render() {
        return (
            <div>
              <div className="container">
                {this.parks.map((parks) => {
                    return <h2>{parks.name}</h2>
                })}
              </div>
            </div>
        );
    }
}

export default Post;


async function getParksByActivity(activity) {
    try {
        const result = await axios.get('https://developer.nps.gov/api/v1/activities/parks?api_key=3wTW9Ux6Gxbdv4iCtJabaCAzUyjap93TgfQR5XwP&q=' + activity);
        let data = result.data['data'][0].parks;

        var parks = [];
        for (let i = 0; i < data.length; i++) {
          parks[i] = {
            name: data[i].fullName, text: 'Hello'
          }
        }
        return parks;
    } catch (error) {
        console.error(error);
    }
}

async function getParkInfo() {
    try {
        const result = await axios.get('https://developer.nps.gov/api/v1/parks?api_key=3wTW9Ux6Gxbdv4iCtJabaCAzUyjap93TgfQR5XwP');
        let data = result.data['data'];

        var parkInfo = [];
        for (let i = 0; i < data.length; i++) {
            parkInfo[i] = {
                name: data[i].fullName, description: data[i].description
            }
        }
        return parkInfo;
    } catch (error) {
        console.error(error);
    }
}