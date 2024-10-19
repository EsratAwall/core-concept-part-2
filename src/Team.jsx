import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11)

    const playersAdd = () =>{
        // const newPlayers = team + 1;
        setTeam(team + 1)
    }

    const playersRemove = () =>{
        const newRemove = team - 1;
        setTeam(newRemove)
    }

    const teamStyle ={
        border:'2px solid red',
        margin:'14px',
        padding:'14px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={playersAdd}>Add Player</button>
            <button onClick={playersRemove}>Remove Player</button>
        </div>
    )
}