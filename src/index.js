import "./styles.css";

const getNewIncompleteListRow = (inputText) => {
  // li作成
  const li = document.createElement("li");
  // div作成
  const div = document.createElement("div");
  div.className = "list-row";
  li.appendChild(div);
  // p作成
  const p = document.createElement("p");
  p.innerText = inputText;
  div.appendChild(p);
  // button作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    onClickMoveFromIncompleteList2CompleteList(li);
  });
  div.appendChild(completeButton);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    onClickDeleteFromIncompleteList(li);
  });
  div.appendChild(deleteButton);
  return li;
};

const getNewCompleteListRow = (inputText) => {
  // li作成
  const li = document.createElement("li");
  // div作成
  const div = document.createElement("div");
  div.className = "list-row";
  li.appendChild(div);
  // p作成
  const p = document.createElement("p");
  p.innerText = inputText;
  div.appendChild(p);
  // button作成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    onClickReturnFromCompleteList2IncompleteList(li);
  });
  div.appendChild(returnButton);
  return li;
};

const onClickAdd = () => {
  // テキストボックスの値を取得し、空にする
  const inputText = document.getElementById("add-text").value;
  if (inputText !== "") {
    document.getElementById("add-text").value = "";

    // li作成
    document
      .getElementById("incomplete-list")
      .appendChild(getNewIncompleteListRow(inputText));
  }
};

const onClickDeleteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
  deleteTarget = null;
};

const onClickMoveFromIncompleteList2CompleteList = (moveTarget) => {
  document
    .getElementById("complete-list")
    .appendChild(
      getNewCompleteListRow(moveTarget.childNodes[0].childNodes[0].innerText)
    );
  document.getElementById("incomplete-list").removeChild(moveTarget);
  moveTarget = null;
};

const onClickReturnFromCompleteList2IncompleteList = (moveTarget) => {
  document
    .getElementById("incomplete-list")
    .appendChild(
      getNewIncompleteListRow(moveTarget.childNodes[0].childNodes[0].innerText)
    );
  document.getElementById("complete-list").removeChild(moveTarget);
  moveTarget = null;
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
