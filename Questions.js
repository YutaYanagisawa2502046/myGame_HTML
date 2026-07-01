// Questions.js

// L1 看板
const level1Questions = [
  ["Fruit", "Sell", "Shop"],        
  ["Tea", "Buy", "Shop"],
  ["Bread", "Buy", "Shop"],
  ["Stone", "Buy", "Shop"],
  ["River", "Find", "Cave"]
];

const level2Questions = [
  ["Please", "Buy", "Bread"],
  ["Help", "Please"],
  ["Where", "Buy", "Tea"],
  ["Need", "Water", "Drink"],
  ["Who", "Guard", "Castle"]
];

const level3Questions = [
  ["Cat", "Drink", "Water"],
  ["Bird", "Fly", "Sky"],
  ["Dog", "Run", "Home"],
  ["Tree", "See", "River"],
  ["Child", "Find", "Light"]
];

const level4Questions = [
  ["Big", "Stone", "Carry"],
  ["Red", "Wear", "Shop"],
  ["Happy", "Friend", "Talk"],
  ["Dark", "Night", "Sky"],
  ["Small", "Magic", "Potion"]
];

const level5Questions = [
  ["Magic", "Potion", "Quest", "Guard"],       // 魔法 ポーション クエスト 守る
  ["Enemy", "Attack", "Boss", "Gate"],         // 敵 攻撃 ボス 門
  ["Monster", "Protect", "Treasure", "Temple"],// モンスター 守る 宝物 寺
  ["Spell", "Cast", "Barrier", "Night"],       // 呪文 詠唱 防壁 夜
  ["Guardian", "Defend", "Ancient", "Ruins"]   // 守護者 防御 古代 遺跡
];

const questionLevels = {
    1: level1Questions,
    2: level2Questions,
    3: level3Questions,
    4: level4Questions,
    5: level5Questions
};

let currentLevel = 1;
let currentQuestionWords = [];
let englishToSecret = {};

function getRandomQuestion(level) {
    const questions = questionLevels[level] || level1Questions;
    return questions[Math.floor(Math.random() * questions.length)];
}

function makeProblemText(words) {
    return words.map(word => englishToSecret[word] || word).join(' ');
}

function nextProblem() {
    currentQuestionWords = getRandomQuestion(currentLevel);
    document.getElementById('problem').innerText = '看板: ' + makeProblemText(currentQuestionWords);
    document.getElementById('input').value = '';
}

