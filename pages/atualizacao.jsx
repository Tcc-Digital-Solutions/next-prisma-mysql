import { useState } from "react"
import { mutate } from "swr"
export default function atualizacao(){
    const [id, setID] = useState(0)
    const [newLanguage, setNewLanguage] = useState('')

    const updateLanguage = async () => {
        fetch('api/languages', {
            method: 'PUT',
            body: JSON.stringify({id, newLanguage}),
            headers: {'Content-Type': 'application/json'}
        })
        mutate('api/languages')
    }
    return(
        <>
            <input type='number' name='id' value={id} onChange={(e) => setID(e.target.value)} required/>
            <input type='text' name='language' value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)} required/>
            <input type='submit' onClick={updateLanguage}/>
        </>
    )
}