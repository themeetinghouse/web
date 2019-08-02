
import React, { Component } from 'react'
import AdminMenu from '../../components/Menu/AdminMenu';
import { Button } from 'react-bootstrap';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
//import uuidv4 from 'uuid/v4'
Amplify.configure(awsmobile);


class ImportYoutube {
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
      this.playlistData.map((item) => {
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
      json.data.getYoutubePlaylistItems.items.map((item: any) => {
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
      if (json.data.getVideoByYoutubeIdent.items.length == 0) {
        console.log(json)

        console.log("Do mutations.createVideo")
        delete vid1['id'];

        delete vid1['selected'];
        if (vid1.snippet.description == "")
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

class Imports extends Component {
  importYoutube() {
    var z = new ImportYoutube()
    z.reloadPlaylists()

  }
  writeSites(site: any) {
    console.log("Write Site: " + site);
    delete site._id
    const listLocations = API.graphql(graphqlOperation(queries.listLocations, { filter: { id: { eq: site.id } } }));
    listLocations.then((json: any) => {
      console.log("Success queries.listLocations: " + json);
      if (json.data.listLocations.items.length == 0) {
        console.log("Do mutations.createLocation")
        const createLocation = API.graphql(graphqlOperation(mutations.createLocation, { input: site }));
        createLocation.then((json3: any) => {

          console.log("Success mutations.createLocation: " + json3);
        }).catch((err: any) => {
          console.log("Error mutations.createLocation: ");
          console.log(err)
        });
      } else if (json.data.listLocations.items.length == 1) {
        console.log("Do mutations.updateLocation")
        const updateLocation = API.graphql(graphqlOperation(mutations.updateLocation, { input: { site } }));
        updateLocation.then((json3: any) => {
          console.log("Success mutations.updateLocation: " + json3);

        }).catch((err: any) => {
          console.log("Error mutations.updateLocation: " + err);

        });
      }
    }).catch((err: any) => {
      console.log("Error queries.listLocations: " + err);

    });
  }

  importSites() {
    console.log("import")
    fetch('/static/dataload_sites.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        myJson.map((item: any) => {
          console.log(item);
          this.writeSites(item)
        })

      });
  }

  importSermons() {
    const listTnSeriess = API.graphql(graphqlOperation(queries.listTnSeriess, { limit: 100 }));
    listTnSeriess.then((json: any) => {
      console.log("Success queries.listTnSeriess: " + json);
      console.log(json.data.listTNSeriess.items)
      json.data.listTNSeriess.items.map((item: any) => {
        const getTakenoteSermon = API.graphql(graphqlOperation(queries.getTakenoteSermon, { user: 1, seriesId: item.TNident }));
        getTakenoteSermon.then((json: any) => {

          console.log("Success queries.getTakenoteSermon: " + json);

          json.data.getTakenoteSermon.map((item2: any) => {
            item2.TNident = item2.id
            delete item2.id
            item2.tNSermonSeriesId = item.id
            if (item2.audioUrl == "")
              delete item2.audioUrl
            if (item2.description == "")
              delete item2.description
            item2.mediaEntries.map((item3: any) => {
              delete item3.id
            })
            const createTnSermon = API.graphql(graphqlOperation(mutations.createTnSermon, { input: item2 }));
            createTnSermon.then((json: any) => {
              console.log("Success mutations.createTnSermon: " + json);
            }).catch((err: any) => {
              console.log(item2)

              console.log("Error mutations.createTnSermon: " + err);
              console.log(err)
              // this.importSeries(start)
            });

          })
        }).catch((err: any) => {
          console.log(item.TNident)
          console.log("Error queries.getTakenoteSermon: " + err);
          console.log(err)
          // this.importSeries(start)
        });
      })
    }).catch((err: any) => {
      console.log("Error queries.listTnSeriess: " + err);
      console.log(err)
      // this.importSeries(start)
    });
  }
  importSeries(start: any) {
    console.log("importSermons")

    const listLocations = API.graphql(graphqlOperation(queries.getTakenoteSeries, { user: 1, start: start, count: 20 }));
    listLocations.then((json: any) => {
      console.log("Success queries.getTakenoteSeries: " + json);
      json.data.getTakenoteSeries.map((item: any) => {
        item.TNident = item.id
        delete item.id
        if (item.description == "")
          delete item.description
        const createTnSeries = API.graphql(graphqlOperation(mutations.createTnSeries, { input: item }));
        createTnSeries.then((json: any) => {
          console.log("Success queries.createTnSeries: " + json);
          console.log(json.data.createTnSeries)
        }).catch((err: any) => {
          console.log("Error queries.createTnSeries: " + err);
          console.log(err)
          // this.importSeries(start)
        });

      })

      console.log(json.data.getTakenoteSeries)
      this.importSeries(start + 20)

    }).catch((err: any) => {
      console.log("Error queries.getTakenoteSeries: " + err);
      console.log(err)
      // this.importSeries(start)
    });
  }



  copyTNData(nextId: any) {
    const listTnSermons = API.graphql(graphqlOperation(queries.listTnSermons, { limit: 100, nextToken: nextId }));
    listTnSermons.then((json: any) => {
      console.log(json)
      json.data.listTNSermons.items.map((item: any) => {
        var z = item.mediaEntries.find((obj: any) => {
          return obj.contentType == "VIDEO"
        })
        var youtubeURL: string = ""
        if (z != null) {
          youtubeURL = z.url.replace('https://youtu.be/', '').replace('https://www.youtube.com/watch?v=', '').replace('http://youtu.be/', '')
          youtubeURL = youtubeURL.split('&index')[0]
          youtubeURL = youtubeURL.split('&list')[0]
          youtubeURL = youtubeURL.split('?list')[0]
          const getVideo = API.graphql(graphqlOperation(queries.getVideo, { id: youtubeURL }));
          getVideo.then((json: any) => {
            console.log(youtubeURL)
            console.log(json.data.getVideo)
            console.log(item)
            var z:any=json.data.getVideo.videoTypes
            if (z==null)
              z=[]
            z=z.concat("adult-sunday")
            z = [...new Set(z)];
            const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: youtubeURL, videoTypes: z, episodeTitle: item.title, description: item.description } }));
            updateVideo.then(() => {
              console.log("updateVideo success")

            }).catch((err: any) => {
              console.log("Error queries.updateVideo: " + err);
              console.log(err)
              // this.importSeries(start)
            });
          }).catch((err: any) => {
            console.log("Error queries.getVideo: " + err);
            console.log(err)
            // this.importSeries(start)
          });

        }
        else {
          youtubeURL = "notfound"
          console.log(item)
        }
        console.log(youtubeURL)
      })
      if (json.data.listTNSermons.nextToken != null)
        this.copyTNData(json.data.listTNSermons.nextToken)
    })
  }

  render() {
    return (
      <div>
        <AdminMenu />
        <div>
          <h1>Imports</h1>
          <Button onClick={() => { this.importSites() }}>Import Sites</Button>
          <Button onClick={() => { this.importSeries(1) }}>Import Series</Button>
          <Button onClick={() => { this.importSermons() }}>Import Sermons</Button>
          <Button onClick={() => { this.importYoutube() }}>Import Youtube</Button>
          <Button onClick={() => { this.copyTNData(null) }}>Copy TN Data</Button>
        </div>
      </div>

    )
  }
}
export default Imports;

