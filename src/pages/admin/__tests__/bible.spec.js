import Bible from '../bible';

const testData = [
  { in: 'Matthew 7:21, 24-27', out: 'invalid' },
  { in: 'Jon 3:16', out: 'invalid' },
  {
    in: 'Genesis 3',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/GEN.3.NIV`,
      queryString: `GEN.3`,
    },
  },
  {
    in: 'Genesis 3-4',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/GEN.3.NIV`,
      queryString: `GEN.3-GEN.4`,
    },
  },
  {
    in: 'Genesis 3:1-4',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/GEN.3.1-4.NIV`,
      queryString: `GEN.3.1-GEN.3.4`,
    },
  },
  {
    in: 'Genesis 3:20-4:20',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/GEN.3.NIV`,
      queryString: `GEN.3.20-GEN.4.20`,
    },
  },
  {
    in: '2 Peter 2',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/2PE.2.NIV`,
      queryString: `2PE.2`,
    },
  },
  {
    in: '1 Corinthians 8:4',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/1CO.8.4.NIV`,
      queryString: `1CO.8.4`,
    },
  },
  {
    in: '1 Timothy 6:3-4',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/1TI.6.3-4.NIV`,
      queryString: `1TI.6.3-1TI.6.4`,
    },
  },
  {
    in: '1 Corinthians 8:10-9:7',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/1CO.8.NIV`,
      queryString: `1CO.8.10-1CO.9.7`,
    },
  },
  {
    test: '1 Corinthians 8:10—9:7 (emdash)',
    in: '1 Corinthians 8:10—9:7',
    out: 'invalid',
  },
  {
    test: 'Mark 7:1—2 (emdash)',
    in: 'Mark 7:1—2',
    out: 'invalid',
  },
  {
    test: '1 Corinthians 8:10–9:7 (endash)',
    in: '1 Corinthians 8:10–9:7',
    out: 'invalid',
  },
  {
    test: 'Mark 7:1–2 (endash)',
    in: 'Mark 7:1–2',
    out: 'invalid',
  },
  {
    test: '1 Corinthians 8;10-9:7 (invalid character)',
    in: '1 Corinthians 8;10-9:7',
    out: 'invalid',
  },
  {
    test: '1 Corinthians 8:10=9:7 (invalid character)',
    in: '1 Corinthians 8:10=9:7',
    out: 'invalid',
  },
  {
    test: '1 Corinthians 8:10_9:7 (invalid character)',
    in: '1 Corinthians 8:10_9:7',
    out: 'invalid',
  },
  {
    test: '1 Corinthians 8:10 - 9:7 (extra spaces)',
    in: '1 Corinthians 8:10 - 9:7',
    out: 'invalid',
  },
  {
    test: '1 Corinthians  8:10-9:7 (extra space)',
    in: '1 Corinthians  8:10-9:7',
    out: 'invalid',
  },
  {
    in: 'Song of Solomon 2:1',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/SNG.2.1.NIV`,
      queryString: `SNG.2.1`,
    },
  },
  {
    in: 'Song of Songs 2:1',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/SNG.2.1.NIV`,
      queryString: `SNG.2.1`,
    },
  },
  {
    in: 'Song 2:1',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/SNG.2.1.NIV`,
      queryString: `SNG.2.1`,
    },
  },
  {
    in: 'Songs 2:1',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/SNG.2.1.NIV`,
      queryString: `SNG.2.1`,
    },
  },
  {
    in: 'Solomon 2:1',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/SNG.2.1.NIV`,
      queryString: `SNG.2.1`,
    },
  },
  {
    in: 'Psalms 128:6-130:4',
    out: {
      youVersionUri: `https://www.bible.com/bible/111/PSA.128.NIV`,
      queryString: `PSA.128.6-PSA.130.4`,
    },
  },
];

describe('Parse Bible references and check for invalid strings', () => {
  for (let data of testData) {
    test(data.test ?? data.in, () => {
      expect(Bible.getQueryString(data.in)).toEqual(data.out);
    });
  }
});
