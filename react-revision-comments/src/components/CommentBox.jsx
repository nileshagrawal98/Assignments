import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Comment } from "./Comment"
import "./CommentBox.css";

export const CommentBox = () => {

    let dataContext = useContext(DataContext);

    let [data, setData] = useState(dataContext.data);
    // let commentsData = [];

    // function traverseComments({ id, author, body, timestamp, points, replies }, level = 0) {
    //     commentsData.push({ id, author, body, timestamp, points, level });

    //     if (!replies) {
    //         return;
    //     }

    //     let comments = replies;
    //     replies.forEach(comment => {
    //         traverseComments(comment, level + 1);
    //     })
    // }

    // traverseComments(initData);
    // console.log(commentsData);

    return <div className="comment-box-wrapper">
        {
            data.map(comment => <Comment key={comment.id} {...comment} />)
        }
    </div>
}