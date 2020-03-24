const PiratesController = require("../controllers/pirates.controller");

module.exports = app => {
    app.get("/api/pirates", PiratesController.findAllPirates);
    app.get("/api/pirates/:id", PiratesController.findOnePirate);
    app.put("/api/pirates/edit/:id", PiratesController.updatePirate);
    app.post("/api/pirates/create", PiratesController.CreatePirate);
    app.delete("/api/pirates/delete/:id", PiratesController.DeletePirate);
};