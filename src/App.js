import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [numberOfEntries, setNumberOfEntries] = useState(0)
  const [participants, setParticipants] = useState([])
  const [winner, setWinner] = useState("")

  useEffect(() => {
    const newParticipants = Array.from({ length: numberOfEntries }, (_, index) => ({
      id: index, 
      name: '', 
    }))
    setParticipants(newParticipants)
  }, [numberOfEntries])

  const handleChange = (e) => {
    setNumberOfEntries(e.target.value)
  }

  const handleParticipantNameChange = (e, index) => {
    const updatedParticipants = [...participants]
    updatedParticipants[index].name = e.target.value
    setParticipants(updatedParticipants)
  }

  const selectWinner = () => {
    let randomWinner = Math.floor(Math.random() * numberOfEntries)
    console.log(randomWinner)
    setWinner(participants[randomWinner].name)
  }

  console.log(numberOfEntries)
  console.log(participants)


  return (
    <>
      <h1>Random Winner</h1>
      <label>Select the number of participants</label>
      <input
        type="number"
        placeholder="Select the number of entries"
        onChange={handleChange}
      />
      <ol>
      {participants && participants.map((participant,index) => {
        return (
            <li key={participant.id}>
              <input
                type='text'
                placeholder="Participant"
                value={participant.name}
                onChange={(e) => handleParticipantNameChange(e,index)}
              />
            </li>
        )
      })}
      </ol>
      <button onClick={selectWinner}>Generate a winner</button>
      <p>{winner}</p>
    </>
  );
}

export default App