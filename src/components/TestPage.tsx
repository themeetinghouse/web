import React, { useEffect, useState } from "react";
import RenderRouter from "./RenderRouter/RenderRouter";

const pageContent = fetch('/static/content/test.json')
    .then((response) => response.json())
    .then(async (pageContent) => {
        const itemContents = (pageContent.page.test as string[]).map(async (items) => {
            const response = await fetch('/static/content/' + items.toLowerCase() + '.json');
            return response.json();
        });
        const itemResponses = await Promise.all(itemContents);
        return itemResponses.reduce(
            (content: any, myJson2: any) => content.page.content.concat(myJson2.page.content),
            pageContent);
    })

export default function TestPage() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        pageContent.then(setContent);
    }, []);

    if (!content) {
        return null
    }
    return <RenderRouter data={null} content={content} />
}