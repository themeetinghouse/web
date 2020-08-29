const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;

exports.handler = async (event) => {
    const bibleId = event.arguments.bibleId;
    const passage = event.arguments.passage;

    try {
        const data =
            await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passage}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`, {
                headers: {
                    'api-key': apiKey
                },
            });
        const json = await data.json();
        return json
    } catch (e) {
        console.log(e)
    }
};
