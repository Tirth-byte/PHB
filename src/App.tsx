import {useEffect,useState} from 'react'
import {AnimatePresence,motion} from 'motion/react'
import {ChevronLeft,ChevronRight,Flag,Volume2,VolumeX} from 'lucide-react'
import {Analysis,Battle,Entry,Experiment,Finale,MemeRoom} from './chapters/Chapters'
import {useAudio} from './hooks/useAudio'

const names=['Classified entry','Subject analysis','Meme evidence room','Pandey vs internet','Forbidden experiment','Final verdict']
export default function App(){
 const [chapter,setChapter]=useState(0),{enabled,toggle,play}=useAudio()
 const go=(n:number)=>setChapter(Math.max(0,Math.min(5,n)))
 useEffect(()=>{const k=(e:KeyboardEvent)=>{if(e.key==='PageDown')go(chapter+1);if(e.key==='PageUp')go(chapter-1)};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[chapter])
 return <main className={`experience chapter-${chapter}`}>
  <header className="appbar"><button className="brand" onClick={()=>go(0)}><span>PHB</span><b>PANDEY CASE FILE</b></button><div className="progress" aria-label={`Chapter ${chapter} of 5: ${names[chapter]}`}>{names.map((n,i)=><button key={n} className={i===chapter?'active':i<chapter?'done':''} onClick={()=>go(i)} aria-label={`Go to ${n}`}><i/>{i===chapter&&<span>{i}. {n}</span>}</button>)}</div><div className="bar-actions"><button onClick={()=>go(5)} title="Skip to final verdict"><Flag/><span>Finale</span></button><button onClick={toggle} aria-label={enabled?'Mute music and sound effects':'Enable music and sound effects'}>{enabled?<><Volume2/><span>Sound on</span><i className="music-indicator" aria-hidden="true"><i/><i/><i/></i></>:<><VolumeX/><span>Sound off</span></>}</button></div></header>
  <div className="scene-wrap"><AnimatePresence mode="wait"><motion.div className="scene" key={chapter} initial={{opacity:0,x:chapter?50:0}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-50}} transition={{duration:.32}}>{chapter===0&&<Entry next={()=>go(1)} play={play}/>} {chapter===1&&<Analysis play={play}/>} {chapter===2&&<MemeRoom play={play}/>} {chapter===3&&<Battle play={play}/>} {chapter===4&&<Experiment play={play}/>} {chapter===5&&<Finale play={play} restart={()=>go(0)}/>}</motion.div></AnimatePresence></div>
  {chapter>0&&chapter<5&&<nav className="chapter-nav"><button onClick={()=>go(chapter-1)}><ChevronLeft/> Previous</button><span>{chapter} / 5</span><button onClick={()=>go(chapter+1)}>Next chapter <ChevronRight/></button></nav>}
 </main>
}
