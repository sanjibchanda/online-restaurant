import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// function Component
// const About = () => {
//   return (
//     <div className="container mx-auto px-3">
//       <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
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
      <div className="container mx-auto px-3">
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
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
