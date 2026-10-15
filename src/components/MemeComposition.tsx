import type {Meme} from '../data/media'

export function MemeComposition({meme}: {meme:Meme}){
 return <div className={`composition composition-${meme.layout}`} data-meme={meme.id}>
  {meme.layout==='comparison'&&<><img src={meme.src} alt={meme.name}/><div className="copy-stack">{meme.lines.map((line,i)=><div key={line}><b>{i?'✓':'✕'}</b><span>{line}</span></div>)}</div></>}
  {meme.layout==='dialogue'&&<><img src={meme.src} alt={meme.name}/><div className="dialogue-stack">{meme.lines.map((line,i)=><p className={i?'reply':''} key={line}>{line}</p>)}</div></>}
  {meme.layout==='sequence'&&<><img src={meme.src} alt={meme.name}/><div className="sequence-stack">{meme.lines.map((line,i)=><p key={line}><b>0{i+1}</b>{line}</p>)}</div></>}
  {(meme.layout==='caption'||meme.layout==='reaction'||meme.layout==='cat')&&<><p className="top-copy">{meme.lines[0]}</p><img src={meme.src} alt={meme.name}/><p className="bottom-copy">{meme.lines[1]}</p></>}
 </div>
}
