const fetch = require('node-fetch');
const apiKey = process.env.API_KEY;

exports.handler = async (event) => {
  const bibleId = event.arguments.bibleId;
  const passage = event.arguments.passage;

  try {
    const data = await fetch(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passage}?content-type=json&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`,
      {
        headers: {
          'api-key': apiKey,
        },
      }
    );
    const json = await data.json();
    const temp = { ...json.data, content: JSON.stringify(json.data.content) };
    return { meta: json.meta, data: temp };
  } catch (e) {
    console.log(e);
  }
};
