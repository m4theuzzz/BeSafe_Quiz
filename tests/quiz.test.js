const assert = (expected, received) => {
    return expected == received;
};

const testQuizLength = () => {
    const actualQuizLength = 10; //mock
    const expectedQuizLength = 8; //mock
    return assert(expectedQuizLength, actualQuizLength);
}

const testQuizCorrectAnswer = () => {
    const correctAnswerIndex = 1; //mock
    const expectedCorrectAnswer = 1; //mock
    return assert(expectedCorrectAnswer, correctAnswerIndex);
}

const testQuizIncorrectAnswer = () => {
    const incorrectAnswerIndex = 0; //mock
    const expectedCorrectAnswer = 1; //mock
    return assert(expectedCorrectAnswer, incorrectAnswerIndex);
}

const testHitRate = () => {
    const hits = 10; //mock
    const misses = 6; //mock
    const collectedHitRate = 62.5;//mock
    const expectedHitRate = (hits / (hits + misses)) * 100;
    return assert(expectedHitRate, collectedHitRate);
}