import React from 'react';
import '../App.css';
import "./tokunou.css";
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
        <button onClick={this.openModal}>tokunou</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
        >
          <TokunouCheck />
          <button>OK</button>
          <button>Reset</button>
        </Modal>
      </div>
    );
  }
}

class TokunouCheck extends React.Component {
  render() {
    return (
      <div id="tokunouwrap">
        <label>
          <input type="checkbox" value="" />
          <span className="tokuSpan">パワーヒッター</span>
        </label>
        <label>
          <input type="checkbox" value="" />
          <span className="tokuSpan">アベレージヒッター</span>
        </label>
        <label>
          <input type="checkbox" value="" />
          <span className="tokuSpan">流し打ち</span>
        </label>
      </div>
    );
  }
}

export default TokunouPop;