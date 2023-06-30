import './TMHCarousel.scss';
import LinkCarouselItem from './LinkCarouselItem';
import ListWrapper from './ListWrapper';

type TMHCarouselProps = {
  content: any;
  isFromList?: boolean;
};

const TMHCarousel = (props: TMHCarouselProps) => {
  const items = props.content.list ?? [];
  const { description, header1, header2 } = props.content;
  return items.length > 0 ? (
    <div className={`TMHCarouselContainer`}>
      {header1 ? (
        <h1 className={`TMHCarouselHeader1`}>{header1}</h1>
      ) : header2 ? (
        <h2 className={`TMHCarouselHeader2`}>{header2}</h2>
      ) : null}
      {description ? (
        <h3 className={`TMHCarouselDescription`}>{description}</h3>
      ) : null}
      <div className="TMHCarouselListWrapper">
        <ListWrapper>
          {items.map((link: any) => {
            return (
              <div className="TMHCarouselItem" key={link?.navigateTo}>
                <LinkCarouselItem
                  isFromList={props.isFromList}
                  link={link}
                ></LinkCarouselItem>
              </div>
            );
          })}
        </ListWrapper>
      </div>
    </div>
  ) : null;
};

export default TMHCarousel;
