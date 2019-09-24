import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
Amplify.configure(awsmobile);

export default class ImportYoutube {
    playlistData = []
    setPlaylists(json: any) {
      console.log("setPlaylists: " + json);
      this.playlistData = this.playlistData.concat(json.data.getYoutubePlaylist.items)
  
    }
  
    loadPlaylists(nextPageToken: any) {
      const playlists = API.graphql(graphqlOperation(queries.getYoutubePlaylist, { nextPageToken: nextPageToken }));
      playlists.then((json: any) => {
        this.setPlaylists(json);
        this.loadPlaylists(json.data.getYoutubePlaylist.nextPageToken)
  
      }).catch((err: any) => {
        console.log(err);
        this.playlistData.forEach((item) => {
          this.loadPlaylist(item);
        })
  
      });
    }
    reloadPlaylists() {
      this.loadPlaylists("");
  
    }
  
    loadPlaylist(data: any) {
      console.log("loadPlaylist: " + data.id);
      const playlistItems = API.graphql(graphqlOperation(queries.getYoutubePlaylistItems, { playlistId: data.id }));
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
      /*  const closedCaptionList = API.graphql(graphqlOperation(queries.getYoutubeCaptionlist, { videoId: data.contentDetails.videoId }));
        closedCaptionList.then((json:any) => {
          this.setCaptionItems(json);
        });*/
    }
    writeYoutube(vid1: any) {
      console.log("Write Youtube: " + vid1);
      const getVideoByYoutubeIdent = API.graphql(graphqlOperation(queries.getVideoByYoutubeIdent, { YoutubeIdent: vid1.contentDetails.videoId }));
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
          const createVideo = API.graphql(graphqlOperation(mutations.createVideo, { input: { id: vid1.contentDetails.videoId, YoutubeIdent: vid1.contentDetails.videoId, Youtube: vid1 } }));
          createVideo.then((json3: any) => {
            /* this.setState({
                 currentVideoData: json3.data.createVideo
             })*/
            console.log("Success mutations.createVideo: " + json3);
          }).catch((err: any) => {
            console.log("Error mutations.createVideo: " + err);
            console.log(err)
            console.log(vid1)
          });
        }
  
      }).catch((err: any) => {
        console.log("Error queries.getVideoByYoutubeIdent: " + err);
        console.log(err)
      });
    }
  }