import React from 'react';
class TraningPolicy extends React.Component {
  render() {
    return (
      <div>
        <textarea name="policy" placeholder="育戝方針" onChange={(e) => this.props.changeState(e)}></textarea>
      </div>
    );
  }

}

export default TraningPolicy;
