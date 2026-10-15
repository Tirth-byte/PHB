import {useCallback,useEffect,useRef,useState} from 'react'
import {audioClips} from '../data/media'
import {assetUrl} from '../utils/assets'

const MUSIC_VOLUME=.14,DUCK_VOLUME=.06,EFFECT_VOLUME=.34
export function useAudio(){
 const [enabled,setEnabled]=useState(false),effect=useRef<HTMLAudioElement|null>(null),music=useRef<HTMLAudioElement|null>(null),fadeFrame=useRef(0)
 const fade=useCallback((target:number,duration=350)=>{const a=music.current;if(!a)return;cancelAnimationFrame(fadeFrame.current);const start=a.volume,time=performance.now();const tick=(now:number)=>{const p=Math.min(1,(now-time)/duration);a.volume=start+(target-start)*p;if(p<1)fadeFrame.current=requestAnimationFrame(tick)};fadeFrame.current=requestAnimationFrame(tick)},[])
 const stopEffect=useCallback(()=>{if(effect.current){effect.current.pause();effect.current.currentTime=0;effect.current=null}fade(MUSIC_VOLUME,450)},[fade])
 const play=useCallback((src?:string)=>{if(!enabled||!src)return;stopEffect();fade(DUCK_VOLUME,120);const a=new Audio(assetUrl(src));a.volume=EFFECT_VOLUME;effect.current=a;const restore=()=>{if(effect.current===a){effect.current=null;fade(MUSIC_VOLUME,500)}};a.addEventListener('ended',restore,{once:true});a.addEventListener('error',restore,{once:true});void a.play().catch(restore);window.setTimeout(restore,5000)},[enabled,fade,stopEffect])
 const stopAll=useCallback(()=>{stopEffect();if(music.current){music.current.pause();music.current.currentTime=0;music.current=null}cancelAnimationFrame(fadeFrame.current)},[stopEffect])
 const toggle=useCallback(()=>setEnabled(v=>!v),[])
 useEffect(()=>{if(!enabled){stopAll();return}const a=new Audio(assetUrl(audioClips.music));a.loop=true;a.preload='auto';a.volume=0;music.current=a;void a.play().then(()=>fade(MUSIC_VOLUME,900)).catch(()=>setEnabled(false));return()=>{a.pause();if(music.current===a)music.current=null}},[enabled,fade,stopAll])
 useEffect(()=>{const visibility=()=>{const a=music.current;if(!a||!enabled)return;if(document.hidden)a.pause();else void a.play().then(()=>fade(MUSIC_VOLUME,400)).catch(()=>{})};document.addEventListener('visibilitychange',visibility);return()=>document.removeEventListener('visibilitychange',visibility)},[enabled,fade])
 useEffect(()=>()=>stopAll(),[stopAll])
 return{enabled,toggle,play,stop:stopAll}
}
