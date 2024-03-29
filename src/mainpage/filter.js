import React from 'react';
import "../App.css";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: "100",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '10px',
    transform: 'translate(-50%, -50%)',
  }
};
//  filterValueに状態が入ってる
class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.reflectFilter();
  }
  renderPos(i) {
    const posname = ["", "投手", "捕手", "一塁手", "二塁手", "三塁手", "遊撃手", "外野手"]
    return (
      <label className="check" key={i} >
        <input
          type="checkbox"
          name="pos"
          key={"pos" + i}
          value={i}
          onChange={this.props.changeState} />
        <span className={this.props.filterValue.pos[i] ? "posCheckedSpan" : ""}>{posname[i]}</span>
      </label >
    );
  }
  renderPers(i) {
    const persname = ["天才肌", "ごくふつう", "お調子者", "やんちゃ", "クール", "したたか", "内気", "熱血漢"]
    return (
      < label className="check" key={i} >
        <input
          type="checkbox"
          name="pers"
          key={i}
          value={i}
          onChange={this.props.changeState} />
        <span className={this.props.filterValue.pers[i] ? "perCheckedSpan" : ""} > {persname[i]}</span>
      </label >
    );
  }
  render() {
    return (
      <div>
        <button id="filter" onClick={this.openModal}>フィルター</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
        >
          <div id="filterwrap">
            <div id="yearDiv">
              <label>
                <input type="tel" name="year1" value={this.props.filterValue.year1} onChange={this.props.changeYear} />
                <span>年 ～</span>
              </label>
              <label>
                <input type="tel" name="year2" value={this.props.filterValue.year2} onChange={this.props.changeYear} />
                <span>年</span>
              </label>
            </div>

            <div id="posDiv">
              ポジション：<br />
              {[1, 2, 3, 4, 5, 6, 7].map((i) => this.renderPos(i))}
            </div>
            <div id="persDiv">
              性格：<br />
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => this.renderPers(i))}
            </div>
          </div>
          <div id="filterButtonWrap">
            <button className="closeButton" onClick={this.closeModal}>決定</button>
            <button className="resetButton" onClick={this.props.resetFilterState}>リセット</button>
          </div>
        </Modal>
      </div >
    );
  }
}

export default Filter;