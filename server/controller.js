const database = [{ name: 'dog', power: 10 },
                  { name: 'lion', power: 10 },
                  { name: 'cat', power: 10 }]


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
    },
    getFortune: (req, res) => {
        const fortunes = ["A friend asks only for your time, not your money", "A hunch is creativity trying to tell you something", "A short pencil is usually better than a long memory any day"]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    submitAnimal: (req, res) => {
        const {name, power} = req.body

        
        let newAnimal = {
            name,
            power: +power
        }
        

        database.push(newAnimal)

        res.status(200).send(database)

    },
    updatePower: (req, res) => {
        const {name, newPower} = req.body

        const filtered = database.filter(elem => {
            return elem.name === name
        })

        filtered[0].power = +newPower

        res.status(200).send('power updated')
        


    },

    deleteAnimal: (req, res) => {

        const {animal} = req.params

        for(let i = 0; i < database.length; i++) {
            if(database[i].name === animal) {
                database.splice(i, 1)
            } 
        }
        res.status(200).send(database)
    }



    














}
