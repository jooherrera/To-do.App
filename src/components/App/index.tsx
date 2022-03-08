import './App.css'
import { Provider, context } from '../../context'
import { AppUI } from './AppUI'

function App() {
  return (
    <Provider>
      <AppUI />
    </Provider>
  )
}

export default App
