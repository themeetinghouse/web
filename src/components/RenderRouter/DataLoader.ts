import React from 'react';
import * as queries from '../../graphql/queries';
import * as customQueries from '../../graphql-custom/customQueries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { RouteComponentProps } from 'react-router-dom';

Amplify.configure(awsmobile);


interface Props extends RouteComponentProps {
    content: any,
    data: any,
    dataLoaded(data: any): any
}
interface State {
    content: any,
    //  listData: any,
    // overlayData: any,
    // urlHistoryState: any
}
export default class DataLoader extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props);

        this.state = {
            content: state.content,
            // listData: state.listData,
            //  overlayData: null,
            //   urlHistoryState: window.history.state
        }
    }
    /* componentDidUpdate(prevProps: Props, prevState: State) {
         if (prevState.listData !== this.state.listData)
             this.props.dataLoaded(this.state.listData)
         console.log(prevProps)
     }*/
    getVideosSameSeries(nextToken: any) {
        const getSeries = API.graphql({
            query: customQueries.getSeries,
            variables: { nextToken: nextToken, sortDirection: this.state.content.sortOrder, limit: 20, id: this.props.data.series.id },
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        });
        getSeries.then((json: any) => {
            console.log("Success queries.getSeries: " + json);
            console.log(json)
            this.props.dataLoaded(
                json.data.getSeries.videos.items
            )
            if (json.data.getSeries.nextToken != null)
                this.getVideosSameSeries(json.data.getSeries.nextToken)
        }).catch((e: any) => { console.log(e) })
    }
    getVideos(nextToken: any) {
        const listVideos = API.graphql({
            query: customQueries.getVideoByVideoType,
            variables: { nextToken: nextToken, sortDirection: this.state.content.sortOrder, limit: 20, videoTypes: this.state.content.subclass, publishedDate: { lt: "a" } },
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        });
        listVideos.then((json: any) => {
            console.log("Success queries.listVideos: " + json);
            console.log(json)
            this.props.dataLoaded(
                json.data.getVideoByVideoType.items
            )
            if (json.data.getVideoByVideoType.nextToken != null)
                this.getVideos(json.data.getVideoByVideoType.nextToken)

        }).catch((e: any) => { console.log(e) })
    }
    getSpeakers(nextToken: any) {
        const listSpeakers = API.graphql(graphqlOperation(queries.listSpeakers, { nextToken: nextToken, sortOrder: this.state.content.sortOrder, limit: 20 }));
        listSpeakers.then((json: any) => {
            console.log("Success queries.listSpeakers: " + json);
            console.log(json)
            this.props.dataLoaded(
                json.data.listSpeakers.items
            )
            if (json.data.listSpeakers.nextToken != null)
                this.getSpeakers(json.data.listSpeakers.nextToken)

        }).catch((e: any) => { console.log(e) })
    }
    getSeries(nextToken: any) {
        const listSeriess = API.graphql({
            query: customQueries.getSeriesBySeriesType,
            variables: { nextToken: nextToken, sortDirection: this.state.content.sortOrder, limit: 50, seriesType: this.state.content.subclass, publishedDate: { lt: "a" } },
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        });
        listSeriess.then((json: any) => {
            console.log("Success queries.listSeriess: " + json);
            console.log(json)
            this.props.dataLoaded(json.data.getSeriesBySeriesType.items)
            if (json.data.getSeriesBySeriesType.nextToken != null)
                this.getSeries(json.data.getSeriesBySeriesType.nextToken)

        }).catch((e: any) => { console.log(e) })
    }
    sortStaff(list: any) {
        return list.sort((a: any, b: any) => {
            if (a.Position.includes("Lead Pastor") && b.Position.includes("Lead Pastor"))
                return a.lastName - b.lastName;
            else if (a.Position.includes("Lead Pastor"))
                return -1;
            else if (b.Position.includes("Lead Pastor"))
                return 1;
            else
                return a.lastName - b.lastName
        })
    }
    filterEvents(items: any) {
        if (window.location.hostname === "localhost")
            return items;
        else
            return items.filter((item: any) => {
                var start_date = new Date(item.start_time.substring(0, item.start_time.length - 2) + ":" + item.start_time.substring(item.start_time.length - 2))
                return (new Date() < start_date)
            })
    }
    loadData() {
        if (this.state.content.class === "videos") {
            if (this.state.content.selector === "sameSeries") {
                this.getVideosSameSeries(null)
            }
            else {
                this.getVideos(null)
            }
        }
        else if (this.state.content.class === "speakers") {
            this.getSpeakers(null)
        }
        else if (this.state.content.class === "series") {
            this.getSeries(null)
        }
        else if (this.state.content.class === "staff") {
            fetch('./static/data/staff.json').then(function (response) {
                return response.json();
            })
                .then((myJson) => {
                    if (this.state.content.filterField === "sites") {
                        fetch('./static/data/coordinators.json').then(function (response) {
                            return response.json();
                        }).then((myJson2) => {
                            this.props.dataLoaded(this.sortStaff(myJson).concat(myJson2))
                        })

                    }
                    else {
                        this.props.dataLoaded(myJson);
                    }
                })

        }
        else if (this.state.content.class === "overseers") {
            fetch('./static/data/overseers.json').then(function (response) {
                return response.json();
            })
                .then((myJson) => {
                    this.props.dataLoaded(myJson);
                })

        }
        else if (this.state.content.class === "events") {
            if (this.state.content.facebookEvents != null) {
                this.state.content.facebookEvents.forEach((item: any) => {
                    const getFbEvents = API.graphql({
                        query: queries.getFbEvents,
                        variables: { pageId: item },
                        authMode: GRAPHQL_AUTH_MODE.API_KEY
                    });
                    getFbEvents.then((json: any) => {
                        console.log("Success queries.getFBEvents: " + json);
                        console.log(json)
                        this.props.dataLoaded(this.filterEvents(json.data.getFBEvents.data))

                    }).catch((e: any) => { console.log(e) })
                })
            }
            else {
                const getFbEvents = API.graphql({
                    query: queries.getFbEvents,
                    variables: { pageId: "155800937784104" },
                    authMode: GRAPHQL_AUTH_MODE.API_KEY
                });
                getFbEvents.then((json: any) => {
                    console.log("Success queries.getFBEvents: " + json);
                    console.log(json)
                    this.props.dataLoaded(this.filterEvents(json.data.getFBEvents.data))

                }).catch((e: any) => { console.log(e) })
            }

        }
        else if (this.state.content.class === "compassion") {
            fetch('./static/data/compassion.json').then(function (response) {
                return response.json();
            })
                .then((myJson) => {
                    this.props.dataLoaded(myJson);
                })

        }
        else if (this.state.content.class === "locations") {
            fetch('./static/data/locations.json').then(function (response) {
                return response.json();
            })
                .then((myJson) => {
                    this.props.dataLoaded(myJson.filter((item: any) => {
                        return item[this.state.content.filterField] === this.state.content.filterValue
                    })
                    )
                }
                )

        }
    }
    render() {
        return null
    }
}
