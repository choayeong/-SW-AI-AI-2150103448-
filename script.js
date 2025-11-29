// ⬇ 무역 용어 데이터셋
const terms = [
  {term:"FOB", definition:"본선 인도 조건 (Free On Board)"},
  {term:"CIF", definition:"운임 및 보험료 포괄조건 (Cost, Insurance and Freight)"},
  {term:"B/L", definition:"선하증권 (Bill of Lading)"},
  {term:"L/C", definition:"신용장 (Letter of Credit)"},
  {term:"Incoterms", definition:"국제 상업회의소 무역조건 규칙"},
  {term:"Demurrage", definition:"송하인 또는 수하인이 선박을 지체시켰을 때의 체선료"},
  {term:"Consignee", definition:"화물의 수하인 (물건을 받는 사람)"}
];

let index = 0;
let score = localStorage.getItem('tradeQuizScore')? Number(localStorage.getItem('tradeQuizScore')):0;

document.addEventListener("DOMContentLoaded", ()=>{ loadQuiz(); });

function loadQuiz(){
  const q=terms[index];
  document.getElementById('definition').innerText=q.definition;
  document.getElementById('answer').value='';
  document.getElementById('feedback').textContent='';
  document.getElementById('score').innerText=score;
}

function checkAnswer(){
  const ans=document.getElementById('answer').value.trim();
  const correct=terms[index].term;
  if(ans.toLowerCase()===correct.toLowerCase()){
    score++; localStorage.setItem('tradeQuizScore',score);
    feedback(`정답입니다! (+1점, 누적 ${score})`,"green");
  }else{ feedback(`오답 정답: ${correct}`,"red"); }
}

function feedback(msg,color){
  const f=document.getElementById('feedback');
  f.innerText=msg; f.style.color=color;
}

function nextQuiz(){
  index++;
  if(index>=terms.length){
    alert(`퀴즈 종료! 총 ${score}점`);
    restartQuiz();
  }else{ loadQuiz(); }
}

function restartQuiz(){
  index=0;
  loadQuiz();
}
