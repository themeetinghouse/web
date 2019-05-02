export const constMetaDataTypes =
    [
        {
            name: "adult-sunday",
            title: "Adult Sunday Teaching",
            fields: [
                {
                    name: "Episode Title",
                    type: "input",
                    size: "45",
                    field: "episodeTitle",
                    youtube: {
                        onClickField1: "episodeTitle",
                        onClickField2: "this.state.currentVideoData.Youtube.snippet.title"
                    }
                },
                {
                    name: "Episode Number",
                    type: "input",
                    size: "45",
                    field: "episodeNumber"
                },
                {
                    name: "Series Title",
                    type: "input",
                    size: "45",
                    field: "seriesTitle"
                },
                {
                    name: "Published Date",
                    type: "input",
                    size: "45",
                    field: "publishedDate",
                    youtube: {
                        onClickField1: "xxx",
                        onClickField2: "this.state.currentVideoData.Youtube.snippet.xxx"
                    }
                },
                {
                    name: "Recorded Date",
                    type: "input",
                    size: "45",
                    field: "recordedDate"
                },
                {
                    name: "Description",
                    type: "textarea",
                    cols: "42",
                    field: "description",
                    youtube: {
                        onClickField1: "description",
                        onClickField2: "this.state.currentVideoData.Youtube.snippet.description"
                    }
                },
                {
                    name: "CC",
                    type: "textareaarray",
                    cols: "42",
                    field: "cc",
                    youtube: {
                        onClickField1: "cc",
                        onClickField2: "this.state.currentVideoData.Youtube.snippet.cc"
                    }
                },
                {
                    name: "Quotes",
                    type: "textareaarray",
                    cols: "42",
                    field: "quotes"
                },
                {
                    name: "Referenced Media",
                    type: "inputarray",
                    size: "45",
                    field: "referencedMedia"
                },
                {
                    name: "Speakers",
                    type: "inputarray",
                    size: "45",
                    field: "speakers"
                },
                {
                    name: "Campaigns",
                    type: "inputarray",
                    size: "45",
                    field: "campaigns"
                },
                {
                    name: "Bible Verses",
                    type: "inputarray",
                    size: "45",
                    field: "bibleVerses"
                },
                {
                    name: "Topics",
                    type: "inputarray",
                    size: "45",
                    field: "bibleVerses"
                },
                {
                    name: "Q&EH Questions",
                    type: "inputarray",
                    size: "45",
                    field: "qandeh"
                }
            ]
        },
        {
            name: "adult-bbq",
            title: "Adult BBQ",
            fields: [
                {
                    name: "Episode Title",
                    type: "input",
                    size: "45",
                    field: "episodeTitle",
                    youtube: {
                        onClickField1: "episodeTitle",
                        onClickField2: "this.state.currentVideoData.Youtube.snippet.title"
                    }
                },
                {
                    name: "Episode Number",
                    type: "input",
                    size: "45",
                    field: "episodeNumber"
                },
            ]
        },
        {
            name: "kids-teaching",
            title: "Kids Teaching",
            fields: [
                {
                    name: "Episode Title",
                    type: "input",
                    size: "45",
                    field: "episodeTitle",
                    youtube: {
                        onClickField1: "episodeTitle",
                        onClickField2: "this.state.currentVideoData.Youtube.snippet.title"
                    }
                },
                {
                    name: "Episode Number",
                    type: "input",
                    size: "45",
                    field: "episodeNumber"
                },
            ]
        }
    ]
