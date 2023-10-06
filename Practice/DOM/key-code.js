const insert = document.getElementById("insert");
console.log(insert);

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <table style="width:70vw">
    <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Key Name</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </tabel>
  `;
});
