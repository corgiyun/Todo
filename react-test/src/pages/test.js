import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Test extends Component {
  static propTypes = {
    value: PropTypes.number
  };

  state = {
    value: ''
  };

  constructor(props) {
    super();
    this.state = {
      value: props.value,
      showMask: false,
    };
  }

  componentWillMount() {
    this.setState({value: '1'});
  }

  componentDidMount() {
    this.setState({value: '2'});

    window.queueMicrotask(() => {
      this.setState({ showMask: true });
    });

    document.addEventListener(
      'click',
      () => {
        this.setState({ showMask: false });
      },
      false
    );
  }

  handleChange(e) {
    // console.log(e.target.value);
    if (e.target.value.length <= 5) {
      this.setState({ value: e.target.value });
    } else {
      window.setTimeout(() => {
        this.setState({ value: e.target.value });
      }, 0);
    }
  }


  render() {
    const { value, showMask } = this.state;
    console.log(value);
    return (
      <div className="input-wrap">
        { showMask ? <div> DOM </div> : null }
        Here：<input type="text" value={value} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}









