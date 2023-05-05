const database = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
    },
    getForutne: (req, res) => {
        const fortunes = [
    
        ]
        let randomIndex = Math.floor(math.random()) * compliments.length
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    submitAnimal: (req, res) => {
        const name = req.body.animalName
        const power = req.body.animalPower

        const newObj = {
            name: name,
            power: power
        }

        database.push(newObj)

        res.status(200).send(database)

    }
















}
