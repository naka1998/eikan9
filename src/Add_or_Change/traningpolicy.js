import React from 'react';
class TraningPolicy extends React.Component {
  render() {
    return (
      <textarea
        name="policy"
        className="policyForm"
        value={this.props.value}
        placeholder="育成方針"
        onChange={(e) => this.props.changeState(e, this.props.idNum)}></textarea>

    );
  }

}

export default TraningPolicy;
