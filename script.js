const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const atextEl = $('.a-text');
const btextEl = $('.b-text');

const headerTitle = $('.header-title');
const submitBtn = $('.js-submit');
const ratingHeaderEl = $('.js-rating');
const answerEls = $$('.answer');

let currentIndex = 0;
let score = 0;

var listQuestion = [
    {
        question: 'Hãm',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Ẳn ở luộm thuộm',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Bảo thủ',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Nói tục chửi bậy',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Lười',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Sĩ diện hão',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Giờ cao su',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Thiếu trách nhiệm, thiếu thực tế',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Đua đòi',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
    {
        question: 'Ảo tưởng',
        a: 'Có',
        b: 'Không',
        correct: 'b',
    },
];

function loadQues() {
    deSelected();
    const listQuestionData = listQuestion[currentIndex];

    headerTitle.innerHTML = listQuestionData.question;

    atextEl.innerHTML = listQuestionData.a;
    btextEl.innerHTML = listQuestionData.b;
}

function getSelected() {
    let answerChecked = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerChecked = answerEl.id;
        }
    });
    return answerChecked;
}

function deSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.onclick = function () {
    const listQuestionLength = listQuestion.length;

    let answered = getSelected();
    if (answered) {
        if (answered === listQuestion[currentIndex].correct) {
            score++;
        }
        currentIndex++;
        if (currentIndex < listQuestionLength) {
            loadQues();
        } else {
            ratingHeaderEl.innerHTML = `<h1 class="header-title">Điểm đánh giá là ${score}/${listQuestionLength}</h1>`
            // <button class="rating-btn js-submit"onclick="location.reload()">Reload</button>`;

            // switch (score) {
            //         case 1:
            //         case 2:
            //         case 3:
            //             JSquiz.innerHTML = `<h2 class="question">Điểm đánh giá là ${score}/${listQuestionLength}. Người này là 1 người có khá nhiều tật xấu</h2>
            //             <button class="submit" onclick="location.reload();">Reload</button>`;
            //             break;
            //         case 4:
            //         case 5:
            //         case 6:
            //             JSquiz.innerHTML = `<h2 class="question">You finished quiz. Correct question ${score}/${listQuizlength}. </h2>
            //                     <button class="submit" onclick="location.reload();">Reload</button>`;
            //             break;
            //         default:
            //             JSquiz.innerHTML = `<h2 class="question">You finished quiz</h2>
            //                     <button class="submit" onclick="location.reload();">Reload</button>`;
            //             break;
            //     }
            // }
        }
    }
}

loadQues();