import { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, Fade } from 'reactstrap';
import './PodcastItem.scss';

interface Props {
  content: {
    type: 'podcast';
    podcastlist: Array<{
      title: string;
      description: string;
      icon: {
        src: string;
        alt: string;
      };
      apple: string;
      google: string;
      spotify: string;
      podbean: string;
    }>;
  };
}

type DropdownProps = { item: Props['content']['podcastlist'][0] };

function PodcastDropdown({ item }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      className="PodcastDropdown"
      isOpen={open}
      toggle={() => setOpen((prev) => !prev)}
    >
      <DropdownToggle id="podcast-toggle">
        <img className="SubIcon" src="/static/svg/Subscribe-white.svg" alt="" />
        Listen
      </DropdownToggle>
      <Fade timeout={1000}>
        <DropdownMenu className="PodcastMenu">
          {item.spotify ? (
            <a href={item.spotify} rel="noopener noreferrer" target="_blank">
              <img
                className="OtherBadge"
                src="/static/spotify-podcast-badge-wht-grn-165x40.svg"
                alt="Spotify"
                style={{ height: 40, marginBottom: 10 }}
              ></img>
            </a>
          ) : null}
          {item.google ? (
            <a href={item.google} rel="noopener noreferrer" target="_blank">
              <img
                className="OtherBadge"
                src="/static/EN_Google_Podcasts_Badge.svg"
                alt="Google Podcasts"
                style={{ height: 40, marginBottom: 10 }}
              ></img>
            </a>
          ) : null}
          {item.podbean ? (
            <a href={item.podbean} rel="noopener noreferrer" target="_blank">
              <img
                className="OtherBadge"
                src="//d8g345wuhgd7e.cloudfront.net/site/images/badges/w600.png"
                alt="Podbean"
                style={{ height: 36 }}
              ></img>
            </a>
          ) : null}
        </DropdownMenu>
      </Fade>
    </Dropdown>
  );
}

export default function PodcastItem({ content }: Props) {
  return (
    <div className="PodcastItem">
      <h2 className="v-player-h2 tmh-header2 w">Suggested Podcasts</h2>
      {content.podcastlist.map((item) => {
        return (
          <div className="PodcastItemDiv1" key={item.title}>
            <img
              className="PodcastIcon"
              src={item.icon.src}
              alt={item.icon.alt}
              style={{ width: 64, height: 64 }}
            ></img>
            <div className="PodcastContentContainer">
              <div className="PodcastTitle">{item.title}</div>
              <div className="PodcastText">{item.description}</div>
              <div className="PodcastLinksContainer">
                {item.apple ? (
                  <a
                    className="ApplePodcast"
                    href={item.apple}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="AppleBadge"
                      src="/static/US_UK_Apple_Podcasts_Listen_Badge_RGB.svg"
                      alt="Apple Podcasts"
                      style={{ height: 40 }}
                    ></img>
                  </a>
                ) : null}
                <PodcastDropdown item={item} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
