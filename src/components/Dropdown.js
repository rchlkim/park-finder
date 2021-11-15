import React from 'react';
import axios from 'axios';
import Post from './Post';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut',
      submitted: 'false'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitted = false;
    this.activities = [{value : "Arts and Culture", text : "Arts and Culture"}, {value: "Junior Ranger Program", text : "Junior Ranger Program"},
     {value : "Loading...", text : "Loading..."}];
  }

  handleChange(event) {
    if (event !== "temp") { // in order to update the dropdown w/o rendering again
      console.log(event.target.value);
      this.setState({value: event.target.value});
    } else {
      this.setState({value: "Arts and Culture"});
    }
  }

  handleSubmit(event) {
    alert('You chose: ' + this.state.value);
    event.preventDefault();
    this.setState({submitted: 'true'});
  }

  async componentDidMount() {
    var activities; // API call
    await fetchActivities().then(
      value => {activities = value;}
    );
    this.activities = activities;
    this.handleChange("temp"); // workaround for updating dropdown
  }

  render() {
    const submitted = this.state.submitted;
    if (submitted == 'true') {
      return <Post />;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Select Activity:   
            <select value={this.state.value} onChange={this.handleChange}>
              {this.activities.map(item => {
                return (<option key={item.value} value={item.value}>{item.text}</option>);
              })}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
}

export default Dropdown 

async function fetchActivities() {
  try {
    const result = await axios.get("https://developer.nps.gov/api/v1/activities?api_key=3wTW9Ux6Gxbdv4iCtJabaCAzUyjap93TgfQR5XwP");
    let data = result.data['data'];

    var activities = [];
    for (let i = 0; i < data.length; i++) {
      activities[i] = {
        value: data[i].name, text: data[i].name
      }
    }
    return activities;

  } catch (error) {
    console.error(error);
  }
}