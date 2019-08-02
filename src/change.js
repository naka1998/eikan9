import React from 'react';
import './App.css';
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import TokunouPop from "./tokunou/tokunoupop";
import TraningPolicy from "./Add_or_Change/traningpolicy";
import Year from "./Add_or_Change/year";
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
//  選手の情報をstateとして持ち、確定ボタンが押されたときに、localStorageに書き込む
class Change extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      pitcherIsChecked: new Array(this.props.pitcherTokunou.length).fill(false),
      fielderIsChecked: new Array(this.props.fielderTokunou.length).fill(false),
      player: this.props.value,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  //  初期化後すぐに呼ばれる
  componentWillMount() {
    //  特能→isChekedへの変換
    const ary = this.state.player.tokunou.slice();
    let isChecked = this.state.player.isPitcher
      ? this.state.pitcherIsChecked.slice()
      : this.state.fielderIsChecked.slice();
    for (let i = 0; i < ary.length; i++) {
      isChecked[ary[i]] = true;
    }
    if (this.state.player.isPitcher) {
      this.setState({
        pitcherIsChecked: isChecked
      });
    } else {
      this.setState({
        fielderIsChecked: isChecked
      });
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  afterOpenModal() {
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  changeState(e) {
    let copiedState = JSON.parse(JSON.stringify(this.state.player));
    copiedState[e.target.name] = e.target.value;
    this.setState({
      player: copiedState,
    })
  }
  //  position変更されたときの処理
  posChange = (e, num, idNum) => {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    ary["pos"][num] = e.target.value;
    ary["isPitcher"] = ary["pos"][0] === "1";
    this.setState({
      player: ary,
    });
  }

  //  pitcherの特能を変更
  changePitcherState = (e) => {
    let copiedAry = this.state.pitcherIsChecked.slice();
    // ture<->false反転
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      pitcherIsChecked: copiedAry,
    });
    //  isChecked(true, flase)をtoukou[]数字の配列に変換
    this.sumFunc(copiedAry);
  }
  //  fielderの特能を変更
  changeFielderState = (e) => {
    let copiedAry = this.state.fielderIsChecked.slice();
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      fielderIsChecked: copiedAry,
    });
    //  isChecked(true, flase)をtoukou[]数字の配列に変換
    this.sumFunc(copiedAry);
  }
  //  特能changeしたときに呼ばれる
  //  stateのtokunouを更新
  sumFunc(copiedAry) {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    const descAry = this.makeAry(copiedAry);
    ary["tokunou"] = descAry;
    this.setState({
      player: ary,
    });
  }
  makeAry(isChecked) {
    let descAry = [];
    for (let i = 0; i <= isChecked.length; i++) {
      if (isChecked[i]) {
        descAry.push(i);
      }
    }
    return descAry;
  }
  //  resetボタン押されたとき→stateを初期状態にする
  resetState() {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    ary["tokunou"] = [];
    this.setState({
      pitcherIsChecked: new Array(this.state.pitcherNum).fill(false),
      fielderIsChecked: new Array(this.state.fielderNum).fill(false),
      player: ary,
    });
  }
  //  ボタン押されたときに、localstorageに保存する処理
  changeJson = () => {
    let allData = JSON.parse(localStorage.getItem("player"));
    let ary = {};
    ary["year"] = Number(this.state.player["year"]);
    ary["name"] = this.state.player["name"];
    ary["pos"] = this.state.player["pos"];
    ary["pers"] = this.state.player["pers"];
    ary["tokunou"] = this.state.player["tokunou"];
    ary["policy"] = this.state.player["policy"];
    ary["isPitcher"] = this.state.player["isPitcher"];
    //  保存済みのデータの(idNum)番目を書き換え
    allData[this.props.idNum] = ary;
    localStorage.setItem("player", JSON.stringify(allData));
    this.closeModal();
    this.props.reload();
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>修正</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles} >
          <Year
            value={this.state.player.year}
            changeYear={this.changeState}
          />
          <div className="addcard">
            <Name
              value={this.state.player.name}
              changeState={this.changeState}
            />
            <Position
              value={this.state.player.pos}
              posChange={this.posChange} />
            <Personality
              value={this.state.player.pers}
              changeState={this.changeState}
            />
            <TokunouPop
              isPitcher={this.state.player.isPitcher}
              pitcherTokunou={this.props.pitcherTokunou}
              fielderTokunou={this.props.fielderTokunou}
              pitcherIsChecked={this.state.pitcherIsChecked}
              fielderIsChecked={this.state.fielderIsChecked}
              changePitcherState={this.changePitcherState}
              changeFielderState={this.changeFielderState}
              resetState={this.resetState}
            />
            <TraningPolicy
              value={this.state.player.policy}
              changeState={this.changeState} />
          </div>
          <button
            className="changeButton"
            onClick={this.changeJson}>
            確定</button>
        </Modal >
      </div>
    );
  }
}

export default Change;