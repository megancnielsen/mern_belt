const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate is required"],
        minlength: [3, "Pirate name must be at least 3 characters"]
    },

    image: {
        type: String,
        required: [true, "Pic is required"],
    },

    crewPosition: {
        type: String,
        required: [true, "Crew position is required"],
        minlength: [3, "Must be at least 3 characters"]
    },

    numberOfTreasureChests: {
        type: Number,
        required: [true, "Must have treasure to be a pirate..."]
    },

    catchPhrase: {
        type: String,
        required: [true, "Catch phrase is required"],
        minlength: [3, "Must be at least 3 characters"]
    },

    disability: {
        //type: Boolean,
        pegLeg: { type: Boolean, default: true },
        eyePatch: { type: Boolean, default: true },
        hookHand: { type: Boolean, default: true },
        //required: [true, "Are you even a pirate if you aren't missing a body part, though?"]
    },

}, { timestamps: true });

module.exports = mongoose.model("Pirate", PirateSchema);