
export interface SundayMorningItemContent {
  type: 'sunday-morning';

  alternate: string;

  header1: string;
}

export interface DistanceGroupItemContent {
  type: 'distance-groups';

  header1: string;
}

export interface HomeChurchItemContent {
  type: 'home-church';

  class: 'home-church';

  header1: string;
}
export interface ItemImage {
  src: string;
  alt: string;
}
