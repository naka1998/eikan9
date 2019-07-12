import React from 'react';
import '../App.css';
import Modal from "react-modal";

class TokunouPop extends React.Component {
  render() {
    return (
      <div>
        <button>tokunou</button>
        <Modal>
          <TokunouCheck />
          <button>OK</button>
        </Modal>
      </div>
    );
  }
}

class TokunouCheck extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="1"></label>
        <input type="checkbox" name="1" value="" />
      </section>
    );
  }
}

export default TokunouPop;