import React, {useEffect, useState} from "react";
import { Child, Data } from "../models/aw";
import { fetchReddit } from "../services/RedditApiService";

function RedditAw(){
    const [post, setPost] = useState<Child[]>([]);

    useEffect(() => {
        fetchReddit().then(
            post => setPost(post)
        );
    }, []);

        return (
            <div>
                <h2>Reddit Aw</h2>
                <ul>
                    {
                        post.map((item, i) => 
                            <li key={i}>
                                {/* <h3>{item.name}</h3> */}
                                <p>{item.data.title}</p>
                                <img src={item.data.thumbnail} alt="" />
                                <a href={`https://reddit.com${item.data.permalink}`}>link</a>
                            </li>
                        )}
                </ul>
            </div>
        )


}
export default RedditAw;