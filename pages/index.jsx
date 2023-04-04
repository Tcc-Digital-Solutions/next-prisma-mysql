import useSWR, { mutate } from 'swr'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiSkipNext } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const fetcher = (...args) =>  fetch(...args, { method:'GET' }).then(res => res.json())
  const { data, error, isLoading } = useSWR('./api/languages', fetcher, { refreshInterval: 0 })
  const [idRota, setIDRota] = useState(0)
  
  if (error) return <p>Ocorreu um erro no carregamento</p>
  if (isLoading) return <p>Carregando...</p>

  const deletarLanguage = async (idLanguages, acao) => {
    const data = document.getElementsByClassName('teste')
    for (let i = 0; i < data.length; i++) {
      const id = data[i].value
      if(id == idLanguages){
        fetch('./api/languages',{
            method: acao,
            body: JSON.stringify({id}),
            headers: {'Content-Type': 'application/json'},
            },
        )
        mutate('./api/languages')
        router.reload(window.location.pathname)
      }
    }
  }

  
  const pegar_id = (idLanguages) =>{
    const data = document.getElementsByClassName('teste')
    for (let i = 0;  i < data.length; i++){
      const id = data[i].value
      if(id == idLanguages){
        console.log(id)
      }
    }
  }

  return (
    <>
      <ul>
        {data?.map((l) =>(
          <li className='teste' value={l.idLanguages}>
            {l.language}
            <BsFillTrashFill onClick={() => deletarLanguage(l.idLanguages, 'DELETE')}/>
            <BiSkipNext onClick={() => pegar_id(l.idLanguages)}></BiSkipNext>
          </li>
        ))}
      </ul>
    </>
  )
}