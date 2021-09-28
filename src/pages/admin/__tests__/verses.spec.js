import { getQueryString } from '../verses';

const validReferences = [
  {
    reference: 'Genesis 3',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/GEN.3.NIV',
      queryString: 'GEN.3',
    },
  },
  {
    reference: 'genesis 3',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/GEN.3.NIV',
      queryString: 'GEN.3',
    },
  },
  {
    reference: 'Genesis 3-4',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/GEN.3.NIV',
      queryString: 'GEN.3-GEN.4',
    },
  },
  {
    reference: 'Genesis 3:1-4',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/GEN.3.1-4.NIV',
      queryString: 'GEN.3.1-GEN.3.4',
    },
  },
  {
    reference: 'genesis 3:1-4',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/GEN.3.1-4.NIV',
      queryString: 'GEN.3.1-GEN.3.4',
    },
  },
  {
    reference: 'Genesis 3:20-4:20',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/GEN.3.NIV',
      queryString: 'GEN.3.20-GEN.4.20',
    },
  },
  {
    reference: 'genesis 3:20-4:20',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/GEN.3.NIV',
      queryString: 'GEN.3.20-GEN.4.20',
    },
  },
  {
    reference: '2 Peter 2',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/2PE.2.NIV',
      queryString: '2PE.2',
    },
  },
  {
    reference: '1 Corinthians 8:4',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1CO.8.4.NIV',
      queryString: '1CO.8.4',
    },
  },
  {
    reference: '1 Timothy 6:3-4',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1TI.6.3-4.NIV',
      queryString: '1TI.6.3-1TI.6.4',
    },
  },
  {
    reference: '1 Corinthians 8:10-9:7',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1CO.8.NIV',
      queryString: '1CO.8.10-1CO.9.7',
    },
  },
  {
    testDescription: '1 Corinthians 8:10 - 9:7 [extra spaces]',
    reference: '1 Corinthians 8:10 - 9:7',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1CO.8.NIV',
      queryString: '1CO.8.10-1CO.9.7',
    },
  },
  {
    testDescription: '1 Corinthians  8:10-9:7 [extra space]',
    reference: '1 Corinthians  8:10-9:7',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1CO.8.NIV',
      queryString: '1CO.8.10-1CO.9.7',
    },
  },
  {
    testDescription: 'Hebrews 10: 24-25 [extra space]',
    reference: 'Hebrews 10: 24-25',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/HEB.10.24-25.NIV',
      queryString: 'HEB.10.24-HEB.10.25',
    },
  },
  {
    testDescription: 'Hebrews 10 :24-25 [extra space]',
    reference: 'Hebrews 10 :24-25',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/HEB.10.24-25.NIV',
      queryString: 'HEB.10.24-HEB.10.25',
    },
  },
  {
    testDescription: 'Hebrews 10:24-25 [leading whitespace]',
    reference: ' Hebrews 10: 24-25',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/HEB.10.24-25.NIV',
      queryString: 'HEB.10.24-HEB.10.25',
    },
  },
  {
    testDescription: 'Hebrews 10:24-25 [trailing whitespace]',
    reference: 'Hebrews 10: 24-25  ',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/HEB.10.24-25.NIV',
      queryString: 'HEB.10.24-HEB.10.25',
    },
  },
  {
    testDescription: 'Hebrews 10: 24 -25 [extra spaces]',
    reference: 'Hebrews 10: 24 -25',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/HEB.10.24-25.NIV',
      queryString: 'HEB.10.24-HEB.10.25',
    },
  },
  {
    testDescription: 'Hebrews 10:24 -   25 [extra spaces]',
    reference: 'Hebrews 10:24 -   25',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/HEB.10.24-25.NIV',
      queryString: 'HEB.10.24-HEB.10.25',
    },
  },
  {
    testDescription: 'Hebrews 10   :  24 -  25 [extra spaces]',
    reference: 'Hebrews 10   :  24 -  25',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/HEB.10.24-25.NIV',
      queryString: 'HEB.10.24-HEB.10.25',
    },
  },
  {
    reference: 'Song of Solomon 2:1',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/SNG.2.1.NIV',
      queryString: 'SNG.2.1',
    },
  },
  {
    reference: 'Song of Songs 2:1',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/SNG.2.1.NIV',
      queryString: 'SNG.2.1',
    },
  },
  {
    reference: 'Song 2:1',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/SNG.2.1.NIV',
      queryString: 'SNG.2.1',
    },
  },
  {
    reference: 'Songs 2:1',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/SNG.2.1.NIV',
      queryString: 'SNG.2.1',
    },
  },
  {
    reference: 'Solomon 2:1',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/SNG.2.1.NIV',
      queryString: 'SNG.2.1',
    },
  },
  {
    reference: 'Psalms 128:6-130:4',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/PSA.128.NIV',
      queryString: 'PSA.128.6-PSA.130.4',
    },
  },
  {
    reference: 'Matthew 5:14-16',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/MAT.5.14-16.NIV',
      queryString: 'MAT.5.14-MAT.5.16',
    },
  },
  {
    reference: 'Ephesians 2:14-15',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/EPH.2.14-15.NIV',
      queryString: 'EPH.2.14-EPH.2.15',
    },
  },
  {
    reference: 'Romans 15:14',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/ROM.15.14.NIV',
      queryString: 'ROM.15.14',
    },
  },
  {
    reference: 'Colossians 3:16',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/COL.3.16.NIV',
      queryString: 'COL.3.16',
    },
  },
  {
    reference: '1 Thessalonians 4:18',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1TH.4.18.NIV',
      queryString: '1TH.4.18',
    },
  },
  {
    reference: 'Luke 6:37-39',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/LUK.6.37-39.NIV',
      queryString: 'LUK.6.37-LUK.6.39',
    },
  },
  {
    reference: 'James 5:16',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/JAS.5.16.NIV',
      queryString: 'JAS.5.16',
    },
  },
  {
    reference: '1 Peter 4:10',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1PE.4.10.NIV',
      queryString: '1PE.4.10',
    },
  },
  {
    reference: '1 peter 4:10',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1PE.4.10.NIV',
      queryString: '1PE.4.10',
    },
  },
  {
    reference: '1 PETER 4:10',
    expected: {
      youVersionUri: 'https://www.bible.com/bible/111/1PE.4.10.NIV',
      queryString: '1PE.4.10',
    },
  },
];

const invalidReferences = [
  {
    testDescription: '1 Corinthians 8:10—9:7 [emdash]',
    reference: '1 Corinthians 8:10—9:7',
  },
  {
    testDescription: 'Mark 7:1—2 [emdash]',
    reference: 'Mark 7:1—2',
  },
  {
    testDescription: '1 Corinthians 8:10–9:7 [endash]',
    reference: '1 Corinthians 8:10–9:7',
  },
  {
    testDescription: 'Mark 7:1–2 [endash]',
    reference: 'Mark 7:1–2',
  },
  {
    testDescription: '1 Corinthians 8;10-9:7 [invalid character]',
    reference: '1 Corinthians 8;10-9:7',
  },
  {
    testDescription: '1 Corinthians 8:10=9:7 [invalid character]',
    reference: '1 Corinthians 8:10=9:7',
  },
  {
    testDescription: '1 Corinthians 8:10_9:7 [invalid character]',
    reference: '1 Corinthians 8:10_9:7',
  },
  {
    testDescription: 'Matthew 7:21, 24-27 [invalid format]',
    reference: 'Matthew 7:21, 24-27',
  },
  {
    testDescription: '1:1 Genesis [invalid format]',
    reference: '1:1 Genesis',
  },
  {
    reference: 'Mark',
  },
  {
    reference: 'Mark -4',
  },
  {
    reference: 'Luke 3-',
  },
  {
    reference: 'Matthew 3:',
  },
  {
    reference: 'James :5',
  },
  {
    reference: 'Mark 3:2-',
  },
  {
    reference: 'Mark :2-7',
  },
  {
    reference: 'John 3:22-4:',
  },
  {
    reference: 'John 3:-4:5',
  },
  {
    reference: 'John 3xyz',
  },
  {
    reference: 'John abc3',
  },
  {
    reference: 'John 3:16z',
  },
  {
    reference: 'John z3:16',
  },
  {
    reference: 'John 3b:16',
  },
  {
    reference: 'John 3:1a6',
  },
  {
    reference: 'Matthew 7:21s',
  },
  {
    reference: 'Matthew 7:21-23s',
  },
  {
    reference: 'Matthew 7:21x-23',
  },
  {
    reference: 'Matthew abc7:21-23',
  },
  {
    reference: 'Matthew 7:21-8:2a',
  },
  {
    reference: 'Matthew a7:21-8:2',
  },
  {
    reference: 'Matthew 7:21-8-2',
  },
  {
    reference: 'Matthew 7:a',
  },
  { reference: 'Jon 3:16' },
  { reference: 'Lucas 10:1-11:15' },
  { reference: '🔥 12' },
  { reference: '🔥🔥🔥' },
  { reference: '😀' },
  { reference: '😀 10:27' },
  { reference: '10:27' },
  { reference: '10:27-11:2' },
  { reference: 'abcdef%%61239asdkji' },
  { testDescription: 'Empty string', reference: '' },
  { testDescription: 'Array', reference: [] },
  {
    testDescription: 'Function',
    reference: () => console.log('test'),
  },
  {
    testDescription: 'Object',
    reference: { a: 1, b: 2 },
  },
  {
    testDescription: 'Map',
    reference: new Map(),
  },
  {
    testDescription: 'Number',
    reference: 107,
  },
  {
    testDescription: 'null',
    reference: null,
  },
  {
    testDescription: 'undefined',
    reference: undefined,
  },
];

describe('getQueryString', () => {
  describe('Parses valid references; returns object containing youVersionUri and queryString', () => {
    validReferences.forEach(({ testDescription, reference, expected }) => {
      test(testDescription ?? reference, () => {
        expect(getQueryString(reference)).toEqual(expected);
      });
    });
  });

  describe("Does not parse invalid references; returns 'invalid'", () => {
    invalidReferences.forEach(({ testDescription, reference }) => {
      test(testDescription ?? reference, () => {
        expect(getQueryString(reference)).toEqual('invalid');
      });
    });
  });
});
