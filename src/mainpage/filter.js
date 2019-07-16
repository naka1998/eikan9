import React from 'react';
import "../App.css";
import "./filter.css";
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
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  resetState() {

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
                <input type="tel" value={this.props.filterValue.year1} />
                <span>年 ～</span>
              </label>
              <label>
                <input type="tel" value={this.props.filterValue.year2} />
                <span>年</span>
              </label>
            </div>

            <div id="posDiv">
              ポジション：<br />
              <label className="check">
                <input type="checkbox" value="1" />
                <span className="posSpan">投手</span>
              </label>
              <label className="check">
                <input type="checkbox" value="2" />
                <span className="posSpan">捕手</span>
              </label>
              <label className="check">
                <input type="checkbox" value="3" />
                <span className="posSpan">一塁手</span>
              </label>
              <label className="check">
                <input type="checkbox" value="4" />
                <span className="posSpan">二塁手</span>
              </label>
              <label className="check">
                <input type="checkbox" value="5" />
                <span className="posSpan">三塁手</span>
              </label>
              <label className="check">
                <input type="checkbox" value="6" />
                <span className="posSpan">遊撃手</span>
              </label>
              <label className="check">
                <input type="checkbox" value="7" />
                <span className="posSpan">外野手</span>
              </label>
            </div>

            <div id="persDiv">
              性格：<br />
              <label className="check">
                <input type="checkbox" value="0" />
                <span className="perSpan">天才肌</span>
              </label>
              <label className="check">
                <input type="checkbox" value="1" />
                <span className="perSpan">ごくふつう</span>
              </label>
              <label className="check">
                <input type="checkbox" value="2" />
                <span className="perSpan">お調子者</span>
              </label>
              <label className="check">
                <input type="checkbox" value="3" />
                <span className="perSpan">やんちゃ</span>
              </label>
              <label className="check">
                <input type="checkbox" value="4" />
                <span className="perSpan">クール</span>
              </label>
              <label className="check">
                <input type="checkbox" value="5" />
                <span className="perSpan">したたか</span>
              </label>
              <label className="check">
                <input type="checkbox" value="6" />
                <span className="perSpan">内気</span>
              </label>
              <label className="check">
                <input type="checkbox" value="7" />
                <span className="perSpan">熱血漢</span>
              </label>
            </div>
          </div>
          <div id="buttonwrap">
            <button id="okButton">OK</button>
            <button id="resetButton" onClick={this.resetState()}>Reset</button>
          </div>
        </Modal>
      </div >
    );
  }
}

export default Filter;