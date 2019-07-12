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
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
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
  render() {
    return (
      <div>
        <button onClick={this.openModal}>フィルター</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
        >
          <div id="filterwrap">
            <div id="yearDiv">
              <label>
                <input type="tel" placeholder="2018" />
                <span>年 ～</span>
              </label>
              <label>
                <input type="tel" placeholder="2019" />
                <span>年</span>
              </label>
            </div>

            <div id="posDiv">
              ポジション：<br />
              <label class="check">
                <input type="checkbox" value="1" />
                <span class="posSpan">投手</span>
              </label>
              <label class="check">
                <input type="checkbox" value="2" />
                <span class="posSpan">捕手</span>
              </label>
              <label class="check">
                <input type="checkbox" value="3" />
                <span class="posSpan">一塁手</span>
              </label>
              <label class="check">
                <input type="checkbox" value="4" />
                <span class="posSpan">二塁手</span>
              </label>
              <label class="check">
                <input type="checkbox" value="5" />
                <span class="posSpan">三塁手</span>
              </label>
              <label class="check">
                <input type="checkbox" value="6" />
                <span class="posSpan">遊撃手</span>
              </label>
              <label class="check">
                <input type="checkbox" value="7" />
                <span class="posSpan">外野手</span>
              </label>
            </div>

            <div id="persDiv">
              性格：<br />
              <label class="check">
                <input type="checkbox" value="0" />
                <span class="perSpan">天才肌</span>
              </label>
              <label class="check">
                <input type="checkbox" value="1" />
                <span class="perSpan">ごくふつう</span>
              </label>
              <label class="check">
                <input type="checkbox" value="2" />
                <span class="perSpan">お調子者</span>
              </label>
              <label class="check">
                <input type="checkbox" value="3" />
                <span class="perSpan">やんちゃ</span>
              </label>
              <label class="check">
                <input type="checkbox" value="4" />
                <span class="perSpan">クール</span>
              </label>
              <label class="check">
                <input type="checkbox" value="5" />
                <span class="perSpan">したたか</span>
              </label>
              <label class="check">
                <input type="checkbox" value="6" />
                <span class="perSpan">内気</span>
              </label>
              <label class="check">
                <input type="checkbox" value="7" />
                <span class="perSpan">熱血漢</span>
              </label>
            </div>
          </div>
          <div id="buttonwrap">
            <button id="okButton">OK</button>
            <button id="resetButton">Reset</button>
          </div>
        </Modal>
      </div >
    );
  }
}

export default Filter;