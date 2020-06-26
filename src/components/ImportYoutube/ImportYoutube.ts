import * as queries from '../../graphql/queries';
import * as customqueries from '../../graphql-custom/customQueries';
import * as mutations from '../../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import moment from 'moment';

Amplify.configure(awsmobile);

export default class ImportYoutube {
  //  "PLB5r2P47beqIUQHE5Ikn3SEfNJYDJyNJd",
  //    "PLB5r2P47beqIYwz0m_dI396C4YVpIjEj2",
  //    "PLB5r2P47beqKYbp8a36uynC-v8hO02VB0",
  //    "PLB5r2P47beqJA7FeErchE_2cb7D4gpGuX",
  //    "PLB5r2P47beqIgnrRwKBV3pk4r9KGvpw2A",
  //    "PLB5r2P47beqK0nNpYUVyM2_qoL704lagb",
  //"PLB5r2P47beqKRqdOdEbq530YFoV3--CKQ",
  //"PLB5r2P47beqKvK1vKg4u18oSIenrh76mo",
  //"PLB5r2P47beqI5FYN5flNYRoAVHiAIDVWR",
  //"PLB5r2P47beqKDcNPeL6ei1ntw8faQT1Bq",
  //"PLB5r2P47beqJ8yGRH4pzJAmwvxm2MiDee",
  //"PLB5r2P47beqKeE_Wv5nObxzZiZyOOAgXI",
  //"PLB5r2P47beqLbqdmqC3uBUjIicnMgwNI_",
  //"PLB5r2P47beqLL5uWqwJmAaocoKB1tFXF0",

  ignorePlaylist = [
    'PLB5r2P47beqJ7NVigp8KO4mhKraDcZPg-',
    'PLB5r2P47beqKvK1vKg4u18oSIenrh76mo',
    'PLB5r2P47beqLk_zHn3VtNHMCYn8f42SWD',
    'PLB5r2P47beqLFXnqT2AoOWzTQYRmeQJku',
    'PLB5r2P47beqKJ20FmOwHQBHUAjv5G9XBk',
    'PLB5r2P47beqIJJoetWg1LxrDqoSfqYVEn',
    'PLB5r2P47beqLsznpipz-lq-SprbxYlu3r',
    'PLB5r2P47beqIrP3RPdY1vWfic2kO1tSBx',
    'PLB5r2P47beqK_7VNQQVFhbE2S4Ni1qEi3',
    'PLB5r2P47beqLF8du0Jfa9VHOsAl6T2Ik4',
    'PLB5r2P47beqLd03tigykT45hPBMD2AZiV',
    'PLB5r2P47beqJkEJmldK0iv96XrxxZgOwL',
    'PLB5r2P47beqKYbp8a36uynC-v8hO02VB0',
    'PLB5r2P47beqKeE_Wv5nObxzZiZyOOAgXI',
    'PLB5r2P47beqKDcNPeL6ei1ntw8faQT1Bq',
    'PLB5r2P47beqIgnrRwKBV3pk4r9KGvpw2A',
    'PLB5r2P47beqJ1dPnX_KEtviMgISzM19IG',
    'PLB5r2P47beqKdPrd1JEidEYyMNN6VZg4E',
    'PLB5r2P47beqLjhYywKrOG-WL5pSaVy6VF',
    'PLB5r2P47beqKHXFghpaq45drZ6lvmVYoj',
    'PLB5r2P47beqJKW9571AL9Luo2kjhFQ6BD',
    'PLB5r2P47beqId_fvmYdBacSRvV1b5r2w6',
    'PLB5r2P47beqL7vuSMH2PTvsclYOgz6uLI',
    'PLB5r2P47beqLp9mkCVn2TzqoNT3hHdgrm',
    'PLB5r2P47beqKZcIA-06MtCgfqcXn1vZX_',
    'PLB5r2P47beqKJBhpXR9rYdEPNG8cThylb',
    'PLB5r2P47beqKZUMcEPUT9Z4fXrTsico3d',
    'PLB5r2P47beqKZwfaj-MdDrNp2O0Kcl9mE',
    'PLB5r2P47beqJ8rIoX66EUKH2A1ynwnLxm',
    'PLB5r2P47beqJYwIjv2LSIelynJ3qgGmmb',
    'PLB5r2P47beqL492Vy6x9KfcgdYkDC4M4P',
    'PLB5r2P47beqJf8qPxmc25EgoNFsBTyAkz',
    'PLB5r2P47beqJ3xhO-5dDox7Ph01VKEDEf',
    'PLB5r2P47beqIl9I_QWXFBB683kmdUl3rM',
    'PLB5r2P47beqKyFoAQSWcXtHf2e6xBpn67',
    'PLB5r2P47beqK_pQuvrJkel3Wbwitfgw0Z',
    'PLB5r2P47beqJ-utdxMp23nI50dfHZBYzs',
    'PLB5r2P47beqJFU3F91Eob2tAe5dpxkIk9',
    'PLB5r2P47beqJQkQSzoBbkKj-F_Pxgb6gf',
    'PLB5r2P47beqKsAOBr2zMRZ-DSo5-Xt5gP',
    'PLB5r2P47beqKoS5pG-F28T15sm6rF73hE',
    'PLB5r2P47beqL_H-2PCdYTuyy6pcY0Af-r',
    'PLB5r2P47beqJP9v7HogMEKjhQdoXm46vA',
    'PLB5r2P47beqLCY_QvUclh8XtMmY14BKmX',
    'PLB5r2P47beqKI46IIVtzeZsv2QmE_ZZxB',
    'PLB5r2P47beqK-7zjaRRQkZGwO-1pJEVt9',
    'PLB5r2P47beqI6vGDTXDGkWf9cSirtuS3S',
    'PLB5r2P47beqK52tfg3tlXK8RR2tAb_mUx',
    'PLB5r2P47beqLSUg1cMXx2hJzPU7x1sHAm',
    'PLB5r2P47beqIprxuhkz4KEkAx24TuC9ur',
    'PLB5r2P47beqLjRgBWWroILP4ZgdXU8zHZ',
    'PLB5r2P47beqL6DF7RRPWXW99FMfVLQ5LU',
    'PLB5r2P47beqITqzRnhFCIlNrwfNojICXa',
    'PLB5r2P47beqIfsd2TuazRJvGuNyb3PRwg',
    'PLB5r2P47beqKUuwpU37aV5iMvf2NCr0kt',
    'PLB5r2P47beqIOuzf0SkviBTljXQthKs-m',
    'PLB5r2P47beqJjbL1h7RzCTSeGjQG4MfdE',
    'PLB5r2P47beqLwNS0mEuWs5h5Fybt_TroC',
    'PLB5r2P47beqJnC5lZM8gleFVtGJqyH3V3',
    'PLB5r2P47beqL7Yi4_gG1MU7nCn__dJFO7',
    'PLB5r2P47beqI9WSJeir4Fb-sxdr1jYGh7',
    'PLB5r2P47beqLDPRT9FwipWBzMl9BHxv36',
    'PLB5r2P47beqL8QjTRlM7iL1r7DeMBMel9',
    'PLB5r2P47beqLo33N5R9-tx2LMzZwFhIxT',
    'PLB5r2P47beqLL6rUVzmiF0u4C664ZeNE1',
    'PLB5r2P47beqKsgOuVRErw5CKZQajWV0bu',
    'PLB5r2P47beqJLNrShqpDFH2Tat7zxqcKs',
    'PLB5r2P47beqLcyvO8V2mSyQA-waTeNKlo',
    'PLB5r2P47beqKAjjuLfymJLOGgdLNqRpts',
    'PLB5r2P47beqIc5ro4SbrVbbvuxbRSFrMk',
    'PLB5r2P47beqJmdfpmBamsYfd58QWQ0Y_V',
    'PLB5r2P47beqIuvm5s6t748GJgdeLGZ7xu',
    'PLB5r2P47beqKsWayPP02nAY7YTA7hqBqv',
    'PLB5r2P47beqJCCbMbFxP5SQn6BjDG2bKt',
    'PLB5r2P47beqK8Va8qnPkIccm3iRzCSBUh',
    'PLB5r2P47beqKjfiquRsXkEfKo1J--YUeK',
    'PLB5r2P47beqKDTp8_-dFLBWcVlHLKpqiT',
    'PLB5r2P47beqJq9C4nk_Zndx3mVpQ3gbEC',
    'PLB5r2P47beqJhZLaiylriTN3k44awHxwR',
    'PLB5r2P47beqJjNctlMHKMQ-xppR2rVAvh',
    'PLB5r2P47beqLKK1cISOFVaWrlMSa6rdd2',
    'PLB5r2P47beqI8_ehOu1m-oky54bnz_xTr',
    'PLB5r2P47beqLcjxPzgBEIPt8FfxJG9Mqt',
    'PLB5r2P47beqI3eT-04s26ikuKT-JRpEhZ',
    'PLB5r2P47beqJImw5J4UG_o3CQxuAlaPSZ',
    'PLB5r2P47beqIfTIz9p9zfCI2N9EsDh4lz',
    'PLB5r2P47beqL3egEv8apxX8WoFpz7z07t',
    'PLB5r2P47beqIHS-tnDXcGDDbDAsNgWUdC',
    'PLB5r2P47beqIPxFQUN1C64QmEGLr3dh7-',
    'PLB5r2P47beqLPrKUxDFTseu-OvTvS3kHW',
    'PLB5r2P47beqL_B2Vp-uSi7jJ4aTkUQdkO',
    'PLB5r2P47beqIuCeW5vundE97Vcoymx9Xa',
    'PLB5r2P47beqIGWAMGnrV0QOgw-zFcNToN',
    'PLB5r2P47beqJFgGtn2cJ7egNLHEAnn4L4',
    'PLB5r2P47beqIYBZDIOKca0E69UR7Ah3R4',
    'PLB5r2P47beqKHIUZkT45IxlEXrBfStOFn',
    'PLB5r2P47beqJ10nbQxARlN9tRJFGt9yWB',
    'PLB5r2P47beqJqt0tCzZxIgANrHb6WlA1C',
    'PLB5r2P47beqJbjVhw5eQxQD7gGc2-QB3X',
    'PLB5r2P47beqJXXw_i1JSqOqKWmeDMkgl6',
    'PLB5r2P47beqId5IGptXACqgd1Bdl1hPQ0',
    'PLB5r2P47beqIi6RnSEtco_bYftxTFLWuL',
    'PLB5r2P47beqIbOZGvjYQxZkkrChHzRv-e',
    'PLB5r2P47beqKwC55fCuWKufxqtvLVyYZe',
    'PLB5r2P47beqKQW9Pj7QICJ6ZmlkvYursh',
    'PLB5r2P47beqKNg6UbiAbG7jPHtid0Vl0e',
    'PLB5r2P47beqL2Xv5ECdFMtHgoTtrRsxW_',
    'PLB5r2P47beqK0o6ZFHjhP6LD3jX8Ct42K',
    'PLB5r2P47beqLyUBq5yD2cdi-1CQch823M',
    'PLB5r2P47beqLI9fSo-nZDOWdb4ji7HAQQ',
    'PLB5r2P47beqLyLrDJ_fs4jXTDgIOABaHT',
    'PLB5r2P47beqIX89tNo2x6c8uE3IwBtRRu',
    'PLB5r2P47beqKl4j7sW5rgNgwDMHrITRi6',
    'PLB5r2P47beqIrRMmjWFwjNIWD3948bk2J',
    'PLB5r2P47beqLE9al1gsV58u9900gfYkjL',
    'PLB5r2P47beqLUCkyqACAY4XvViC3EtT3P',
    'PLB5r2P47beqKfgf9S7Y6xDA3TtvRbYRsm',
    'PLB5r2P47beqIdzqrv7txcMYLQpQRuhIZq',
    'PLB5r2P47beqLdikJfptm69lV6PcjE2cQA',
    'PLB5r2P47beqJkzJo6eHRskR_1fWAaNNPG',
    'PLB5r2P47beqK3nCDKVojNkxsguOg7sU24',
    'PLB5r2P47beqK1dZ85N91O_zwhbZH0AugS',
    'PLB5r2P47beqLAwGaWMDSqpKAu_CNMSDC_',
    'PLB5r2P47beqJbwoptmo5dKuZYvd_4ldYp',
    'PLB5r2P47beqJ7TaD5t25utZZ9jLYhsIRk',
    'PLB5r2P47beqJ6uoC6-q5r-2oirIm2Pz6W',
    'PLB5r2P47beqINU_0PfKCOrLUMETtqXwdS',
    'PLB5r2P47beqLJcSaHIYuau_ZFi8-I_DjX',
    'PLB5r2P47beqKiAC1NZ9uz3FFgowyjlorR',
    'PLB5r2P47beqLOTSv5JOoDvzuovyAkHQTh',
    'PLB5r2P47beqJAp2m5wKPbWnIFvT7NM8qg',
    'PLB5r2P47beqJM_t7HamHrLzEkdGHislpR',
    'PLB5r2P47beqJ2Wln6LKpnpbwVwKwMEWzx',
    'PLB5r2P47beqLtevGN3l8cxL4omnu3lhw6',
    'PLB5r2P47beqI-8cmeCwe4NkQnx1Ax3ROl',
    'PLB5r2P47beqLgjVWJze4jS6bOmVZv4hLa',
    'PLB5r2P47beqK53Kna8_mDhs4LTN4VUuXX',
    'PLB5r2P47beqKBVUbzIFpCl22vJYFDFEtB',
    'PLB5r2P47beqJUdLxjVNSVdrw7Iy7CMlF1',
    'PLB5r2P47beqJNEyoH4pcJvxZIl9TW4JZr',
    'PLB5r2P47beqLmYJWUsZRO6DGKH40XsuKW',
    'PLB5r2P47beqLOP-uurIGI3mpfWrzZcVy-',
    'PLB5r2P47beqI_xcxy2Gs011mtzK2R985f',
    'PLB5r2P47beqILyBOfI0TCQHQq1lZRfqGe',
    'PLB5r2P47beqJ3F_clgfciXQF5e7Nt9ui2',
    'PLB5r2P47beqKnRi6FWkODJu3Kzxll2pBU',
    'PLB5r2P47beqJ9CFMMH2iOT34U8K6K2K9M',
    'PLB5r2P47beqKo-qlBDYLlwgle6_I85DEN',
    'PLB5r2P47beqIzUjkZaxH3ZzEc96eTS1KD',
    'PLB5r2P47beqLlY3wM6VKjwEEofXAZ4lX5',
    'PLB5r2P47beqJIcPaaxdQ0TYFFv8HMxKGj',
    'PLB5r2P47beqJTzPPtarJJkx9yXr8kW71D',
    'PLB5r2P47beqJYkWMxWwFsiD4B0uWEjnsO',
    'PLB5r2P47beqIOrsLzY8cap7aOj63SkDA0',
    'PLB5r2P47beqIVerLqLtGuSFk_X-S8E9MV',
    'PLB5r2P47beqK3lDrL8cPVAgc4-9Z4gJtL',
    'PLB5r2P47beqJbX7BLh0rNzpiQEsBFztCR',
    'PLB5r2P47beqLGSgdgrxBQONbwZPJFggL2',
    'PLB5r2P47beqJrr7mX_d3ukbcQD0RtZtX-',
    'PLB5r2P47beqKwjKpTPCGnrI40K_4bYDPN',
    'PLB5r2P47beqKraznMR58uzscKQFB6IYJC',
    'PLB5r2P47beqLHhsc-OKXdR3-mbmaJWdux',
    'PLB5r2P47beqIqzVRyXtafs40a-Y5iDXk4',
    'PLB5r2P47beqLd6AUXbHxOekbQ2PexnpuF',
    'PLB5r2P47beqLjd7EgvOWXUB7g_3au-YsK',
    'PLB5r2P47beqKRsnG501Gb9V3107N7xqrm',
    'PLB5r2P47beqK-yrIKhDh5PawDwjA8BW1k',
    'PLB5r2P47beqJVfLPurYFC6WYEAIfmOgOl',
    'PLB5r2P47beqLA5m-_4lJMwbUBfiEgSulw',
    'PLB5r2P47beqK2Xt8xulEpH__z7HZV4zaq',
    'PLB5r2P47beqKvRDB8pCM6ZvRKBI4hcGMn',
    'PLB5r2P47beqJp-tSemYicqEtRVJmT7tdl',
    'PLB5r2P47beqISrma0x97rmKZ0BDIMIhMd',
    'PLB5r2P47beqJBx0eBsMxrhM_OXXqOMsLj',
    'PLB5r2P47beqJJ2GaPzjgVPq6P87ZCUyAO',
    'PLB5r2P47beqJrhgJfkv7tWdZWapEhx9qu',
    'PLB5r2P47beqKs10xTKOW-YM9kVRuzFWGn',
    'PLB5r2P47beqKyJECavMIQSw9lcoF6eRAo',
    'PLB5r2P47beqJ1_DImWR5JQfIVlEJC6Fd0',
    'PLB5r2P47beqKSjFpt-yekw2YnTcj3e6VJ',
    'PLB5r2P47beqLppJflKimmSqUfXeSjKn51',
    'PLB5r2P47beqJFCTpMqS7aTI8wcjEwmuuG',
    'PLB5r2P47beqLkt60oEpLfbzr90b1h6h2n',
    'PLB5r2P47beqIKqbKKWDa_t2QtfnySzQpF',
    'PL03CD5CC7C5DBA44F',
    'PL5936CEED090FBBE8',
    'PLCBB6E24D0DF9E444',
    'PLD2751FE90C1AC833',
    'PL20B7C0A6BC98CF4F',
    'PLB12B444FF439FDBF',
    'PL7D38B79E70C7669D',
    'PL8C380628901FDE3B',
    'PL4DEE0A93936D6AEA',
    'PL1DD32FBD28BBAFAB',
    'PL8307CF5A6F3209AA',
    'PLCF9F08F6A60C0492',
    'PL28A9F03C64D9E16D',
    'PL6DDDECE3128B622D',
    'PL118D891714998551',
    'PL5289D934890ED35A'
  ]
  playlistData = []
  setPlaylists(json: any) {
    console.log("setPlaylists: " + json);
    this.playlistData = this.playlistData.concat(json.data.getYoutubePlaylist.items)

  }

  loadPlaylists(nextPageToken: any) {
    const playlists: any = API.graphql(graphqlOperation(queries.getYoutubePlaylist, { nextPageToken: nextPageToken }));
    playlists.then((json: any) => {
      this.setPlaylists(json);
      if (json.data.getYoutubePlaylist.nextPageToken != null)
        this.loadPlaylists(json.data.getYoutubePlaylist.nextPageToken)
      else {
        this.playlistData.forEach((item: any) => {
          if (!this.ignorePlaylist.includes(item.id))
            this.loadPlaylist(item, "");
        })
      }
    }).catch((err: any) => {
      console.log(err);
      this.playlistData.forEach((item: any) => {
        if (!this.ignorePlaylist.includes(item.id))
          this.loadPlaylist(item, "");
      })

    });
  }
  reloadPlaylists() {
    this.loadPlaylists("");

  }

  loadPlaylist(data: any, pageToken: string) {
    console.log("loadPlaylist: " + data.id);
    const playlistItems: any = API.graphql(graphqlOperation(queries.getYoutubePlaylistItems, { playlistId: data.id, pageToken: pageToken }));
    playlistItems.then((json: any) => {
      json.data.getYoutubePlaylistItems.items.forEach((item: any) => {
        this.loadVideo(item)
      })
      if (json.data.getYoutubePlaylistItems.nextPageToken !== null)
        this.loadPlaylist(data, json.data.getYoutubePlaylistItems.nextPageToken)
    }).catch((err: any) => {
      console.log(err)
      console.log("Error queries.getYoutubePlaylistItems: " + err)
    });
  }
  loadVideo(data: any) {

    this.writeYoutube(data)
    /*const closedCaptionList = API.graphql(graphqlOperation(queries.getYoutubeCaptionlist, { videoId: data.contentDetails.videoId }));
     closedCaptionList.then((json:any) => {
       this.setCaptionItems(json);
     });*/
  }
  async writeYoutube(vid1: any) {
    try {
      const getVideoByYoutubeIdent: any = await API.graphql(graphqlOperation(customqueries.getVideoByYoutubeIdent, { YoutubeIdent: vid1.contentDetails.videoId }));
      if (getVideoByYoutubeIdent.data.getVideoByYoutubeIdent.items.length === 0 && vid1.status.privacyStatus !== "private") {
        console.log({"Write Youtube": vid1})
        console.log(getVideoByYoutubeIdent)

        console.log("Do mutations.createVideo")
        delete vid1['id'];

        delete vid1['selected'];
        if (vid1.snippet.description === "")
          delete vid1.snippet['description']
        if (vid1.snippet.localized == null)
          delete vid1.snippet['localized']
        if (vid1.statistics == null)
          delete vid1.statistics
        
        try {
          const getYoutubeVideoContentDetails: any = await API.graphql(graphqlOperation(queries.getYoutubeVideoContentDetails , { videoId: vid1.contentDetails.videoId }));
          const fullContentDetails = getYoutubeVideoContentDetails.data?.getYoutubeVideoContentDetails?.items[0]?.contentDetails?.duration ?? ""
          const duration = fullContentDetails === "" ? "" : Math.round(moment.duration(fullContentDetails).as('minutes')).toString()
          const createVideo: any = await API.graphql({
            query: mutations.createVideo,
            variables: { input: { id: vid1.contentDetails.videoId, YoutubeIdent: vid1.contentDetails.videoId, Youtube: vid1, length: duration } },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
          });
          console.log({ "Success mutations.createVideo": createVideo });
        } catch(err) {
          console.error({ "Error mutations.createVideo": err });
          console.log(vid1)
        }
      } else if (moment().diff(vid1.contentDetails.videoPublishedAt, 'days') <= 365 && vid1.status.privacyStatus !== "private") {

        //we will pull viewCount for videos posted within the last year...

        /*try {
          const getYoutubeVideoStatistics: any = await API.graphql(graphqlOperation(queries.getYoutubeVideoStatistics  , { videoId: vid1.contentDetails.videoId }));
          console.log(getYoutubeVideoStatistics.data.getYoutubeVideoStatistics.statistics.viewCount)
          if (getYoutubeVideoStatistics.data.getYoutubeVideoStatistics.statistics) {
            try {
              const updateVideo: any = await API.graphql({
                query: mutations.updateVideo,
                variables: { input: { id: vid1.contentDetails.videoId, viewCount: vid1.contentDetails.videoId } },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
              });
            } catch(err) {
              console.error(err)
            }
          } 
        } catch(err) {
          console.error(err)
        }*/
      }
    } catch(err) {
      console.error({ "Error queries.getVideoByYoutubeIdent: ": err })
    }
  } 
}