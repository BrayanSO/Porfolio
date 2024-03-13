import React from 'react';
import '../Styles/ToggleButton.css';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  toggleButton = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }), () => {
      this.props.onChange(this.state.isActive);
    });
  }

  render() {
    const { isActive } = this.state;
    const { label } = this.props;

    return (
      <div className={`toggle-button ${isActive ? 'active' : ''}`} onClick={this.toggleButton}>
        <div className="knob"></div>
        <span className={`label ${isActive ? 'active' : ''}`}>{label}</span>
      </div>
    );
  }
}

export default ToggleButton;
