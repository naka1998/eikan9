//  選手を一括で追加していくページ
import React from 'react';
import "./App.css";
import AddBar from "./Add_or_Change/addbar";
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import TokunouPop from "./tokunou/tokunoupop";
import TokunouDesc from "./tokunou/tokunoudisc";
import TraningPolicy from "./Add_or_Change/traningpolicy";
import Year from "./Add_or_Change/year";

class AddCard extends React.Component {
  constructor() {
    super();
    this.pitcherNum = 32;
    this.fielderNum = 48;
    this.pitcherAry = Array.from(Array(this.pitcherNum).keys());
    this.fielderAry = Array.from(Array(this.fielderNum).keys());

    this.state = {
      isPitcher: true,
      pitcherIsChecked: new Array(this.pitcherNum).fill(false),
      fielderIsChecked: new Array(this.fielderNum).fill(false),
    };
    this.playerData = [];
    this.changeFielderState = this.changeFielderState.bind(this);
    this.changePitcherState = this.changePitcherState.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  changePitcherState(e) {
    let copiedAry = this.state.pitcherIsChecked.slice();
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      pitcherIsChecked: copiedAry,
    });
  }
  changeFielderState(e) {
    console.log(e);
    let copiedAry = this.state.fielderIsChecked.slice();
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      fielderIsChecked: copiedAry,
    });
  }
  resetState() {
    this.setState({
      pitcherIsChecked: new Array(this.pitcherNum).fill(false),
      fielderIsChecked: new Array(this.fielderNum).fill(false),
    });
  }


  render() {
    return (
      <div className="addcard" >
        <Name changeName={this.props.changeName} />
        <Position />
        <Personality />
        <TokunouPop isPitcher={this.state.isPitcher}
          pitcherTokunou={this.props.pitcherTokunou}
          pitcherAry={this.pitcherAry}
          pitcherNum={this.pitcherNum}
          pitcherIsChecked={this.state.pitcherIsChecked}
          changePitcherState={this.changePitcherState}
          fielderTokunou={this.props.fielderTokunou}
          fielderAry={this.fielderAry}
          fielderNum={this.fielderNum}
          fielderIsChecked={this.state.fielderIsChecked}
          changeFielderState={this.changeFielderState}
          resetState={this.resetState}
        />
        <TokunouDesc isPitcher={this.state.isPitcher}
          pitcherTokunou={this.props.pitcherTokunou}
          fielderTokunou={this.props.fielderTokunou}
          pitcherIsChecked={this.state.pitcherIsChecked}
          fielderIsChecked={this.state.fielderIsChecked} />
        <TraningPolicy />
      </div >
    );
  }
}

class AddSum extends React.Component {
  constructor() {
    super();
    this.addAry = [0]
    this.fielderTokunou = [
      "チャンス",
      "対左投手",
      "キャッチャー",
      "盗塁",
      "走塁",
      "送球",
      "秋男",
      "夏男",
      "春男",
      "ケガしにくさ",
      "アベレージヒッター",
      "パワーヒッター",
      "プルヒッター",
      "広角打法",
      "意外性",
      "いぶし銀",
      "お祭り男",
      "固め打ち",
      "逆境◯",
      "プレッシャーラン",
      "高速チャージ",
      "サヨナラ男",
      "守備職人",
      "初球◯",
      "対エース◯",
      "代打◯",
      "チャンスメーカー",
      "内野安打◯",
      "流し打ち",
      "粘り打ち",
      "ハイボールヒッター",
      "ローボールヒッター",
      "バント◯",
      "バント職人",
      "ホーム死守",
      "ヘッドスライディング",
      "満塁男",
      "ムード◯",
      "レーザービーム",
      "△△キラー",
      "ダメ押し",
      "インコースヒッター",
      "アウトコースヒッター",
      "かく乱",
      "悪球打ち",
      "国際大会◯",
      "対変化球◯",
      "ホーム突入",
    ];
    this.pitcherTokunou = [
      "対ピンチ",
      "対左打者",
      "打たれ強さ",
      "ノビ",
      "クイック",
      "回復",
      "威圧感",
      "重い球",
      "勝ち運",
      "緩急◯",
      "キレ◯",
      "緊急登板◯",
      "クロスファイヤー",
      "牽制◯",
      "根性◯",
      "ジャイロボール",
      "尻上がり",
      "対強打者◯",
      "打球反応◯",
      "奪三振",
      "球持ち◯",
      "闘志",
      "内角攻め",
      "逃げ球",
      "低め◯",
      "リリース◯",
      "△△キラー",
      "球速安定",
      "ポーカーフェイス",
      "力配分",
      "国際大会◯",
      "回またぎ◯",
    ];
  }
  renderAdcard(i) {
    return (
      <AddCard key={`add${i}`} fielderTokunou={this.fielderTokunou} pitcherTokunou={this.pitcherTokunou} />
    );
  }
  render() {
    return (
      <span>
        <Year />
        <div id="wrap">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => this.renderAdcard(i))}
        </div>
        <AddBar />
      </span>
    );
  }
}

export default AddSum;