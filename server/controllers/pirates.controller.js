const Pirate = require('../models/pirates.model');

module.exports.CreatePirate = (req, res) => {
    console.log("logging request within create pirate function", req.body);
    const { name, crewPostion, numberOfTreasureChests, catchPhrase, disability } = req.body;
    Pirate.create({
        name, crewPostion, numberOfTreasureChests, catchPhrase, disability
    })
        .then(newPirate => { res.json(newPirate) })
        .catch(err => { res.status(500).json(err) })
};

module.exports.updatePirate = (req, res) => {
    const { id } = req.params;
    const { name, crewPostion, numberOfTreasureChests, catchPhrase, disability } = req.body;

    Pirate.findOneAndUpdate({_id: id}, {
        name, crewPostion, numberOfTreasureChests, catchPhrase, disability
    },
        {
        new: true,
        useFindAndModify: true
        }
    )
    .then(pirate => { res.json(pirate) })
    .catch(err => { res.json(500).json(err); })
};

module.exports.DeletePirate = (req, res) => {
    const { id } = req.params;
    Pirate.deleteOne({_id: id})
    .then(deleteConfirmation => {
        res.json(deleteConfirmation);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then(pirates => res.json ({ pirates: pirates }))
        .catch(err => res.json ({ message: "Something is wrong!", error:err}));
};

module.exports.findOnePirate = (req, res) => {
    const { id } = req.params;
    Pirate.findOne ({ _id: id })
    .then(onePirate => { res.json(onePirate) })
    .catch(err => { res.status(500).json(err); })
};