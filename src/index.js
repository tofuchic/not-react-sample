import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、空にする
  const inputText = document.getElementById("add-text").value;
  if (inputText !== "") {
    document.getElementById("add-text").value = "";

    // li作成
    const li = document.createElement("li");
    document.getElementById("incomplete-list").appendChild(li);

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
      const moveTarget = completeButton.parentNode.parentNode;
      moveTarget.childNodes[0].childNodes[1].remove();
      moveTarget.childNodes[0].childNodes[1].remove();
      const returnButton = document.createElement("button");
      returnButton.innerText = "戻す";
      returnButton.addEventListener("click", () => {
        const moveTarget = returnButton.parentNode.parentNode;
        moveTarget.childNodes[0].childNodes[1].remove();
        moveTarget.childNodes[0].appendChild(completeButton);
        moveTarget.childNodes[0].appendChild(deleteButton);
        document.getElementById("incomplete-list").appendChild(moveTarget);
      });
      moveTarget.childNodes[0].appendChild(returnButton);
      document.getElementById("complete-list").appendChild(moveTarget);
      // appendの後にremoveする必要はない
      // document.getElementById("incomplete-list").removeChild(moveTarget);
    });
    div.appendChild(completeButton);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      const deleteTarget = deleteButton.parentNode.parentNode;
      document.getElementById("incomplete-list").removeChild(deleteTarget);
    });
    div.appendChild(deleteButton);
  }
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
