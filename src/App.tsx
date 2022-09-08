import { useState } from "react"
import GlobalStyles from "./styles/GlobalStyles"
import { Container, Input, Button, InputTam, InputCheck, Flex } from "./styles/Styles"

function App() {
  const [password,setPassword] = useState('')
  const [uppercase, setUppercase] = useState(false)
  const [lowcase, setLowcase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [lenght, setLenght] = useState(15)

  function clipBoard(){
    navigator.clipboard.writeText(password)
    alert('Copied')
  }


  function generate(){
    const gerar_aleatorio = () => {
      return Math.floor(Math.random() * 4)
    }
  
    const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const lista = [uppercase,lowcase,number,symbol]

    let senha = ''

    while(senha.length < lenght){
      let sort = gerar_aleatorio()
      if(lista[sort]){
        if(sort == 0){
          let aux = Math.floor(Math.random() * alfabeto.length)
          senha = senha + alfabeto[aux].toUpperCase()
        }else if(sort == 1){
          let aux = Math.floor(Math.random() * alfabeto.length)
          senha = senha + alfabeto[aux]
        }else if(sort == 2){
          let aux = Math.floor(Math.random() * 10)
          senha = senha + aux
        }else {
          const symbom_list = ['@','#','$','%','&','*','!']
          let aux = Math.floor(Math.random() * symbom_list.length)
          senha = senha + symbom_list[aux]
        }
      }
    }
    setPassword(senha)

  }

  return (
    <Container>
      <InputTam onChange={e => setLenght(parseInt(e.target.value))} placeholder="Tamanho" />  
      <Input value={password}/>

      <Flex>
      <InputCheck type='checkbox' onChange={() => setUppercase(!uppercase)}/>
      <p>Uppercase</p>
      <InputCheck type='checkbox' onChange={() => setLowcase(!lowcase)}/>
      <p>Lowcase</p>
      <InputCheck type='checkbox' onChange={() => setNumber(!number)}/>
      <p>Number</p>
      <InputCheck type='checkbox' onChange={() => setSymbol(!symbol)}/>
      <p>Symbol</p>
      </Flex>
      <Button onClick={generate}>Gerar</Button>
      <button onClick={() => clipBoard()}>Copy</button>
      <GlobalStyles/>
    </Container>
  )
}

export default App
