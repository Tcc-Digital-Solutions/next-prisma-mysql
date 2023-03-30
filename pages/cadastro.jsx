import { useState } from 'react'
import { mutate } from 'swr'

export default function Cadastro(){
    const [newLanguage, setNewLanguage] = useState('')

    const postLanguage = async () =>{
        await fetch('./api/language', {
            method: 'POST',
            body: JSON.stringify({newLanguage}),
            headers: {'Content-Type': 'application/json'}
        })
        mutate('./api/language')
    }  

    return(
        <>
            <form method="POST">
                <input type='text' name="language" value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)} required/>
                <input type="submit" value='cadastrar' onClick={postLanguage}/>
            </form>
        </>
    )
}