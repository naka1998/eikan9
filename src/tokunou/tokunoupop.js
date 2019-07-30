import React from 'react';
import '../App.css';
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: "100",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '14px',
    transform: 'translate(-50%, -50%)',
    maxHeight: '80%'
  }
};

/*  propsとして渡されるもの
idNum,isPitcher,resetState
changePitcherState,idNum,pitcherIsChecked,pitcherTokunou,
changeFielderState,idNum,fielderIsChecked,fielderTokunou,
*/
class TokunouPop extends React.Component {
  constructor(props) {
    super(props);
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
  //  特能は全部チェックボックスで作る
  renderPitcher(i) {
    return (
      <label
        key={"toku" + i}
      >
        <input
          type="checkbox"
          value={i}
          onChange={(e) => this.props.changePitcherState(e, this.props.idNum)} />
        <span
          className={this.props.pitcherIsChecked[i]
            ? "addTokuSpan"
            : "none"}>
          {this.props.pitcherTokunou[i]}
        </span>
      </label>
    )
  }
  renderFielder(i) {
    return (
      <label>
        <input
          type="checkbox"
          value={i}
          key={"toku" + i}
          onChange={(e) => this.props.changeFielderState(e, this.props.idNum)} />
        <span
          className={this.props.fielderIsChecked[i]
            ? "addTokuSpan"
            : "none"}>
          {this.props.fielderTokunou[i]}
        </span>
      </label>
    )
  }

  render() {
    return (
      <div className="tokunouDiv">
        <button
          className="tokunouButton"
          onClick={this.openModal}>特殊能力</button>
        {/* ↑<button>押すと、↓<Modal>の中身が表示されるよ */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
        >
          <div id="tokunouwrap" >
            {this.props.isPitcher === true
              ? this.props.pitcherTokunou.map((i, index) => this.renderPitcher(index))
              : this.props.fielderTokunou.map((i, index) => this.renderFielder(index))}
          </div>
          <div id="tokunouButtonWrap">
            <button
              className="closeButton"
              onClick={this.closeModal}>決定</button>
            <button
              className="resetButton"
              onClick={this.props.resetState}>クリア</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default TokunouPop;