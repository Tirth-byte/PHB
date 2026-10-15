import type {Meme} from '../data/media'

const SIZE=1400
function wrap(ctx:CanvasRenderingContext2D,text:string,max:number){const words=text.split(/\s+/),lines:string[]=[];let line='';for(const word of words){const test=line?`${line} ${word}`:word;if(ctx.measureText(test).width>max&&line){lines.push(line);line=word}else line=test}if(line)lines.push(line);return lines}
function textBox(ctx:CanvasRenderingContext2D,text:string,x:number,y:number,w:number,h:number,bg='#fff',color='#222'){
 ctx.fillStyle=bg;ctx.fillRect(x,y,w,h);ctx.fillStyle=color;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='700 48px Arial, sans-serif';
 let lines=wrap(ctx,text,w-80);if(lines.length>4){ctx.font='700 40px Arial, sans-serif';lines=wrap(ctx,text,w-70)}const lineH=Math.min(62,(h-40)/lines.length);lines.forEach((line,i)=>ctx.fillText(line,x+w/2,y+h/2+(i-(lines.length-1)/2)*lineH,w-50))
}
function contain(ctx:CanvasRenderingContext2D,img:HTMLImageElement,x:number,y:number,w:number,h:number){const s=Math.min(w/img.naturalWidth,h/img.naturalHeight),dw=img.naturalWidth*s,dh=img.naturalHeight*s;ctx.drawImage(img,x+(w-dw)/2,y+(h-dh)/2,dw,dh)}
export async function exportMeme(meme:Meme){
 const img=new Image();img.src=meme.src;await img.decode();const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d')!;canvas.width=SIZE;canvas.height=SIZE;ctx.fillStyle='#fff9ef';ctx.fillRect(0,0,SIZE,SIZE)
 if(meme.layout==='comparison'){contain(ctx,img,0,0,700,SIZE);textBox(ctx,meme.lines[0],700,0,700,700,'#fff','#222');textBox(ctx,meme.lines[1],700,700,700,700,'#222','#fff');ctx.fillStyle='#e34d3b';ctx.font='700 70px Arial';ctx.fillText('✕',760,80);ctx.fillStyle='#42a85a';ctx.fillText('✓',760,780)}
 else if(meme.layout==='sequence'){contain(ctx,img,0,0,800,SIZE);meme.lines.forEach((line,i)=>textBox(ctx,`${i+1}. ${line}`,800,i*350,600,350,i%2?'#ffe58f':'#fff','#222'))}
 else if(meme.layout==='dialogue'){contain(ctx,img,0,0,SIZE,900);textBox(ctx,meme.lines[0],0,900,700,500,'#f7a8cb','#222');textBox(ctx,meme.lines[1],700,900,700,500,'#ffe58f','#222')}
 else {textBox(ctx,meme.lines[0],0,0,SIZE,220,'#222','#fff');contain(ctx,img,0,220,SIZE,960);textBox(ctx,meme.lines[1],0,1180,SIZE,220,meme.layout==='cat'?'#d6f4df':'#fff','#222')}
 ctx.strokeStyle='#222';ctx.lineWidth=18;ctx.strokeRect(9,9,SIZE-18,SIZE-18);const a=document.createElement('a');a.download=`pandey-${meme.id}-meme.png`;a.href=canvas.toDataURL('image/png');a.click()
}
