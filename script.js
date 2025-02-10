const quizData = {
    id: "quiz1",
    questions: [
      { id: 1, text: "1+1 ได้เท่าไหร่?", choices: ["1", "2", "3", "4"], correct: "2" },
      { id: 2, text: "สีของท้องฟ้าคืออะไร?", choices: ["แดง", "น้ำเงิน", "เขียว", "เหลือง"], correct: "น้ำเงิน" },
      { id: 3, text: "5x5 ได้เท่าไหร่?", choices: ["10", "20", "25", "30"], correct: "25" },
      { id: 4, text: "กรุงเทพฯ เป็นเมืองหลวงของประเทศใด?", choices: ["ลาว", "กัมพูชา", "ไทย", "พม่า"], correct: "ไทย" },
      { id: 5, text: "สัตว์ชนิดใดเป็นสัตว์เลี้ยงลูกด้วยนม?", choices: ["ปลา", "ไก่", "สุนัข", "จิ้งจก"], correct: "สุนัข" },
      { id: 6, text: "2+2 ได้เท่าไหร่?", choices: ["3", "4", "5", "6"], correct: "4" },
      { id: 7, text: "ดวงอาทิตย์ขึ้นจากทิศไหน?", choices: ["ทิศเหนือ", "ทิศใต้", "ทิศตะวันออก", "ทิศตะวันตก"], correct: "ทิศตะวันออก" },
      { id: 8, text: "ม้าเป็นสัตว์ชนิดใด?", choices: ["สัตว์เลี้ยงลูกด้วยนม", "สัตว์ปีก", "สัตว์น้ำ", "สัตว์เลื้อยคลาน"], correct: "สัตว์เลี้ยงลูกด้วยนม" },
      { id: 9, text: "น้ำในทะเลมีสีอะไร?", choices: ["ฟ้า", "เขียว", "ใส", "เทา"], correct: "ฟ้า" },
      { id: 10, text: "เครื่องดื่มที่ทำจากผลไม้คืออะไร?", choices: ["น้ำผลไม้", "น้ำชา", "น้ำตาล", "น้ำซุป"], correct: "น้ำผลไม้" },
      { id: 11, text: "แม่น้ำยาวที่สุดในโลกคือ?", choices: ["แม่น้ำไนล์", "แม่น้ำแอมะซอน", "แม่น้ำมิสซิสซิปปี", "แม่น้ำฮวงโห"], correct: "แม่น้ำไนล์" },
      { id: 12, text: "อากาศที่ร้อนที่สุดในโลกอยู่ที่ไหน?", choices: ["อเมริกา", "อิหร่าน", "คูเวต", "ไทย"], correct: "คูเวต" },
      { id: 13, text: "คำที่ใช้บ่งบอกความเร็วของรถยนต์คือ?", choices: ["เมตร", "ไมล์", "กิโลเมตร", "ชั่วโมง"], correct: "กิโลเมตร" },
      { id: 14, text: "พระอาทิตย์ขึ้นตอนเช้าจากทิศไหน?", choices: ["ทิศตะวันออก", "ทิศตะวันตก", "ทิศเหนือ", "ทิศใต้"], correct: "ทิศตะวันออก" },
      { id: 15, text: "ทวีปไหนที่มีพื้นที่ใหญ่ที่สุดในโลก?", choices: ["เอเชีย", "อเมริกา", "แอฟริกา", "ยุโรป"], correct: "เอเชีย" },
      { id: 16, text: "ไม้ชนิดไหนที่ให้ผลไม้เป็นที่นิยมมากที่สุดในประเทศไทย?", choices: ["มะพร้าว", "มะม่วง", "กล้วย", "ทุเรียน"], correct: "ทุเรียน" },
      { id: 17, text: "ภูเขาที่สูงที่สุดในโลกคือ?", choices: ["ภูเขาฟูจิ", "เทือกเขาหิมาลัย", "ภูเขาเอเวอเรสต์", "ภูเขามอนต์บลังค์"], correct: "ภูเขาเอเวอเรสต์" },
      { id: 18, text: "จำนวนคนในโลกขณะนี้ประมาณกี่พันล้าน?", choices: ["7 พันล้าน", "8 พันล้าน", "6 พันล้าน", "5 พันล้าน"], correct: "7 พันล้าน" },
      { id: 19, text: "เมืองหลวงของประเทศไทยคือ?", choices: ["เชียงใหม่", "กรุงเทพฯ", "ขอนแก่น", "ภูเก็ต"], correct: "กรุงเทพฯ" },
      { id: 20, text: "สัตว์ชนิดใดที่สามารถบินได้?", choices: ["ม้า", "สุนัข", "นก", "ปลาหมึก"], correct: "นก" },
    ],
    timeLimit: 60,
    passingScore: 60,
};

let userAnswers = {};
let timeLeft = quizData.timeLimit;
let timer;

// ฟังก์ชันสุ่มคำถามจากทั้งหมด
function getRandomQuestions(numQuestions) {
    const shuffledQuestions = quizData.questions.sort(() => Math.random() - 0.5); // สุ่มคำถาม
    return shuffledQuestions.slice(0, numQuestions); // เลือก 5 คำถามแรก
}

// ฟังก์ชันเริ่มต้นควิซ
function startQuiz() {
    userAnswers = {};
    timeLeft = quizData.timeLimit;
    const selectedQuestions = getRandomQuestions(5); // สุ่ม 5 คำถาม
    displayQuestions(selectedQuestions);
    startTimer();
}

// ฟังก์ชันแสดงคำถาม
function displayQuestions(questions) {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    questions.forEach(q => {
        let choicesHtml = q.choices.map(choice => 
            `<button onclick="selectAnswer(${q.id}, '${choice}')">${choice}</button>`
        ).join(" ");
        quizContainer.innerHTML += `<div><p>${q.text}</p>${choicesHtml}</div>`;
    });
}

// ฟังก์ชันเลือกคำตอบ
function selectAnswer(questionId, answer) {
    userAnswers[questionId] = answer;
}

// ฟังก์ชันคำนวณคะแนน
function calculateScore() {
    let correctCount = 0;
    const selectedQuestions = getRandomQuestions(5); // เลือกคำถามที่สุ่มมาใหม่
    selectedQuestions.forEach(q => {
        if (userAnswers[q.id] === q.correct) {
            correctCount++;
        }
    });
    return (correctCount / selectedQuestions.length) * 100;
}

// ฟังก์ชันแสดงผลลัพธ์
function showResults() {
    clearInterval(timer);
    const score = calculateScore();
    alert(`คุณได้คะแนน: ${score}%`);
}

// ฟังก์ชันจับเวลา
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `เหลือเวลา: ${timeLeft} วินาที`;
        if (timeLeft <= 0) {
            showResults();
        }
    }, 1000);
}

// ฟังก์ชันเริ่มทำข้อสอบใหม่
function resetQuiz() {
    userAnswers = {};
    timeLeft = quizData.timeLimit;
    document.getElementById("timer").innerText = `เหลือเวลา: ${timeLeft} วินาที`;
    document.getElementById("quiz-container").innerHTML = "";
    startQuiz();
}
