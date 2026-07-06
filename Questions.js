// Questions.js

const level0Questions = [
    {
        words: ["Hello", "Traveler", "Welcome"],
        desc: "街の前におかれている看板。親しみやすいデザインで彩られている"
    }
];

// Level1 看板
const level1Questions = [
  { 
    words: ["Fruit", "Sell", "Shop"], 
    desc: "ひび割れた木製の看板。果物の絵が描かれている。" 
  },        
  {
    words: ["Tea", "Buy", "Shop"],
    desc: "上品に見える色合いの看板。葉っぱの絵が描かれている"
 },
  {
    words:["Bread", "Buy", "Shop"],
    desc:"小さなパン屋の看板。パンの絵が描かれている。"
},
  {
    words:["Stone", "Buy", "Shop"],
    desc:"石の店の看板。石の絵が描かれている。"
},
  {
    words:["River", "Find", "Cave"],
    desc:"川の近くにある洞窟の看板。"
}
];

// Level2 会話
const level2Questions = [
  {
    words: ["Please", "Buy", "Bread"], 
    desc: "パンを押し付けて、頼んでくる"
},
  {
    words: ["Help", "Please"], 
    desc: "助けてください。"
},
  {
    words: ["Where", "Buy", "Tea"], 
    desc: "お茶を買うところはどこですか？"
},
  {
    words: ["Need", "Water", "Drink"], 
    desc: "水を飲みたいです。"
},
  {
    words: ["Who", "Guard", "Castle"], 
    desc: "城を守る人を訪ねているようだ。"
}
];

// Level3 絵本
const level3Questions = [
  {
    words: ["Cat", "Drink", "Water"],
     desc: "猫が水を飲んでいる絵だ。"
    },
  {
    words: ["Bird", "Fly", "Sky"],
     desc: "鳥が空を飛んでいる絵。"
    },
  {
    words: ["Dog", "Run", "Home"],
     desc: "犬が家を走っている絵。"
    },
  {
    words: ["Tree", "See", "River"], 
    desc: "木々が川を見ているように生えてる絵。"
},
  {
    words: ["Child", "Find", "Light"],
     desc: "子供が光を見つけた絵。"
    }
];

// Level4 辞書
const level4Questions = [
  {
    words: ["Big", "Stone", "Carry"],
     desc: "大きな石を運ぶ人が描かれている。"
    },
  {
    words: ["Red", "Wear", "Shop"],
     desc: "赤い服を買う人だ。"
    },
  {
    words: ["Happy", "Friend", "Talk"],
     desc: "嬉しそうに友達と話す絵だ。"
    },
  {
    words: ["Dark", "Night", "Sky"],
     desc: "光がほとんどない夜の空だ。"
    },
  {
    words: ["Small", "Magic", "Potion"],
     desc: "小さな魔法の薬が描かれている。"
    }
];

// Level5 遺跡の古文書
const level5Questions = [
  {
    words: ["Magic", "Potion", "Trial", "Guard"], 
    desc: "魔法の薬瓶を持ち、何か守っているものの前に立つ者の絵"
},
  {
    words: ["Enemy", "King", "Attack", "Gate"], 
    desc: "一際大きい敵が門に向かって剣を振り下ろす絵だ"
},
  {
    words: ["Monster", "Protect", "Treasure", "Temple"], 
    desc: "モンスターが寺の宝を守っている絵が描いてある"
},
  {
    words: ["Spell", "Cast", "Barrier", "Night"], 
    desc: "夜に詠唱された呪文により防壁が崩れる絵"
},
  {
    words: ["Guardian", "Defend", "Ancient", "Ruins"], 
    desc: "守護者が古代の遺跡を防御している絵"
}
];

const questionLevels = {
    0: level0Questions,
    1: level1Questions,
    2: level2Questions,
    3: level3Questions,
    4: level4Questions,
    5: level5Questions
};

let currentLevel = 0;
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
    // 現在のレベルからランダムに問題を取得
    const q = getRandomQuestion(currentLevel);
    currentQuestionWords = q.words;

    currentQuestionWords = q.words ? q.words : q;

    // オブジェクトを返して、表示は Index.html 側に任せる
    return q;
}

