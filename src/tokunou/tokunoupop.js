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
    transform: 'translate(-50%, -50%)'
  }
};
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
  renderPitcher(i) {
    return (
      <label>
        <input type="checkbox" value={i} key={"toku" + i} onChange={this.props.changePitcherState} />
        <span className={this.props.pitcherIsChecked[i] ? "addTokuSpan" : ""}>{this.props.pitcherTokunou[i]}</span>
      </label>
    )
  }
  renderFielder(i) {
    return (
      <label>
        <input type="checkbox" value={i} key={"toku" + i} onChange={this.props.changeFielderState} />
        <span className={this.props.fielderIsChecked[i] ? "addTokuSpan" : ""}>{this.props.fielderTokunou[i]}</span>
      </label>
    )
  }


  render() {
    return (
      <div>
        <button onClick={this.openModal}>特殊能力</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
        >
          <div id="tokunouwrap" >
            {this.props.isPitcher === true ?
              this.props.pitcherAry.map((i) => this.renderPitcher(i)) :
              this.props.fielderAry.map((i) => this.renderFielder(i))}
          </div>
          <button onClick={this.closeModal}>OK</button>
          <button onClick={this.props.resetState}>Reset</button>
        </Modal>
      </div>
    );
  }
}
export default TokunouPop;