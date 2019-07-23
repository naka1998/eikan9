//  選手を一括で追加していくページ
import React from 'react';
import "./App.css";
import AddBar from "./Add_or_Change/addbar";
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import TokunouPop from "./tokunou/tokunoupop";
import TokunouDesc from "./tokunou/tokunoudesc";
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
      pitcherIsChecked: new Array(this.pitcherNum).fill(false),
      fielderIsChecked: new Array(this.fielderNum).fill(false),
    };
    this.playerData = [];
    this.changeFielderState = this.changeFielderState.bind(this);
    this.changePitcherState = this.changePitcherState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.posChange = this.posChange.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  //  pitcherの特能を変更
  changePitcherState(e) {
    let copiedAry = this.state.pitcherIsChecked.slice();
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      pitcherIsChecked: copiedAry,
    });
    this.sumFunc(copiedAry);
  }
  //  fielderの特能を変更
  changeFielderState(e) {
    let copiedAry = this.state.fielderIsChecked.slice();
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      fielderIsChecked: copiedAry,
    });
    this.sumFunc(copiedAry);
  }
  //  state.tokunouをリセット
  sumFunc(copiedAry) {
    let ary = JSON.parse(JSON.stringify(this.props.player));
    const descAry = this.makeAry(copiedAry);
    console.log(descAry);
    this.setState({
      player: ary,
    });
  }
  //  resetボタン押されたときの処理  
  resetState() {
    let ary = JSON.parse(JSON.stringify(this.props.player));
    ary["tokunou"] = "";
    this.setState({
      pitcherIsChecked: new Array(this.pitcherNum).fill(false),
      fielderIsChecked: new Array(this.fielderNum).fill(false),
      player: ary,
    });
  }
  //  position変更されたときの処理
  posChange(e, num) {
    let ary = JSON.parse(JSON.stringify(this.props.player));
    ary["pos"][num] = e.target.value;
    ary["isPitcher"] = ary["pos"][0] === "1";
    this.setState({
      player: ary,
    })
  }
  //  position以外(name, personality, training policy)のstateが変更されたときの処理
  changeState(e) {
    let ary = JSON.parse(JSON.stringify(this.props.player));
    ary[e.target.name] = e.target.value;
    this.setState({
      player: ary,
    })
  }

  render() {
    return (
      <div className="addcard" >
        <Name changeName={this.props.changeName} value={this.props.player["name"]} changeState={this.changeState} />
        <Position value={this.props.player["pos"]} posChange={this.posChange} />
        <Personality value={this.props.player["pers"]} changeState={this.changeState} />
        <TokunouPop isPitcher={this.props.player["isPitcher"]}
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
        <TokunouDesc
          descAry={this.makeAry(this.props.player.isPitcher ? this.state.pitcherIsChecked : this.state.fielderIsChecked)}
          tokunou={this.props.player["isPitcher"] ? this.props.pitcherTokunou : this.props.fielderTokunou} />
        <TraningPolicy value={this.props.player["policy"]} changeState={this.changeState} />
      </div >
    );
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
}

class AddSum extends React.Component {
  constructor() {
    super();
    this.state = {
      "year": "",
      "player": [
        {
          name: "安藤",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "糸原",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "梅野",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "江越",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "大山",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "金本",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "木浪",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "久保田",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "け",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "コンラッド",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "坂本",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
        {
          name: "俊介",
          pos: [0, 0, 0],
          pers: 0,
          tokunou: "",
          policy: "",
          isPitcher: true,
        },
      ]
    }
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
    console.log(this.state["player"][i]);

    return (
      <AddCard key={`add${i}`} player={this.state["player"][i]} fielderTokunou={this.fielderTokunou} pitcherTokunou={this.pitcherTokunou} />
    );
  }
  writeJson() {

  }
  render() {
    return (
      <div>
        <Year />
        <div id="wrap">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => this.renderAdcard(i))}
        </div>
        <AddBar writeJson={this.writeJson} />
      </div>
    );
  }
}

export default AddSum;