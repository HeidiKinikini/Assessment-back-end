const { response } = require("express");

const complimentBtn = document.getElementById("complimentButton")
const animalForm = document.getElementById('animal-form')
const submitButton = document.getElementById('submit')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

let formBod = {
    name: animalName.value,
    power: animalPower.value
}

postAnmial () => {
axios.post('https://localhost:4000/api/submit-animal', formBod)
.then((response) => {
    const database = response.data
    console.log(database)
})
.catch(() => {

})}
submitButton.addEventListener('click', postAnmial)
complimentBtn.addEventListener('click', getCompliment)