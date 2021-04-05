import Greeting from './Greeting'
import {Q1} from './Q1'
import {Q2} from './Q2'
import {Q3} from './Q3'
import {Q4} from './Q4'
import {Q5} from './Q5'
import {Congratulations} from './Congratulations'
let ys = [Greeting, Q1, Q2, Q3, Q4, Q5, Congratulations].map(x=>({Component:x}))

export const config = ys;