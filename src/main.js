import React from "react";
import Sort from "./mainpage/sort";
import Filter from "./mainpage/filter";
import PlayerCard from "./mainpage/player";

class Main extends React.Component {
  constructor() {
    super();
    this.posname = [
      "なし",
      "投手",
      "捕手",
      "一塁手",
      "二塁手",
      "三塁手",
      "遊撃手",
      "外野手"
    ];
    this.persname = [
      "天才肌",
      "ごくふつう",
      "お調子者",
      "やんちゃ",
      "クール",
      "したたか",
      "内気",
      "熱血漢"
    ];
    this.persPitcher = [
      "全体的(めっちゃ伸びる)",
      "全体的(平均的)",
      "全体的(平均的)",
      "球速",
      "コントロール, 投球フォーム",
      "変化球覚える, 変化球みがく",
      "コントロール, 変化球覚える・みがく",
      "球速, スタミナ"
    ];
    this.persFielder = [
      "全体的(めっちゃ伸びる)",
      "全体的(平均的)",
      "走力, 肩力",
      "弾道, パワー",
      "ミート",
      "守備力, エラー回避",
      "エラー回避",
      "パワー"
    ];
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
    this.state = {
      sort: 0,
      filter: {
        year1: 0,
        year2: 9999,
        pos: Array(8).fill(false),
        pers: Array(8).fill(false)
      },
      playerData: "",
      playerNumAry: []
    };

    this.readJson = this.readJson.bind(this);
    this.resetFilterState = this.resetFilterState.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeSortState = this.changeSortState.bind(this);
    this.changeState = this.changeState.bind(this);
    this.allReset = this.allReset.bind(this);
  }
  //  初期化？できる
  //  constractor()の後に呼ばれるらしい
  componentWillMount = () => {
    const playerData = this.readJson();
    const playerNum = Object.keys(playerData).length;
    this.setState({
      playerNum: playerNum,
      playerNumAry: Array.from(Array(playerNum).keys()),
      playerData: playerData
    });
  };
  //  localStorage読んで、playerDataに入れる
  readJson() {
    let playerData;
    if (localStorage.getItem("player")) {
      //  localStorageに何か入っていたときの処理
      playerData = JSON.parse(localStorage.getItem("player"));
    } else {
      //  localStorageに何も入っていなかったときの処理
      playerData = {};
    }
    return playerData;
  }

  //  ここからfilterの処理
  //  filterのyearが変更されたときの処理
  changeYear(e) {
    const copiedAry = JSON.parse(JSON.stringify(this.state.filter));
    const name = e.target.name;
    copiedAry[name] = e.target.value;
    this.setState({
      filter: copiedAry
    });
  }
  //  filterのyear以外が変更されたときの処理
  changeState(e) {
    const copiedAry = JSON.parse(JSON.stringify(this.state.filter));
    const num = e.target;
    copiedAry[num.name][num.value] = !copiedAry[num.name][num.value];
    this.setState({
      filter: copiedAry
    });
  }

  // changeYearしたときに呼ばれる
  filterByYear(inputAry, value) {
    let outputAry = [];
    for (let i = 0; i < inputAry.length; i++) {
      if (inputAry[i][1] === value) {
        outputAry.push(inputAry[i][0]);
      }
    }
    return outputAry;
  }

  //  filterのresetボタンが押されたときの処理
  resetFilterState() {
    const resetState = {
      year1: 0,
      year2: 9999,
      pos: Array(8).fill(false),
      pers: Array(8).fill(false)
    };
    this.setState({ filter: resetState });
  }

  //  モーダルが閉じたときに、filterのstateを反映する
  reflectFilter = () => {
    //  aryに表示する選手のnumberを入れていく
    let ary = [];
    //  年に対して絞り込み
    const posAry = this.makeAry(this.state.filter.pos);
    const persAry = this.makeAry(this.state.filter.pers);
    console.log("pos" + posAry);
    console.log("pers" + persAry);

    for (let i = 0; i < this.state.playerNum; i++) {
      const yearData = this.state.playerData[i].year;
      const posData = this.state.playerData[i].pos;
      const persData = this.state.playerData[i].pers;
      if (
        yearData >= this.state.filter.year1 &&
        yearData <= this.state.filter.year2
      ) {
        //  ポジションに対して絞り込み
        if (
          posAry.length === 0 ||
          posAry.indexOf(Number(posData[0])) >= 0 ||
          posAry.indexOf(Number(posData[1])) >= 0 ||
          posAry.indexOf(Number(posData[2])) >= 0
        ) {
          //  性格に対して絞り込み
          if (persAry.length === 0 || persAry.indexOf(Number(persData)) >= 0) {
            //  すべての条件に合致すれば、aryに追加する
            ary.push(i);
          }
        }
      }
    }
    this.setState({ playerNumAry: ary });
  };
  //  ここまでfilterの処理

  //  sortが変更されたときの処理
  changeSortState(e) {
    this.setState({ sort: e.target.value });
    let exArray = [];
    let sortedAry = [];
    const playerArray = JSON.parse(JSON.stringify(this.state.playerData));
    const playerNumAry = this.state.playerNumAry.slice();
    switch (e.target.value) {
      case "0":
        exArray = this.makeAryYear(playerArray, playerNumAry);
        //  year が文字列のため、ascとdescが逆に働くっぽい
        sortedAry = this.sortByAsc(exArray);
        break;
      case "1":
        exArray = this.makeAryYear(playerArray, playerNumAry);
        sortedAry = this.sortByDesc(exArray);
        break;
      case "2":
        exArray = this.makeAryPos(playerArray, playerNumAry);
        sortedAry = this.sortByAsc(exArray);
        break;
      case "3":
        exArray = this.makeAryPos(playerArray, playerNumAry);
        sortedAry = this.sortByDesc(exArray);
        break;
      default:
        break;
    }
    sortedAry = this.extractAry(sortedAry);
    this.setState({
      playerNumAry: sortedAry
    });
  }
  //  [i,year]の配列を返す
  makeAryYear(playerArray, playerNumAry) {
    let exArray = [];
    for (let i = 0; i < this.state.playerNum; i++) {
      if (playerNumAry.indexOf(i) >= 0) {
        let ary = [];
        ary = [i, playerArray[i]["year"]];
        exArray.push(ary);
      }
    }
    return exArray;
  }
  //  [i,pos[0]]の配列を返す
  makeAryPos(playerArray, playerNumAry) {
    let exArray = [];
    for (let i = 0; i < this.state.playerNum; i++) {
      if (playerNumAry.indexOf(i) >= 0) {
        let ary = [];
        ary = [
          i,
          playerArray[i]["pos"][0],
          playerArray[i]["pos"][1],
          playerArray[i]["pos"][2]
        ];
        exArray.push(ary);
      }
    }
    return exArray;
  }
  makeAryPers(playerArray) {
    let exArray = [];
    for (let i = 0; i < this.state.playerNum; i++) {
      let ary = [];
      ary = [i, playerArray[i]["pers"][0]];
      exArray.push(ary);
    }
    return exArray;
  }
  //  昇順(asc)に並び替える関数
  sortByAsc(ary) {
    ary.sort((a, b) => {
      return a[1] - b[1];
    });
    return ary;
  }
  //  降順(desc)に並び替える関数
  sortByDesc(ary) {
    ary.sort((a, b) => {
      return b[1] - a[1];
    });
    return ary;
  }
  //  配列[[1,a],[21,b],[3,c]...]の[1,21,3...]を抽出する
  extractAry(ary) {
    let outputAry = [];
    for (let i = 0; i < ary.length; i++) {
      outputAry.push(ary[i][0]);
    }
    //
    return outputAry;
  }
  //  boolean型の配列をtrueのindexを並べた配列に変換する
  makeAry(istrue) {
    let descAry = [];
    for (let i = 0; i <= istrue.length; i++) {
      if (istrue[i]) {
        descAry.push(i);
      }
    }
    return descAry;
  }
  //  選手リセットボタンが押されたときの処理
  allReset() {
    const result = window.confirm(
      "全選手のデータがクリアされます\nよろしいですか？"
    );
    if (result) {
      //  確認ダイアログ出して、OK押されるとlocalStorageがクリアされる
      localStorage.clear();
      this.setState({
        playerData: {},
        playerNum: 0,
        playerNumAry: []
      });
      //  renderされなかったら強制的に再読込
      //  window.location.reload();
    }
  }
  renderPlayercard(i) {
    const pos1 = this.posname[this.state.playerData[i]["pos"][0]];
    const pos2 = this.posname[this.state.playerData[i]["pos"][1]];
    const pos3 = this.posname[this.state.playerData[i]["pos"][2]];
    const pers = this.persname[this.state.playerData[i]["pers"]];
    const persAbility = this.state.playerData[i]["isPitcher"]
      ? this.persPitcher[this.state.playerData[i]["pers"]]
      : this.persFielder[this.state.playerData[i]["pers"]];
    const tokunou = this.state.playerData[i]["isPitcher"]
      ? this.state.playerData[i]["tokunou"].map(i => this.pitcherTokunou[i])
      : this.state.playerData[i]["tokunou"].map(i => this.fielderTokunou[i]);
    return (
      <PlayerCard
        key={"playerCard" + i}
        idNum={i}
        value={this.state.playerData[i]}
        pitcherTokunou={this.pitcherTokunou}
        fielderTokunou={this.fielderTokunou}
        year={this.state.playerData[i]["year"]}
        name={this.state.playerData[i]["name"]}
        pos1={pos1}
        pos2={pos2}
        pos3={pos3}
        pers={pers}
        persAbility={persAbility}
        tokunou={tokunou}
        policy={this.state.playerData[i]["policy"]}
        reload={this.componentWillMount}
      />
    );
  }
  render() {
    return (
      <div>
        <header>
          <Sort
            id="sort"
            key="sort"
            sortValue={this.state.sort}
            changeSortState={this.changeSortState}
          />
          <Filter
            id="filter"
            key="filter"
            filterValue={this.state.filter}
            reflectFilter={this.reflectFilter}
            resetFilterState={this.resetFilterState}
            changeYear={this.changeYear}
            changeState={this.changeState}
          />
        </header>
        <div id="wrap">
          <div id="playerwrap">
            {this.state.playerNumAry.map(i => this.renderPlayercard(i))}
          </div>
          <button onClick={this.allReset}>選手リセット</button>
        </div>
      </div>
    );
  }
}

export default Main;
