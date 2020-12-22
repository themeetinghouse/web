import { RawDraftContentState } from 'draft-js';

type DataFromJSON = Array<{
  passageRef: string;
  key: string;
  offset: number;
  length: number;
}>;

export default class Bible {
  static getQueryString(
    biblePassage: string
  ): { youVersionUri: string; queryString: string } | 'invalid' {
    const bookCodes: { [book: string]: string } = {
      genesis: 'GEN',
      exodus: 'EXO',
      leviticus: 'LEV',
      numbers: 'NUM',
      deuteronomy: 'DEU',
      joshua: 'JOS',
      judges: 'JDG',
      ruth: 'RUT',
      '1 samuel': '1SA',
      '2 samuel': '2SA',
      '1 kings': '1KI',
      '2 kings': '2KI',
      '1 chronicles': '1CH',
      '2 chronicles': '2CH',
      ezra: 'EZR',
      nehemiah: 'NEH',
      esther: 'EST',
      job: 'JOB',
      psalms: 'PSA',
      proverbs: 'PRO',
      ecclesiastes: 'ECC',
      solomon: 'SNG',
      song: 'SNG',
      songs: 'SNG',
      isaiah: 'ISA',
      jeremiah: 'JER',
      lamentations: 'LAM',
      ezekiel: 'EZK',
      daniel: 'DAN',
      hosea: 'HOS',
      joel: 'JOL',
      amos: 'AMO',
      obadiah: 'OBA',
      jonah: 'JON',
      micah: 'MIC',
      nahum: 'NAM',
      habakkuk: 'HAB',
      zephaniah: 'ZEP',
      haggai: 'HAG',
      zechariah: 'ZEC',
      malachi: 'MAL',
      matthew: 'MAT',
      mark: 'MRK',
      luke: 'LUK',
      john: 'JHN',
      acts: 'ACT',
      romans: 'ROM',
      '1 corinthians': '1CO',
      '2 corinthians': '2CO',
      galatians: 'GAL',
      ephesians: 'EPH',
      philippians: 'PHP',
      colossians: 'COL',
      '1 thessalonians': '1TH',
      '2 thessalonians': '2TH',
      '1 timothy': '1TI',
      '2 timothy': '2TI',
      titus: 'TIT',
      philemon: 'PHM',
      hebrews: 'HEB',
      james: 'JAS',
      '1 peter': '1PE',
      '2 peter': '2PE',
      '1 john': '1JN',
      '2 john': '2JN',
      '3 john': '3JN',
      jude: 'JUD',
      revelation: 'REV',
    };

    let ref = biblePassage.trim().toLowerCase();
    ref = ref.replace('song of solomon', 'song');
    ref = ref.replace('song of songs', 'song');
    const colons = (ref.match(/:/g) || []).length;
    const hyphens = (ref.match(/-/g) || []).length;
    const spaces = (ref.match(/\s/g) || []).length;

    const regex = RegExp(/[^\w :-]|_/g);

    if (regex.test(ref)) {
      return 'invalid';
    }

    if (spaces !== 1 && spaces !== 2) {
      return 'invalid';
    }

    const temp = [
      ref.substring(0, ref.lastIndexOf(' ')),
      ref.substring(ref.lastIndexOf(' ') + 1),
    ];

    if (colons === 0 && hyphens === 0) {
      // Genesis 3

      const code = bookCodes[temp[0]];

      if (!code) {
        return 'invalid';
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${code}.${temp[1]}.NIV`,
        queryString: `${code}.${temp[1]}`,
      };
    } else if (colons === 0 && hyphens === 1) {
      // Genesis 3-4

      const chapters = temp[1].split('-');
      const code = bookCodes[temp[0]];

      if (!code) {
        return 'invalid';
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${code}.${chapters[0]}.NIV`,
        queryString: `${code}.${chapters[0]}-${code}.${chapters[1]}`,
      };
    } else if (colons === 1 && hyphens === 0) {
      // Genesis 3:1

      const code = bookCodes[temp[0]];

      if (!code) {
        return 'invalid';
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${code}.${temp[1].replace(
          ':',
          '.'
        )}.NIV`,
        queryString: `${code}.${temp[1].replace(':', '.')}`,
      };
    } else if (colons === 1 && hyphens === 1) {
      // Genesis 3:1-2

      const chapVerse = temp[1].split(':');
      const chap = chapVerse[0];
      const verses = chapVerse[1].split('-');
      const code = bookCodes[temp[0]];

      if (!code) {
        return 'invalid';
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${code}.${temp[1].replace(
          ':',
          '.'
        )}.NIV`,
        queryString: `${code}.${chap}.${verses[0]}-${code}.${chap}.${verses[1]}`,
      };
    } else if (colons === 2 && hyphens === 1) {
      // Genesis 3:20-4:20
      // temp = ['Genesis', '3:20-4:20']

      const temp2 = temp[1].split('-'); // ['3:20', '4:20']

      const verseChap1 = temp2[0].split(':'); // ['3', '20']
      const verseChap2 = temp2[1].split(':'); // ['4', '20']

      const code = bookCodes[temp[0]];

      if (!code) {
        return 'invalid';
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${code}.${verseChap1[0]}.NIV`,
        queryString: `${code}.${verseChap1[0]}.${verseChap1[1]}-${code}.${verseChap2[0]}.${verseChap2[1]}`,
      };
    } else {
      return 'invalid';
    }
  }

  static parseJSON(raw: RawDraftContentState): DataFromJSON {
    const blocks = raw.blocks;
    const entityMap = raw.entityMap;

    const verses: DataFromJSON = [];

    for (const block of blocks) {
      if (block.entityRanges.length > 0) {
        block.entityRanges.forEach((entity) => {
          const data = entityMap[entity.key];

          if (data.type === 'LINK' && data.data.url.includes('biblegateway')) {
            verses.push({
              passageRef: block.text.slice(
                entity.offset,
                entity.offset + entity.length
              ),
              key: block.key,
              offset: entity.offset,
              length: entity.length,
            });
          }
        });
      }
    }

    return verses;
  }
}
