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
    this.state = {
      sort: 0,
      filter: {
        year1: "", year2: "",
        pos: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false },
        pers: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, }
      },
    };
    this.playerData = this.readJson();

    this.resetFilterState = this.resetFilterState.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeSortState = this.changeSortState.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  readJson() {
    const data = {
      "player": [
        {
          "year": "2017",
          "name": "大山",
          "pos1": "5",
          "pos2": "3",
          "pos3": "7",
          "pers": "0",
          "tokunou": [
            1,
            2,
            4,
            6
          ],
          "policy": "自由記述",
          "isPitcher": false
        },
        {
          "year": "2017",
          "name": "才木",
          "pos1": "1",
          "pos2": "0",
          "pos3": "0",
          "pers": "4",
          "tokunou": [
            1,
            2,
            4,
            6
          ],
          "policy": "育成方針",
          "isPitcher": true
        },
        {
          "year": "2015",
          "name": "青柳",
          "pos1": "1",
          "pos2": "0",
          "pos3": "0",
          "pers": "2",
          "tokunou": [
            1,
            2,
            4,
            6
          ],
          "policy": "育成方針",
          "isPitcher": true
        },
        {
          "year": "2015",
          "name": "高山",
          "pos1": "7",
          "pos2": "0",
          "pos3": "0",
          "pers": "4",
          "tokunou": [
            1,
            2,
            4,
            6
          ],
          "policy": "育成方針",
          "isPitcher": false
        },
        {
          "year": "2009",
          "name": "原口",
          "pos1": "3",
          "pos2": "2",
          "pos3": "0",
          "pers": "1",
          "tokunou": [
            1,
            2,
            4,
            6
          ],
          "policy": "育成方針",
          "isPitcher": false
        }
      ]
    }

    for (let i = 0; i < Object.keys(data["player"]).length; i++) {
      localStorage.setItem(i, JSON.stringify(data["player"][i]));
    }
    let playerData = [];
    for (let j = 0; j < Object.keys(data["player"]).length; j++) {
      playerData.push(JSON.parse(localStorage.getItem(j)));
    }
    return playerData;
  }
  changeYear(e) {
    const copiedAry = JSON.parse(JSON.stringify(this.state.filter));
    const name = e.target.name;
    copiedAry[name] = e.target.value;
    this.setState({
      filter: copiedAry,
    });
  }
  changeState(e) {
    const copiedAry = JSON.parse(JSON.stringify(this.state.filter));
    const num = e.target;
    copiedAry[num.name][num.value] = !copiedAry[num.name][num.value];
    this.setState({
      filter: copiedAry,
    });
  }
  resetFilterState() {
    const resetState = { year1: "", year2: "", pos: [], pers: [] };
    this.setState({ filter: resetState, });
  }
  changeSortState(e) {
    this.setState({ sort: e.target.value });
  }
  renderPlayercard(i) {
    const pos1 = this.posname[this.playerData[i]["pos1"]];
    const pos2 = this.posname[this.playerData[i]["pos2"]];
    const pos3 = this.posname[this.playerData[i]["pos3"]];
    const pers = this.persname[this.playerData[i]["pers"]];
    const persAbility = this.playerData[i]["isPitcher"] ? this.persPitcher[this.playerData[i]["pers"]] : this.persFielder[this.playerData[i]["pers"]];
    const tokunou = this.playerData[i]["isPitcher"] ?
      this.playerData[i]["tokunou"].map((i) => this.pitcherTokunou[i]) + "" :
      this.playerData[i]["tokunou"].map((i) => this.fielderTokunou[i]) + "";
    return (
      <PlayerCard
        year={this.playerData[i]["year"]}
        name={this.playerData[i]["name"]}
        pos1={pos1}
        pos2={pos2}
        pos3={pos3}
        pers={pers}
        persAbility={persAbility}
        tokunou={tokunou}
        policy={this.playerData[i]["policy"]}
      />
    );
  }
  render() {
    return (
      <div>
        <header>
          <Sort id="sort" key={1} sortValue={this.state.sort} changeSortState={this.changeSortState} />
          <Filter id="filter" key={2} filterValue={this.state.filter} resetFilterState={this.resetFilterState} changeYear={this.changeYear} changeState={this.changeState} />
        </header>
        <div id="wrap">
          <div id="playerwrap">
            {this.playerData.map((value, index) => this.renderPlayercard(index))}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;