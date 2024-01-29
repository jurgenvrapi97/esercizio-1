import './App.css'
import Button from './ButtonComponent'
import Img from './ImgClassComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button TextButton="Premimi" />
        <Img
          Src="https://www.petme.it/wp-content/uploads/2023/04/IPA_ALMBA6E82-scaled-e1682066783560.jpg"
          Alt="tigere"
        />
        <Img
          Src="https://upload.wikimedia.org/wikipedia/commons/6/66/Adult_male_Royal_Bengal_tiger.jpg"
          Alt="tigere solitaria"
        />
      </header>
    </div>
  )
}

export default App
