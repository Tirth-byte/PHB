import {assetUrl} from '../utils/assets'

export type MemeCategory='LEGENDARY INTERNET MEMES'|'CAT CHAOS'|'COLLEGE DISASTERS'|'CODING & DEADLINES'|'PANDEY EXCLUSIVE'
export type MemeLayout='comparison'|'caption'|'dialogue'|'sequence'|'reaction'|'cat'
export type Meme={id:string;src:string;name:string;category:MemeCategory;caption:string;audio?:string;ratio:string;exists:true;layout:MemeLayout;lines:string[]}

export const photos=[
 {src:assetUrl('/photos/sky-signal-pandey.jpg'),alt:'Pandey looking toward the sky',joke:"Bro waiting for God's reply."},
 {src:assetUrl('/photos/close-portrait-pandey.jpg'),alt:'Close portrait of Pandey',joke:'Face card approved. Brain card pending.'},
 {src:assetUrl('/photos/juice-refuel-pandey.jpg'),alt:'Pandey drinking juice',joke:'Rare footage of Pandey refueling.'},
 {src:assetUrl('/photos/scarf-adjust-pandey.jpg'),alt:'Pandey adjusting his scarf',joke:'Bro unlocked the premium Indian DLC.'},
 {src:assetUrl('/photos/streetlight-discovery-pandey.jpg'),alt:'Pandey looking at a streetlight',joke:'Bro discovered the sun has a night shift.'},
 {src:assetUrl('/photos/festive-night-pandey.jpg'),alt:'Duplicate original streetlight frame',joke:'Duplicate source file—classified separately, displayed once.'},
 {src:assetUrl('/photos/laptop-peace-pandey.jpg'),alt:'Pandey behind a laptop making peace signs',joke:'Professional developer. Professional yapper.'},
] as const

const classic=assetUrl('/memes/classic/')
export const memes:Meme[]=[
 {id:'drake',src:classic+'drake_hotline_bling.jpg',name:'Drake Hotline Bling',category:'LEGENDARY INTERNET MEMES',caption:'The 11:59 PM development methodology.',audio:assetUrl('/audio/comedy-sting.ogg'),ratio:'1200/1200',exists:true,layout:'comparison',lines:['Finishing the assignment before dinner.','Starting the entire project at 11:59 PM.']},
 {id:'yell-cat',src:classic+'woman_yelling_at_cat.jpg',name:'Woman Yelling at Cat',category:'LEGENDARY INTERNET MEMES',caption:'Attendance court is now in session.',ratio:'680/438',exists:true,layout:'dialogue',lines:['FACULTY: “WHY IS YOUR ATTENDANCE SO LOW?”','PANDEY: “Ma’am, spiritually I was present.”']},
 {id:'pikachu',src:classic+'surprised_pikachu.jpg',name:'Surprised Pikachu',category:'LEGENDARY INTERNET MEMES',caption:'A completely unforeseen academic event.',audio:assetUrl('/audio/error-buzzer.ogg'),ratio:'1893/1893',exists:true,layout:'caption',lines:["When Pandey doesn't study for the surprise test…",'…and the test is actually surprising.']},
 {id:'fine',src:classic+'this_is_fine.jpg',name:'This Is Fine',category:'CODING & DEADLINES',caption:'Everything is under control, allegedly.',ratio:'580/282',exists:true,layout:'caption',lines:['Five minutes before the project demo…','npm install is still running.']},
 {id:'gru',src:classic+'gru_plan.jpg',name:"Gru's Plan",category:'CODING & DEADLINES',caption:'A flawless four-step engineering plan.',ratio:'700/449',exists:true,layout:'sequence',lines:['Fix one tiny bug.','Deploy without testing.','Introduce seventeen new bugs.','Call it “refactoring”.']},
 {id:'buttons',src:classic+'two_buttons.jpg',name:'Two Buttons',category:'COLLEGE DISASTERS',caption:'The most difficult decision of the semester.',ratio:'600/908',exists:true,layout:'comparison',lines:['Submit the assignment.','Improve the title font for two more hours.']},
 {id:'monkey',src:classic+'monkey_puppet.jpg',name:'Monkey Puppet',category:'COLLEGE DISASTERS',caption:'Suddenly, eye contact is unavailable.',ratio:'923/768',exists:true,layout:'reaction',lines:['Faculty: “Who pushed directly to main?”','Pandey checking the ceiling fan.']},
 {id:'disaster',src:classic+'disaster_girl.jpg',name:'Disaster Girl',category:'CODING & DEADLINES',caption:'The deployment was technically successful.',audio:assetUrl('/audio/agogo-impact.ogg'),ratio:'500/375',exists:true,layout:'reaction',lines:['Pandey after saying:', '“Deploy kar de, kya hi hoga?”']},
 {id:'harold',src:classic+'hide_pain_harold.jpg',name:'Hide the Pain Harold',category:'COLLEGE DISASTERS',caption:'Viva survivors support group.',ratio:'480/601',exists:true,layout:'caption',lines:['“How did the viva go?”','The examiner still has my ID card.']},
 {id:'cinema',src:classic+'absolute_cinema.png',name:'Absolute Cinema',category:'PANDEY EXCLUSIVE',caption:'Nobody touch anything. It works.',audio:assetUrl('/audio/applause.ogg'),ratio:'640/640',exists:true,layout:'reaction',lines:['The project finally runs…','…and nobody knows why. ABSOLUTE CINEMA.']},
 {id:'brain',src:classic+'expanding_brain.jpg',name:'Expanding Brain',category:'CODING & DEADLINES',caption:'The four stages of academic research.',ratio:'857/1202',exists:true,layout:'sequence',lines:['Read the notes.','Watch a tutorial.','Open seventeen random blogs.','Ask the group chat at 2 AM.']},
 {id:'uno',src:classic+'uno_draw_25.jpg',name:'UNO Draw 25',category:'COLLEGE DISASTERS',caption:'A reasonable attendance policy.',ratio:'500/494',exists:true,layout:'comparison',lines:['Attend the 8 AM lecture.','Draw 25 and protect your sleep schedule.']},
 {id:'rollsafe',src:classic+'roll_safe.jpg',name:'Roll Safe',category:'CODING & DEADLINES',caption:'Senior-level quality assurance.',ratio:'702/395',exists:true,layout:'reaction',lines:['Your code cannot fail tests…','…if you never wrote tests.']},
 {id:'catcube',src:assetUrl('/memes/cat-cube.gif'),name:'Spinning Cat Cube',category:'CAT CHAOS',caption:'Food radar has acquired a target.',audio:assetUrl('/audio/cat-meow.opus'),ratio:'1/1',exists:true,layout:'cat',lines:['SOMEONE: “Free food upstairs.”','PANDEY, 0.2 seconds later:']},
 {id:'licking',src:assetUrl('/memes/licking-kitty.gif'),name:'Concerned Cat',category:'CAT CHAOS',caption:'The review has raised concerns.',ratio:'1/1',exists:true,layout:'cat',lines:['CAT REVIEWING PANDEY’S GROUP PROJECT CONTRIBUTION','“Interesting. Very bold use of copy-paste.”']},
 {id:'running',src:assetUrl('/memes/running-cat.gif'),name:'Running Cat',category:'CAT CHAOS',caption:'Attendance proxy protocol activated.',ratio:'1000/703',exists:true,layout:'cat',lines:['PANDEY: “Attendance laga dena.”','Also Pandey:']},
 {id:'portrait',src:assetUrl('/photos/close-portrait-pandey.jpg'),name:'Pandey Face Card',category:'PANDEY EXCLUSIVE',caption:'An unexpected celebrity sighting.',ratio:'1/1',exists:true,layout:'reaction',lines:['When Pandey discovers…','…his own photo has become a meme.']},
 {id:'laptop',src:assetUrl('/photos/laptop-peace-pandey.jpg'),name:'Developer Pandey',category:'PANDEY EXCLUSIVE',caption:'Professional confidence. Experimental logic.',ratio:'3/4',exists:true,layout:'reaction',lines:['“Yes, the code works.”','Please do not ask him why.']},
]

export const categories:MemeCategory[]=['LEGENDARY INTERNET MEMES','CAT CHAOS','COLLEGE DISASTERS','CODING & DEADLINES','PANDEY EXCLUSIVE']
export const audioClips={
 music:assetUrl('/audio/carefree-kevin-macleod.ogg'),
 open:assetUrl('/audio/agogo-impact.ogg'),
 shutter:assetUrl('/audio/comedy-sting.ogg'),
 meow:assetUrl('/audio/cat-meow.opus'),
 fail:assetUrl('/audio/error-buzzer.ogg'),
 applause:assetUrl('/audio/applause.ogg'),
 laugh:assetUrl('/audio/cartoon-laugh.ogg'),
 fanfare:assetUrl('/audio/celebration-fanfare.ogg')
} as const
