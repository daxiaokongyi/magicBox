const changeBox = (answers) => {
    const randomIndex = Math.floor(Math.random() * answers.length)
    return answers[randomIndex];
}

export default changeBox;