import React from 'react';
import "../App.css";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: "100",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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
  renderPos(i) {
    const posname = ["投手", "捕手", "一塁手", "二塁手", "三塁手", "遊撃手", "外野手"]
    return (
      < label className="check" >
        <input type="checkbox" key={i} value={i} onChange={this.props.changePos} />
        <span className={this.props.filterValue.pos[i] ? "posSpan" : ""}>{posname[i]}</span>
      </label >
    );
  }
  renderPers(i) {
    const persname = ["天才肌", "ごくふつう", "お調子者", "やんちゃ", "クール", "したたか", "内気", "熱血漢"]
    return (
      < label className="check" >
        <input type="checkbox" key={i} value={i} onChange={this.props.changePers} />
        <span className={this.props.filterValue.pers[i] ? "perSpan" : ""} > {persname[i]}</span>
      </label >
    );
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
                <input type="tel" value={this.props.filterValue.year1} onChange={this.props.changeYear1} />
                <span>年 ～</span>
              </label>
              <label>
                <input type="tel" value={this.props.filterValue.year2} onChange={this.props.changeYear2} />
                <span>年</span>
              </label>
            </div>

            <div id="posDiv">
              ポジション：<br />
              {[0, 1, 2, 3, 4, 5, 6].map((i) => this.renderPos(i))}
            </div>
            <div id="persDiv">
              性格：<br />
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => this.renderPers(i))}
            </div>
          </div>
          <div id="buttonwrap">
            <button id="closeButton" onClick={this.closeModal}>CLOSE</button>
            <button id="resetButton" onClick={this.props.resetFilterState}>Reset</button>
          </div>
        </Modal>
      </div >
    );
  }
}

export default Filter;