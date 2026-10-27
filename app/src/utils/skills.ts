
import skillGodot from '../assets/images/skills/godot.png';
import skillDigitalArt from '../assets/images/skills/digital-art.png';
import skillJS from '../assets/images/skills/js.png';
import skillTS from '../assets/images/skills/ts.png';
import skillVueJS from '../assets/images/skills/vuejs.png';
import skillAstro from '../assets/images/skills/astro.png';
import skillD3 from '../assets/images/skills/d3.png';
import skillHTML from '../assets/images/skills/html.png';
import skillCSS from '../assets/images/skills/css.png';
import skillNodeJS from '../assets/images/skills/nodejs.png';
import skillMentoring from '../assets/images/skills/mentoring.png';
import skillCreativity from '../assets/images/skills/creativity.png';
import skillProblemSolving from '../assets/images/skills/problem-solving.png';
import skillTeamPlayer from '../assets/images/skills/team-player.png';

export type Skill =  'godot' | 'digital-art' | 'js' | 'ts' | 'vue' | 'astro' | 'd3' | 'html' | 'css' | 'node' | 'mentor' | 'creative' | 'problem-solving' | 'team-player'

export const skills: {
    image: string,
    title: string,
    id: Skill,
    type: 'active' | 'passive'
}[] = [{
    image: skillGodot.src,
    title: 'Godot',
    id: 'godot',
    type: 'active'
},  {
    image: skillDigitalArt.src,
    title: 'Digital Art',
    id: 'digital-art',
    type: 'active'
},  {
    image: skillJS.src,
    title: 'JavaScript',
    id: 'js',
    type: 'active'
},  {
    image: skillTS.src,
    title: 'TypeScript',
    id: 'ts',
    type: 'active'
},  {
    image: skillVueJS.src,
    title: 'Vue.js',
    id: 'vue',
    type: 'active'
},  {
    image: skillAstro.src,
    title: 'Astro',
    id: 'astro',
    type: 'active'
},  {
    image: skillD3.src,
    title: 'D3.js',
    id: 'd3',
    type: 'active'
},  {
    image: skillHTML.src,
    title: 'HTML5',
    id: 'html',
    type: 'active'
},  {
    image: skillCSS.src,
    title: 'CSS3',
    id: 'css',
    type: 'active'
},  {
    image: skillNodeJS.src,
    title: 'Node.js',
    id: 'node',
    type: 'active'
}, {
    image: skillMentoring.src,
    title: 'Mentoring',
    id: 'mentor',
    type: 'passive'
},  {
    image: skillCreativity.src,
    title: 'Creativity',
    id: 'creative',
    type: 'passive'
},  {
    image: skillProblemSolving.src,
    title: 'Problem Solving',
    id: 'problem-solving',
    type: 'passive'
},  {
    image: skillTeamPlayer.src,
    title: 'Team Player',
    id: 'team-player',
    type: 'passive'
}];