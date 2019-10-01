
import React from 'react'
import AdminMenu from '../../components/Menu/AdminMenu';
import { Button } from 'react-bootstrap';
//import * as API2 from '../../API'
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import uuidv4 from 'uuid/v4'
import ImportYoutube from '../../components/ImportYoutube/ImportYoutube'
Amplify.configure(awsmobile);


interface Props { }
interface State {
  speakers: Array<any>,
  exportAllData: Array<any>
}

class Imports extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props)
    this.state = {
      speakers: [],
      exportAllData: []
    }
  }
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
      if (json.data.listLocations.items.length === 0) {
        console.log("Do mutations.createLocation")
        const createLocation = API.graphql(graphqlOperation(mutations.createLocation, { input: site }));
        createLocation.then((json3: any) => {

          console.log("Success mutations.createLocation: " + json3);
        }).catch((err: any) => {
          console.log("Error mutations.createLocation: ");
          console.log(err)
        });
      } else if (json.data.listLocations.items.length === 1) {
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
        myJson.forEach((item: any) => {
          console.log(item);
          this.writeSites(item)
        })

      });
  }
  writeSermon(item: any) {
    const getTnSermon = API.graphql(graphqlOperation(queries.getTnSermonByIdent, { TNident: item.id }));
    getTnSermon.then((json: any) => {
      //console.log(json)
      if (json.data.getTNSermonByIdent.items.length === 0) {
        console.log(json)


        if (item.audioUrl === "")
          item.audioUrl = null
        if (item.description === "")
          item.description = null
        if (item.title === "")
          item.title = null
        //      if (itemz.mediaEntries == null)
        //        delete itemz.mediaEntries
        if (item.sermonNoteCount === undefined)
          item.sermonNoteCount = null
        if (item.sermonCommentCount === undefined)
          item.sermonCommentCount = null
        if (item.homeChurchNoteCount === undefined)
          item.homeChurchNoteCount = null
        if (item.quoteNoteCount === undefined)
          item.quoteNoteCount = null
        if (typeof item.mediaEntries === "string") {
          var z = JSON.parse(item.mediaEntries)
          item.mediaEntries = z
        }

        if (item.mediaEntries != null)
          item.mediaEntries.forEach((item3: any) => {
            delete item3.id
            //  item3.__typename="TNMediaEntry"
          })

        //delete item.
        // itemz.TNident = itemz.id
        console.log(item)
        const createTnSermon = API.graphql(graphqlOperation(mutations.createTnSermon, {
          input: {
            TNident: item.id,
            audioUrl: item.audioUrl,
            id: uuidv4(),
            title: item.title,
            speaker: item.speaker,
            deliveryDate: item.deliveryDate,
            description: item.description,
            mediaEntries: item.mediaEntries,
            public: item.public,
            series_FK: item.series_FK,
            //series:null,
            sermonNoteCount: item.sermonNoteCount,
            quoteNoteCount: item.quoteNoteCount,
            homeChurchNoteCount: item.homeChurchNoteCount,
            sermonCommentCount: item.sermonCommentCount
          }
        }));
        createTnSermon.then((json: any) => {
          console.log("Success mutations.createTnSermon: " + json);
        }).catch((err: any) => {
          console.log("Error mutations.createTnSermon: " + err);
          //console.log(itemz)
          console.log(err)
          console.log(err.errors[0].message)
          // this.importSeries(start)
        });

      }
    }).catch((err: any) => {
      console.log(err)
    })
    /*const listTnSeriess = API.graphql(graphqlOperation(queries.listTnSeriess, { limit: 100 }));
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
            if (item2.audioUrl === "")
              delete item2.audioUrl
            if (item2.description === "")
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
    });*/
  }
  importSermons() {
    console.log("import")
    fetch('/static/imports/sermons.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        myJson.forEach((item: any) => {
          // console.log(item);
          this.writeSermon(item)
        })

      });

  }

  writeSeries(item: any) {
    const getTnSeries = API.graphql(graphqlOperation(queries.getTnSeriesByIdent, { TNident: item.id }));
    getTnSeries.then((json: any) => {
      //console.log(json)
      if (json.data.getTNSeriesByIdent.items.length === 0) {
        // console.log(json)


        /*  if (item.audioUrl === "")
            item.audioUrl = null
               */
        if (item.description === "")
          item.description = null
        if (item.title === "")
          item.title = null
        if (item.imageUrl === "")
          item.imageUrl = null
        if (item.thumbnail === "")
          item.thumbnail = null
                   /*
          //      if (itemz.mediaEntries == null)
          //        delete itemz.mediaEntries
          if (item.sermonNoteCount == undefined)
            item.sermonNoteCount = null
          if (item.sermonCommentCount == undefined)
            item.sermonCommentCount = null
          if (item.homeChurchNoteCount == undefined)
            item.homeChurchNoteCount = null
          if (item.quoteNoteCount == undefined)
            item.quoteNoteCount = null
          if (typeof item.mediaEntries === "string") {
            var z = JSON.parse(item.mediaEntries)
            item.mediaEntries = z
          }
  
          if (item.mediaEntries != null)
            item.mediaEntries.map((item3: any) => {
              delete item3.id
              //  item3.__typename="TNMediaEntry"
            })
  
          //delete item.
          // itemz.TNident = itemz.id
       */    console.log(item)
        const createTnSeries = API.graphql(graphqlOperation(mutations.createTnSeries, {
          input: {
            id: uuidv4(),
            TNident: item.id,
            title: item.title,
            description: item.description,
            imageUrl: item.imageUrl,
            public: item.public,
            thumbnail: item.thumbnail,
            startDate: item.startDate,
            endDate: item.endDate,
            sermonCommentCount: item.sermonCommentCount,
            homeChurchCommentCount: item.homeChurchCommentCount
            //  sermons: [TNSermon] @connection(name: "SeriesSermons")
          }
        }));
        createTnSeries.then((json: any) => {
          console.log("Success mutations.createTnSeries: " + json);
        }).catch((err: any) => {
          console.log("Error mutations.createTnSeries: " + err);
          //console.log(itemz)
          console.log(err)
          console.log(err.errors[0].message)
          // this.importSeries(start)
        });

      }
    }).catch((err: any) => {
      console.log(err)
    })
    /*
    console.log("importSermons")

    const listLocations = API.graphql(graphqlOperation(queries.getTakenoteSeries, { user: 1, start: start, count: 20 }));
    listLocations.then((json: any) => {
      console.log("Success queries.getTakenoteSeries: " + json);
      json.data.getTakenoteSeries.map((item: any) => {
        item.TNident = item.id
        delete item.id
        if (item.description === "")
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
    });*/
  }
  importSeries() {
    console.log("import")
    fetch('/static/imports/series.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        myJson.forEach((item: any) => {
          // console.log(item);
          this.writeSeries(item)
        })

      });

  }

  importSpeakers() {

    var insertSpeakers: any = this.state.speakers
    insertSpeakers.forEach((item: any) => {
      const createSpeaker = API.graphql(graphqlOperation(mutations.createSpeaker, { input: { id: item, name: item } }));
      createSpeaker.then((json: any) => {
        console.log("Success mutations.createSpeaker: " + json);
      }).catch((err: any) => {
        console.log("Error mutations.createSpeaker: " + err);
        console.log(err)
      });
    })
  }
  listAllSpeakers() {
    this.setState({
      speakers: []
    })
    console.log(this.listTNSpeakers(null))
  }
  fixTNSpeakers(str: string): Array<any> {
    var list: any = str.replace(" with ", ",").replace(" and ", ",").replace(" & ", ",").replace(", ", ",").replace(",the ", ",").replace(" Jared ", "Jared ").replace(" Matt ", "Matt ").replace("Local Lead Pastor", "Local Site Pastors").replace("Local site pastors", "Local Site Pastors").replace("Your local Lead Pastor", "Local Site Pastors").replace("JoshCrain", "Josh Crain").replace("Site Lead Pastor", "Local Site Pastors").replace("Darrel ", "Darrell ").replace(" Josh ", "Josh ").replace(" Mike ", "Mike ").replace(" Rick ", "Rick ").replace("Darryl Winger", "Darrell Winger").split(",")
    var index = list.indexOf(" ");

    if (index > -1) {
      list.splice(index, 1);
    }
    return list
  }
  listTNSpeakers(nextId: any) {
    var speakers: any = []
    const listTnSermons = API.graphql(graphqlOperation(queries.listTnSermons, { limit: 100, nextToken: nextId }));
    listTnSermons.then((json: any) => {
      // console.log(json)
      json.data.listTNSermons.items.forEach((item: any) => {
        console.log(item)
        if (item.speaker != null) {
          var list: any = this.fixTNSpeakers(item.speaker)
          speakers = speakers.concat(list)
          speakers = Array.from(new Set(speakers));
        }
      })
      if (json.data.listTNSermons.nextToken != null) {
        this.setState({
          speakers: Array.from(new Set(this.state.speakers.concat(speakers).sort()))
        })
        this.listTNSpeakers(json.data.listTNSermons.nextToken)

      }

    })

    //  return speakers
  }
  copyTNSpeakerData(nextId: any) {
    var speakers: any = []
    const listTnSermons = API.graphql(graphqlOperation(queries.listTnSermons, { limit: 100, nextToken: nextId }));
    listTnSermons.then((json: any) => {
      // console.log(json)
      json.data.listTNSermons.items.forEach((item: any) => {
        if (item.mediaEntries != null) {
          var z = item.mediaEntries.find((obj: any) => {
            return obj.contentType === "VIDEO"
          })
          var youtubeURL: string = ""
          if (z != null && z.url !== "http://media.themeetinghouse.ca/vpodcast/2015-03-01-960-video.mp4") {
            youtubeURL = this.fixTNYoutubeURL(z.url)
            var list: any = this.fixTNSpeakers(item.speaker)
            list.forEach((a: any) => {
              console.log(a)
              const updateSpeakerVideos = API.graphql(graphqlOperation(mutations.createSpeakerVideos, { input: { id: uuidv4(), speakerVideosVideoId: youtubeURL, speakerVideosSpeakerId: a } }));
              updateSpeakerVideos.then((json: any) => {
                console.log("Success mutations.updateSpeakerVideos: " + json);
              }).catch((err: any) => {
                console.log("Error mutations.updateSpeakerVideos: " + err);
                console.log(err)
                // this.importSeries(start)
              });
            })
            speakers = speakers.concat(list)
            speakers = Array.from(new Set(speakers));
          }
        }
      })
      if (json.data.listTNSermons.nextToken != null)
        this.copyTNSpeakerData(json.data.listTNSermons.nextToken)
    })
  }
  fixTNYoutubeURL(str: string): string {
    var youtubeURL: string = str.replace('https://youtu.be/', '').replace('https://www.youtube.com/watch?v=', '').replace('http://youtu.be/', '')
    youtubeURL = youtubeURL.split('&index')[0]
    youtubeURL = youtubeURL.split('&list')[0]
    youtubeURL = youtubeURL.split('?list')[0]
    return youtubeURL

  }
  copyTNSermonData(nextId: any) {
    const listTnSermons = API.graphql(graphqlOperation(queries.listTnSermons, { limit: 100, nextToken: nextId }));
    listTnSermons.then((json: any) => {
      // console.log(json)
      json.data.listTNSermons.items.forEach((item: any) => {
        // console.log(item) 
        if (item.mediaEntries != null) {
          var z = item.mediaEntries.find((obj: any) => {
            return obj.contentType === "VIDEO"
          })
          var youtubeURL: string = ""
          if (z != null && z.url !== "http://media.themeetinghouse.ca/vpodcast/2015-03-01-960-video.mp4") {
            youtubeURL = this.fixTNYoutubeURL(z.url)
            console.log(youtubeURL)
            const getVideo = API.graphql(graphqlOperation(queries.getVideo, { id: youtubeURL }));
            getVideo.then(() => {
              //  console.log(youtubeURL)
              //  console.log(json.data.getVideo)
              //  console.log(item)
              z = "adult-sunday"
              const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: youtubeURL, publishedDate: item.deliveryDate, videoTypes: z, episodeTitle: item.title, description: item.description } }));
              updateVideo.then(() => {
                console.log("updateVideo success")

              }).catch((err: any) => {
                console.log("Error queries.updateVideo: " + err);
                console.log(err)
                console.log(item)
                console.log(youtubeURL)
                // this.importSeries(start)
              });

            }).catch((err: any) => {
              console.log("Error queries.getVideo: " + err);
              console.log(err)
              // this.importSeries(start)
            });

          }
        }
        else {
          youtubeURL = "notfound"
          // console.log(item.mediaEntries)
        }
        //    console.log(youtubeURL)
      })
      if (json.data.listTNSermons.nextToken != null)
        this.copyTNSermonData(json.data.listTNSermons.nextToken)
    })
  }
  copySeriesSermonLinksTN(nextId: any) {
    const listTnSermons = API.graphql(graphqlOperation(queries.listTnSermons, { limit: 100, nextToken: nextId }));
    listTnSermons.then((json: any) => {
      console.log(json)
      json.data.listTNSermons.items.forEach((item: any) => {
        // console.log(item) 
        if (item.mediaEntries != null) {
          var z = item.mediaEntries.find((obj: any) => {
            return obj.contentType === "VIDEO"
          })
          var youtubeURL: string = ""
          if (z != null && z.url !== "http://media.themeetinghouse.ca/vpodcast/2015-03-01-960-video.mp4") {
            youtubeURL = this.fixTNYoutubeURL(z.url)
            console.log(youtubeURL)
            var series_fk: any = item.series_FK
            const getTnSeries = API.graphql(graphqlOperation(queries.getTnSeriesByIdent, { TNident: series_fk }));
            getTnSeries.then((json2: any) => {
              //console.log(json)
              if (json2.data.getTNSeriesByIdent != null) {
                var seriesTitle = this.simplifySeries(json2.data.getTNSeriesByIdent.items[0].title)
                console.log(seriesTitle)
                const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: youtubeURL, seriesTitle: seriesTitle, videoSeriesId: seriesTitle } }));
                updateVideo.then((json3: any) => {
                  console.log(json3)
                }
                ).catch((err: any) => {
                  console.log("Error mutations.updateVideo: " + err);
                  console.log(err)
                })
              }
            }).catch((err: any) => {
              console.log("Error queries.getTnSeriesByIdent: " + err);
              console.log(err)
              // this.importSeries(start)
            });
          }
        }
      })
      if (json.data.listTNSermons.nextToken != null)
        this.copySeriesSermonLinksTN(json.data.listTNSermons.nextToken)
    }).catch((err: any) => {
      console.log("Error queries.listTnSermons: " + err);
      console.log(err)
      // this.importSeries(start)
    });


  }
  simplifySeries(str: string): string {
    var temp = str.replace(" with Andrew Farley", "").replace(" with Doug Sider", "").replace(" with Greg Boyd", "").replace(" with John Mark Comer", "").replace(" with Ken Shigematsu", "").replace(" with Sunder Krishnan", "").replace(" with Danielle Strickland", "")
    temp = temp.replace(": The Law and the Land", "").replace(" - Q&A", "").replace(": The Promise and the Pain", "").replace(": Restoring and Reconciling", "")
    temp = temp.replace(" - Dec 2014", "").replace(" - June 2015", "")
    return temp
  }
  updateSeriesDates(nextId: any) {
    const listSeriess = API.graphql(graphqlOperation(queries.listSeriess, { limit: 100, nextToken: nextId }));
    listSeriess.then((json: any) => {
      //  console.log(json)
      json.data.listSeriess.items.forEach((item: any) => {
        console.log(item.title)
        if (item.videos.items.length > 0) {
          var startDate = item.videos.items.map((a: any) => { return a.publishedDate }).sort()[0]
          var endDate = item.videos.items.map((a: any) => { return a.publishedDate }).sort()[item.videos.items.length - 1]

          const updateSeriess = API.graphql(graphqlOperation(mutations.updateSeries, { input: { id: item.id, startDate: startDate, endDate: endDate } }));
          updateSeriess.then((json2: any) => {
            console.log(json2)
          }).catch((err: any) => {
            console.log("Error mutations.createSeries: " + err);
            console.log(err)
          });
        }
      })

      if (json.data.listSeriess.nextToken != null)
        this.updateSeriesDates(json.data.listSeriess.nextToken)
      // const arrSum = (x:any) => x.reduce((a:any,b:any) => a + b, 0)
      //  console.log(arrSum(z))
    }).catch((err: any) => {
      console.log("Error mutations.createSeries: " + err);
      console.log(err)
    });

  }
  updateSeriesNumber(nextId: any) {
    const listSeriess = API.graphql(graphqlOperation(queries.listSeriess, { limit: 100, nextToken: nextId }));
    listSeriess.then((json: any) => {
      //  console.log(json)
      json.data.listSeriess.items.forEach((item: any) => {
        //  console.log(item)
        if (!["The Body of Christ", "Faithful One", "Peacemakers", "Jesus by John", "Crossing the Line", "Chosen One", "The Death and Life of God", "Frosh 2017", "Bad Ideas"].includes(item.id)) {
          if (item.videos.items.length > 0) {
            var z = item.videos.items.map((a: any) => { return [a.publishedDate, a.episodeTitle, a.id] }).sort()
            var x = z.map((item2: any, index2: any) => {
              var current = (index2 + 1)

              if (current === 1 && item2[1].includes("Week 1: ")) {
                return [item2[2], item2[1].replace("Week 1: ", ""), current, item2[1]]
              }
              else if (current === 2 && item2[1].includes("Week 2: ")) {
                return [item2[2], item2[1].replace("Week 2: ", ""), current, item2[1]]
              }
              else if (current === 3 && item2[1].includes("Week 3: ")) {
                return [item2[2], item2[1].replace("Week 3: ", ""), current, item2[1]]
              }
              else if (current === 4 && item2[1].includes("Week 4: ")) {
                return [item2[2], item2[1].replace("Week 4: ", ""), current, item2[1]]
              }
              else if (current === 5 && item2[1].includes("Week 5: ")) {
                return [item2[2], item2[1].replace("Week 5: ", ""), current, item2[1]]
              }
              else if (current === 6 && item2[1].includes("Week 6: ")) {
                return [item2[2], item2[1].replace("Week 6: ", ""), current, item2[1]]
              }
              else if (current === 7 && item2[1].includes("Week 7: ")) {
                return [item2[2], item2[1].replace("Week 7: ", ""), current, item2[1]]
              }
              else if (current === 8 && item2[1].includes("Week 8: ")) {
                return [item2[2], item2[1].replace("Week 8: ", ""), current, item2[1]]
              }
              else if (current === 9 && item2[1].includes("Week 9: ")) {
                return [item2[2], item2[1].replace("Week 9: ", ""), current, item2[1]]
              }
              else if (current === 1 && item2[1].includes("WEEK 1: ")) {
                return [item2[2], item2[1].replace("WEEK 1: ", ""), current, item2[1]]
              }
              else if (current === 2 && item2[1].includes("WEEK 2: ")) {
                return [item2[2], item2[1].replace("WEEK 2: ", ""), current, item2[1]]
              }
              else if (current === 3 && item2[1].includes("WEEK 3: ")) {
                return [item2[2], item2[1].replace("WEEK 3: ", ""), current, item2[1]]
              }
              else if (current === 4 && item2[1].includes("WEEK 4: ")) {
                return [item2[2], item2[1].replace("WEEK 4: ", ""), current, item2[1]]
              }
              else if (current === 1 && item2[1].includes("Part 1: ")) {
                return [item2[2], item2[1].replace("Part 1: ", ""), current, item2[1]]
              }
              else if (current === 2 && item2[1].includes("Part 2: ")) {
                return [item2[2], item2[1].replace("Part 2: ", ""), current, item2[1]]
              }
              else if (current === 3 && item2[1].includes("Part 3: ")) {
                return [item2[2], item2[1].replace("Part 3: ", ""), current, item2[1]]
              }
              else if (current === 4 && item2[1].includes("Part 4: ")) {
                return [item2[2], item2[1].replace("Part 4: ", ""), current, item2[1]]
              }
              else if (current === 5 && item2[1].includes("Part 5: ")) {
                return [item2[2], item2[1].replace("Part 5: ", ""), current, item2[1]]
              }
              else if (current === 6 && item2[1].includes("Part 6: ")) {
                return [item2[2], item2[1].replace("Part 6: ", ""), current, item2[1]]
              }
              else if (current === 7 && item2[1].includes("Part 7: ")) {
                return [item2[2], item2[1].replace("Part 7: ", ""), current, item2[1]]
              }
              else if (current === 8 && item2[1].includes("Part 8: ")) {
                return [item2[2], item2[1].replace("Part 8: ", ""), current, item2[1]]
              }
              else if (current === 1 && item2[1].includes("Part 1 - ")) {
                return [item2[2], item2[1].replace("Part 1 - ", ""), current, item2[1]]
              }
              else if (current === 2 && item2[1].includes("Part 2 - ")) {
                return [item2[2], item2[1].replace("Part 2 - ", ""), current, item2[1]]
              }
              else if (current === 3 && item2[1].includes("Part 3 - ")) {
                return [item2[2], item2[1].replace("Part 3 - ", ""), current, item2[1]]
              }
              else if (current === 4 && item2[1].includes("Part 4 - ")) {
                return [item2[2], item2[1].replace("Part 4 - ", ""), current, item2[1]]
              }
              else if (current === 5 && item2[1].includes("Part 5 - ")) {
                return [item2[2], item2[1].replace("Part 5 - ", ""), current, item2[1]]
              }
              else if (current === 6 && item2[1].includes("Part 6 - ")) {
                return [item2[2], item2[1].replace("Part 6 - ", ""), current, item2[1]]
              }
              else
                return [item2[2], item2[1], current]

            })
            console.log(item.id)
            x.forEach((item3: any) => {
              console.log(item3)
              const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: item3[0], episodeTitle:item3[1] ,episodeNumber: item3[2] } }));
              updateVideo.then((json2: any) => {
                console.log(json2)
              }).catch((err: any) => {
                console.log("Error mutations.updateVideo: " + err);
                console.log(err)
              });
            })

          }
        }
      })

      if (json.data.listSeriess.nextToken != null)
        this.updateSeriesNumber(json.data.listSeriess.nextToken)
      // const arrSum = (x:any) => x.reduce((a:any,b:any) => a + b, 0)
      //  console.log(arrSum(z))
    }).catch((err: any) => {
      console.log("Error mutations.createSeries: " + err);
      console.log(err)
    });

  }
  importSeriesTN(nextId: any, list: any) {

    // var list:any=[]
    //  var speakers: any = []
    const listTnSeriess = API.graphql(graphqlOperation(queries.listTnSeriess, { limit: 100, nextToken: nextId }));
    listTnSeriess.then((json: any) => {
      console.log(json)
      json.data.listTNSeriess.items.forEach((item: any) => {
        var temp = this.simplifySeries(item.title)
        list.push(temp)
        console.log(temp)
      })
      list.sort()
      list = [...new Set(list)];
      //    list=list
      //let list = [...new Set(list)];
      console.log(list)
      if (json.data.listTNSeriess.nextToken != null)
        this.importSeriesTN(json.data.listTNSeriess.nextToken, list)
      else if (json.data.listTNSeriess.nextToken == null) {
        list.forEach((item: any) => {
          const createSeries = API.graphql(graphqlOperation(mutations.createSeries, { input: { id: item, title: item } }));
          createSeries.then((json: any) => {
            console.log("Success mutations.createSeries: " + json);
          }).catch((err: any) => {
            console.log("Error mutations.createSeries: " + err);
            console.log(err)
          });
        })
      }
    })

  }
  deleteSermons(nextId: any) {
    const listTnSermon = API.graphql(graphqlOperation(queries.listTnSermons, { limit: 100, nextToken: nextId }));
    listTnSermon.then((json: any) => {
      console.log(json)
      json.data.listTNSermons.items.forEach((item: any) => {
        const deleteTnSermon = API.graphql(graphqlOperation(mutations.deleteTnSermon, { input: { id: item.id } }));
        deleteTnSermon.then((json: any) => {
          console.log(json)
        }).catch((err: any) => {
          console.log("Error queries.getVideo: " + err);
          console.log(err)
          // this.importSeries(start)
        });
      })
      if (json.data.listTNSermons.nextToken != null)
        this.deleteSermons(json.data.listTNSermons.nextToken)

    }).catch((err: any) => {
      console.log("Error queries.getVideo: " + err);
      console.log(err)
      // this.importSeries(start)
    });

  }
  deleteSeries(nextId: any) {
    const listTnSeries = API.graphql(graphqlOperation(queries.listTnSeriess, { limit: 100, nextToken: nextId }));
    listTnSeries.then((json: any) => {
      console.log(json)
      json.data.listTNSeriess.items.forEach((item: any) => {
        const deleteTnSeries = API.graphql(graphqlOperation(mutations.deleteTnSeries, { input: { id: item.id } }));
        deleteTnSeries.then((json: any) => {
          console.log(json)
        }).catch((err: any) => {
          console.log("Error queries.deleteTnSeries: " + err);
          console.log(err)
          // this.importSeries(start)
        });
      })
      if (json.data.listTNSeriess.nextToken != null)
        this.deleteSeries(json.data.listTNSeriess.nextToken)

    }).catch((err: any) => {
      console.log("Error queries.listTnSeriess: " + err);
      console.log(err)
      // this.importSeries(start)
    });

  }
  exportAllData(nextId: any) {
    const listVideos = API.graphql(graphqlOperation(queries.listVideos, { limit: 100, nextToken: nextId }));
    listVideos.then((json: any) => {
      console.log(json)
      this.setState({ exportAllData: this.state.exportAllData.concat(json.data.listVideos.items) })

      if (json.data.listVideos.nextToken != null)
        this.exportAllData(json.data.listVideos.nextToken)
    })
  }
  deleteSpeakers(nextId: any) {
    const listSpeakers = API.graphql(graphqlOperation(queries.listSpeakers, { limit: 100, nextToken: nextId }));
    listSpeakers.then((json: any) => {
      console.log(json)
      json.data.listSpeakers.items.forEach((item: any) => {
        const deleteSpeaker = API.graphql(graphqlOperation(mutations.deleteSpeaker, { input: { id: item.id } }));
        deleteSpeaker.then((json: any) => {
          console.log(json)
        }).catch((err: any) => {
          console.log("Error queries.deleteSpeaker: " + err);
          console.log(err)
          // this.importSeries(start)
        });
      })
      if (json.data.listSpeakers.nextToken != null)
        this.deleteSpeakers(json.data.listSpeakers.nextToken)

    }).catch((err: any) => {
      console.log("Error queries.listTnSeriess: " + err);
      console.log(err)
      // this.importSeries(start)
    });

  }
  consoleAllSpeakers() {
    console.log(this.state.speakers)
  }
  render() {
    return (
      <div>
        <AdminMenu />
        <div>
          <h1>Imports</h1>
          <div>Step 1.
            <Button onClick={() => { this.deleteSermons(null) }}>Delete TN Sermons</Button>
            <Button onClick={() => { this.importSermons() }}>Import TN Sermons</Button>
          </div>
          <div>Step 2.
            <Button onClick={() => { this.deleteSeries(null) }}>Delete TN Series</Button>
            <Button onClick={() => { this.importSeries() }}>Import TN Series</Button>
          </div>
          <div>Step 3. (Only needed if Video table is empty)
            <Button onClick={() => { this.importYoutube() }}>Import Youtube</Button>
          </div>
          <div>Step 4.
          <Button onClick={() => { this.copyTNSermonData(null) }}>Copy TN Sermon</Button>
          </div>
          <div>Step 5.
          <Button onClick={() => { this.deleteSpeakers(null) }}>Delete All Speakers</Button>
            <Button >Delete All Speakers/Video Links</Button>
            <Button onClick={() => { this.listAllSpeakers() }}>listAllSpeakers</Button>
            <Button onClick={() => { this.consoleAllSpeakers() }}>consoleAllSpeakers</Button>
            <Button onClick={() => { this.importSpeakers() }}>Import Speakers</Button>
            <Button onClick={() => { this.copyTNSpeakerData(null) }}>Import Speakers/Video Links</Button>

          </div>
          <div>Step 6.
          <Button onClick={() => { this.importSeriesTN(null, []) }}>Create Series</Button>
            <Button onClick={() => { this.copySeriesSermonLinksTN(null) }}>Copy Series/Sermon Links</Button>
            <Button onClick={() => { this.updateSeriesDates(null) }}>Update Series Dates</Button>
            <Button onClick={() => { this.updateSeriesNumber(null) }}>Update Series Number</Button>

          </div>
          <div>Step 7.
            <Button onClick={() => { this.importSites() }}>Import Sites</Button>
          </div>
        </div>
        <Button onClick={() => { this.exportAllData(null) }}>Export All Data</Button>
        <div>
          <table>
            {this.state.exportAllData.map((item) => {

              return (<tr><td>{item.id}</td><td>{item.publishedDate}</td><td>{item.videoTypes}</td><td>{item.episodeTitle}</td><td>{item.speakers.items.map((item: any) => { return (item.speaker.id + ",") })}</td></tr>)
            })
            }
          </table>
          {this.state.speakers}
        </div>
      </div >

    )
  }
}
export default Imports;

