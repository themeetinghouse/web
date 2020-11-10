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
  style: 'teaching' | 'blog';
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
