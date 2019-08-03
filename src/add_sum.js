//  選手を一括で追加していくページ
import React from "react";
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
      fielderIsChecked: new Array(this.props.fielderNum).fill(false)
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
      pitcherIsChecked: copiedAry
    });
    //  isChecked(true, flase)をtoukou[]数字の配列に変換
    this.props.sumFunc(idNum, copiedAry);
  }
  //  fielderの特能を変更
  changeFielderState(e, idNum) {
    let copiedAry = this.state.fielderIsChecked.slice();
    copiedAry[e.target.value] = !copiedAry[e.target.value];
    this.setState({
      fielderIsChecked: copiedAry
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
      player: ary
    });
  }

  render() {
    return (
      <div className="addcard">
        <Name
          key="nameForm"
          changeName={this.props.changeName}
          value={this.props.player["name"]}
          idNum={this.props.idNum}
          changeState={this.props.changeState}
        />
        <Position
          key="posForm"
          value={this.props.player["pos"]}
          idNum={this.props.idNum}
          posChange={this.props.posChange}
        />
        <Personality
          key="persForm"
          value={this.props.player["pers"]}
          idNum={this.props.idNum}
          changeState={this.props.changeState}
        />
        <div className="forFlex">
          <TokunouPop
            key="tokunou"
            idNum={this.props.idNum}
            isPitcher={this.props.player["isPitcher"]}
            pitcherTokunou={this.props.pitcherTokunou}
            pitcherNum={this.props.pitcherNum}
            pitcherIsChecked={this.state.pitcherIsChecked}
            changePitcherState={this.changePitcherState}
            fielderTokunou={this.props.fielderTokunou}
            fielderNum={this.props.fielderNum}
            fielderIsChecked={this.state.fielderIsChecked}
            changeFielderState={this.changeFielderState}
            resetState={this.resetState}
          />
          <TraningPolicy
            key="policyForm"
            value={this.props.player["policy"]}
            idNum={this.props.idNum}
            changeState={this.props.changeState}
          />
        </div>
        <TokunouDesc
          key="tokuDesc"
          descAry={this.props.makeAry(
            this.props.player.isPitcher
              ? this.state.pitcherIsChecked
              : this.state.fielderIsChecked
          )}
          tokunou={
            this.props.player["isPitcher"]
              ? this.props.pitcherTokunou
              : this.props.fielderTokunou
          }
        />
      </div>
    );
  }
}

class AddSum extends React.Component {
  constructor() {
    super();
    this.state = {
      year: "",
      player: [
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        },
        {
          name: "",
          pos: ["0", "0", "0"],
          pers: 0,
          tokunou: [],
          policy: "",
          isPitcher: true
        }
      ]
    };
    this.fielderTokunou = [
      "ﾁｬﾝｽ4",
      "ﾁｬﾝｽ5",
      "対左投手4",
      "対左投手5",
      "サブポジ4",
      "サブポジ5",
      "盗塁4",
      "盗塁5",
      "走塁4",
      "走塁5",
      "送球4",
      "ｱﾍﾞﾚｰｼﾞﾋｯﾀｰ",
      "ﾊﾟﾜｰﾋｯﾀｰ",
      "ﾌﾟﾙﾋｯﾀｰ",
      "広角打法",
      "流し打ち",
      "固め打ち",
      "粘り打ち",
      "ﾊﾞﾝﾄ◯",
      "ﾊﾞﾝﾄ職人",
      "内野安打◯",
      "連打◯",
      "初球◯",
      "ﾁｬﾝｽﾒｰｶｰ",
      "満塁男",
      "ｻﾖﾅﾗ男",
      "逆境◯",
      "代打◯",
      "ﾊｲﾎﾞｰﾙﾋｯﾀｰ",
      "ﾛｰﾎﾞｰﾙﾋｯﾀｰ",
      "ﾍｯﾄﾞｽﾗｲﾃﾞｨﾝｸﾞ",
      "威圧感",
      "いぶし銀",
      "ﾚｰｻﾞｰﾋﾞｰﾑ",
      "守備職人",
      "ブロック◯",
      "ｷｬｯﾁｬｰ◯",
      "ｷｬｯﾁｬｰ◎",
      "ﾑｰﾄﾞﾒｰｶｰ",
      "ムード◯",
      "4番◯",
      "意外性",
      "対ｴｰｽ◯"
    ];
    this.pitcherTokunou = [
      "対ピンチ4",
      "対ピンチ5",
      "対左打者4",
      "対左打者5",
      "対ランナー4",
      "対ランナー4",
      "打たれ強さ4",
      "打たれ強さ5",
      "ノビ4",
      "ノビ5",
      "キレ4",
      "キレ5",
      "クイック4",
      "クイック5",
      "ｼﾞｬｲﾛﾎﾞｰﾙ",
      "重い球",
      "逃げ球",
      "尻上がり",
      "奪三振",
      "牽制◯",
      "リリース◯",
      "打球反応◯",
      "勝ち運",
      "闘志",
      "ﾎﾟｰｶｰﾌｪｲｽ",
      "力配分",
      "威圧感",
      "根性◯",
      "ｸﾛｽﾌｧｲﾔｰ",
      "緩急◯",
      "球持ち◯",
      "低め◯",
      "強打者◯"
    ];
    this.pitcherNum = this.pitcherTokunou.length;
    this.fielderNum = this.fielderTokunou.length;

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
        makeAry={this.makeAry}
        sumFunc={this.sumFunc}
        posChange={this.posChange}
        changeState={this.changeState}
      />
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
      year: e.target.value
    });
  }
  //  特能changeしたときに呼ばれる
  //  stateのtokunouを更新
  sumFunc(idNum, copiedAry) {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    const descAry = this.makeAry(copiedAry);
    ary[idNum]["tokunou"] = descAry;
    this.setState({
      player: ary
    });
  }
  //  position変更されたときの処理
  posChange(e, num, idNum) {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    ary[idNum]["pos"][num] = e.target.value;
    ary[idNum]["isPitcher"] = ary[idNum]["pos"][0] === "1";
    this.setState({
      player: ary
    });
  }
  //  position以外(name, personality, training policy)のstateが変更されたときの処理
  changeState(e, idNum) {
    let ary = JSON.parse(JSON.stringify(this.state.player));
    ary[idNum][e.target.name] = e.target.value;
    this.setState({
      player: ary
    });
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
        if (
          this.state.player[i]["name"] === "" ||
          this.state.player[i]["pos"][0] === "0"
        ) {
          // 名前が未入力(="")ORメインポジションが未入力(=0)のときの処理
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
      this.props.history.push("/main");
    } else {
      alert("年度を入力してください");
    }
  }
  render() {
    return (
      <div>
        <Year value={this.state.year} changeYear={this.changeYear} />
        <div id="wrap">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i =>
            this.renderAdcard(i)
          )}
        </div>
        <AddBar year={this.state.year} writeJson={this.writeJson} />
      </div>
    );
  }
}

export default AddSum;
