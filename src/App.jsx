import {RoutesJS} from './routes'
import VLibras from '@djpfs/react-vlibras';
             

function App() {

  return (
    <div>
      <RoutesJS />
      <VLibras forceOnload={true}   />
    </div>
  )
}

export default App