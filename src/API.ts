/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTNSeriesInput = {
  id?: string | null,
  TNident?: string | null,
  title?: string | null,
  description?: string | null,
  imageUrl?: string | null,
  public?: number | null,
  thumbnail?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  sermonCommentCount?: number | null,
  homeChurchCommentCount?: number | null,
};

export type UpdateTNSeriesInput = {
  id: string,
  TNident?: string | null,
  title?: string | null,
  description?: string | null,
  imageUrl?: string | null,
  public?: number | null,
  thumbnail?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  sermonCommentCount?: number | null,
  homeChurchCommentCount?: number | null,
};

export type DeleteTNSeriesInput = {
  id?: string | null,
};

export type CreateTNSermonInput = {
  id?: string | null,
  TNident?: string | null,
  title?: string | null,
  speaker?: string | null,
  deliveryDate?: string | null,
  description?: string | null,
  audioUrl?: string | null,
  mediaEntries?: Array< TNMediaEntryInput | null > | null,
  public?: number | null,
  series_FK?: string | null,
  sermonNoteCount?: number | null,
  quoteNoteCount?: number | null,
  homeChurchNoteCount?: number | null,
  sermonCommentCount?: number | null,
  tNSermonSeriesId?: string | null,
};

export type TNMediaEntryInput = {
  type?: string | null,
  contentType?: string | null,
  kind?: string | null,
  label?: string | null,
  url?: string | null,
};

export type UpdateTNSermonInput = {
  id: string,
  TNident?: string | null,
  title?: string | null,
  speaker?: string | null,
  deliveryDate?: string | null,
  description?: string | null,
  audioUrl?: string | null,
  mediaEntries?: Array< TNMediaEntryInput | null > | null,
  public?: number | null,
  series_FK?: string | null,
  sermonNoteCount?: number | null,
  quoteNoteCount?: number | null,
  homeChurchNoteCount?: number | null,
  sermonCommentCount?: number | null,
  tNSermonSeriesId?: string | null,
};

export type DeleteTNSermonInput = {
  id?: string | null,
};

export type CreateResourceInput = {
  id?: string | null,
};

export type UpdateResourceInput = {
  id: string,
};

export type DeleteResourceInput = {
  id?: string | null,
};

export type CreateVideoInput = {
  id: string,
  createdBy?: string | null,
  createdDate?: string | null,
  episodeTitle?: string | null,
  episodeNumber?: number | null,
  seriesTitle?: string | null,
  publishedDate?: string | null,
  recordedDate?: string | null,
  description?: string | null,
  closedCaptioning?: Array< string | null > | null,
  referencedMedia?: Array< string | null > | null,
  campaigns?: Array< string | null > | null,
  bibleVerses?: Array< string | null > | null,
  topics?: Array< string | null > | null,
  qandeh?: Array< string | null > | null,
  length?: string | null,
  YoutubeIdent: string,
  Youtube?: YoutubePlaylistItemsItem2Input | null,
  videoTypes?: Array< string | null > | null,
};

export type YoutubePlaylistItemsItem2Input = {
  kind?: string | null,
  etag?: string | null,
  snippet?: YoutubeSnippetInput | null,
  contentDetails?: YoutubePlaylistItemDetailsInput | null,
};

export type YoutubeSnippetInput = {
  publishedAt?: string | null,
  channelId?: string | null,
  title?: string | null,
  description?: string | null,
  thumbnails?: YoutubeThumbnailsInput | null,
  channelTitle?: string | null,
  localized?: YoutubeLocalizedInput | null,
};

export type YoutubeThumbnailsInput = {
  default?: YoutubeThumbnailInput | null,
  medium?: YoutubeThumbnailInput | null,
  high?: YoutubeThumbnailInput | null,
  standard?: YoutubeThumbnailInput | null,
  maxres?: YoutubeThumbnailInput | null,
};

export type YoutubeThumbnailInput = {
  url?: string | null,
  width?: number | null,
  height?: number | null,
};

export type YoutubeLocalizedInput = {
  title?: string | null,
  description?: string | null,
};

export type YoutubePlaylistItemDetailsInput = {
  videoId?: string | null,
  videoPublishedAt?: string | null,
};

export type UpdateVideoInput = {
  id: string,
  createdBy?: string | null,
  createdDate?: string | null,
  episodeTitle?: string | null,
  episodeNumber?: number | null,
  seriesTitle?: string | null,
  publishedDate?: string | null,
  recordedDate?: string | null,
  description?: string | null,
  closedCaptioning?: Array< string | null > | null,
  referencedMedia?: Array< string | null > | null,
  campaigns?: Array< string | null > | null,
  bibleVerses?: Array< string | null > | null,
  topics?: Array< string | null > | null,
  qandeh?: Array< string | null > | null,
  length?: string | null,
  YoutubeIdent?: string | null,
  Youtube?: YoutubePlaylistItemsItem2Input | null,
  videoTypes?: Array< string | null > | null,
};

export type DeleteVideoInput = {
  id: string,
};

export type CreateBlogInput = {
  id?: string | null,
  createdBy?: string | null,
  createdDate?: string | null,
  postedDate?: string | null,
  title?: string | null,
  content?: string | null,
};

export type UpdateBlogInput = {
  id: string,
  createdBy?: string | null,
  createdDate?: string | null,
  postedDate?: string | null,
  title?: string | null,
  content?: string | null,
  expectedVersion: number,
};

export type DeleteBlogInput = {
  id?: string | null,
  expectedVersion: number,
};

export type CreateNewsInput = {
  id?: string | null,
  createdBy?: string | null,
  createdDate?: string | null,
  postedDate?: string | null,
  title?: string | null,
  content?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type UpdateNewsInput = {
  id: string,
  createdBy?: string | null,
  createdDate?: string | null,
  postedDate?: string | null,
  title?: string | null,
  content?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type DeleteNewsInput = {
  id?: string | null,
};

export type CreateEventInput = {
  id?: string | null,
  createdBy?: string | null,
  createdDate?: string | null,
  postedDate?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  title?: string | null,
  description?: string | null,
};

export type UpdateEventInput = {
  id: string,
  createdBy?: string | null,
  createdDate?: string | null,
  postedDate?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  title?: string | null,
  description?: string | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateGroupInput = {
  id?: string | null,
  canJoin?: boolean | null,
  visibleToNonMembers?: boolean | null,
  status?: Status | null,
  name?: string | null,
  type?: string | null,
};

export enum Status {
  enabled = "enabled",
  disabled = "disabled",
}


export type UpdateGroupInput = {
  id: string,
  canJoin?: boolean | null,
  visibleToNonMembers?: boolean | null,
  status?: Status | null,
  name?: string | null,
  type?: string | null,
};

export type DeleteGroupInput = {
  id?: string | null,
};

export type CreateOrganizationInput = {
  id?: string | null,
  canJoin: boolean,
  visibleToNonMembers: boolean,
  status: Status,
  name: string,
  location?: string | null,
  address?: string | null,
  phone?: string | null,
  email?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  facebook?: string | null,
  website?: string | null,
};

export type UpdateOrganizationInput = {
  id: string,
  canJoin?: boolean | null,
  visibleToNonMembers?: boolean | null,
  status?: Status | null,
  name?: string | null,
  location?: string | null,
  address?: string | null,
  phone?: string | null,
  email?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  facebook?: string | null,
  website?: string | null,
};

export type DeleteOrganizationInput = {
  id?: string | null,
};

export type CreateLocationInput = {
  id?: string | null,
  url?: string | null,
  site_name?: string | null,
  directions?: string | null,
  welcome?: string | null,
  welcome_img?: string | null,
  welcome_vid_youtube?: string | null,
  phone?: string | null,
  email?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  facebook?: string | null,
  location?: LocationGPSInput | null,
  visible?: boolean | null,
};

export type LocationGPSInput = {
  longitude?: number | null,
  latitude?: number | null,
  address?: string | null,
};

export type UpdateLocationInput = {
  id: string,
  url?: string | null,
  site_name?: string | null,
  directions?: string | null,
  welcome?: string | null,
  welcome_img?: string | null,
  welcome_vid_youtube?: string | null,
  phone?: string | null,
  email?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  facebook?: string | null,
  location?: LocationGPSInput | null,
  visible?: boolean | null,
};

export type DeleteLocationInput = {
  id?: string | null,
};

export type CreateStaffInput = {
  sub: string,
  title: string,
  name: string,
  phone?: string | null,
  email?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  facebook?: string | null,
  website?: string | null,
  status: string,
};

export type UpdateStaffInput = {
  sub?: string | null,
  title?: string | null,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  facebook?: string | null,
  website?: string | null,
  status?: string | null,
};

export type DeleteStaffInput = {
  id?: string | null,
};

export type CreateRegionInput = {
  id?: string | null,
  name: string,
  status: Status,
};

export type UpdateRegionInput = {
  id: string,
  name?: string | null,
  status?: Status | null,
};

export type DeleteRegionInput = {
  id?: string | null,
};

export type ModelTNSeriesFilterInput = {
  id?: ModelIDFilterInput | null,
  TNident?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  imageUrl?: ModelStringFilterInput | null,
  public?: ModelIntFilterInput | null,
  thumbnail?: ModelStringFilterInput | null,
  startDate?: ModelStringFilterInput | null,
  endDate?: ModelStringFilterInput | null,
  sermonCommentCount?: ModelIntFilterInput | null,
  homeChurchCommentCount?: ModelIntFilterInput | null,
  and?: Array< ModelTNSeriesFilterInput | null > | null,
  or?: Array< ModelTNSeriesFilterInput | null > | null,
  not?: ModelTNSeriesFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelTNSermonFilterInput = {
  id?: ModelIDFilterInput | null,
  TNident?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  speaker?: ModelStringFilterInput | null,
  deliveryDate?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  audioUrl?: ModelStringFilterInput | null,
  public?: ModelIntFilterInput | null,
  series_FK?: ModelStringFilterInput | null,
  sermonNoteCount?: ModelIntFilterInput | null,
  quoteNoteCount?: ModelIntFilterInput | null,
  homeChurchNoteCount?: ModelIntFilterInput | null,
  sermonCommentCount?: ModelIntFilterInput | null,
  and?: Array< ModelTNSermonFilterInput | null > | null,
  or?: Array< ModelTNSermonFilterInput | null > | null,
  not?: ModelTNSermonFilterInput | null,
};

export type ModelResourceFilterInput = {
  id?: ModelIDFilterInput | null,
  and?: Array< ModelResourceFilterInput | null > | null,
  or?: Array< ModelResourceFilterInput | null > | null,
  not?: ModelResourceFilterInput | null,
};

export type ModelVideoFilterInput = {
  id?: ModelIDFilterInput | null,
  createdBy?: ModelStringFilterInput | null,
  createdDate?: ModelStringFilterInput | null,
  episodeTitle?: ModelStringFilterInput | null,
  episodeNumber?: ModelIntFilterInput | null,
  seriesTitle?: ModelStringFilterInput | null,
  publishedDate?: ModelStringFilterInput | null,
  recordedDate?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  closedCaptioning?: ModelStringFilterInput | null,
  referencedMedia?: ModelStringFilterInput | null,
  campaigns?: ModelStringFilterInput | null,
  bibleVerses?: ModelStringFilterInput | null,
  topics?: ModelStringFilterInput | null,
  qandeh?: ModelStringFilterInput | null,
  length?: ModelStringFilterInput | null,
  YoutubeIdent?: ModelStringFilterInput | null,
  videoTypes?: ModelStringFilterInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDFilterInput | null,
  createdBy?: ModelStringFilterInput | null,
  createdDate?: ModelStringFilterInput | null,
  postedDate?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelNewsFilterInput = {
  id?: ModelIDFilterInput | null,
  createdBy?: ModelStringFilterInput | null,
  createdDate?: ModelStringFilterInput | null,
  postedDate?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  content?: ModelStringFilterInput | null,
  startDate?: ModelStringFilterInput | null,
  endDate?: ModelStringFilterInput | null,
  and?: Array< ModelNewsFilterInput | null > | null,
  or?: Array< ModelNewsFilterInput | null > | null,
  not?: ModelNewsFilterInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDFilterInput | null,
  createdBy?: ModelStringFilterInput | null,
  createdDate?: ModelStringFilterInput | null,
  postedDate?: ModelStringFilterInput | null,
  startTime?: ModelStringFilterInput | null,
  endTime?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDFilterInput | null,
  canJoin?: ModelBooleanFilterInput | null,
  visibleToNonMembers?: ModelBooleanFilterInput | null,
  status?: ModelStatusFilterInput | null,
  name?: ModelStringFilterInput | null,
  type?: ModelStringFilterInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelStatusFilterInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDFilterInput | null,
  canJoin?: ModelBooleanFilterInput | null,
  visibleToNonMembers?: ModelBooleanFilterInput | null,
  status?: ModelStatusFilterInput | null,
  name?: ModelStringFilterInput | null,
  location?: ModelStringFilterInput | null,
  address?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  instagram?: ModelStringFilterInput | null,
  twitter?: ModelStringFilterInput | null,
  facebook?: ModelStringFilterInput | null,
  website?: ModelStringFilterInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelLocationFilterInput = {
  id?: ModelStringFilterInput | null,
  url?: ModelStringFilterInput | null,
  site_name?: ModelStringFilterInput | null,
  directions?: ModelStringFilterInput | null,
  welcome?: ModelStringFilterInput | null,
  welcome_img?: ModelStringFilterInput | null,
  welcome_vid_youtube?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  instagram?: ModelStringFilterInput | null,
  twitter?: ModelStringFilterInput | null,
  facebook?: ModelStringFilterInput | null,
  visible?: ModelBooleanFilterInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelStaffFilterInput = {
  sub?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  name?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  instagram?: ModelStringFilterInput | null,
  twitter?: ModelStringFilterInput | null,
  facebook?: ModelStringFilterInput | null,
  website?: ModelStringFilterInput | null,
  status?: ModelStringFilterInput | null,
  and?: Array< ModelStaffFilterInput | null > | null,
  or?: Array< ModelStaffFilterInput | null > | null,
  not?: ModelStaffFilterInput | null,
};

export type ModelRegionFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  status?: ModelStatusFilterInput | null,
  and?: Array< ModelRegionFilterInput | null > | null,
  or?: Array< ModelRegionFilterInput | null > | null,
  not?: ModelRegionFilterInput | null,
};

export type SearchableResourceFilterInput = {
  id?: SearchableIDFilterInput | null,
  and?: Array< SearchableResourceFilterInput | null > | null,
  or?: Array< SearchableResourceFilterInput | null > | null,
  not?: SearchableResourceFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableResourceSortInput = {
  field?: SearchableResourceSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableResourceSortableFields {
  id = "id",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableVideoFilterInput = {
  id?: SearchableIDFilterInput | null,
  createdBy?: SearchableStringFilterInput | null,
  createdDate?: SearchableStringFilterInput | null,
  episodeTitle?: SearchableStringFilterInput | null,
  episodeNumber?: SearchableIntFilterInput | null,
  seriesTitle?: SearchableStringFilterInput | null,
  publishedDate?: SearchableStringFilterInput | null,
  recordedDate?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  closedCaptioning?: SearchableStringFilterInput | null,
  referencedMedia?: SearchableStringFilterInput | null,
  campaigns?: SearchableStringFilterInput | null,
  bibleVerses?: SearchableStringFilterInput | null,
  topics?: SearchableStringFilterInput | null,
  qandeh?: SearchableStringFilterInput | null,
  length?: SearchableStringFilterInput | null,
  YoutubeIdent?: SearchableStringFilterInput | null,
  videoTypes?: SearchableStringFilterInput | null,
  and?: Array< SearchableVideoFilterInput | null > | null,
  or?: Array< SearchableVideoFilterInput | null > | null,
  not?: SearchableVideoFilterInput | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableVideoSortInput = {
  field?: SearchableVideoSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableVideoSortableFields {
  id = "id",
  createdBy = "createdBy",
  createdDate = "createdDate",
  episodeTitle = "episodeTitle",
  episodeNumber = "episodeNumber",
  seriesTitle = "seriesTitle",
  publishedDate = "publishedDate",
  recordedDate = "recordedDate",
  description = "description",
  closedCaptioning = "closedCaptioning",
  referencedMedia = "referencedMedia",
  campaigns = "campaigns",
  bibleVerses = "bibleVerses",
  topics = "topics",
  qandeh = "qandeh",
  length = "length",
  YoutubeIdent = "YoutubeIdent",
  videoTypes = "videoTypes",
}


export type SearchableBlogFilterInput = {
  id?: SearchableIDFilterInput | null,
  createdBy?: SearchableStringFilterInput | null,
  createdDate?: SearchableStringFilterInput | null,
  postedDate?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  content?: SearchableStringFilterInput | null,
  and?: Array< SearchableBlogFilterInput | null > | null,
  or?: Array< SearchableBlogFilterInput | null > | null,
  not?: SearchableBlogFilterInput | null,
};

export type SearchableBlogSortInput = {
  field?: SearchableBlogSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableBlogSortableFields {
  id = "id",
  createdBy = "createdBy",
  createdDate = "createdDate",
  postedDate = "postedDate",
  title = "title",
  content = "content",
}


export type SearchableNewsFilterInput = {
  id?: SearchableIDFilterInput | null,
  createdBy?: SearchableStringFilterInput | null,
  createdDate?: SearchableStringFilterInput | null,
  postedDate?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  content?: SearchableStringFilterInput | null,
  startDate?: SearchableStringFilterInput | null,
  endDate?: SearchableStringFilterInput | null,
  and?: Array< SearchableNewsFilterInput | null > | null,
  or?: Array< SearchableNewsFilterInput | null > | null,
  not?: SearchableNewsFilterInput | null,
};

export type SearchableNewsSortInput = {
  field?: SearchableNewsSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableNewsSortableFields {
  id = "id",
  createdBy = "createdBy",
  createdDate = "createdDate",
  postedDate = "postedDate",
  title = "title",
  content = "content",
  startDate = "startDate",
  endDate = "endDate",
}


export type SearchableEventFilterInput = {
  id?: SearchableIDFilterInput | null,
  createdBy?: SearchableStringFilterInput | null,
  createdDate?: SearchableStringFilterInput | null,
  postedDate?: SearchableStringFilterInput | null,
  startTime?: SearchableStringFilterInput | null,
  endTime?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  and?: Array< SearchableEventFilterInput | null > | null,
  or?: Array< SearchableEventFilterInput | null > | null,
  not?: SearchableEventFilterInput | null,
};

export type SearchableEventSortInput = {
  field?: SearchableEventSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableEventSortableFields {
  id = "id",
  createdBy = "createdBy",
  createdDate = "createdDate",
  postedDate = "postedDate",
  startTime = "startTime",
  endTime = "endTime",
  title = "title",
  description = "description",
}


export type SearchableStaffFilterInput = {
  sub?: SearchableStringFilterInput | null,
  title?: SearchableStringFilterInput | null,
  name?: SearchableStringFilterInput | null,
  phone?: SearchableStringFilterInput | null,
  email?: SearchableStringFilterInput | null,
  instagram?: SearchableStringFilterInput | null,
  twitter?: SearchableStringFilterInput | null,
  facebook?: SearchableStringFilterInput | null,
  website?: SearchableStringFilterInput | null,
  status?: SearchableStringFilterInput | null,
  and?: Array< SearchableStaffFilterInput | null > | null,
  or?: Array< SearchableStaffFilterInput | null > | null,
  not?: SearchableStaffFilterInput | null,
};

export type SearchableStaffSortInput = {
  field?: SearchableStaffSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableStaffSortableFields {
  sub = "sub",
  title = "title",
  name = "name",
  phone = "phone",
  email = "email",
  instagram = "instagram",
  twitter = "twitter",
  facebook = "facebook",
  website = "website",
  status = "status",
}


export type CreateTnSeriesMutationVariables = {
  input: CreateTNSeriesInput,
};

export type CreateTnSeriesMutation = {
  createTNSeries:  {
    __typename: "TNSeries",
    id: string,
    TNident: string | null,
    title: string | null,
    description: string | null,
    imageUrl: string | null,
    public: number | null,
    thumbnail: string | null,
    startDate: string | null,
    endDate: string | null,
    sermonCommentCount: number | null,
    homeChurchCommentCount: number | null,
    sermons:  {
      __typename: "ModelTNSermonConnection",
      items:  Array< {
        __typename: "TNSermon",
        id: string,
        TNident: string | null,
        title: string | null,
        speaker: string | null,
        deliveryDate: string | null,
        description: string | null,
        audioUrl: string | null,
        mediaEntries:  Array< {
          __typename: "TNMediaEntry",
          type: string | null,
          contentType: string | null,
          kind: string | null,
          label: string | null,
          url: string | null,
        } | null > | null,
        public: number | null,
        series_FK: string | null,
        series:  {
          __typename: "TNSeries",
          id: string,
          TNident: string | null,
          title: string | null,
          description: string | null,
          imageUrl: string | null,
          public: number | null,
          thumbnail: string | null,
          startDate: string | null,
          endDate: string | null,
          sermonCommentCount: number | null,
          homeChurchCommentCount: number | null,
          sermons:  {
            __typename: "ModelTNSermonConnection",
            nextToken: string | null,
          } | null,
        } | null,
        sermonNoteCount: number | null,
        quoteNoteCount: number | null,
        homeChurchNoteCount: number | null,
        sermonCommentCount: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateTnSeriesMutationVariables = {
  input: UpdateTNSeriesInput,
};

export type UpdateTnSeriesMutation = {
  updateTNSeries:  {
    __typename: "TNSeries",
    id: string,
    TNident: string | null,
    title: string | null,
    description: string | null,
    imageUrl: string | null,
    public: number | null,
    thumbnail: string | null,
    startDate: string | null,
    endDate: string | null,
    sermonCommentCount: number | null,
    homeChurchCommentCount: number | null,
    sermons:  {
      __typename: "ModelTNSermonConnection",
      items:  Array< {
        __typename: "TNSermon",
        id: string,
        TNident: string | null,
        title: string | null,
        speaker: string | null,
        deliveryDate: string | null,
        description: string | null,
        audioUrl: string | null,
        mediaEntries:  Array< {
          __typename: "TNMediaEntry",
          type: string | null,
          contentType: string | null,
          kind: string | null,
          label: string | null,
          url: string | null,
        } | null > | null,
        public: number | null,
        series_FK: string | null,
        series:  {
          __typename: "TNSeries",
          id: string,
          TNident: string | null,
          title: string | null,
          description: string | null,
          imageUrl: string | null,
          public: number | null,
          thumbnail: string | null,
          startDate: string | null,
          endDate: string | null,
          sermonCommentCount: number | null,
          homeChurchCommentCount: number | null,
          sermons:  {
            __typename: "ModelTNSermonConnection",
            nextToken: string | null,
          } | null,
        } | null,
        sermonNoteCount: number | null,
        quoteNoteCount: number | null,
        homeChurchNoteCount: number | null,
        sermonCommentCount: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteTnSeriesMutationVariables = {
  input: DeleteTNSeriesInput,
};

export type DeleteTnSeriesMutation = {
  deleteTNSeries:  {
    __typename: "TNSeries",
    id: string,
    TNident: string | null,
    title: string | null,
    description: string | null,
    imageUrl: string | null,
    public: number | null,
    thumbnail: string | null,
    startDate: string | null,
    endDate: string | null,
    sermonCommentCount: number | null,
    homeChurchCommentCount: number | null,
    sermons:  {
      __typename: "ModelTNSermonConnection",
      items:  Array< {
        __typename: "TNSermon",
        id: string,
        TNident: string | null,
        title: string | null,
        speaker: string | null,
        deliveryDate: string | null,
        description: string | null,
        audioUrl: string | null,
        mediaEntries:  Array< {
          __typename: "TNMediaEntry",
          type: string | null,
          contentType: string | null,
          kind: string | null,
          label: string | null,
          url: string | null,
        } | null > | null,
        public: number | null,
        series_FK: string | null,
        series:  {
          __typename: "TNSeries",
          id: string,
          TNident: string | null,
          title: string | null,
          description: string | null,
          imageUrl: string | null,
          public: number | null,
          thumbnail: string | null,
          startDate: string | null,
          endDate: string | null,
          sermonCommentCount: number | null,
          homeChurchCommentCount: number | null,
          sermons:  {
            __typename: "ModelTNSermonConnection",
            nextToken: string | null,
          } | null,
        } | null,
        sermonNoteCount: number | null,
        quoteNoteCount: number | null,
        homeChurchNoteCount: number | null,
        sermonCommentCount: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateTnSermonMutationVariables = {
  input: CreateTNSermonInput,
};

export type CreateTnSermonMutation = {
  createTNSermon:  {
    __typename: "TNSermon",
    id: string,
    TNident: string | null,
    title: string | null,
    speaker: string | null,
    deliveryDate: string | null,
    description: string | null,
    audioUrl: string | null,
    mediaEntries:  Array< {
      __typename: "TNMediaEntry",
      type: string | null,
      contentType: string | null,
      kind: string | null,
      label: string | null,
      url: string | null,
    } | null > | null,
    public: number | null,
    series_FK: string | null,
    series:  {
      __typename: "TNSeries",
      id: string,
      TNident: string | null,
      title: string | null,
      description: string | null,
      imageUrl: string | null,
      public: number | null,
      thumbnail: string | null,
      startDate: string | null,
      endDate: string | null,
      sermonCommentCount: number | null,
      homeChurchCommentCount: number | null,
      sermons:  {
        __typename: "ModelTNSermonConnection",
        items:  Array< {
          __typename: "TNSermon",
          id: string,
          TNident: string | null,
          title: string | null,
          speaker: string | null,
          deliveryDate: string | null,
          description: string | null,
          audioUrl: string | null,
          mediaEntries:  Array< {
            __typename: "TNMediaEntry",
            type: string | null,
            contentType: string | null,
            kind: string | null,
            label: string | null,
            url: string | null,
          } | null > | null,
          public: number | null,
          series_FK: string | null,
          series:  {
            __typename: "TNSeries",
            id: string,
            TNident: string | null,
            title: string | null,
            description: string | null,
            imageUrl: string | null,
            public: number | null,
            thumbnail: string | null,
            startDate: string | null,
            endDate: string | null,
            sermonCommentCount: number | null,
            homeChurchCommentCount: number | null,
          } | null,
          sermonNoteCount: number | null,
          quoteNoteCount: number | null,
          homeChurchNoteCount: number | null,
          sermonCommentCount: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    sermonNoteCount: number | null,
    quoteNoteCount: number | null,
    homeChurchNoteCount: number | null,
    sermonCommentCount: number | null,
  } | null,
};

export type UpdateTnSermonMutationVariables = {
  input: UpdateTNSermonInput,
};

export type UpdateTnSermonMutation = {
  updateTNSermon:  {
    __typename: "TNSermon",
    id: string,
    TNident: string | null,
    title: string | null,
    speaker: string | null,
    deliveryDate: string | null,
    description: string | null,
    audioUrl: string | null,
    mediaEntries:  Array< {
      __typename: "TNMediaEntry",
      type: string | null,
      contentType: string | null,
      kind: string | null,
      label: string | null,
      url: string | null,
    } | null > | null,
    public: number | null,
    series_FK: string | null,
    series:  {
      __typename: "TNSeries",
      id: string,
      TNident: string | null,
      title: string | null,
      description: string | null,
      imageUrl: string | null,
      public: number | null,
      thumbnail: string | null,
      startDate: string | null,
      endDate: string | null,
      sermonCommentCount: number | null,
      homeChurchCommentCount: number | null,
      sermons:  {
        __typename: "ModelTNSermonConnection",
        items:  Array< {
          __typename: "TNSermon",
          id: string,
          TNident: string | null,
          title: string | null,
          speaker: string | null,
          deliveryDate: string | null,
          description: string | null,
          audioUrl: string | null,
          mediaEntries:  Array< {
            __typename: "TNMediaEntry",
            type: string | null,
            contentType: string | null,
            kind: string | null,
            label: string | null,
            url: string | null,
          } | null > | null,
          public: number | null,
          series_FK: string | null,
          series:  {
            __typename: "TNSeries",
            id: string,
            TNident: string | null,
            title: string | null,
            description: string | null,
            imageUrl: string | null,
            public: number | null,
            thumbnail: string | null,
            startDate: string | null,
            endDate: string | null,
            sermonCommentCount: number | null,
            homeChurchCommentCount: number | null,
          } | null,
          sermonNoteCount: number | null,
          quoteNoteCount: number | null,
          homeChurchNoteCount: number | null,
          sermonCommentCount: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    sermonNoteCount: number | null,
    quoteNoteCount: number | null,
    homeChurchNoteCount: number | null,
    sermonCommentCount: number | null,
  } | null,
};

export type DeleteTnSermonMutationVariables = {
  input: DeleteTNSermonInput,
};

export type DeleteTnSermonMutation = {
  deleteTNSermon:  {
    __typename: "TNSermon",
    id: string,
    TNident: string | null,
    title: string | null,
    speaker: string | null,
    deliveryDate: string | null,
    description: string | null,
    audioUrl: string | null,
    mediaEntries:  Array< {
      __typename: "TNMediaEntry",
      type: string | null,
      contentType: string | null,
      kind: string | null,
      label: string | null,
      url: string | null,
    } | null > | null,
    public: number | null,
    series_FK: string | null,
    series:  {
      __typename: "TNSeries",
      id: string,
      TNident: string | null,
      title: string | null,
      description: string | null,
      imageUrl: string | null,
      public: number | null,
      thumbnail: string | null,
      startDate: string | null,
      endDate: string | null,
      sermonCommentCount: number | null,
      homeChurchCommentCount: number | null,
      sermons:  {
        __typename: "ModelTNSermonConnection",
        items:  Array< {
          __typename: "TNSermon",
          id: string,
          TNident: string | null,
          title: string | null,
          speaker: string | null,
          deliveryDate: string | null,
          description: string | null,
          audioUrl: string | null,
          mediaEntries:  Array< {
            __typename: "TNMediaEntry",
            type: string | null,
            contentType: string | null,
            kind: string | null,
            label: string | null,
            url: string | null,
          } | null > | null,
          public: number | null,
          series_FK: string | null,
          series:  {
            __typename: "TNSeries",
            id: string,
            TNident: string | null,
            title: string | null,
            description: string | null,
            imageUrl: string | null,
            public: number | null,
            thumbnail: string | null,
            startDate: string | null,
            endDate: string | null,
            sermonCommentCount: number | null,
            homeChurchCommentCount: number | null,
          } | null,
          sermonNoteCount: number | null,
          quoteNoteCount: number | null,
          homeChurchNoteCount: number | null,
          sermonCommentCount: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    sermonNoteCount: number | null,
    quoteNoteCount: number | null,
    homeChurchNoteCount: number | null,
    sermonCommentCount: number | null,
  } | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
};

export type CreateResourceMutation = {
  createResource:  {
    __typename: "Resource",
    id: string | null,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
};

export type UpdateResourceMutation = {
  updateResource:  {
    __typename: "Resource",
    id: string | null,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
};

export type DeleteResourceMutation = {
  deleteResource:  {
    __typename: "Resource",
    id: string | null,
  } | null,
};

export type CreateVideoMutationVariables = {
  input: CreateVideoInput,
};

export type CreateVideoMutation = {
  createVideo:  {
    __typename: "Video",
    id: string,
    createdBy: string | null,
    createdDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    episodeTitle: string | null,
    episodeNumber: number | null,
    seriesTitle: string | null,
    publishedDate: string | null,
    recordedDate: string | null,
    description: string | null,
    closedCaptioning: Array< string | null > | null,
    referencedMedia: Array< string | null > | null,
    campaigns: Array< string | null > | null,
    bibleVerses: Array< string | null > | null,
    topics: Array< string | null > | null,
    qandeh: Array< string | null > | null,
    length: string | null,
    YoutubeIdent: string,
    Youtube:  {
      __typename: "YoutubePlaylistItemsItem2",
      id: string | null,
      kind: string | null,
      etag: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
      contentDetails:  {
        __typename: "YoutubePlaylistItemDetails",
        videoId: string | null,
        videoPublishedAt: string | null,
      } | null,
    } | null,
    videoTypes: Array< string | null > | null,
  } | null,
};

export type UpdateVideoMutationVariables = {
  input: UpdateVideoInput,
};

export type UpdateVideoMutation = {
  updateVideo:  {
    __typename: "Video",
    id: string,
    createdBy: string | null,
    createdDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    episodeTitle: string | null,
    episodeNumber: number | null,
    seriesTitle: string | null,
    publishedDate: string | null,
    recordedDate: string | null,
    description: string | null,
    closedCaptioning: Array< string | null > | null,
    referencedMedia: Array< string | null > | null,
    campaigns: Array< string | null > | null,
    bibleVerses: Array< string | null > | null,
    topics: Array< string | null > | null,
    qandeh: Array< string | null > | null,
    length: string | null,
    YoutubeIdent: string,
    Youtube:  {
      __typename: "YoutubePlaylistItemsItem2",
      id: string | null,
      kind: string | null,
      etag: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
      contentDetails:  {
        __typename: "YoutubePlaylistItemDetails",
        videoId: string | null,
        videoPublishedAt: string | null,
      } | null,
    } | null,
    videoTypes: Array< string | null > | null,
  } | null,
};

export type DeleteVideoMutationVariables = {
  input: DeleteVideoInput,
};

export type DeleteVideoMutation = {
  deleteVideo:  {
    __typename: "Video",
    id: string,
    createdBy: string | null,
    createdDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    episodeTitle: string | null,
    episodeNumber: number | null,
    seriesTitle: string | null,
    publishedDate: string | null,
    recordedDate: string | null,
    description: string | null,
    closedCaptioning: Array< string | null > | null,
    referencedMedia: Array< string | null > | null,
    campaigns: Array< string | null > | null,
    bibleVerses: Array< string | null > | null,
    topics: Array< string | null > | null,
    qandeh: Array< string | null > | null,
    length: string | null,
    YoutubeIdent: string,
    Youtube:  {
      __typename: "YoutubePlaylistItemsItem2",
      id: string | null,
      kind: string | null,
      etag: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
      contentDetails:  {
        __typename: "YoutubePlaylistItemDetails",
        videoId: string | null,
        videoPublishedAt: string | null,
      } | null,
    } | null,
    videoTypes: Array< string | null > | null,
  } | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
};

export type CreateBlogMutation = {
  createBlog:  {
    __typename: "Blog",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    version: number,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
};

export type UpdateBlogMutation = {
  updateBlog:  {
    __typename: "Blog",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    version: number,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
};

export type DeleteBlogMutation = {
  deleteBlog:  {
    __typename: "Blog",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    version: number,
  } | null,
};

export type CreateNewsMutationVariables = {
  input: CreateNewsInput,
};

export type CreateNewsMutation = {
  createNews:  {
    __typename: "News",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    startDate: string | null,
    endDate: string | null,
  } | null,
};

export type UpdateNewsMutationVariables = {
  input: UpdateNewsInput,
};

export type UpdateNewsMutation = {
  updateNews:  {
    __typename: "News",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    startDate: string | null,
    endDate: string | null,
  } | null,
};

export type DeleteNewsMutationVariables = {
  input: DeleteNewsInput,
};

export type DeleteNewsMutation = {
  deleteNews:  {
    __typename: "News",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    startDate: string | null,
    endDate: string | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    startTime: string | null,
    endTime: string | null,
    title: string | null,
    description: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    startTime: string | null,
    endTime: string | null,
    title: string | null,
    description: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    startTime: string | null,
    endTime: string | null,
    title: string | null,
    description: string | null,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
};

export type CreateGroupMutation = {
  createGroup:  {
    __typename: "Group",
    id: string | null,
    canJoin: boolean | null,
    visibleToNonMembers: boolean | null,
    status: Status | null,
    name: string | null,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    members:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    type: string | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
};

export type UpdateGroupMutation = {
  updateGroup:  {
    __typename: "Group",
    id: string | null,
    canJoin: boolean | null,
    visibleToNonMembers: boolean | null,
    status: Status | null,
    name: string | null,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    members:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    type: string | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
};

export type DeleteGroupMutation = {
  deleteGroup:  {
    __typename: "Group",
    id: string | null,
    canJoin: boolean | null,
    visibleToNonMembers: boolean | null,
    status: Status | null,
    name: string | null,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    members:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    type: string | null,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
};

export type CreateOrganizationMutation = {
  createOrganization:  {
    __typename: "Organization",
    id: string | null,
    canJoin: boolean,
    visibleToNonMembers: boolean,
    status: Status,
    name: string,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) > | null,
    members:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } > | null,
    location: string | null,
    address: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
};

export type UpdateOrganizationMutation = {
  updateOrganization:  {
    __typename: "Organization",
    id: string | null,
    canJoin: boolean,
    visibleToNonMembers: boolean,
    status: Status,
    name: string,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) > | null,
    members:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } > | null,
    location: string | null,
    address: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
};

export type DeleteOrganizationMutation = {
  deleteOrganization:  {
    __typename: "Organization",
    id: string | null,
    canJoin: boolean,
    visibleToNonMembers: boolean,
    status: Status,
    name: string,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) > | null,
    members:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } > | null,
    location: string | null,
    address: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
};

export type CreateLocationMutation = {
  createLocation:  {
    __typename: "Location",
    id: string | null,
    url: string | null,
    site_name: string | null,
    directions: string | null,
    welcome: string | null,
    welcome_img: string | null,
    welcome_vid_youtube: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    location:  {
      __typename: "LocationGPS",
      longitude: number | null,
      latitude: number | null,
      address: string | null,
    } | null,
    visible: boolean | null,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
};

export type UpdateLocationMutation = {
  updateLocation:  {
    __typename: "Location",
    id: string | null,
    url: string | null,
    site_name: string | null,
    directions: string | null,
    welcome: string | null,
    welcome_img: string | null,
    welcome_vid_youtube: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    location:  {
      __typename: "LocationGPS",
      longitude: number | null,
      latitude: number | null,
      address: string | null,
    } | null,
    visible: boolean | null,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
};

export type DeleteLocationMutation = {
  deleteLocation:  {
    __typename: "Location",
    id: string | null,
    url: string | null,
    site_name: string | null,
    directions: string | null,
    welcome: string | null,
    welcome_img: string | null,
    welcome_vid_youtube: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    location:  {
      __typename: "LocationGPS",
      longitude: number | null,
      latitude: number | null,
      address: string | null,
    } | null,
    visible: boolean | null,
  } | null,
};

export type CreateStaffMutationVariables = {
  input: CreateStaffInput,
};

export type CreateStaffMutation = {
  createStaff:  {
    __typename: "Staff",
    sub: string,
    title: string,
    name: string,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    status: string,
  } | null,
};

export type UpdateStaffMutationVariables = {
  input: UpdateStaffInput,
};

export type UpdateStaffMutation = {
  updateStaff:  {
    __typename: "Staff",
    sub: string,
    title: string,
    name: string,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    status: string,
  } | null,
};

export type DeleteStaffMutationVariables = {
  input: DeleteStaffInput,
};

export type DeleteStaffMutation = {
  deleteStaff:  {
    __typename: "Staff",
    sub: string,
    title: string,
    name: string,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    status: string,
  } | null,
};

export type CreateRegionMutationVariables = {
  input: CreateRegionInput,
};

export type CreateRegionMutation = {
  createRegion:  {
    __typename: "Region",
    id: string | null,
    name: string,
    status: Status,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type UpdateRegionMutationVariables = {
  input: UpdateRegionInput,
};

export type UpdateRegionMutation = {
  updateRegion:  {
    __typename: "Region",
    id: string | null,
    name: string,
    status: Status,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type DeleteRegionMutationVariables = {
  input: DeleteRegionInput,
};

export type DeleteRegionMutation = {
  deleteRegion:  {
    __typename: "Region",
    id: string | null,
    name: string,
    status: Status,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type GetYoutubePlaylistItemsQueryVariables = {
  playlistId?: string | null,
};

export type GetYoutubePlaylistItemsQuery = {
  getYoutubePlaylistItems:  {
    __typename: "YoutubePlaylistItems",
    kind: string | null,
    etag: string | null,
    pageInfo:  {
      __typename: "YoutubePageInfo",
      totalResults: number | null,
      resultsPerPage: number | null,
    } | null,
    items:  Array< {
      __typename: "YoutubePlaylistItemsItem",
      id: string | null,
      kind: string | null,
      etag: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
      contentDetails:  {
        __typename: "YoutubePlaylistItemDetails",
        videoId: string | null,
        videoPublishedAt: string | null,
      } | null,
    } | null > | null,
  },
};

export type GetYoutubePlaylistQueryVariables = {
  nextPageToken?: string | null,
};

export type GetYoutubePlaylistQuery = {
  getYoutubePlaylist:  {
    __typename: "YoutubePlayList",
    kind: string | null,
    etag: string | null,
    nextPageToken: string | null,
    pageInfo:  {
      __typename: "YoutubePageInfo",
      totalResults: number | null,
      resultsPerPage: number | null,
    } | null,
    items:  Array< {
      __typename: "YoutubePlayListItem",
      kind: string | null,
      etag: string | null,
      id: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
    } | null > | null,
  },
};

export type GetYoutubeCaptionlistQueryVariables = {
  videoId?: string | null,
};

export type GetYoutubeCaptionlistQuery = {
  getYoutubeCaptionlist:  {
    __typename: "YoutubeCaptionList",
    kind: string | null,
    etag: string | null,
    items:  Array< {
      __typename: "YoutubeCaptionItem",
      kind: string | null,
      etag: string | null,
      id: string | null,
      snippet:  {
        __typename: "YoutubeCaptionSnippet",
        videoId: string | null,
        lastUpdated: string | null,
        trackKind: string | null,
        language: string | null,
        name: string | null,
        audioTrackType: string | null,
        isCC: string | null,
        isLarge: string | null,
        isEasyReader: string | null,
        isDraft: string | null,
        isAutoSynced: string | null,
        status: string | null,
      } | null,
    } | null > | null,
  },
};

export type DownloadYoutubeCaptionQueryVariables = {
  videoId?: string | null,
  tlang?: string | null,
  trackKind?: string | null,
  name?: string | null,
};

export type DownloadYoutubeCaptionQuery = {
  downloadYoutubeCaption:  {
    __typename: "YoutubeCaptionDownload",
    transcript:  {
      __typename: "YoutubeCaptionText",
      text:  Array< {
        __typename: "YoutubeCaptionDetails",
        dur: number | null,
        start: number | null,
        content: string | null,
      } | null > | null,
    } | null,
  },
};

export type GetTakenoteSeriesQueryVariables = {
  user?: number | null,
  start?: number | null,
  count?: number | null,
};

export type GetTakenoteSeriesQuery = {
  getTakenoteSeries:  Array< {
    __typename: "TakeNoteSeries",
    id: string | null,
    title: string | null,
    description: string | null,
    imageUrl: string | null,
    public: number | null,
    thumbnail: string | null,
    startDate: string | null,
    endDate: string | null,
    sermonCommentCount: number | null,
    homeChurchCommentCount: number | null,
  } | null > | null,
};

export type GetTakenoteSermonQueryVariables = {
  seriesId?: string | null,
  user?: number | null,
};

export type GetTakenoteSermonQuery = {
  getTakenoteSermon:  Array< {
    __typename: "TakeNoteSermon",
    id: string | null,
    title: string | null,
    speaker: string | null,
    deliveryDate: string | null,
    description: string | null,
    audioUrl: string | null,
    mediaEntries:  Array< {
      __typename: "TakeNoteMediaEntry",
      id: string | null,
      type: string | null,
      contentType: string | null,
      kind: string | null,
      label: string | null,
      url: string | null,
    } | null > | null,
    public: number | null,
    series_FK: string | null,
    sermonNoteCount: number | null,
    quoteNoteCount: number | null,
    homeChurchNoteCount: number | null,
    sermonCommentCount: number | null,
  } | null > | null,
};

export type GetTakenoteSermonVersesQueryVariables = {
  sermondId?: string | null,
};

export type GetTakenoteSermonVersesQuery = {
  getTakenoteSermonVerses:  {
    __typename: "TakeNoteSermonVerses",
    sermonVerses:  Array< {
      __typename: "TakeNoteVerses",
      id: string | null,
      chapterVerse: string | null,
      translation: string | null,
      content: string | null,
      sermons_FK: string | null,
      notes_FK: string | null,
    } | null > | null,
  } | null,
};

export type GetTakenoteLocationsQuery = {
  getTakenoteLocations:  Array< {
    __typename: "TakeNoteLocations",
    _id: string | null,
    id: string | null,
    name: string | null,
    categories: Array< string | null > | null,
    location:  {
      __typename: "TakeNoteLocationGPS",
      longitude: number | null,
      latitude: number | null,
    } | null,
    state: string | null,
  } | null > | null,
};

export type GetTakenoteNotesQueryVariables = {
  sermonId?: string | null,
  noteType?: string | null,
};

export type GetTakenoteNotesQuery = {
  getTakenoteNotes:  {
    __typename: "TakeNoteNotes",
    homeChurchNotes:  Array< {
      __typename: "TakeNoteNote",
      id: number | null,
      noteType: string | null,
      content: string | null,
      position: number | null,
      timecode: string | null,
      sermons_FK: string | null,
    } | null > | null,
    sermonNotes:  Array< {
      __typename: "TakeNoteNote",
      id: number | null,
      noteType: string | null,
      content: string | null,
      position: number | null,
      timecode: string | null,
      sermons_FK: string | null,
    } | null > | null,
    sermonVerses:  Array< {
      __typename: "TakeNoteVerse",
      id: string | null,
      chapterVerse: string | null,
      translation: string | null,
      content: string | null,
      sermons_FK: number | null,
      notes_FK: string | null,
    } | null > | null,
    homeChurchVerses:  Array< {
      __typename: "TakeNoteVerse",
      id: string | null,
      chapterVerse: string | null,
      translation: string | null,
      content: string | null,
      sermons_FK: number | null,
      notes_FK: string | null,
    } | null > | null,
  } | null,
};

export type F1ListGroupTypesQuery = {
  F1ListGroupTypes:  {
    __typename: "F1ListGroupTypes",
    groupTypes:  {
      __typename: "F1ListGroupType",
      groupType:  Array< {
        __typename: "F1ListGroupType2",
        id: string | null,
        name: string | null,
        description: string | null,
        isWebEnabled: string | null,
        isSearchable: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type F1ListGroupsQueryVariables = {
  itemId?: string | null,
};

export type F1ListGroupsQuery = {
  F1ListGroups:  {
    __typename: "F1ListGroups",
    groups:  {
      __typename: "F1ListGroup",
      group:  Array< {
        __typename: "F1ListGroup2",
        id: string | null,
        name: string | null,
        description: string | null,
        startDate: string | null,
        expirationDate: string | null,
        isOpen: string | null,
        isPublic: string | null,
        hasChildcare: string | null,
        isSearchable: string | null,
        gender:  {
          __typename: "F1ListGroup2Gender",
          name: string | null,
        } | null,
        maritalStatus:  {
          __typename: "F1ListGroup2MaritalStatus",
          name: string | null,
        } | null,
        startAgeRange: string | null,
        endAgeRange: string | null,
      } | null > | null,
    } | null,
  } | null,
};

export type GetTnSeriesQueryVariables = {
  id: string,
};

export type GetTnSeriesQuery = {
  getTNSeries:  {
    __typename: "TNSeries",
    id: string,
    TNident: string | null,
    title: string | null,
    description: string | null,
    imageUrl: string | null,
    public: number | null,
    thumbnail: string | null,
    startDate: string | null,
    endDate: string | null,
    sermonCommentCount: number | null,
    homeChurchCommentCount: number | null,
    sermons:  {
      __typename: "ModelTNSermonConnection",
      items:  Array< {
        __typename: "TNSermon",
        id: string,
        TNident: string | null,
        title: string | null,
        speaker: string | null,
        deliveryDate: string | null,
        description: string | null,
        audioUrl: string | null,
        mediaEntries:  Array< {
          __typename: "TNMediaEntry",
          type: string | null,
          contentType: string | null,
          kind: string | null,
          label: string | null,
          url: string | null,
        } | null > | null,
        public: number | null,
        series_FK: string | null,
        series:  {
          __typename: "TNSeries",
          id: string,
          TNident: string | null,
          title: string | null,
          description: string | null,
          imageUrl: string | null,
          public: number | null,
          thumbnail: string | null,
          startDate: string | null,
          endDate: string | null,
          sermonCommentCount: number | null,
          homeChurchCommentCount: number | null,
          sermons:  {
            __typename: "ModelTNSermonConnection",
            nextToken: string | null,
          } | null,
        } | null,
        sermonNoteCount: number | null,
        quoteNoteCount: number | null,
        homeChurchNoteCount: number | null,
        sermonCommentCount: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListTnSeriessQueryVariables = {
  filter?: ModelTNSeriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTnSeriessQuery = {
  listTNSeriess:  {
    __typename: "ModelTNSeriesConnection",
    items:  Array< {
      __typename: "TNSeries",
      id: string,
      TNident: string | null,
      title: string | null,
      description: string | null,
      imageUrl: string | null,
      public: number | null,
      thumbnail: string | null,
      startDate: string | null,
      endDate: string | null,
      sermonCommentCount: number | null,
      homeChurchCommentCount: number | null,
      sermons:  {
        __typename: "ModelTNSermonConnection",
        items:  Array< {
          __typename: "TNSermon",
          id: string,
          TNident: string | null,
          title: string | null,
          speaker: string | null,
          deliveryDate: string | null,
          description: string | null,
          audioUrl: string | null,
          mediaEntries:  Array< {
            __typename: "TNMediaEntry",
            type: string | null,
            contentType: string | null,
            kind: string | null,
            label: string | null,
            url: string | null,
          } | null > | null,
          public: number | null,
          series_FK: string | null,
          series:  {
            __typename: "TNSeries",
            id: string,
            TNident: string | null,
            title: string | null,
            description: string | null,
            imageUrl: string | null,
            public: number | null,
            thumbnail: string | null,
            startDate: string | null,
            endDate: string | null,
            sermonCommentCount: number | null,
            homeChurchCommentCount: number | null,
          } | null,
          sermonNoteCount: number | null,
          quoteNoteCount: number | null,
          homeChurchNoteCount: number | null,
          sermonCommentCount: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTnSermonQueryVariables = {
  id: string,
};

export type GetTnSermonQuery = {
  getTNSermon:  {
    __typename: "TNSermon",
    id: string,
    TNident: string | null,
    title: string | null,
    speaker: string | null,
    deliveryDate: string | null,
    description: string | null,
    audioUrl: string | null,
    mediaEntries:  Array< {
      __typename: "TNMediaEntry",
      type: string | null,
      contentType: string | null,
      kind: string | null,
      label: string | null,
      url: string | null,
    } | null > | null,
    public: number | null,
    series_FK: string | null,
    series:  {
      __typename: "TNSeries",
      id: string,
      TNident: string | null,
      title: string | null,
      description: string | null,
      imageUrl: string | null,
      public: number | null,
      thumbnail: string | null,
      startDate: string | null,
      endDate: string | null,
      sermonCommentCount: number | null,
      homeChurchCommentCount: number | null,
      sermons:  {
        __typename: "ModelTNSermonConnection",
        items:  Array< {
          __typename: "TNSermon",
          id: string,
          TNident: string | null,
          title: string | null,
          speaker: string | null,
          deliveryDate: string | null,
          description: string | null,
          audioUrl: string | null,
          mediaEntries:  Array< {
            __typename: "TNMediaEntry",
            type: string | null,
            contentType: string | null,
            kind: string | null,
            label: string | null,
            url: string | null,
          } | null > | null,
          public: number | null,
          series_FK: string | null,
          series:  {
            __typename: "TNSeries",
            id: string,
            TNident: string | null,
            title: string | null,
            description: string | null,
            imageUrl: string | null,
            public: number | null,
            thumbnail: string | null,
            startDate: string | null,
            endDate: string | null,
            sermonCommentCount: number | null,
            homeChurchCommentCount: number | null,
          } | null,
          sermonNoteCount: number | null,
          quoteNoteCount: number | null,
          homeChurchNoteCount: number | null,
          sermonCommentCount: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    sermonNoteCount: number | null,
    quoteNoteCount: number | null,
    homeChurchNoteCount: number | null,
    sermonCommentCount: number | null,
  } | null,
};

export type ListTnSermonsQueryVariables = {
  filter?: ModelTNSermonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTnSermonsQuery = {
  listTNSermons:  {
    __typename: "ModelTNSermonConnection",
    items:  Array< {
      __typename: "TNSermon",
      id: string,
      TNident: string | null,
      title: string | null,
      speaker: string | null,
      deliveryDate: string | null,
      description: string | null,
      audioUrl: string | null,
      mediaEntries:  Array< {
        __typename: "TNMediaEntry",
        type: string | null,
        contentType: string | null,
        kind: string | null,
        label: string | null,
        url: string | null,
      } | null > | null,
      public: number | null,
      series_FK: string | null,
      series:  {
        __typename: "TNSeries",
        id: string,
        TNident: string | null,
        title: string | null,
        description: string | null,
        imageUrl: string | null,
        public: number | null,
        thumbnail: string | null,
        startDate: string | null,
        endDate: string | null,
        sermonCommentCount: number | null,
        homeChurchCommentCount: number | null,
        sermons:  {
          __typename: "ModelTNSermonConnection",
          items:  Array< {
            __typename: "TNSermon",
            id: string,
            TNident: string | null,
            title: string | null,
            speaker: string | null,
            deliveryDate: string | null,
            description: string | null,
            audioUrl: string | null,
            public: number | null,
            series_FK: string | null,
            sermonNoteCount: number | null,
            quoteNoteCount: number | null,
            homeChurchNoteCount: number | null,
            sermonCommentCount: number | null,
          } | null > | null,
          nextToken: string | null,
        } | null,
      } | null,
      sermonNoteCount: number | null,
      quoteNoteCount: number | null,
      homeChurchNoteCount: number | null,
      sermonCommentCount: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource:  {
    __typename: "Resource",
    id: string | null,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVideoQueryVariables = {
  id: string,
};

export type GetVideoQuery = {
  getVideo:  {
    __typename: "Video",
    id: string,
    createdBy: string | null,
    createdDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    episodeTitle: string | null,
    episodeNumber: number | null,
    seriesTitle: string | null,
    publishedDate: string | null,
    recordedDate: string | null,
    description: string | null,
    closedCaptioning: Array< string | null > | null,
    referencedMedia: Array< string | null > | null,
    campaigns: Array< string | null > | null,
    bibleVerses: Array< string | null > | null,
    topics: Array< string | null > | null,
    qandeh: Array< string | null > | null,
    length: string | null,
    YoutubeIdent: string,
    Youtube:  {
      __typename: "YoutubePlaylistItemsItem2",
      id: string | null,
      kind: string | null,
      etag: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
      contentDetails:  {
        __typename: "YoutubePlaylistItemDetails",
        videoId: string | null,
        videoPublishedAt: string | null,
      } | null,
    } | null,
    videoTypes: Array< string | null > | null,
  } | null,
};

export type ListVideosQueryVariables = {
  id?: string | null,
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideosQuery = {
  listVideos:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      createdBy: string | null,
      createdDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      episodeTitle: string | null,
      episodeNumber: number | null,
      seriesTitle: string | null,
      publishedDate: string | null,
      recordedDate: string | null,
      description: string | null,
      closedCaptioning: Array< string | null > | null,
      referencedMedia: Array< string | null > | null,
      campaigns: Array< string | null > | null,
      bibleVerses: Array< string | null > | null,
      topics: Array< string | null > | null,
      qandeh: Array< string | null > | null,
      length: string | null,
      YoutubeIdent: string,
      Youtube:  {
        __typename: "YoutubePlaylistItemsItem2",
        id: string | null,
        kind: string | null,
        etag: string | null,
        snippet:  {
          __typename: "YoutubeSnippet",
          publishedAt: string | null,
          channelId: string | null,
          title: string | null,
          description: string | null,
          channelTitle: string | null,
          localized:  {
            __typename: "YoutubeLocalized",
            title: string | null,
            description: string | null,
          } | null,
        } | null,
        contentDetails:  {
          __typename: "YoutubePlaylistItemDetails",
          videoId: string | null,
          videoPublishedAt: string | null,
        } | null,
      } | null,
      videoTypes: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog:  {
    __typename: "Blog",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    version: number,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string | null,
      createdBy: string | null,
      createdDate: string | null,
      postedDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      title: string | null,
      content: string | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetNewsQueryVariables = {
  id: string,
};

export type GetNewsQuery = {
  getNews:  {
    __typename: "News",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    startDate: string | null,
    endDate: string | null,
  } | null,
};

export type ListNewssQueryVariables = {
  filter?: ModelNewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNewssQuery = {
  listNewss:  {
    __typename: "ModelNewsConnection",
    items:  Array< {
      __typename: "News",
      id: string | null,
      createdBy: string | null,
      createdDate: string | null,
      postedDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      title: string | null,
      content: string | null,
      startDate: string | null,
      endDate: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    startTime: string | null,
    endTime: string | null,
    title: string | null,
    description: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string | null,
      createdBy: string | null,
      createdDate: string | null,
      postedDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      startTime: string | null,
      endTime: string | null,
      title: string | null,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup:  {
    __typename: "Group",
    id: string | null,
    canJoin: boolean | null,
    visibleToNonMembers: boolean | null,
    status: Status | null,
    name: string | null,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    members:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    type: string | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string | null,
      canJoin: boolean | null,
      visibleToNonMembers: boolean | null,
      status: Status | null,
      name: string | null,
      admin:  Array<( {
          __typename: "Staff",
          sub: string | null,
          title: string | null,
          name: string | null,
          phone: string | null,
          email: string | null,
          instagram: string | null,
          twitter: string | null,
          facebook: string | null,
          website: string | null,
          status: string | null,
        }
      ) | null > | null,
      members:  Array<( {
          __typename: "Staff",
          sub: string | null,
          title: string | null,
          name: string | null,
          phone: string | null,
          email: string | null,
          instagram: string | null,
          twitter: string | null,
          facebook: string | null,
          website: string | null,
          status: string | null,
        }
      ) | null > | null,
      type: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization:  {
    __typename: "Organization",
    id: string | null,
    canJoin: boolean,
    visibleToNonMembers: boolean,
    status: Status,
    name: string,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) > | null,
    members:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } > | null,
    location: string | null,
    address: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string | null,
      canJoin: boolean,
      visibleToNonMembers: boolean,
      status: Status,
      name: string,
      admin:  Array<( {
          __typename: "Staff",
          sub: string | null,
          title: string | null,
          name: string | null,
          phone: string | null,
          email: string | null,
          instagram: string | null,
          twitter: string | null,
          facebook: string | null,
          website: string | null,
          status: string | null,
        }
      ) > | null,
      members:  Array< {
        __typename: "Staff",
        sub: string,
        title: string,
        name: string,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string,
      } > | null,
      location: string | null,
      address: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      sites:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation:  {
    __typename: "Location",
    id: string | null,
    url: string | null,
    site_name: string | null,
    directions: string | null,
    welcome: string | null,
    welcome_img: string | null,
    welcome_vid_youtube: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    location:  {
      __typename: "LocationGPS",
      longitude: number | null,
      latitude: number | null,
      address: string | null,
    } | null,
    visible: boolean | null,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetStaffQueryVariables = {
  id: string,
};

export type GetStaffQuery = {
  getStaff:  {
    __typename: "Staff",
    sub: string,
    title: string,
    name: string,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    status: string,
  } | null,
};

export type ListStaffsQueryVariables = {
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffsQuery = {
  listStaffs:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRegionQueryVariables = {
  id: string,
};

export type GetRegionQuery = {
  getRegion:  {
    __typename: "Region",
    id: string | null,
    name: string,
    status: Status,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type ListRegionsQueryVariables = {
  filter?: ModelRegionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRegionsQuery = {
  listRegions:  {
    __typename: "ModelRegionConnection",
    items:  Array< {
      __typename: "Region",
      id: string | null,
      name: string,
      status: Status,
      sites:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVideoByYoutubeIdentQueryVariables = {
  YoutubeIdent?: string | null,
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetVideoByYoutubeIdentQuery = {
  getVideoByYoutubeIdent:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      createdBy: string | null,
      createdDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      episodeTitle: string | null,
      episodeNumber: number | null,
      seriesTitle: string | null,
      publishedDate: string | null,
      recordedDate: string | null,
      description: string | null,
      closedCaptioning: Array< string | null > | null,
      referencedMedia: Array< string | null > | null,
      campaigns: Array< string | null > | null,
      bibleVerses: Array< string | null > | null,
      topics: Array< string | null > | null,
      qandeh: Array< string | null > | null,
      length: string | null,
      YoutubeIdent: string,
      Youtube:  {
        __typename: "YoutubePlaylistItemsItem2",
        id: string | null,
        kind: string | null,
        etag: string | null,
        snippet:  {
          __typename: "YoutubeSnippet",
          publishedAt: string | null,
          channelId: string | null,
          title: string | null,
          description: string | null,
          channelTitle: string | null,
          localized:  {
            __typename: "YoutubeLocalized",
            title: string | null,
            description: string | null,
          } | null,
        } | null,
        contentDetails:  {
          __typename: "YoutubePlaylistItemDetails",
          videoId: string | null,
          videoPublishedAt: string | null,
        } | null,
      } | null,
      videoTypes: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchResourcesQueryVariables = {
  filter?: SearchableResourceFilterInput | null,
  sort?: SearchableResourceSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchResourcesQuery = {
  searchResources:  {
    __typename: "SearchableResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchVideosQueryVariables = {
  filter?: SearchableVideoFilterInput | null,
  sort?: SearchableVideoSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchVideosQuery = {
  searchVideos:  {
    __typename: "SearchableVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      createdBy: string | null,
      createdDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      episodeTitle: string | null,
      episodeNumber: number | null,
      seriesTitle: string | null,
      publishedDate: string | null,
      recordedDate: string | null,
      description: string | null,
      closedCaptioning: Array< string | null > | null,
      referencedMedia: Array< string | null > | null,
      campaigns: Array< string | null > | null,
      bibleVerses: Array< string | null > | null,
      topics: Array< string | null > | null,
      qandeh: Array< string | null > | null,
      length: string | null,
      YoutubeIdent: string,
      Youtube:  {
        __typename: "YoutubePlaylistItemsItem2",
        id: string | null,
        kind: string | null,
        etag: string | null,
        snippet:  {
          __typename: "YoutubeSnippet",
          publishedAt: string | null,
          channelId: string | null,
          title: string | null,
          description: string | null,
          channelTitle: string | null,
          localized:  {
            __typename: "YoutubeLocalized",
            title: string | null,
            description: string | null,
          } | null,
        } | null,
        contentDetails:  {
          __typename: "YoutubePlaylistItemDetails",
          videoId: string | null,
          videoPublishedAt: string | null,
        } | null,
      } | null,
      videoTypes: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchBlogsQueryVariables = {
  filter?: SearchableBlogFilterInput | null,
  sort?: SearchableBlogSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchBlogsQuery = {
  searchBlogs:  {
    __typename: "SearchableBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string | null,
      createdBy: string | null,
      createdDate: string | null,
      postedDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      title: string | null,
      content: string | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchNewssQueryVariables = {
  filter?: SearchableNewsFilterInput | null,
  sort?: SearchableNewsSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchNewssQuery = {
  searchNewss:  {
    __typename: "SearchableNewsConnection",
    items:  Array< {
      __typename: "News",
      id: string | null,
      createdBy: string | null,
      createdDate: string | null,
      postedDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      title: string | null,
      content: string | null,
      startDate: string | null,
      endDate: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchEventsQueryVariables = {
  filter?: SearchableEventFilterInput | null,
  sort?: SearchableEventSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchEventsQuery = {
  searchEvents:  {
    __typename: "SearchableEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string | null,
      createdBy: string | null,
      createdDate: string | null,
      postedDate: string | null,
      locations:  Array< {
        __typename: "Location",
        id: string | null,
        url: string | null,
        site_name: string | null,
        directions: string | null,
        welcome: string | null,
        welcome_img: string | null,
        welcome_vid_youtube: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        location:  {
          __typename: "LocationGPS",
          longitude: number | null,
          latitude: number | null,
          address: string | null,
        } | null,
        visible: boolean | null,
      } | null > | null,
      startTime: string | null,
      endTime: string | null,
      title: string | null,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchStaffsQueryVariables = {
  filter?: SearchableStaffFilterInput | null,
  sort?: SearchableStaffSortInput | null,
  limit?: number | null,
  nextToken?: number | null,
};

export type SearchStaffsQuery = {
  searchStaffs:  {
    __typename: "SearchableStaffConnection",
    items:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTnSeriesSubscription = {
  onCreateTNSeries:  {
    __typename: "TNSeries",
    id: string,
    TNident: string | null,
    title: string | null,
    description: string | null,
    imageUrl: string | null,
    public: number | null,
    thumbnail: string | null,
    startDate: string | null,
    endDate: string | null,
    sermonCommentCount: number | null,
    homeChurchCommentCount: number | null,
    sermons:  {
      __typename: "ModelTNSermonConnection",
      items:  Array< {
        __typename: "TNSermon",
        id: string,
        TNident: string | null,
        title: string | null,
        speaker: string | null,
        deliveryDate: string | null,
        description: string | null,
        audioUrl: string | null,
        mediaEntries:  Array< {
          __typename: "TNMediaEntry",
          type: string | null,
          contentType: string | null,
          kind: string | null,
          label: string | null,
          url: string | null,
        } | null > | null,
        public: number | null,
        series_FK: string | null,
        series:  {
          __typename: "TNSeries",
          id: string,
          TNident: string | null,
          title: string | null,
          description: string | null,
          imageUrl: string | null,
          public: number | null,
          thumbnail: string | null,
          startDate: string | null,
          endDate: string | null,
          sermonCommentCount: number | null,
          homeChurchCommentCount: number | null,
          sermons:  {
            __typename: "ModelTNSermonConnection",
            nextToken: string | null,
          } | null,
        } | null,
        sermonNoteCount: number | null,
        quoteNoteCount: number | null,
        homeChurchNoteCount: number | null,
        sermonCommentCount: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateTnSeriesSubscription = {
  onUpdateTNSeries:  {
    __typename: "TNSeries",
    id: string,
    TNident: string | null,
    title: string | null,
    description: string | null,
    imageUrl: string | null,
    public: number | null,
    thumbnail: string | null,
    startDate: string | null,
    endDate: string | null,
    sermonCommentCount: number | null,
    homeChurchCommentCount: number | null,
    sermons:  {
      __typename: "ModelTNSermonConnection",
      items:  Array< {
        __typename: "TNSermon",
        id: string,
        TNident: string | null,
        title: string | null,
        speaker: string | null,
        deliveryDate: string | null,
        description: string | null,
        audioUrl: string | null,
        mediaEntries:  Array< {
          __typename: "TNMediaEntry",
          type: string | null,
          contentType: string | null,
          kind: string | null,
          label: string | null,
          url: string | null,
        } | null > | null,
        public: number | null,
        series_FK: string | null,
        series:  {
          __typename: "TNSeries",
          id: string,
          TNident: string | null,
          title: string | null,
          description: string | null,
          imageUrl: string | null,
          public: number | null,
          thumbnail: string | null,
          startDate: string | null,
          endDate: string | null,
          sermonCommentCount: number | null,
          homeChurchCommentCount: number | null,
          sermons:  {
            __typename: "ModelTNSermonConnection",
            nextToken: string | null,
          } | null,
        } | null,
        sermonNoteCount: number | null,
        quoteNoteCount: number | null,
        homeChurchNoteCount: number | null,
        sermonCommentCount: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteTnSeriesSubscription = {
  onDeleteTNSeries:  {
    __typename: "TNSeries",
    id: string,
    TNident: string | null,
    title: string | null,
    description: string | null,
    imageUrl: string | null,
    public: number | null,
    thumbnail: string | null,
    startDate: string | null,
    endDate: string | null,
    sermonCommentCount: number | null,
    homeChurchCommentCount: number | null,
    sermons:  {
      __typename: "ModelTNSermonConnection",
      items:  Array< {
        __typename: "TNSermon",
        id: string,
        TNident: string | null,
        title: string | null,
        speaker: string | null,
        deliveryDate: string | null,
        description: string | null,
        audioUrl: string | null,
        mediaEntries:  Array< {
          __typename: "TNMediaEntry",
          type: string | null,
          contentType: string | null,
          kind: string | null,
          label: string | null,
          url: string | null,
        } | null > | null,
        public: number | null,
        series_FK: string | null,
        series:  {
          __typename: "TNSeries",
          id: string,
          TNident: string | null,
          title: string | null,
          description: string | null,
          imageUrl: string | null,
          public: number | null,
          thumbnail: string | null,
          startDate: string | null,
          endDate: string | null,
          sermonCommentCount: number | null,
          homeChurchCommentCount: number | null,
          sermons:  {
            __typename: "ModelTNSermonConnection",
            nextToken: string | null,
          } | null,
        } | null,
        sermonNoteCount: number | null,
        quoteNoteCount: number | null,
        homeChurchNoteCount: number | null,
        sermonCommentCount: number | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateTnSermonSubscription = {
  onCreateTNSermon:  {
    __typename: "TNSermon",
    id: string,
    TNident: string | null,
    title: string | null,
    speaker: string | null,
    deliveryDate: string | null,
    description: string | null,
    audioUrl: string | null,
    mediaEntries:  Array< {
      __typename: "TNMediaEntry",
      type: string | null,
      contentType: string | null,
      kind: string | null,
      label: string | null,
      url: string | null,
    } | null > | null,
    public: number | null,
    series_FK: string | null,
    series:  {
      __typename: "TNSeries",
      id: string,
      TNident: string | null,
      title: string | null,
      description: string | null,
      imageUrl: string | null,
      public: number | null,
      thumbnail: string | null,
      startDate: string | null,
      endDate: string | null,
      sermonCommentCount: number | null,
      homeChurchCommentCount: number | null,
      sermons:  {
        __typename: "ModelTNSermonConnection",
        items:  Array< {
          __typename: "TNSermon",
          id: string,
          TNident: string | null,
          title: string | null,
          speaker: string | null,
          deliveryDate: string | null,
          description: string | null,
          audioUrl: string | null,
          mediaEntries:  Array< {
            __typename: "TNMediaEntry",
            type: string | null,
            contentType: string | null,
            kind: string | null,
            label: string | null,
            url: string | null,
          } | null > | null,
          public: number | null,
          series_FK: string | null,
          series:  {
            __typename: "TNSeries",
            id: string,
            TNident: string | null,
            title: string | null,
            description: string | null,
            imageUrl: string | null,
            public: number | null,
            thumbnail: string | null,
            startDate: string | null,
            endDate: string | null,
            sermonCommentCount: number | null,
            homeChurchCommentCount: number | null,
          } | null,
          sermonNoteCount: number | null,
          quoteNoteCount: number | null,
          homeChurchNoteCount: number | null,
          sermonCommentCount: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    sermonNoteCount: number | null,
    quoteNoteCount: number | null,
    homeChurchNoteCount: number | null,
    sermonCommentCount: number | null,
  } | null,
};

export type OnUpdateTnSermonSubscription = {
  onUpdateTNSermon:  {
    __typename: "TNSermon",
    id: string,
    TNident: string | null,
    title: string | null,
    speaker: string | null,
    deliveryDate: string | null,
    description: string | null,
    audioUrl: string | null,
    mediaEntries:  Array< {
      __typename: "TNMediaEntry",
      type: string | null,
      contentType: string | null,
      kind: string | null,
      label: string | null,
      url: string | null,
    } | null > | null,
    public: number | null,
    series_FK: string | null,
    series:  {
      __typename: "TNSeries",
      id: string,
      TNident: string | null,
      title: string | null,
      description: string | null,
      imageUrl: string | null,
      public: number | null,
      thumbnail: string | null,
      startDate: string | null,
      endDate: string | null,
      sermonCommentCount: number | null,
      homeChurchCommentCount: number | null,
      sermons:  {
        __typename: "ModelTNSermonConnection",
        items:  Array< {
          __typename: "TNSermon",
          id: string,
          TNident: string | null,
          title: string | null,
          speaker: string | null,
          deliveryDate: string | null,
          description: string | null,
          audioUrl: string | null,
          mediaEntries:  Array< {
            __typename: "TNMediaEntry",
            type: string | null,
            contentType: string | null,
            kind: string | null,
            label: string | null,
            url: string | null,
          } | null > | null,
          public: number | null,
          series_FK: string | null,
          series:  {
            __typename: "TNSeries",
            id: string,
            TNident: string | null,
            title: string | null,
            description: string | null,
            imageUrl: string | null,
            public: number | null,
            thumbnail: string | null,
            startDate: string | null,
            endDate: string | null,
            sermonCommentCount: number | null,
            homeChurchCommentCount: number | null,
          } | null,
          sermonNoteCount: number | null,
          quoteNoteCount: number | null,
          homeChurchNoteCount: number | null,
          sermonCommentCount: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    sermonNoteCount: number | null,
    quoteNoteCount: number | null,
    homeChurchNoteCount: number | null,
    sermonCommentCount: number | null,
  } | null,
};

export type OnDeleteTnSermonSubscription = {
  onDeleteTNSermon:  {
    __typename: "TNSermon",
    id: string,
    TNident: string | null,
    title: string | null,
    speaker: string | null,
    deliveryDate: string | null,
    description: string | null,
    audioUrl: string | null,
    mediaEntries:  Array< {
      __typename: "TNMediaEntry",
      type: string | null,
      contentType: string | null,
      kind: string | null,
      label: string | null,
      url: string | null,
    } | null > | null,
    public: number | null,
    series_FK: string | null,
    series:  {
      __typename: "TNSeries",
      id: string,
      TNident: string | null,
      title: string | null,
      description: string | null,
      imageUrl: string | null,
      public: number | null,
      thumbnail: string | null,
      startDate: string | null,
      endDate: string | null,
      sermonCommentCount: number | null,
      homeChurchCommentCount: number | null,
      sermons:  {
        __typename: "ModelTNSermonConnection",
        items:  Array< {
          __typename: "TNSermon",
          id: string,
          TNident: string | null,
          title: string | null,
          speaker: string | null,
          deliveryDate: string | null,
          description: string | null,
          audioUrl: string | null,
          mediaEntries:  Array< {
            __typename: "TNMediaEntry",
            type: string | null,
            contentType: string | null,
            kind: string | null,
            label: string | null,
            url: string | null,
          } | null > | null,
          public: number | null,
          series_FK: string | null,
          series:  {
            __typename: "TNSeries",
            id: string,
            TNident: string | null,
            title: string | null,
            description: string | null,
            imageUrl: string | null,
            public: number | null,
            thumbnail: string | null,
            startDate: string | null,
            endDate: string | null,
            sermonCommentCount: number | null,
            homeChurchCommentCount: number | null,
          } | null,
          sermonNoteCount: number | null,
          quoteNoteCount: number | null,
          homeChurchNoteCount: number | null,
          sermonCommentCount: number | null,
        } | null > | null,
        nextToken: string | null,
      } | null,
    } | null,
    sermonNoteCount: number | null,
    quoteNoteCount: number | null,
    homeChurchNoteCount: number | null,
    sermonCommentCount: number | null,
  } | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource:  {
    __typename: "Resource",
    id: string | null,
  } | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource:  {
    __typename: "Resource",
    id: string | null,
  } | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource:  {
    __typename: "Resource",
    id: string | null,
  } | null,
};

export type OnCreateVideoSubscription = {
  onCreateVideo:  {
    __typename: "Video",
    id: string,
    createdBy: string | null,
    createdDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    episodeTitle: string | null,
    episodeNumber: number | null,
    seriesTitle: string | null,
    publishedDate: string | null,
    recordedDate: string | null,
    description: string | null,
    closedCaptioning: Array< string | null > | null,
    referencedMedia: Array< string | null > | null,
    campaigns: Array< string | null > | null,
    bibleVerses: Array< string | null > | null,
    topics: Array< string | null > | null,
    qandeh: Array< string | null > | null,
    length: string | null,
    YoutubeIdent: string,
    Youtube:  {
      __typename: "YoutubePlaylistItemsItem2",
      id: string | null,
      kind: string | null,
      etag: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
      contentDetails:  {
        __typename: "YoutubePlaylistItemDetails",
        videoId: string | null,
        videoPublishedAt: string | null,
      } | null,
    } | null,
    videoTypes: Array< string | null > | null,
  } | null,
};

export type OnUpdateVideoSubscription = {
  onUpdateVideo:  {
    __typename: "Video",
    id: string,
    createdBy: string | null,
    createdDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    episodeTitle: string | null,
    episodeNumber: number | null,
    seriesTitle: string | null,
    publishedDate: string | null,
    recordedDate: string | null,
    description: string | null,
    closedCaptioning: Array< string | null > | null,
    referencedMedia: Array< string | null > | null,
    campaigns: Array< string | null > | null,
    bibleVerses: Array< string | null > | null,
    topics: Array< string | null > | null,
    qandeh: Array< string | null > | null,
    length: string | null,
    YoutubeIdent: string,
    Youtube:  {
      __typename: "YoutubePlaylistItemsItem2",
      id: string | null,
      kind: string | null,
      etag: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
      contentDetails:  {
        __typename: "YoutubePlaylistItemDetails",
        videoId: string | null,
        videoPublishedAt: string | null,
      } | null,
    } | null,
    videoTypes: Array< string | null > | null,
  } | null,
};

export type OnDeleteVideoSubscription = {
  onDeleteVideo:  {
    __typename: "Video",
    id: string,
    createdBy: string | null,
    createdDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    episodeTitle: string | null,
    episodeNumber: number | null,
    seriesTitle: string | null,
    publishedDate: string | null,
    recordedDate: string | null,
    description: string | null,
    closedCaptioning: Array< string | null > | null,
    referencedMedia: Array< string | null > | null,
    campaigns: Array< string | null > | null,
    bibleVerses: Array< string | null > | null,
    topics: Array< string | null > | null,
    qandeh: Array< string | null > | null,
    length: string | null,
    YoutubeIdent: string,
    Youtube:  {
      __typename: "YoutubePlaylistItemsItem2",
      id: string | null,
      kind: string | null,
      etag: string | null,
      snippet:  {
        __typename: "YoutubeSnippet",
        publishedAt: string | null,
        channelId: string | null,
        title: string | null,
        description: string | null,
        thumbnails:  {
          __typename: "YoutubeThumbnails",
          default:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          medium:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          high:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          standard:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
          maxres:  {
            __typename: "YoutubeThumbnail",
            url: string | null,
            width: number | null,
            height: number | null,
          } | null,
        } | null,
        channelTitle: string | null,
        localized:  {
          __typename: "YoutubeLocalized",
          title: string | null,
          description: string | null,
        } | null,
      } | null,
      contentDetails:  {
        __typename: "YoutubePlaylistItemDetails",
        videoId: string | null,
        videoPublishedAt: string | null,
      } | null,
    } | null,
    videoTypes: Array< string | null > | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog:  {
    __typename: "Blog",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    version: number,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog:  {
    __typename: "Blog",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    version: number,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog:  {
    __typename: "Blog",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    version: number,
  } | null,
};

export type OnCreateNewsSubscription = {
  onCreateNews:  {
    __typename: "News",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    startDate: string | null,
    endDate: string | null,
  } | null,
};

export type OnUpdateNewsSubscription = {
  onUpdateNews:  {
    __typename: "News",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    startDate: string | null,
    endDate: string | null,
  } | null,
};

export type OnDeleteNewsSubscription = {
  onDeleteNews:  {
    __typename: "News",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    title: string | null,
    content: string | null,
    startDate: string | null,
    endDate: string | null,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    startTime: string | null,
    endTime: string | null,
    title: string | null,
    description: string | null,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    startTime: string | null,
    endTime: string | null,
    title: string | null,
    description: string | null,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string | null,
    createdBy: string | null,
    createdDate: string | null,
    postedDate: string | null,
    locations:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } | null > | null,
    startTime: string | null,
    endTime: string | null,
    title: string | null,
    description: string | null,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup:  {
    __typename: "Group",
    id: string | null,
    canJoin: boolean | null,
    visibleToNonMembers: boolean | null,
    status: Status | null,
    name: string | null,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    members:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    type: string | null,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup:  {
    __typename: "Group",
    id: string | null,
    canJoin: boolean | null,
    visibleToNonMembers: boolean | null,
    status: Status | null,
    name: string | null,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    members:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    type: string | null,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup:  {
    __typename: "Group",
    id: string | null,
    canJoin: boolean | null,
    visibleToNonMembers: boolean | null,
    status: Status | null,
    name: string | null,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    members:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) | null > | null,
    type: string | null,
  } | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization:  {
    __typename: "Organization",
    id: string | null,
    canJoin: boolean,
    visibleToNonMembers: boolean,
    status: Status,
    name: string,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) > | null,
    members:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } > | null,
    location: string | null,
    address: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization:  {
    __typename: "Organization",
    id: string | null,
    canJoin: boolean,
    visibleToNonMembers: boolean,
    status: Status,
    name: string,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) > | null,
    members:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } > | null,
    location: string | null,
    address: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization:  {
    __typename: "Organization",
    id: string | null,
    canJoin: boolean,
    visibleToNonMembers: boolean,
    status: Status,
    name: string,
    admin:  Array<( {
        __typename: "Staff",
        sub: string | null,
        title: string | null,
        name: string | null,
        phone: string | null,
        email: string | null,
        instagram: string | null,
        twitter: string | null,
        facebook: string | null,
        website: string | null,
        status: string | null,
      }
    ) > | null,
    members:  Array< {
      __typename: "Staff",
      sub: string,
      title: string,
      name: string,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      website: string | null,
      status: string,
    } > | null,
    location: string | null,
    address: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation:  {
    __typename: "Location",
    id: string | null,
    url: string | null,
    site_name: string | null,
    directions: string | null,
    welcome: string | null,
    welcome_img: string | null,
    welcome_vid_youtube: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    location:  {
      __typename: "LocationGPS",
      longitude: number | null,
      latitude: number | null,
      address: string | null,
    } | null,
    visible: boolean | null,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation:  {
    __typename: "Location",
    id: string | null,
    url: string | null,
    site_name: string | null,
    directions: string | null,
    welcome: string | null,
    welcome_img: string | null,
    welcome_vid_youtube: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    location:  {
      __typename: "LocationGPS",
      longitude: number | null,
      latitude: number | null,
      address: string | null,
    } | null,
    visible: boolean | null,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation:  {
    __typename: "Location",
    id: string | null,
    url: string | null,
    site_name: string | null,
    directions: string | null,
    welcome: string | null,
    welcome_img: string | null,
    welcome_vid_youtube: string | null,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    location:  {
      __typename: "LocationGPS",
      longitude: number | null,
      latitude: number | null,
      address: string | null,
    } | null,
    visible: boolean | null,
  } | null,
};

export type OnCreateStaffSubscription = {
  onCreateStaff:  {
    __typename: "Staff",
    sub: string,
    title: string,
    name: string,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    status: string,
  } | null,
};

export type OnUpdateStaffSubscription = {
  onUpdateStaff:  {
    __typename: "Staff",
    sub: string,
    title: string,
    name: string,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    status: string,
  } | null,
};

export type OnDeleteStaffSubscription = {
  onDeleteStaff:  {
    __typename: "Staff",
    sub: string,
    title: string,
    name: string,
    phone: string | null,
    email: string | null,
    instagram: string | null,
    twitter: string | null,
    facebook: string | null,
    website: string | null,
    status: string,
  } | null,
};

export type OnCreateRegionSubscription = {
  onCreateRegion:  {
    __typename: "Region",
    id: string | null,
    name: string,
    status: Status,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type OnUpdateRegionSubscription = {
  onUpdateRegion:  {
    __typename: "Region",
    id: string | null,
    name: string,
    status: Status,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};

export type OnDeleteRegionSubscription = {
  onDeleteRegion:  {
    __typename: "Region",
    id: string | null,
    name: string,
    status: Status,
    sites:  Array< {
      __typename: "Location",
      id: string | null,
      url: string | null,
      site_name: string | null,
      directions: string | null,
      welcome: string | null,
      welcome_img: string | null,
      welcome_vid_youtube: string | null,
      phone: string | null,
      email: string | null,
      instagram: string | null,
      twitter: string | null,
      facebook: string | null,
      location:  {
        __typename: "LocationGPS",
        longitude: number | null,
        latitude: number | null,
        address: string | null,
      } | null,
      visible: boolean | null,
    } > | null,
  } | null,
};
