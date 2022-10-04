import {useRef} from 'react'
import "./style.css"

function App() {

  const characterRef= useRef()
  const blockRef= useRef()

  
  
  const jumping = () =>{
    characterRef.current.classList.add('animate')
    const interval= setInterval(() => {
      if(characterRef.current.getBoundingClientRect().top < blockRef.current.getBoundingClientRect().top+blockRef.current.getBoundingClientRect().height) {
        console.log("hit")
        clearInterval(interval)
      }
    }, 10);
    setTimeout(function(){
      characterRef.current.classList.remove('animate')},1000)
    }
    



  return (
    <div  tabIndex={-1} onKeyDown={ ()=>{jumping()}}>
    <div id="game" className="w-[500px] h-[200px] border-2 border-black" >
      <div ref={characterRef} id="character" className="w-[20px] h-[50px] bg-red-900 relative top-[148px] left-[248px]"></div>
      <div ref={blockRef} id="block" className="w-[100px] h-[30px] bg-blue-800 relative top-[30px] left-[200px]"></div>

    </div>
    </div>
  );
}

export default App;
