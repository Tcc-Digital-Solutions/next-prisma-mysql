import useSWR from 'swr'

export default function Detalhe(){
    const fetcher = (...args) =>  fetch(...args, { method:'GET' }).then(res => res.json())
    // const { data, error, isLoading } = useSWR(`./api/language/${id}`, fetcher, { refreshInterval: 0 }) 

    return(
        <>
            {/* {data?.map((l) =>( */}
                <h1>l.language</h1>
                
            {/* ))} */}
        </>
    )

}