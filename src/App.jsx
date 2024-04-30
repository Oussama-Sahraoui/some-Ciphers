import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [word,setWord] = useState("")
  const [cipher,setCipher]= useState("")

  const [word_shift,setWord_shift]=useState("")
  const [cipher_shift,setChiper_shift]=useState("")
  const [key_shift,setKey_shift]=useState(0)

  const [word_vigenere,setWord_vigenere]=useState("")
  const [cipher_vigenere,setChiper_vigenere]=useState("")
  const [key_vigenere,setKey_vigenere]=useState("")

  const [word_affine,setWord_affine]=useState("")
  const [cipher_affine,setChiper_affine]=useState("")
  const [key_affine1,setKey_affine1]=useState(0)
  const [key_affine2,setKey_affine2]=useState(0)


  const [word_vernam,setWord_vernam]=useState("")
  const [cipher_vernam,setChiper_vernam]=useState("")








  let array=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    function handleChange(event){
    setWord(event.target.value)
  } 
  function handleClick(){
    
    let words=word.toUpperCase()
    let charArray = words.split('');
    let indices=[]
    let new_indices=[]
    let new_word=[]
    charArray.map((letter) => {
    indices.push(array.indexOf(letter));
    });
    indices.map((index)=>{
    new_indices.push((index+3)%26)
    });
    new_indices.map((letter)=>{
      new_word.push(array[letter])
    });
    console.log(new_word)
    let str = new_word.join('');
    setCipher(str)

  }
  function handleChange_shift(event){
    setWord_shift(event.target.value)
  }
  function handleKeyChange_shift(event){
    setKey_shift(event.target.value)
  }
  function handleClick_shift(){
    key_shift
    let words=word_shift.toUpperCase()
    let charArray = words.split('');
    let indices=[]
    let new_indices=[]
    let new_word=[]
    charArray.map((letter) => {
    indices.push(array.indexOf(letter));
    });
    indices.map((index)=>{
    console.log(index+Number(key_shift))
    new_indices.push((index+Number(key_shift))%26)
    });
    new_indices.map((letter)=>{
      new_word.push(array[letter])
    });
    let str = new_word.join('');
    setChiper_shift(str)

  }
  function handleChange_vigenere(event){
    setWord_vigenere(event.target.value)
  }
  function handleKeyChange_vigenere(event){
    setKey_vigenere(event.target.value)
  }
  function handleClick_vigenere(){

    let key_indices=[]
    let indices=[]
    let new_indices=[]
    let new_word=[]
    let words=word_vigenere.toUpperCase()
    let keys=key_vigenere.toUpperCase()
    let charArray= words.split('');
    let key_Arrays= keys.split('');
    let key_Array=[]
    let index=0
    for(let i=0;i<charArray.length;i++){
      key_Array.push(key_Arrays[index])
      index++
      if(index==key_Arrays.length){
        index=0
      }
    }

    

    console.log(charArray,key_Array)
    key_Array.map((letter) => {
    key_indices.push(array.indexOf(letter));
    });

    charArray.map((letter) => {
    indices.push(array.indexOf(letter));
    });
    indices.map((index,i)=>{


    new_indices.push((index+key_indices[i])%26)
    });
    new_indices.map((letter)=>{
      console.log(array[letter])
      new_word.push(array[letter])
    });
    console.log(new_word)
    let str = new_word.join('');
    console.log(str)
    setChiper_vigenere(str)

  }
  function handleChange_affine(event){
    setWord_affine(event.target.value)
  }
  function handleKeyChange1_affine(event){
        

    setKey_affine1(parseInt(event.target.value))
  }
   function handleKeyChange2_affine(event){
        parseInt()

    setKey_affine2(parseInt(event.target.value))
  }
  function handleClick_affine(){


    let words=word_affine.toUpperCase()
    let charArray = words.split('');
    let indices=[]
    let new_indices=[]
    let new_word=[]
    charArray.map((letter) => {
    indices.push(array.indexOf(letter));
    });
    indices.map((index)=>{
    new_indices.push((key_affine1*index+key_affine2)%26)
    });
    new_indices.map((letter)=>{
      console.log(array[letter])
      new_word.push(array[letter])
    });
    console.log(new_word)
    let str = new_word.join('');
    console.log(str)
    setChiper_affine(str)

}

function convert(input) {
 let  value = "";
  for (var i = 0; i < input.length; i++) {
      value += input[i].charCodeAt(0).toString(2) + "";
  }
  console.log("value is ",value)
return value;
}
const genRand = (len) => {
  return Math.random().toString(36).substring(2,len+2);
}

 
 function handleClick_vernam(){
  let binary_key=genRand(word_vernam.length)
  let binary_word=convert(word_vernam)
  console.log(binary_word)
  console.log(binary_key)
  let binary_key_conv=convert(binary_key)


  console.log(binary_word,binary_key_conv)
  let result=[]
  
  binary_word = binary_word.split('');
  binary_key_conv = binary_key_conv.split('');
  binary_word.map((index,i)=>{
  if(index!=binary_key_conv[i])
  {result.push(1)}
  else{
  result.push(0)}
  })
  result = result.join('');

  setChiper_vernam(result)

  


 }
function handleChange_vernam(event){
  setWord_vernam(event.target.value)
}


  {



  return (
    <div className="flex justify-center text-white items-center h-screen w-[100vw] bg-gray-900 rounded">
      <div className="flex justify-evenly flex-col border border-white h-[50vh] w-[70vw]">
          <div className="flex justify-evenly">
               <h1 className="text-[2rem]">Caeser Cipher</h1>
               <h1 className="text-[2rem]">Shift Cipher</h1>
               <h1 className="text-[2rem]">Vigenere Cipher</h1>
               <h1 className="text-[2rem]">Affine Cipher</h1>
               <h1 className="text-[2rem]">vernam Cipher</h1>
          </div>
          <div className="flex justify-evenly h-[75%] w-[100%] ">
          <div className="flex flex-col m-[0.5rem] justify-between self-end h-[100%]">
            <div >
            <p className="m-[0.5rem]">Input your word</p>
            <input className="m-[0.5rem] text-black" type="text" onChange={handleChange}/>
            </div>
            <div >
            <p className="m-[0.5rem]">Ciphered word:{cipher}</p>
            <button className="p-[0.5rem] m-[0.5rem] w-[10vw] h[1vh] border border-white rounded" onClick={handleClick}>Cipher</button>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[100%] m-[0.5rem] self-end">
            <div>
            <p className="m-[0.5rem]">Input your word and key</p>
            <div className="flex flex-col">
              <input className="m-[0.5rem] text-black" type="text" onChange={handleChange_shift}/>
              <input className="m-[0.5rem] text-black" type="text" onChange={handleKeyChange_shift}/>
            </div>
            </div>  
            <div >
            <p className="m-[0.5rem]">Ciphered word:{cipher_shift}</p>
            <button className="p-[0.5rem] m-[0.5rem] w-[10vw] h[1vh] border border-white rounded" onClick={handleClick_shift}>Cipher</button>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[100%] m-[0.5rem] self-end">
            <div>
            <p className="m-[0.5rem]">Input your word and keyword</p>
            <div className="flex flex-col">
              <input className="m-[0.5rem] text-black" type="text" onChange={handleChange_vigenere}/>
              <input className="m-[0.5rem] text-black" type="text" onChange={handleKeyChange_vigenere}/>
            </div>
            </div> 
            <div>
            <p className="m-[0.5rem]">Ciphered word:{cipher_vigenere}</p>
            <button className="p-[0.5rem] m-[0.5rem] w-[10vw] h[1vh] border border-white rounded" onClick={handleClick_vigenere}>Cipher</button>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[100%] m-[0.5rem] self-end">
            <div>
            <p className="m-[0.5rem]">Input your word and your keys</p>
            <div className="flex flex-col">
              <input className="m-[0.5rem] text-black" type="text" onChange={handleChange_affine}/>
              <input className="m-[0.5rem] text-black" type="number" onChange={handleKeyChange1_affine}/>
              <input className="m-[0.5rem] text-black" type="number" onChange={handleKeyChange2_affine}/>
            </div>
            </div>  
            <div>
            <p className="m-[0.5rem]">Ciphered word:{cipher_affine}</p>
            <button className="p-[0.5rem] m-[0.5rem] w-[10vw] h[1vh] border border-white rounded" onClick={handleClick_affine}>Cipher</button>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[100%] m-[0.5rem] self-end">
            <div>
            <p className="m-[0.5rem]">Input your word</p>
            <input className="m-[0.5rem] text-black" type="text" onChange={handleChange_vernam}/>
            </div>
            <div>
            <p className="m-[0.5rem]">Ciphered word:{cipher_vernam}</p>
            <button className="p-[0.5rem] m-[0.5rem] w-[10vw] h[1vh] border border-white rounded" onClick={handleClick_vernam}>Cipher</button>
            </div>
          </div>
          </div>
      </div>


    </div>
  )
}}

export default App
