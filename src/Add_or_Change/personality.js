import React from 'react';

class Personality extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="personality">性格</label>
        <select name="pers" value={this.props.value} onChange={(e) => this.props.changeState(e)}>
          <option value="0">天才肌	</option>
          <option value="1">ごくふつう</option>
          <option value="2">お調子者</option>
          <option value="3">やんちゃ</option>
          <option value="4">クール</option>
          <option value="5">したたか</option>
          <option value="6">内気</option>
          <option value="7">熱血漢</option>
        </select>
      </div >
    );
  }

}

export default Personality;
