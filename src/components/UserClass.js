import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "dummy",
        id: 123,
        avatar_url: "https://dummyimage.com/300",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/sanjibchanda-codeclouds"
    );
    const jsonData = await data.json();

    console.log(jsonData);

    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate() {
    // console.log(this.state.userInfo.login);
  }

  componentWillUnmount() {
    // console.log("unmount");
  }

  render() {
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="bg-gray-200 p-4">
        <UserContext.Consumer>
          {({ loggedInUser }) => <p className="font-medium">{loggedInUser}</p>}
        </UserContext.Consumer>
        <h3>name: {login}</h3>
        <p>id: {id}</p>
        <img src={avatar_url} alt="images" />
      </div>
    );
  }
}
export default UserClass;
