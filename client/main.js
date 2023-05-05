
const complimentBtn = document.getElementById("complimentButton")
const animalForm = document.getElementById('animal-form')
const fortuneButton = document.querySelector('#fortuneButton')
const animalName = document.getElementById('a-name')
const animalPower = document.getElementById('a-power')
const updateForm = document.getElementById('put-form')
const newName = document.getElementById('update-name-input')
const newPwr = document.getElementById('update-power-input')
const deleteInput = document.getElementById('delete-animal-input')
const deleteForm = document.getElementById('delete-form')





const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/get-fortune")
    .then(res => {
        const data = res.data
        alert(data)
    })
    .catch(err => {
        console.log(err.message)
    })
}

postAnmial = (e) => {
    e.preventDefault()

let formBod = {
    name: animalName.value,
    power: animalPower.value
}
    console.log(formBod)
axios.post('http://localhost:4000/api/submit-animal', formBod)
.then((response) => {
    console.log(response.status,response.data)
    
})
.catch((err) => {
    console.log(err)
})
}

updatePower = (e) => {
    e.preventDefault()
    let body = {
        name: newName.value,
        newPower: newPwr.value
    }
    console.log(body)
    axios.put('http://localhost:4000/api/update-power', body)
    .then(res => alert(res.data))
    .catch(err => console.log(err))
}

deleteAnimal = (e) => {
    e.preventDefault()
    let deleteVar = deleteInput.value
    axios.delete(`http://localhost:4000/api/delete/${deleteVar}`)
    .then(res => {
        alert(`${deleteVar} deleted`)
        console.log(res.data)
    })
    .catch(err => console.log(err))
}



animalForm.addEventListener('submit', postAnmial)
fortuneButton.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
updateForm.addEventListener('submit', updatePower )
deleteForm.addEventListener('submit', deleteAnimal)