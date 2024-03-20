import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// function Component
// const About = () => {
//   return (
//     <div className="container">
//       <div className="about_wrap">
//         <User name="Sanjib" location="kolkata" contact="@sanjib" />
//         <UserClass name="Sanjib Chanda" location="Asansol" contact="@chanda" />
//       </div>
//     </div>
//   );
// };

//class component
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="about_wrap">
          <UserClass
            name="Sanjib Chanda"
            location="Asansol"
            contact="@chanda"
          />
        </div>
      </div>
    );
  }
}

export default About;
