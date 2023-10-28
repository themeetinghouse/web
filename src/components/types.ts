import { ListLivestreamsQuery } from 'API';
import { LocationQuery } from './RenderRouter/DataLoader';

export interface SundayMorningItemContent extends LocationQuery {
  type: 'sunday-morning';
  alternate: string;
  header1: string;
  filterField?: 'id';
  filterValue?: string;
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
  style: 'multiImage' | 'hero' | 'featured' | 'watch-page' | 'location-page';
  status?: 'Live';
  header1?: string;
  header2?: string;
  sortOrder?: 'DESC' | 'ASC';
  limit?: number;
  blogSeries?: string;
  hideAllBlogsButton?: boolean;
  button1Action?: string;
  button1Label?: string;
  description?: string;
  backgroundColor?: 'white' | 'black';
  lessPadding?: boolean;
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

export type Margin = {
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
};

export type LiveEvents = NonNullable<
  NonNullable<ListLivestreamsQuery['listLivestreams']>['items']
>;
