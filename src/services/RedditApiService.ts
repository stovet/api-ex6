import axios from 'axios';
import { Data, Child } from '../models/aw';


export function fetchReddit():Promise<Child[]>{
    return axios.get("https://www.reddit.com/r/aww/.json")
    .then(res => res.data.data.children)
}