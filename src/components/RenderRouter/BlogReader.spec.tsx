import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BlogReader from './BlogReader';

const blogProps = {
  data: {
    id: '123',
    author: 'Darrell Winger',
    blogStatus: 'Live',
    blogTitle: 'In-Person Gatherings In 2021',
    description:
      'An update from our Senior Pastor Darrell Winger regarding in-person gatherings at The Meeting House for the year ahead.',
    expirationDate: 'none',
    hiddenMainIndex: false,
    content:
      '<p></p>\n<img src="mock.jpg" alt="mock blog image" style="height: auto;width: 100%"/>\n<p></p>\n<p></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">It will soon be one year since the outbreak of the COVID-19 pandemic. What most hoped would be a short-term challenge has become a marathon, and the longer we’ve continued in this new reality, the more we realize our need to not just make reactive decisions but to consider proactive and vision-oriented options.</span><br></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">In late November, we again engaged our broader church family through a survey of over 4,000 people to get a sense of how our community felt about larger in-person Sunday gatherings. A strong majority (76%) encouraged a cautious approach and urged us not to rush back to in-person services. Only 17% indicated they were currently ready to gather. In terms of volunteering, only 11% of people were ready to volunteer and 73% were unsure or willing to volunteer at a future time.</span><br></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">We also connected with and listened to our parish pastors, senior leadership team, and Overseers. <strong>The strong consensus aligned with the survey response—let’s not rush back.</strong> What people want most are relational connections and experiences that focus on “being together.” Additionally, our pastors expressed that this is a time to discern what God is saying to us for the longer-term.</span><br></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">This is an unplanned opportunity that God is giving us to discover the <em>new thing</em> he has for us as we lean into being parish minded. When we do come together in person for services, we want those gatherings to not be about “going back to” but “moving forward with,” and as such we want to give ourselves time to discern our longer-term approach to Sunday in-person gatherings.</span><br></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">We feel God is leading us to something new as we live out our purpose of growing loving communities of Jesus-followers with a vision of inviting spiritually curious people into the Jesus-centred life: being parish minded, which means equipping and discipling our Meeting House people to want to live out our faith in meaningful ways in our local neighbourhoods.  </span><br></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;"><strong>In light of this, over the coming months we will:</strong></span><br></p>\n<ol>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">Continue to gather online through our Sunday livestream. </span></li>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">Empower our local parishes to shape smaller gatherings with the purpose of relational connections.</span></li>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">Continue to creatively resource people at home, including kids and youth.</span></li>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;"><strong>Not have larger in-person Sunday services before September 1, 2021—unless things change significantly—but take the next several months to develop a plan.</strong></span><br></li>\n</ol>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">Key factors guiding our decision continue to be:</span></p>\n<ul>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">What is the most loving thing to do?</span></li>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">What are the best ways to move our purpose and vision forward?</span></li>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">What is the best stewardship of our available financial and human resources?</span></li>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">What do public health directions allow to keep people safe?</span></li>\n<li><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">What new opportunity may God be asking us to consider?</span><br></li>\n</ul>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">We understand that many are longing for more connection. We encourage you to <strong>reach out to your local parish pastor</strong> to find ways to engage and stay connected. Then, as restrictions ease, our parishes will plan to have smaller in-person gatherings.</span><br></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">If you are not yet a part of a Home Church, we strongly encourage you to join one. We know that connecting online may be challenging, but it provides a sense of belonging during a difficult season when many feel isolated. </span><a href="https://www.themeetinghouse.com/find-homechurch" target="_self"><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;"><strong><ins>Find a Home Church you can connect with today.</ins></strong></span></a><br></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">Some have asked about how we’ve adapted our livestream in light of recent changes in public health guidelines. We’ve taken steps to limit our entire Sunday morning livestream team to five people and maintain physical distancing. Our musical worship was pre-recorded before the new restrictions came into effect. To prioritize the safety of everyone, we have limited our music team to three people, have used additional plexiglass glass to separate vocalists, and have asked musicians who are not singing to keep their masks on. We want to make the most loving decisions to keep everyone safe and healthy.</span><br></p>\n<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 12pt;font-family: Calibri, sans-serif;">As we continue in this challenging marathon, let’s be praying for continued strength, grace, and wisdom.</span></p>\n',
    publishedDate: '2020-01-01',
  },
};

const noteProps = {
  data: {
    id: '2020-06-07',
    title: 'Jesus + Justice 01: Righteouis Justice',
    episodeDescription:
      'We learn to lament, repent, and receive a new vision from Jesus.',
    episodeNumber: 1,
    content:
      '<p></p>\n<img src="mock.jpg" alt="mock notes image" style="height: auto;width: 100%"/>\n<p><em>(With Special Guest, Cheryl Nembhard)</em></p>\n<h1><span style="font-size: 18px;"><strong><ins>APPETIZER: Stewarding Our Moment of Lament </ins></strong></span></h1>\n<p>NOTE: When talk about “white supremacy” we are not referring to individuals or groups of white people feeling or acting superior (e.g. the KKK) but we are talking about a history that created a current systemic reality that has favoured whiteness (in appearance and culture and opportunity), giving white people a level of privilege and power that is out of proportion to non-white people. Jesus teaches those of us with power how to lay it down to serve the needs of others <em>(e.g. Mark 10:42-45)</em>.</p>\n<p><strong>Entering the conversation through the doorway of empathy…</strong><br><a href="https://www.biblegateway.com/passage/?search=Matthew+7%3A12&version=NIV" target="_blank"><ins>Matthew 7:12</ins></a><em>; </em><a href="https://www.biblegateway.com/passage/?search=Galatians++6%3A2&version=NIV" target="_blank"><ins>Galatians 6:2</ins></a></p>\n<p><em>Stewarding Our Moment of Lament (with Cheryl Nembhard)</em> <a href="https://youtu.be/O4Pqvv4ciP8?t=747" target="_blank">WATCH VIDEO</a></p>\n<p>• <a href="https://www.biblegateway.com/passage/?search=Jeremiah++31%3A15&version=NIV" target="_blank"><ins>Jeremiah 31:15</ins></a> – Lamentation  and bitter weeping.<br>• <a href="https://www.biblegateway.com/passage/?search=Galatians+6%3A2-3&version=NIV" target="_blank"><ins>Galatians 6:2-3</ins></a> – Bearing one  another’s burdens.<br>• <a href="https://www.biblegateway.com/passage/?search=Isaiah+53%3A3+&version=NIV" target="_blank"><ins>Isaiah 53:3</ins> </a>– A man of sorrows and acquainted with grief.<br>• <a href="https://www.biblegateway.com/passage/?search=Romans+12%3A15&version=NIV" target="_blank"><ins>Romans 12:15</ins></a> / <a href="https://www.biblegateway.com/passage/?search=1+Cor+12%3A26&version=NIV" target="_blank"><ins>1 Corinthians 12:26</ins></a> – Mourning  in empathy as family.</p>\n<h1><span style="font-size: 18px;"><strong><ins>DINE IN: Praying For Justice</ins></strong></span></h1>\n<p><a href="https://www.biblegateway.com/passage/?search=Luke+18%3A1-8&version=NIV" target="_blank"><span style="font-size: 18px;"><ins>Luke 18:1-8</ins></span></a></p>\n<p>Jesus regularly uses illustrations in his teaching that would connect with a female audience—he is making disciples of women!<br>• <a href="https://www.biblegateway.com/passage/?search=Matthew+9%3A16&version=NIV" target="_blank"><ins>Matthew 9:16</ins></a> – winemaking AND sewing<br>• <a href="https://www.biblegateway.com/passage/?search=Matthew+13%3A33&version=NIV" target="_blank"><ins>Matthew 13:33</ins></a> – planting A ND baking<br>• <a href="https://www.biblegateway.com/passage/?search=Luke+21%3A1-4&version=NIV" target="_blank"><ins>Luke 21:1-4</ins></a> – a widow’ s generosity</p>\n<p>Jesus’ rebellion against the sexism of his day lines up with his rejection of the racial bigotry of his day (e.g., helping Romans, Parable of the Good Samaritan, etc.).&nbsp;</p>\n<p><strong>Ultimately, sin is the real problem, the universal human problem…</strong><br><a href="https://www.biblegateway.com/passage/?search=Matthew+15%3A19&version=NIV" target="_blank"><span style="font-size: 18px;"><ins>Matthew 15:19</ins></span></a>&nbsp;</p>\n<h1><span style="font-size: 18px;"><strong><ins>TAKE OUT: The Good News of Jesus</ins></strong></span></h1>\n<p><span style="font-size: 16px;"><em>For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.</em><br><em>~ Jesus (Mark 10:45)</em></span></p>\n<p><strong>Recommended Resources:</strong><br>• WATCH: <a href="https://youtu.be/Dn7FGQU6SKw" target="_blank"><ins>Top Questions Non-Black Christians Are Asking About Racism</ins></a> from <em>Whaddo You Meme?? </em>on YouTube.<br>• READ: <a href="https://store.mennomedia.org/Trouble-Ive-Seen-P4634.aspx" target="_blank"><ins>Trouble I’ve Seen</ins></a> by Drew Hart (an d his upcoming, Who Will Be A Witness?); <a href="https://www.amazon.ca/Post-Black-Post-White-Church-Multi-Ethnic-Jossey-Bass-ebook/dp/B007ZDV7ZM" target="_blank"><ins>The Post-Black and Post-White Church</ins></a> by Efrem Smith.<br>• LISTEN: Our 2018 <a href="https://www.themeetinghouse.com/videos/Peacemakers/p_oqj-xbm5g" target="_blank">Peacemakers series at themeetinghouse.com</a>; also track with <a href="https://whchurch.org/sermon/please-i-cant-breathe/" target="_blank"><ins>Woodland Hills Church Podcast</ins></a>, starting Sunday May 31.</p>\n',
    questions:
      '<p style="text-align:start;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 24px;"><strong>Home Church Questions</strong></span></p>\n<p style="text-align:start;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">Remember to use these questions like a menu, <em>not a checklist.</em> These questions are not mandated material you have to cover, but options to help guide your discussion as much or as little as you like.</span></p>\n<h1 style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;"><strong>HANGOUT [Warming Up to the Topic – in one Large Group]</strong></span></h1>\n<p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">1. Did you catch the After Party this week? Any highlights stand out to you?</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">2. How about the Sunday teaching—what stood out to you?</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">3. Have you read or listened to or watched any of the recommended resources on this topic? (Or other resources?) Talk about what you have learned from them so far.</span></p>\n<h1 style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;"><strong>HEAR [Listening to God through Scripture – in Discussion Groups]</strong></span></h1>\n<p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;"><strong>4. Read </strong></span><a href="https://www.biblegateway.com/passage/?search=Matthew+7%3A12&version=NIV" target="_blank"><span style="color: rgb(26,26,26);background-color: transparent;font-size: 16px;"><strong><ins>Matthew 7:12</ins></strong></span></a><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;"><strong> and </strong></span><a href="https://www.biblegateway.com/passage/?search=Galatians+6%3A2&version=NIV" target="_blank"><span style="color: rgb(26,26,26);background-color: transparent;font-size: 16px;"><strong><ins>Galatians 6:2</ins></strong></span></a><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">a. What stands out to you?</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">b. What does it mean to carry one another’s burdens in our current context? If you are carrying a burden, what would sharing that burden with your home</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">church community look like in terms of their support/solidarity?</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">c. Talk about your own experience of developing compassionate empathy for others who are different to you. (And if you have experienced pain at the</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">hands of White Supremacy, feel free to share some stories with your group.)</span></p>\n<p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;"><strong>5. Read </strong></span><a href="https://www.biblegateway.com/passage/?search=Mark+10%3A42-45&version=NIV" target="_blank"><span style="color: rgb(26,26,26);background-color: transparent;font-size: 16px;"><strong><ins>Mark 10:42-45</ins></strong></span></a><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">a. What stands out to you?</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">b. Try a thought experiment: What might Western history have looked like if people who claimed to be Christians followed this teaching of Jesus? Talk about the possibilities.</span></p>\n<p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;"><strong>6. Read </strong></span><a href="https://www.biblegateway.com/passage/?search=Luke+18%3A1-8&version=NIV" target="_blank"><span style="color: rgb(26,26,26);background-color: transparent;font-size: 16px;"><strong><ins>Luke 18:1-8</ins></strong></span></a><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">a. What stands out to you?</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">b. What in your life and in our current reality makes you feel like “giving up”?</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">c. What would “faith” and “not giving up” and “always praying” look like in your life this week?</span><br><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">d. It may be true that we will not see complete justice until Jesus returns, but until then, we can pray and we can work. Spend time praying for justice, for compassion, and for love to grow in our church and to spill over into other areas of our lives.</span></p>\n<h1 style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 18px;"><strong>HUDDLE [Making it Personal and Praying Together – in Huddles]</strong></span></h1>\n<p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;">7. What do you sense God might be saying to you specifically through all of this? Pray for one another.</span>&nbsp;</p>\n',
    pdf: 'https://themeetinghouse.com',
  },
};

const unlistedNoteProps = {
  data: { ...noteProps.data, title: 'Unlisted' },
};

const noPdfNoteProps = {
  data: { ...noteProps.data, pdf: '' },
};

describe('BlogReader', () => {
  beforeEach(() => {
    // set up portal
    document.body.innerHTML =
      '<div id="root"></div><div id="portal-root"></div>';

    window.getSelection = () =>
      ({
        anchorNode: {
          nodeName: '#text',
        },
        toString: () => 'highlighted text',
        getRangeAt: () => ({
          getBoundingClientRect: () => ({ y: 100, right: 1000, left: 100 }),
        }),
      } as any);
  });

  afterEach(jest.clearAllMocks);

  describe('Notes', () => {
    it('renders notes, questions, title and download button', () => {
      render(
        <MemoryRouter>
          <BlogReader {...(noteProps as any)} style="notes" />
        </MemoryRouter>
      );

      const availableSoon = screen.queryByText('Notes will be available soon');
      const checkBackLater = screen.queryByText('Please check back later');
      const title = screen.queryByText(noteProps.data.title);
      const download = screen.queryAllByTestId('download');
      const notesBodyText = screen.queryByText('~ Jesus (Mark 10:45)');
      const questionsBodyText = screen.queryByText('Home Church Questions');
      const image = screen.queryByAltText('mock notes image');

      expect(availableSoon).toBeFalsy();
      expect(checkBackLater).toBeFalsy();
      expect(title).toBeTruthy();
      expect(download.length).toBe(2);
      expect(download[0]).toBeTruthy();
      expect(download[0]?.textContent).toBe('PDF');
      expect(download[0]?.firstElementChild?.getAttribute('href')).toBe(
        'https://themeetinghouse.com'
      );
      expect(notesBodyText).toBeTruthy();
      expect(questionsBodyText).toBeTruthy();
      expect(image).toBeTruthy();
    });

    it('does not render content if notes are unlisted', () => {
      render(
        <MemoryRouter>
          <BlogReader {...(unlistedNoteProps as any)} style="notes" />
        </MemoryRouter>
      );

      const availableSoon = screen.queryByText('Notes will be available soon');
      const checkBackLater = screen.queryByText('Please check back later');
      const title = screen.queryByText(noteProps.data.title);

      expect(availableSoon).toBeTruthy();
      expect(checkBackLater).toBeTruthy();
      expect(title).toBeFalsy();
    });

    it('does not render download button if PDF link does not exist', () => {
      render(
        <MemoryRouter>
          <BlogReader {...(noPdfNoteProps as any)} style="notes" />
        </MemoryRouter>
      );

      const download = screen.queryByTestId('download');
      expect(download).toBeFalsy();
    });
  });

  describe('Blog', () => {
    it('renders body, title, author, date and share button', () => {
      render(
        <MemoryRouter>
          <BlogReader {...(blogProps as any)} style="blog" />
        </MemoryRouter>
      );

      const { blogTitle, author, publishedDate } = blogProps.data;

      const title = screen.queryByText(blogTitle);
      const authorName = screen.queryByText(author);
      const linkToBlog = screen.queryByText('Blog');
      const share = screen.queryAllByTestId('share');
      const bodyText = screen.queryByText(
        'It will soon be one year since the outbreak of the COVID-19 pandemic. What most hoped would be a short-term challenge has become a marathon, and the longer we’ve continued in this new reality, the more we realize our need to not just make reactive decisions but to consider proactive and vision-oriented options.'
      );
      const image = screen.queryByAltText('mock blog image');

      expect(title).toBeTruthy();
      expect(authorName).toBeTruthy();
      expect(authorName?.parentElement?.textContent).toBe(
        `by ${author} on ${publishedDate}`
      );
      expect(linkToBlog).toBeTruthy();
      expect(linkToBlog?.textContent).toBe('Blog');
      expect(linkToBlog?.getAttribute('href')).toBe('/blog');
      expect(share.length).toBe(2);
      expect(share[0]).toBeTruthy();
      expect(share[0]?.textContent?.includes('Share')).toBeTruthy();
      expect(bodyText).toBeTruthy();
      expect(image).toBeTruthy();
    });

    it('highlight and share', async () => {
      render(
        <MemoryRouter>
          <BlogReader {...(blogProps as any)} style="blog" />
        </MemoryRouter>
      );

      const bodyText = screen.queryByText(
        'It will soon be one year since the outbreak of the COVID-19 pandemic. What most hoped would be a short-term challenge has become a marathon, and the longer we’ve continued in this new reality, the more we realize our need to not just make reactive decisions but to consider proactive and vision-oriented options.'
      );
      const body = screen.getByTestId('blog-body');
      const inlineShare = screen.queryByTestId('inline-share');

      expect(bodyText).toBeTruthy();
      expect(body).toBeTruthy();
      expect(inlineShare).toBeFalsy();

      fireEvent.mouseUp(body);

      await waitFor(() => {
        const inlineShare = screen.queryByTestId('inline-share');
        expect(inlineShare).toBeTruthy();
        expect(inlineShare?.getAttribute('style')).toBe(
          `top: ${100 - 68}px; left: ${(1000 + 100) / 2 - 52}px;`
        );
      });

      const twitter = screen.getByTestId('twitter');
      expect(twitter).toBeTruthy();
      const email = screen.getByTestId('email');
      expect(email).toBeTruthy();

      fireEvent.mouseDown(document.getElementById('root') as Element);

      await waitFor(() => {
        const inlineShare = screen.queryByTestId('inline-share');
        expect(inlineShare).toBeFalsy();
      });
    });

    it('no highlight and share on small devices (e.g. mobile)', async () => {
      global.innerWidth = 330;
      global.dispatchEvent(new Event('resize'));
      window.getSelection = jest.fn();

      render(
        <MemoryRouter>
          <BlogReader {...(blogProps as any)} style="blog" />
        </MemoryRouter>
      );

      const bodyText = screen.queryByText(
        'It will soon be one year since the outbreak of the COVID-19 pandemic. What most hoped would be a short-term challenge has become a marathon, and the longer we’ve continued in this new reality, the more we realize our need to not just make reactive decisions but to consider proactive and vision-oriented options.'
      );
      const body = screen.getByTestId('blog-body');
      const inlineShare = screen.queryByTestId('inline-share');

      expect(bodyText).toBeTruthy();
      expect(body).toBeTruthy();
      expect(inlineShare).toBeFalsy();

      fireEvent.mouseUp(body);

      await waitFor(() => {
        const inlineShare = screen.queryByTestId('inline-share');
        expect(inlineShare).toBeFalsy();
        const twitter = screen.queryByTestId('twitter');
        expect(twitter).toBeFalsy();
        const email = screen.queryByTestId('email');
        expect(email).toBeFalsy();
      });
    });
  });
});
