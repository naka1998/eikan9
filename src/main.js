import React from 'react';
import Sort from "./mainpage/sort";
import Filter from "./mainpage/filter";
import PlayerCard from "./mainpage/player";

class Main extends React.Component {
  constructor() {
    super();
    this.posname = ["なし", "投手", "捕手", "一塁手", "二塁手", "三塁手", "遊撃手", "外野手"];
    this.persname = ["天才肌", "ごくふつう", "お調子者", "やんちゃ", "クール", "したたか", "内気", "熱血漢"];
    this.persPitcher =
      ["全体的(めっちゃ伸びる)", "全体的(平均的)", "全体的(平均的)", "球速", "コントロール, 投球フォーム", "変化球覚える, 変化球みがく", "コントロール, 変化球覚える, 変化球みがく", "球速, スタミナ"];
    this.persFielder =
      ["全体的(めっちゃ伸びる)", "全体的(平均的)", "走力, 肩力", "弾道, パワー", "ミート, 守備位置変更, 打席変更, 打撃フォーム", "守備力, エラー回避", "エラー回避", "パワー"];
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
    this.state = {
      sort: 0,
      filter: {
        year1: "", year2: "",
        pos: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false },
        pers: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, },
      },
      playerData: this.readJson(),
      playerNumAry: [],
    }

    this.readJson = this.readJson.bind(this);
    this.resetFilterState = this.resetFilterState.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeSortState = this.changeSortState.bind(this);
    this.changeState = this.changeState.bind(this);
    this.allReset = this.allReset.bind(this);
  }
  //  初期化？できる
  //  constractor()の後に呼ばれるらしい
  componentWillMount() {
    const playerNum = Object.keys(this.state.playerData).length;
    this.setState({
      playerNum: playerNum,
      playerNumAry: Array.from(Array(playerNum).keys()),
    });
  }
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
  //  filterのyearが変更されたときの処理
  changeYear(e) {
    const copiedAry = JSON.parse(JSON.stringify(this.state.filter));
    const name = e.target.name;
    copiedAry[name] = e.target.value;
    this.setState({
      filter: copiedAry,
    });
  }
  //  filterのyear以外が変更されたときの処理
  changeState(e) {
    const copiedAry = JSON.parse(JSON.stringify(this.state.filter));
    const num = e.target;
    copiedAry[num.name][num.value] = !copiedAry[num.name][num.value];
    this.setState({
      filter: copiedAry,
    });
  }
  //  filterのresetボタンが押されたときの処理
  resetFilterState() {
    const resetState = { year1: "", year2: "", pos: [], pers: [] };
    this.setState({ filter: resetState, });
  }
  //  sortが変更されたときの処理
  changeSortState(e) {
    this.setState({ sort: e.target.value });
    let exArray = [];
    let sortedAry = [];
    switch (e.target.value) {
      case "0":
        exArray = this.makeAryYear();
        //  year が文字列のため、ascとdescが逆に働くっぽい
        sortedAry = this.sortByAsc(exArray);
        break;
      case "1":
        exArray = this.makeAryYear();
        sortedAry = this.sortByDesc(exArray);
        break;
      case "2":
        exArray = this.makeAryPos();
        sortedAry = this.sortByAsc(exArray);
        break;
      case "3":
        exArray = this.makeAryPos();
        sortedAry = this.sortByDesc(exArray);
        break;
      default:
        break;
    }
    sortedAry = this.extractAry(sortedAry);
    this.setState({
      playerNumAry: sortedAry,
    })
  }
  //  [i,year]の配列を返す
  makeAryYear() {
    let playerArray = JSON.parse(JSON.stringify(this.state.playerData));
    let exArray = [];
    for (let i = 0; i < this.state.playerNum; i++) {
      let ary = [];
      ary = [i, playerArray[i]["year"]];
      exArray.push(ary);
    }
    return exArray;
  }
  makeAryPos() {
    let playerArray = JSON.parse(JSON.stringify(this.state.playerData));
    let exArray = [];
    for (let i = 0; i < this.state.playerNum; i++) {
      let ary = [];
      ary = [i, playerArray[i]["pos"][0]];
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
    return outputAry;
  }
  //  選手リセットボタンが押されたときの処理
  allReset() {
    const result = window.confirm("全選手のデータがクリアされます\nよろしいですか？");
    if (result) {
      //  確認ダイアログ出して、OK押されるとlocalStorageがクリアされる
      localStorage.clear();
      this.setState({
        playerData: {},
        playerNum: 0,
        playerNumAry: [],
      });
      //  renderされなかったから強制的に再読込
      window.location.reload();
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
      ? this.state.playerData[i]["tokunou"].map((i) => this.pitcherTokunou[i]) + ""
      : this.state.playerData[i]["tokunou"].map((i) => this.fielderTokunou[i]) + "";
    return (
      <PlayerCard
        year={this.state.playerData[i]["year"]}
        name={this.state.playerData[i]["name"]}
        pos1={pos1}
        pos2={pos2}
        pos3={pos3}
        pers={pers}
        persAbility={persAbility}
        tokunou={tokunou}
        policy={this.state.playerData[i]["policy"]}
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
            changeSortState={this.changeSortState} />
          <Filter
            id="filter"
            key="filter"
            filterValue={this.state.filter}
            resetFilterState={this.resetFilterState}
            changeYear={this.changeYear}
            changeState={this.changeState} />
        </header>
        <div id="wrap">
          <div id="playerwrap">
            {this.state.playerNumAry.map((i) => this.renderPlayercard(i))}
          </div>
          <button onClick={this.allReset}>選手リセット</button>
        </div>
      </div >
    );
  }
}

export default Main;