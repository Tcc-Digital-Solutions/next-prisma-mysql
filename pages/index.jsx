import useSWR from 'swr'
export default function Home() {
  const fetcher = (...args) =>  fetch('./api/language', { method:'GET'}).then(res => res.json())
  const { data, error, isLoading } = useSWR('./api/language', fetcher, { refreshInterval: 0 })
  
  if (error) return <p>Ocorreu um erro no carregamento</p>
  if (isLoading) return <p>Carregando...</p>
  return (
    <>
      <ul>
        {data?.map((language) =>(
          <li key={language.idLanguages}>{language.language}</li>
        ))}
      </ul>
    </>
  )
}
/**
 * COLOCAR SWR EM TODOS
 */