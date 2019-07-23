import React from 'react';
class TraningPolicy extends React.Component {
  render() {
    return (
      <div>
        <textarea
          name="policy"
          value={this.props.value}
          placeholder="育戝方針"
          onChange={(e) => this.props.changeState(e, this.props.idNum)}></textarea>
      </div>
    );
  }

}

export default TraningPolicy;
