import React from "react";
import "../App.css";

/*
下部に固定される「追加」ボタン
何らかの理由でaタグにしてるけど、ホントはbuttonタグのほうがいい。
onClickで入力データのチェック→localStorageに追加ってしたくても、
勝手に画面遷移される
*/
const AddBar = (props) => {
  return (
    <footer id="addbar">
      <button
        className="addButton"
        onClick={props.writeJson}>
        {props.year ? "追加" : "年度未入力"}
      </button>
    </footer>
  )
}

export default AddBar;