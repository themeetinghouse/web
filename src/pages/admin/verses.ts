import { RawDraftContentState } from 'draft-js';

type DataFromJSON = Array<{
  passageRef: string;
  key: string;
  offset: number;
  length: number;
}>;

const bookCodes: Record<string, string> = {
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
  songs: 'SNG',
  'song of songs': 'SNG',
  'song of solomon': 'SNG',
  song: 'SNG',
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

const hasInvalidData = (...args: string[]) => args.some((arg) => !arg);

export const INVALID_QUERY = 'invalid';

export const getQueryString = (
  reference: string
): { youVersionUri: string; queryString: string } | typeof INVALID_QUERY => {
  try {
    const isValidReference =
      typeof reference === 'string' && reference.length > 0;

    if (!isValidReference) {
      return INVALID_QUERY;
    }

    const referenceLowercase = reference.trim().toLowerCase();
    const colons = (referenceLowercase.match(/:/g) || []).length;
    const hyphens = (referenceLowercase.match(/-/g) || []).length;

    const invalidCharacters = RegExp(/[^\w :-]|_/g);

    // check for invalid charaters (anything other than alpha numerics, spaces, colon and hyphen)
    if (invalidCharacters.test(referenceLowercase)) {
      return INVALID_QUERY;
    }

    const bookName =
      Object.keys(bookCodes).find((name) =>
        referenceLowercase.startsWith(name)
      ) ?? '';

    const hasValidBookName = bookName.length > 0;

    if (!hasValidBookName) {
      return INVALID_QUERY;
    }

    const bookCode = bookCodes[bookName];

    const hasValidBookCode =
      typeof bookCode === 'string' && bookCode.length === 3;

    if (!hasValidBookCode) {
      return INVALID_QUERY;
    }

    const [, chapterAndVerse] = referenceLowercase.split(bookName);

    // remove all spaces
    const chapterAndVerseNoSpaces = chapterAndVerse.replace(/\s/g, '');

    if (colons === 0 && hyphens === 0) {
      // Genesis 3
      // bookCode = GEN
      // chapterAndVerseNoSpaces = 3

      if (hasInvalidData(chapterAndVerseNoSpaces)) {
        return INVALID_QUERY;
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${bookCode}.${chapterAndVerseNoSpaces}.NIV`,
        queryString: `${bookCode}.${chapterAndVerseNoSpaces}`,
      };
    } else if (colons === 0 && hyphens === 1) {
      // Genesis 3-4
      // bookCode = GEN
      // chapterAndVerseNoSpaces = 3-4

      const [startChapter, endChapter] = chapterAndVerseNoSpaces.split('-');

      if (hasInvalidData(startChapter, endChapter)) {
        return INVALID_QUERY;
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${bookCode}.${startChapter}.NIV`,
        queryString: `${bookCode}.${startChapter}-${bookCode}.${endChapter}`,
      };
    } else if (colons === 1 && hyphens === 0) {
      // Genesis 3:1
      // bookCode = GEN
      // chapterAndVerseNoSpaces = 3:1

      const chapterAndVerseFormatted = chapterAndVerseNoSpaces.replace(
        ':',
        '.'
      );

      if (
        chapterAndVerseFormatted.endsWith('.') ||
        chapterAndVerseFormatted.startsWith('.')
      ) {
        return INVALID_QUERY;
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${bookCode}.${chapterAndVerseFormatted}.NIV`,
        queryString: `${bookCode}.${chapterAndVerseFormatted}`,
      };
    } else if (colons === 1 && hyphens === 1) {
      // Genesis 3:1-2
      // bookCode = GEN
      // chapterAndVerseNoSpaces = 3:1-2

      const [chapter, verses] = chapterAndVerseNoSpaces.split(':'); // ['3', '1-2']
      const [startVerse, endVerse] = verses.split('-'); // ['1', '2']
      const chapterAndVerseFormatted = chapterAndVerseNoSpaces.replace(
        ':',
        '.'
      );

      if (
        chapterAndVerseFormatted.endsWith('.') ||
        chapterAndVerseFormatted.startsWith('.')
      ) {
        return INVALID_QUERY;
      }

      if (hasInvalidData(chapter, startVerse, endVerse)) {
        return INVALID_QUERY;
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${bookCode}.${chapterAndVerseFormatted}.NIV`,
        queryString: `${bookCode}.${chapter}.${startVerse}-${bookCode}.${chapter}.${endVerse}`,
      };
    } else if (colons === 2 && hyphens === 1) {
      // Genesis 3:20-4:20
      // bookCode = GEN
      // chapterAndVerseNoSpaces = 3:20-4:20

      const [startChapterVerse, endChapterVerse] =
        chapterAndVerseNoSpaces.split('-'); // ['3:20', '4:20']

      const [startChapter, startVerse] = startChapterVerse.split(':'); // ['3', '20']
      const [endChapter, endVerse] = endChapterVerse.split(':'); // ['4', '20']

      if (hasInvalidData(startChapter, endChapter, startVerse, endVerse)) {
        return INVALID_QUERY;
      }

      return {
        youVersionUri: `https://www.bible.com/bible/111/${bookCode}.${startChapter}.NIV`,
        queryString: `${bookCode}.${startChapter}.${startVerse}-${bookCode}.${endChapter}.${endVerse}`,
      };
    } else {
      return INVALID_QUERY;
    }
  } catch (e) {
    console.error(e);
    return INVALID_QUERY;
  }
};

export const parseJSON = (raw: RawDraftContentState): DataFromJSON => {
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
};
