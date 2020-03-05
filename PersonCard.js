import React from "react";
class PersonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: this.props.age
    };
  }
  handleClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };
  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    const Button = props => {
      return (
        <button onClick={this.handleClick}>
          Birthday Button for {this.props.firstName} {this.props.lastName}
        </button>
      );
    };
    return (
      <div>
        <h1>
          My name is {firstName} {lastName}
        </h1>
        <p>Age: {this.state.clickCount}</p>
        <p>Hair Color: {hairColor}</p>
        <Button />
      </div>
    );
    // <div>
    //   <Button handleClick={this.handleClick} count={this.state.clickCount} />
    // </div>
    // );
  }
}
export default PersonCard;
