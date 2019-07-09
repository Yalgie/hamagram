import React, { Fragment, useState } from 'react';
import marked from 'marked';
import markedParse from 'html-react-parser';

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [md, setMd] = useState("");
    const [html, setHtml] = useState("");

    const parseMD = (md) => {
        const html = marked(md);
        const parsed = markedParse(html);

        setHtml(parsed);
        setMd(md);
    }

    return (
        <Fragment>
            <input value={title} onChange={e => setTitle(e.target.value)}  />
            <textarea value={md} onChange={e => parseMD(e.target.value)}/>

            <h1>{title}</h1>
            <div>{html}</div>
        </Fragment>
    )
}

export default NewPost;