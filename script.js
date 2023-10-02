const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.src = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
       element.classList.add('correct') 
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1077-81-02.jpg?v=1696230881https://cdn.shopify.com/s/files/1/0629/4860/6180/files/SBR3587.jpg?v=1647385762',
        answers: [
            { text: 'Larimar', correct: true },
            { text: 'Abalone', correct: true },
            { text: 'Opal', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Diamond', correct: false },
            { text: 'White Mother of Pearl', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1174-61A-01.jpg?v=1694907573',
        answers: [
            { text: 'Cocobolo', correct: false },
            { text: 'Bocote', correct: false },
            { text: 'Koa Wood', correct: true },
            { text: 'Poplar', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1166-93-11.jpg?v=1694911793',
        answers: [
            { text: 'Larimar', correct: true },
            { text: 'Diamond', correct: false },
            { text: 'Pearl', correct: true },
            { text: 'Topaz', correct: true },
            { text: 'Opal', correct: false },
            { text: 'Tahitian Pearl', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1171-11-01.jpg?v=1694908691',
        answers: [
            { text: 'Diamond', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Sapphire', correct: true },
            { text: 'Opal', correct: false },
            { text: 'Aquamarine', correct: true },
            { text: 'Cubic Zirconia', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/975-12-01.jpg?v=1694904831',
        answers: [
            { text: 'Diamond', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Sapphire', correct: false },
            { text: 'Aquamarine', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-spellbound-rings-706806.jpg?v=1694658318',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Larimar', correct: true },
            { text: 'Topaz', correct: true },
            { text: 'Diamond', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/plumeria-bracelet-169888.jpg?v=1694658314',
        answers: [
            { text: 'Ruby', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Garnet', correct: true },
            { text: 'Topaz', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/September.jpg?v=1694648636',
        answers: [
            { text: 'Topaz', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Sapphire', correct: true },
            { text: 'Aquamarine', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/August.jpg?v=1694648069',
        answers: [
            { text: 'Tsavorite', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Peridot', correct: true },
            { text: 'Topaz', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/August.jpg?v=1694648069',
        answers: [
            { text: 'Tsavorite', correct: true },
            { text: 'Diamond', correct: true },
            { text: 'Peridot', correct: false },
            { text: 'Topaz', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/March.jpg?v=1694647817',
        answers: [
            { text: 'Aquamarine', correct: true },
            { text: 'Diamond', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Topaz', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/February.jpg?v=1694646026',
        answers: [
            { text: 'White Pearl', correct: false },
            { text: 'Akoya Pearl', correct: false },
            { text: 'Tahitian Pearl', correct: true },
            { text: 'Freshwater Pearl', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-reuleaux-stud-earrings-416272.jpg?v=1693370319',
        answers: [
            { text: 'White Opal', correct: false },
            { text: 'Ocean Blue Opal', correct: false },
            { text: 'Maui Lavender Opal', correct: true },
            { text: 'Pink Opal', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-reuleaux-stud-earrings-477544.jpg?v=1693370294',
        answers: [
            { text: 'White Opal', correct: false },
            { text: 'Ocean Blue Opal', correct: false },
            { text: 'Maui Lavender Opal', correct: false },
            { text: 'Pink Opal', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-reuleaux-stud-earrings-657258.jpg?v=1693370291',
        answers: [
            { text: 'White Opal', correct: true },
            { text: 'Ocean Blue Opal', correct: false },
            { text: 'Maui Lavender Opal', correct: false },
            { text: 'Pink Opal', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-gold-dust-day-gecko-pendant-427078.jpg?v=1693279797',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Larimar', correct: true },
            { text: 'Turquoise', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-hanalei-honu-earrings-861694.jpg?v=1693265772',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Larimar', correct: true },
            { text: 'Turquoise', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-plumeria-charm-bracelet-544925.jpg?v=1692673267',
        answers: [
            { text: 'Opal', correct: true },
            { text: 'Sapphire', correct: false },
            { text: 'Larimar', correct: false },
            { text: 'Turquoise', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-plumeria-ring-440128.jpg?v=1692673257',
        answers: [
            { text: 'White Opal', correct: false },
            { text: 'Ocean Blue Opal', correct: false },
            { text: 'Maui Lavender Opal', correct: true },
            { text: 'Pink Opal', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-plumeria-ring-440128.jpg?v=1692673257',
        answers: [
            { text: 'White Opal', correct: false },
            { text: 'Ocean Blue Opal', correct: false },
            { text: 'Maui Lavender Opal', correct: true },
            { text: 'Pink Opal', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-plumeria-pendant-824273.jpg?v=1692673253',
        answers: [
            { text: 'White Opal', correct: false },
            { text: 'Ocean Blue Opal', correct: true },
            { text: 'Maui Lavender Opal', correct: false },
            { text: 'Pink Opal', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-plumeria-pendant-215662.jpg?v=1692413659',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Larimar', correct: true },
            { text: 'Turquoise', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/abalone-majestic-whale-tail-pendant-698994.jpg?v=1692413655',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Larimar', correct: false },
            { text: 'Abalone', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-waterfall-oval-pendant-260088.jpg?v=1691552991',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Larimar', correct: true },
            { text: 'Abalone', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-mirage-pendant-691173.jpg?v=1691553001',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Larimar', correct: true },
            { text: 'Abalone', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-hawaiian-ti-leaf-pendant-827749.jpg?v=1691466217',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Larimar', correct: true },
            { text: 'Abalone', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/larimar-hawaiian-ti-leaf-pendant-525515.jpg?v=1691466200',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Topaz', correct: false },
            { text: 'Larimar', correct: true },
            { text: 'Abalone', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/opal-dolphin-ohana-pendant-387051.jpg?v=1690528530',
        answers: [
            { text: 'Opal', correct: true },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Larimar', correct: false },
            { text: 'Abalone', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/honu-aloha-heart-pendant-280279.jpg?v=1690514258',
        answers: [
            { text: 'Sapphire', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Aquamarine', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Tsavorite', correct: false },
            { text: 'Citrine', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/products/pave-eagle-ray-earrings-265-12-01-495774.jpg?v=1689995258',
        answers: [
            { text: 'Sapphire', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Aquamarine', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Tsavorite', correct: false },
            { text: 'Citrine', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/larimar-royal-sun-pendant-673886.jpg?v=1630651535&width=3000',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Larimar', correct: true },
            { text: 'Abalone', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/14k-royal-larimar-earrings-651-22-01y-285589.jpg?v=1622502923&width=3000',
        answers: [
            { text: 'Ruby', correct: true },
            { text: 'Aquamarine', correct: false },
            { text: 'Citrine', correct: true },
            { text: 'Topaz', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Peridot', correct: true },
            { text: 'Tsavorite', correct: false },
            { text: 'Larimar', correct: true },
            { text: 'Opal', correct: false },
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/koa-button-jellyfish-pendant-638433.jpg?v=1624418101&width=3000',
        answers: [
            { text: 'Cocobolo', correct: false },
            { text: 'Bocote', correct: false },
            { text: 'Koa Wood', correct: true },
            { text: 'Poplar', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/koa-wood-bird-of-paradise-pendant-110200.jpg?v=1660862565&width=3000',
        answers: [
            { text: 'Cocobolo', correct: false },
            { text: 'Bocote', correct: false },
            { text: 'Koa Wood', correct: true },
            { text: 'Poplar', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/koa-wood-coconut-earrings-463778.jpg?v=1660897091&width=3000',
        answers: [
            { text: 'Cocobolo', correct: false },
            { text: 'Bocote', correct: false },
            { text: 'Koa Wood', correct: true },
            { text: 'Poplar', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/bocote-eagle-ray-pendant-620995.jpg?v=1686107020&width=3000',
        answers: [
            { text: 'Cocobolo', correct: false },
            { text: 'Bocote', correct: true },
            { text: 'Koa Wood', correct: false },
            { text: 'Poplar', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/cocobolo-blossom-pendant-320005.jpg?v=1686193535&width=3000',
        answers: [
            { text: 'Cocobolo', correct: true },
            { text: 'Bocote', correct: false },
            { text: 'Koa Wood', correct: false },
            { text: 'Poplar', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/abalone-atlantis-fishhook-pendant-881970.jpg?v=1683075924&width=3000',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Larimar', correct: false },
            { text: 'Abalone', correct: true }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/abalone-centered-cross-pendant-431988.jpg?v=1671855614&width=3000',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Larimar', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Abalone', correct: true }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/abalone-fountain-pendant-307156.jpg?v=1671855629&width=3000',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Topaz', correct: true },
            { text: 'Larimar', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Mother of Pearl', correct: false },
            { text: 'Abalone', correct: true }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/abalone-fountain-pendant-307156.jpg?v=1671855629&width=3000',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Mother of Pearl', correct: true },
            { text: 'Abalone', correct: true }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/mother-of-pearl-body-board-earrings-106-52-01-997950.jpg?v=1682132938&width=3000',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Mother of Pearl', correct: true },
            { text: 'Abalone', correct: true }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/14k-akoya-pearl-ombre-wave-earrings-780-22-31w-100063.jpg?v=1622503112&width=3000',
        answers: [
            { text: 'Pearl', correct: true },
            { text: 'Diamond', correct: true },
            { text: 'Sapphire', correct: false },
            { text: 'Aquamarine', correct: true },
            { text: 'Sapphire', correct: false },
            { text: 'Blue Topaz', correct: false }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/14k-tahitian-sun-rays-pendant-913-21-21y-342112.jpg?v=1622939493&width=3000',
        answers: [
            { text: 'Akoya Pearl', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Sapphire', correct: false },
            { text: 'Aquamarine', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Tahitian Pearl', correct: true }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/14k-tahitian-pearl-sun-pendant-659-21-21y-258806.jpg?v=1630375553&width=3000',
        answers: [
            { text: 'Akoya Pearl', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Sapphire', correct: false },
            { text: 'Yellow Diamond', correct: true },
            { text: 'Citrine', correct: false },
            { text: 'Tahitian Pearl', correct: true }
        ]
    },
    {
        question: 'https://islandbykoanani.com/cdn/shop/products/14k-golden-south-sea-pearl-sun-pendant-659-21-41w-871941.jpg?v=1628473843&width=3000',
        answers: [
            { text: 'South Sea Pearl', correct: true },
            { text: 'Diamond', correct: true },
            { text: 'Sapphire', correct: false },
            { text: 'Yellow Diamond', correct: true },
            { text: 'Citrine', correct: false },
            { text: 'Tahitian Pearl', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1151-21-01Y.jpg?v=1695076285',
        answers: [
            { text: 'Topaz', correct: false },
            { text: 'Citrine', correct: false },
            { text: 'Tsavorite', correct: true },
            { text: 'Yellow Diamond', correct: false },
            { text: 'Peridot', correct: false },
            { text: 'Diamond', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1149-21-01Y.jpg?v=1695091922',
        answers: [
            { text: 'Topaz', correct: false },
            { text: 'Sapphire', correct: true },
            { text: 'Blue Topaz', correct: false },
            { text: 'Aquamarine', correct: false },
            { text: 'Tsavorite', correct: false },
            { text: 'Diamond', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1148-21-01Y.jpg?v=1695092188',
        answers: [
            { text: 'Sapphire', correct: true },
            { text: 'Blue Topaz', correct: false },
            { text: 'Aquamarine', correct: false },
            { text: 'Tsavorite', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1145-21-01Y.jpg?v=1695094110',
        answers: [
            { text: 'Topaz', correct: false },
            { text: 'Yellow Diamond', correct: true },
            { text: 'Citrine', correct: false },
            { text: 'Aquamarine', correct: false },
            { text: 'Tsavorite', correct: false },
            { text: 'Diamond', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1133-71-01.jpg?v=1696234178',
        answers: [
            { text: 'Topaz', correct: false },
            { text: 'Garnet', correct: false },
            { text: 'Ruby', correct: true },
            { text: 'Opal', correct: false },
            { text: 'Abalone', correct: false },
            { text: 'Larimar', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1131-23-01Y.jpg?v=1696234249',
        answers: [
            { text: 'Topaz', correct: false },
            { text: 'Sapphire', correct: true },
            { text: 'Blue Topaz', correct: false },
            { text: 'Aquamarine', correct: false },
            { text: 'Tsavorite', correct: false },
            { text: 'Diamond', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1126-22-01Y.jpg?v=1696234345',
        answers: [
            { text: 'Topaz', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Blue Topaz', correct: false },
            { text: 'Aquamarine', correct: false },
            { text: 'Tsavorite', correct: true },
            { text: 'Diamond', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1125-21-01Y.jpg?v=1696234389',
        answers: [
            { text: 'Topaz', correct: false },
            { text: 'Black Diamond', correct: true },
            { text: 'Blue Topaz', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Tsavorite', correct: false },
            { text: 'Diamond', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1100-21-01Y.jpg?v=1696234510',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Shell', correct: true },
            { text: 'Larimar', correct: false },
            { text: 'Abalone', correct: false }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1121-21-01Y.jpg?v=1696234520',
        answers: [
            { text: 'Sapphire', correct: false },
            { text: 'Aquamarine', correct: true },
            { text: 'Blue Topaz', correct: false },
            { text: 'Sapphire', correct: false },
            { text: 'Tsavorite', correct: false },
            { text: 'Diamond', correct: true }
        ]
    },
    {
        question: 'https://cdn.shopify.com/s/files/1/0334/0002/9320/files/1115-22-01YW.jpg?v=1696234641',
        answers: [
            { text: 'Opal', correct: false },
            { text: 'Shell', correct: true },
            { text: 'Larimar', correct: false },
            { text: 'Abalone', correct: false }
        ]
    },
]