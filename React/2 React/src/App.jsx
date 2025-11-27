import './App.css'
import Element1 from './components/Element1/Element1'
import Element2 from './components/Element2/Element2'
import { Element3 } from './components/Element3/Element3'
import { SearchInput } from './components/SearchInput/SearchInput'
import SuperButton from './components/SuperButton/SuperButton'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>React</h1>
      <h2>Elements:</h2>
      <Element1 color={'red'}/>
      <Element1 color={'yellow'}>Element 1 test</Element1>
      <Element2/>
      <Element3/>

      <SuperButton title='Save' color='green' bg='blue'/>
      <SuperButton title='Ok' color='yellow' bg='blue'/>
      <SuperButton title='Error' color='red' bg='blue'/>
      <SuperButton title='Done' color='blue' bg='black'/>
      <SuperButton title='Censel' color='white' bg='black'/>


      {/* <SearchInput labelName='Person' placeholder='Enter name'/> */}
    </>
  )
}

export default App
