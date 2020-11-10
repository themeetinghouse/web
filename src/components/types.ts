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

export interface SearchBarContentProp {
  type: string;
  style: string;
  header1: string;
  subclass: string;
  text1: string;
}
export interface FormItem {
  type: string;
  header1: string;
  class: string;
  style: string;
  formId: string;
  header2?: string;
  text1?: string;
}

export interface BlogItemContent {
  type: 'blog';
  style: 'multiImage' | 'hero';
  status: 'Live';
  header1?: string;
  sortOrder?: 'DESC' | 'ASC';
  limit?: number;
  blogSeries?: string;
  hideAllBlogsButton?: boolean;
}

export interface GoLink {
  type: 'goLink';
  style: 'link' | 'button';
  title: string;
  newWindow?: boolean;
  navigateTo: string;
}

export interface GoText {
  header1?: string;
  header2?: string;
  body?: Array<{
    fontWeight: 'bold' | 'normal';
    text: string;
    newParagraph?: boolean;
  }>;
}

export interface GoItem extends GoText {
  type: 'goContent';
  style: 'goItem' | 'goSubItems';
  items?: Array<GoText>;
}
