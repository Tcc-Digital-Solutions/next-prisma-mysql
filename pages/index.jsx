import useSWR, { mutate } from 'swr'
import { BsFillTrashFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const fetcher = (...args) =>  fetch(...args, { method:'GET'}).then(res => res.json())
  const { data, error, isLoading } = useSWR('./api/language', fetcher, { refreshInterval: 0 })
  
  if (error) return <p>Ocorreu um erro no carregamento</p>
  if (isLoading) return <p>Carregando...</p>

  const deletarLanguage = async (idLanguages, acao) => {
    const data = document.getElementsByClassName('teste')
    for (let i = 0; i < data.length; i++) {
      const id = data[i].value
      if(id == idLanguages){
        fetch('./api/language',{
            method: acao,
            body: JSON.stringify({id}),
            headers: {'Content-Type': 'application/json'},
            },
        )
        mutate('./api/language')
        router.reload(window.location.pathname)
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
          </li>
        ))}
      </ul>
    </>
  )
}