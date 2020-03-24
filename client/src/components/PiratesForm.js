import React, { useState } from 'react';
// import axios from 'axios';
// import {Link} from "@reach/router";

const PirateForm = props => {
    // const [form, setForm] = useState({
    //     name: "",
    //     image: "",
    //     crewPosition: true,
    //     numberOfTreasureChests: "0",
    //     catchPhrase: "",
    //     disability: true
    // })
    const { onSubmitHandler, initialName, initalCrewPosition, initalNumberOfTreasureChests, initalCatchPhrase, initalDisability } = props;
    const [name, setName] = useState(initialName);
    const [crewPosition, setCrewPosition] = useState(initalCrewPosition);
    const [numberOfTreasureChests, setNumberOfTreasureChests] = useState(initalNumberOfTreasureChests);
    const [catchPhrase, setCatchPhrase] = useState(initalCatchPhrase);
    const [disability, setDisability] = useState({
        pegLeg: true,
        hookHand: true,
        eyePatch: true
    });
    return (
        <form onSubmit={e => { onSubmitHandler(e, {name, crewPosition, numberOfTreasureChests, catchPhrase, disability}) }} >
            <p>
                <label>Name</label>
                <input type="text" value={name} name="name" onChange={(e) => { setName(e.target.value) }} />
            </p>
            <p>
                <label>Image URL</label>
                <input type="url" name="profilepic" />
            </p>
            <p>
                <label># of Treasure Chests</label>
                <input type="text" value={numberOfTreasureChests} name="treasure" onChange={(e) => { setNumberOfTreasureChests(e.target.value) }} />
            </p>
            <p>
                <label>Catch Phrase</label>
                <input type="text" value={catchPhrase} name="catchPhrase" onChange={(e) => { setCatchPhrase(e.target.value) }} />
            </p>
            <p>
                <label htmlFor ="crewPosition">Crew Position</label>
                <select value={crewPosition} onChange={(e) => { setCrewPosition(e.target.value) }} name="crewPosition">
                    <option value ="captain">Captain</option>
                    <option value ="firstmate">First Mate</option>
                    <option value ="gunner">Gunner</option>
                    <option value ="boatswain">Boatswain</option>
                    <option value ="sailingmaster">Sailing Master</option>
                </select>
            </p>
            <p>
                <label>Disability</label><br/>
                <input type ="checkbox" name="pegLeg" checked={disability.pegLeg} onChange={(e) => {setDisability({...disability, pegLeg:e.target.checked})}} />Peg Leg<br/>
                <input type ="checkbox" name="hookHand" checked={disability.hookHand} onChange={(e) => {setDisability({...disability, hookHand:e.target.checked})}}/>Hook Hand<br/>
                <input type ="checkbox" name="eyePatch" checked={disability.eyePatch} onChange={(e) => {setDisability({...disability, eyePatch:e.target.checked})}}/>Eye Patch<br/>
            </p>
            <input type="submit" />
        </form>
    )
}


export default PirateForm;