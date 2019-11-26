import * as queries from '../../graphql/queries';
import * as customqueries from '../../graphql-custom/customQueries';
import * as mutations from '../../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';

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
    "PLB5r2P47beqJ1dPnX_KEtviMgISzM19IG",
    "PLB5r2P47beqJ88_Mli1WLjBihZR4NuYt-",
    "PLB5r2P47beqKJ20FmOwHQBHUAjv5G9XBk",
    "PLB5r2P47beqLrZyEDb_sFgAdOo6J5lw_C",
    "PLB5r2P47beqIOfvkI91lxnmjydQkDPRPS",
    "PLB5r2P47beqIJJoetWg1LxrDqoSfqYVEn",
    "PLB5r2P47beqK_JHnTT5CaPTtkNQq2YLdn",
    "PLB5r2P47beqJdtrGFXDBfZAqDptKEQ0_O",
    "PLB5r2P47beqJkEJmldK0iv96XrxxZgOwL",
    "PLB5r2P47beqIY710hbZY6LKkeCkUqTaSq",
    "PLB5r2P47beqLd03tigykT45hPBMD2AZiV",
    "PLB5r2P47beqJc8MQC_cE7xkuXrGLtLQc_",
    "PLB5r2P47beqK-67PIAF4b1nQgh6cwayAO",
    "PLB5r2P47beqLF8du0Jfa9VHOsAl6T2Ik4",
    "PLB5r2P47beqIrP3RPdY1vWfic2kO1tSBx",
    "PLB5r2P47beqIBg0asFXBh-MngqOAlLkLi",
    "PLB5r2P47beqK_7VNQQVFhbE2S4Ni1qEi3",
    "PLB5r2P47beqK7DIDEmLspWog35Bn9Dum5",
    "PLB5r2P47beqLsznpipz-lq-SprbxYlu3r",
    "PLB5r2P47beqJ7NVigp8KO4mhKraDcZPg-",
    "PLB5r2P47beqJiefBSnOlZqbGWQDOu7QcX",
    "PLB5r2P47beqKdPrd1JEidEYyMNN6VZg4E",
    "PLB5r2P47beqLjhYywKrOG-WL5pSaVy6VF",
    "PLB5r2P47beqKHXFghpaq45drZ6lvmVYoj",
    "PLB5r2P47beqJKW9571AL9Luo2kjhFQ6BD",
    "PLB5r2P47beqId_fvmYdBacSRvV1b5r2w6",
    "PLB5r2P47beqL7vuSMH2PTvsclYOgz6uLI",
    "PLB5r2P47beqLp9mkCVn2TzqoNT3hHdgrm",
    "PLB5r2P47beqKZcIA-06MtCgfqcXn1vZX_",
    "PLB5r2P47beqKJBhpXR9rYdEPNG8cThylb",
    "PLB5r2P47beqKZUMcEPUT9Z4fXrTsico3d",
    "PLB5r2P47beqKZwfaj-MdDrNp2O0Kcl9mE",
    "PLB5r2P47beqJ8rIoX66EUKH2A1ynwnLxm",
    "PLB5r2P47beqJYwIjv2LSIelynJ3qgGmmb",
    "PLB5r2P47beqL492Vy6x9KfcgdYkDC4M4P",
    "PLB5r2P47beqJf8qPxmc25EgoNFsBTyAkz"]
  playlistData = []
  setPlaylists(json: any) {
    console.log("setPlaylists: " + json);
    this.playlistData = this.playlistData.concat(json.data.getYoutubePlaylist.items)

  }

  loadPlaylists(nextPageToken: any) {
    const playlists: any = API.graphql(graphqlOperation(queries.getYoutubePlaylist, { nextPageToken: nextPageToken }));
    playlists.then((json: any) => {
      this.setPlaylists(json);
      this.loadPlaylists(json.data.getYoutubePlaylist.nextPageToken)

    }).catch((err: any) => {
      console.log(err);
      this.playlistData.forEach((item:any) => {
        if (!this.ignorePlaylist.includes(item.id))
          this.loadPlaylist(item);
      })

    });
  }
  reloadPlaylists() {
    this.loadPlaylists("");

  }

  loadPlaylist(data: any) {
    console.log("loadPlaylist: " + data.id);
    const playlistItems: any = API.graphql(graphqlOperation(queries.getYoutubePlaylistItems, { playlistId: data.id }));
    playlistItems.then((json: any) => {
      //console.log("Success queries.getYoutubePlaylistItems: " + json)
      json.data.getYoutubePlaylistItems.items.forEach((item: any) => {
        this.loadVideo(item)
      })
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
  writeYoutube(vid1: any) {
    console.log("Write Youtube: " + vid1);
    const getVideoByYoutubeIdent: any = API.graphql(graphqlOperation(customqueries.getVideoByYoutubeIdent, { YoutubeIdent: vid1.contentDetails.videoId }));
    getVideoByYoutubeIdent.then((json: any) => {
      //console.log("Success queries.searchVideos: " + json);
      if (json.data.getVideoByYoutubeIdent.items.length === 0) {
        console.log(json)

        console.log("Do mutations.createVideo")
        delete vid1['id'];

        delete vid1['selected'];
        if (vid1.snippet.description === "")
          delete vid1.snippet['description']
        if (vid1.snippet.localized == null)
          delete vid1.snippet['localized']
        var createVideo: any = API.graphql({
          query: mutations.createVideo,
          variables: { input: { id: vid1.contentDetails.videoId, YoutubeIdent: vid1.contentDetails.videoId, Youtube: vid1 } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });

        createVideo.then((json3: any) => {
          /* this.setState({
               currentVideoData: json3.data.createVideo
           })*/
          console.log({ "Success mutations.createVideo": json3 });
        }).catch((err: any) => {
          console.log({ "Error mutations.createVideo": err });
          console.log(vid1)
        });
      }

    }).catch((err: any) => {
      console.log({ "Error queries.getVideoByYoutubeIdent: ": err });
    });
  }
}