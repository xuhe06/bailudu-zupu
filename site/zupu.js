// 族谱检索：只按大名查。乳名不录（见 docs/凡例.md）
let PEOPLE = [];

fetch('zupu.json').then(r => r.json()).then(list => { PEOPLE = list; });

function search(name) {
  const q = name.trim();
  return q ? PEOPLE.filter(p => p.name.includes(q)) : [];
}
