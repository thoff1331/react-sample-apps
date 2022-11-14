import * as React from 'react';

export default class AppUser extends React.Component {
  state = {
    data: null,
  };
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data.results,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.data &&
          this.state.data.map((user) => (
            <div className="user-img" key={user.email}>
              <img src={user.picture.medium} />
              <div className="user-name">
                <h1>{user.name.first}</h1>
                <h1>{user.name.last} </h1>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
