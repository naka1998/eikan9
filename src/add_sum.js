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
  constructor(props) {
    super(props);
    this.state = {
      pitcherIsChecked: new Array(this.props.pitcherNum).fill(false),
      fielderIsChecked: new Array(this.props.fielderNum).fill(false),
    };
    this.playerData = [];
    this.changeFielderState = this.changeFielderState.bind(this);
    this.changePitcherState = this.changePitcherState.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  //  pitcherの特能を変更
  changePitcherState(e, idNum) {
    //  stateを変更するすべてのメソッドにおいて、一度コピーを取り→コピーを変更し→setStateする
    let copiedAry = this.state.pitcherIsChecked.slice();
    // ture<->false反転
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      pitcherIsChecked: copiedAry,
    });
    //  isChecked(true, flase)をtoukou[]数字の配列に変換
    this.props.sumFunc(idNum, copiedAry);
  }
  //  fielderの特能を変更
  changeFielderState(e, idNum) {
    let copiedAry = this.state.fielderIsChecked.slice();
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      fielderIsChecked: copiedAry,
    });
    //  isChecked(true, flase)をtoukou[]数字の配列に変換
    this.props.sumFunc(idNum, copiedAry);
  }
  //  resetボタン押されたとき→stateを初期状態にする
  resetState() {
    let ary = JSON.parse(JSON.stringify(this.props.player));
    ary["tokunou"] = [];
    this.setState({
      pitcherIsChecked: new Array(this.props.pitcherNum).fill(false),
      fielderIsChecked: new Array(this.props.fielderNum).fill(false),
      player: ary,
    });
  }

  render() {
    return (
      <div className="addcard" >
        <Name
          changeName={this.props.changeName}
          value={this.props.player["name"]}
          idNum={this.props.idNum}
          changeState={this.props.changeState} />
        <Position
          value={this.props.player["pos"]}
          idNum={this.props.idNum}
          posChange={this.props.posChange} />
        <Personality
          value={this.props.player["pers"]}
          idNum={this.props.idNum}
          changeState={this.props.changeState} />
        <div className="forFlex">
          <TokunouPop
            idNum={this.props.idNum}
            isPitcher={this.props.player["isPitcher"]}
            pitcherTokunou={this.props.pitcherTokunou}
            pitcherAry={this.props.pitcherAry}
            pitcherNum={this.props.pitcherNum}
            pitcherIsChecked={this.state.pitcherIsChecked}
            changePitcherState={this.changePitcherState}
            fielderTokunou={this.props.fielderTokunou}
            fielderAry={this.props.fielderAry}
            fielderNum={this.props.fielderNum}
            fielderIsChecked={this.state.fielderIsChecked}
            changeFielderState={this.changeFielderState}
            resetState={this.resetState}
          />
          <TraningPolicy
            value={this.props.player["policy"]}
            idNum={this.props.idNum}
            changeState={this.props.changeState} />
        </div>
        <TokunouDesc
          descAry={this.props.makeAry(this.props.player.isPitcher
            ? this.state.pitcherIsChecked
            : this.state.fielderIsChecked)}
          tokunou={this.props.player["isPitcher"]
            ? this.props.pitcherTokunou
            : this.props.fielderTokunou} />
      </div >
    );
  }
}

class AddSum extends React.Component {
  constructor() {
    super();
    this.state = {
      "year": "",
      "player": [
        { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, }, { name: "", pos: ["0", "0", "0"], pers: 0, tokunou: [], policy: "", isPitcher: true, },
      ]
    }
    this.fielderTokunou = [
      "チャンス4",
      "チャンス5",
      "対左投手",
      "キャッチャー◯",
      "キャッチャー◎",
      "盗塁4",
      "盗塁5",
      "走塁4",
      "走塁5",
      "送球4",
      "送球5",
      "ケガしにくさ4",
      "ケガしにくさ5",
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
      "ダメ押し",
      "インコースヒッター",
      "アウトコースヒッター",
      "かく乱",
      "悪球打ち",
      "対変化球◯",
      "ホーム突入",
    ];
    this.pitcherTokunou = [
      "対ピンチ4",
      "対左打者",
      "打たれ強さ",
      "ノビ4",
      "ノビ5",
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
      "球速安定",
      "ポーカーフェイス",
      "力配分",
      "国際大会◯",
      "回またぎ◯",
    ];
    this.pitcherNum = this.pitcherTokunou.length;
    this.fielderNum = this.fielderTokunou.length;
    this.pitcherAry = Array.from(Array(this.pitcherNum).keys());
    this.fielderAry = Array.from(Array(this.fielderNum).keys());

    this.sumFunc = this.sumFunc.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.posChange = this.posChange.bind(this);
    this.changeState = this.changeState.bind(this);
    this.writeJson = this.writeJson.bind(this);
  }
  renderAdcard(i) {
    return (
      <AddCard
        key={`add${i}`}
        idNum={i}
        player={this.state["player"][i]}
        pitcherNum={this.pitcherNum}
        fielderNum={this.fielderNum}
        fielderTokunou={this.fielderTokunou}
        pitcherTokunou={this.pitcherTokunou}
        pitcherAry={this.pitcherAry}
        fielderAry={this.fielderAry}
        makeAry={this.makeAry}
        sumFunc={this.sumFunc}
        posChange={this.posChange}
        changeState={this.changeState} />
    );
  }
  //  特能のチェックボックスがチェックされてるかどうか(isChecked)を受け取り、trueのものの番号だけ並べた配列を返す
  makeAry(isChecked) {
    let descAry = [];
    for (let i = 0; i <= isChecked.length; i++) {
      if (isChecked[i]) {
        descAry.push(i);
      }
    }
    return descAry;
  }
  // yearが変更されたときの処理
  changeYear(e) {
    this.setState({
      year: e.target.value,
    })
  }
  //  特能changeしたときに呼ばれる
  //  stateのtokunouを更新
  sumFunc(idNum, copiedAry) {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    const descAry = this.makeAry(copiedAry);
    ary[idNum]["tokunou"] = descAry;
    this.setState({
      player: ary,
    });
  }
  //  position変更されたときの処理
  posChange(e, num, idNum) {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    ary[idNum]["pos"][num] = e.target.value;
    ary[idNum]["isPitcher"] = ary[idNum]["pos"][0] === "1";
    this.setState({
      player: ary,
    })
  }
  //  position以外(name, personality, training policy)のstateが変更されたときの処理
  changeState(e, idNum) {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    ary[idNum][e.target.name] = e.target.value;
    this.setState({
      player: ary,
    })
  }
  //  ボタン押されたときに、localstorageに保存する処理
  writeJson() {
    //  yearが入力されていなければ登録できない
    if (this.state.year) {
      let allData;
      //  localStorageになにか入ったていればそれをコピー、なければ空の配列を入れる
      if (localStorage.getItem("player")) {
        allData = JSON.parse(localStorage.getItem("player"));
      } else {
        allData = {};
      }
      const num = Object.keys(allData).length;
      let ary;
      let j = 0;
      for (let i = 0; i <= 11; i++) {
        ary = {};
        if (this.state.player[i]["name"] === "" || this.state.player[i]["pos"][0] === "0") {
          // 名前が未入力(="")ORメインポジションが未入力(=0)のときの処理
          console.log(`${i} is false`);
        } else {
          //  保存する選手のデータをaryに入れてく
          ary["year"] = Number(this.state.year);
          ary["name"] = this.state.player[i]["name"];
          ary["pos"] = this.state.player[i]["pos"];
          ary["pers"] = this.state.player[i]["pers"];
          ary["tokunou"] = this.state.player[i]["tokunou"];
          ary["policy"] = this.state.player[i]["policy"];
          ary["isPitcher"] = this.state.player[i]["isPitcher"];
          //  保存済みのデータの(末尾+1)番目に追加
          allData[num + j] = ary;
          j++;
        }
      }
      localStorage.setItem("player", JSON.stringify(allData));
      this.props.history.push('/eikan9/main');
    } else {
      alert("年度を入力してください");
    }
  }
  render() {
    return (
      <div>
        <Year
          value={this.state.year}
          changeYear={this.changeYear} />
        <div id="wrap">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => this.renderAdcard(i))}
        </div>
        <AddBar
          year={this.state.year}
          writeJson={this.writeJson} />
      </div>
    );
  }
}

export default AddSum;