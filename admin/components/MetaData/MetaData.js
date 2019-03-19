import './MetaData.css'
import React, { Container } from 'react';
import ReactDOM from 'react-dom';
//import Background from ''';


export default class MetaData extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbar-custom">
      
        <div className="menu">
            <div>
                <input type="text" id="searchInput" style={{backgroundImage:"url(" +"'./static/searchicon.png'" +")"}} onkeyup="searchTable()" placeholder="Search.." />
                <select id="listOfViews" class="configure" onchange="listOfViewsChange(this,event);">
                    <option value="volvo">Volvo</option>
                </select>
                <div className="configure"><a href="">Refresh</a></div>
                <div className="configure"><a href="">Configure</a></div>
                <div className="configure addVideo">+</div>
            </div>
            <div class="tableFixHead">
                <table id="videoListTable" class="sortable darkTable">
                    <thead>
                        <tr id="videoListTableHeadTR">
                            <th>head1</th>
                        </tr>
                    </thead>
                    <tbody id="videoListTableBody">
                        <tr>
                            <td>test</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        
    <div class="youtubeTable workArea">
        <div class="mediaZone">
            <div class="youtubeDiv">
                <iframe src="https://www.youtube.com/embed/WUtJR32tOus" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="closedCaptions">
                <div class="closedCaptionDiv">
                    Lorem ipsum dolor sit amet, vix ipsum zril ut, nec eleifend referrentur an. Ei indoctum voluptaria per, senserit salutandi sea id. Ex vel possim commodo. Nec audiam inermis explicari an, noster cetero facilisis pro no. Denique vivendum aliquando in vix, mea ex tale adversarium.<br /><br />

                    At solum equidem electram mea. Est ad reque mentitum delicatissimi. Te atqui incorrupte theophrastus mea, et quo sale partem urbanitas, lorem simul vis ei. Qui iusto dolores periculis cu, eu pro sint quaeque adolescens, in autem debitis iracundia mea. Eum ea ferri persecuti incorrupte, eos in latine reformidans. Ad solum aperiam eam, quas idque volutpat in sea, per in vero vide dicit.<br /><br />

                    Ne quas aliquip usu, his ad dolorem alienum. Vidit vivendo has id, vim alterum debitis deleniti ea, sea tollit nullam ne. Eam tritani accumsan ad, nec integre persequeris ut, ex est meis cotidieque. At graeci iuvaret cum. Mei debet tractatos consetetur at, atqui dicunt at per.<br /><br />

                    An aeterno omittam pro, ne per labore option praesent. Eros democritum sententiae sea at. Placerat mandamus sed id, eu sea dolore putent laboramus. Quis animal deleniti ut duo, qui ut prima insolens. Facer docendi fuisset has te, duo eu postea vituperatoribus. Suavitate dignissim abhorreant ius eu, ei debitis adolescens mea.<br /><br />

                    Tation nonumy vel in, at modus iriure oportere mel. Eum et novum appareat reformidans, pri eu habeo persius vivendum. Et has alii nonumy, per ad noluisse dignissim intellegat. Pri quidam assueverit in. No eos iisque expetendis, cu ius error possit audiam. Et malorum antiopam necessitatibus est, cum ad vidit molestie signiferumque.<br /><br />
                </div>
            </div>
        </div>
        <div class="middleMenu">
            <div class="middleMenuLeft">
                <a href="">Previous</a>
                <a href="">Next</a>
            </div>
            <div class="middleMenuRight">
                <a href="">Add Metadata</a>
            </div>
        </div>
        <div id="metadataColumn1" class="metaDataColumns">

            <table class="sortable darkTable">
                <caption>Youtube: TMH</caption>

                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Title</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                    <tr><td>Description</td><td><textarea rows="4" cols="50" class="metaInput">adjkdash asd ksahdjh sjd aj dja dja dhjkda jhkad hjasd adhjk ahja hjkdhjkd ajhjkd ajsdhjkadhjk adjksh hjkd hjkd hjkd hjkad dadshjk hjkhjk hjk dhajkd</textarea></td></tr>
                    <tr><td>Public</td><td><input class="metaCheck" type="checkbox"></input></td></tr>
                    <tr><td>Kind</td><td>Youtube</td></tr>
                    <tr><td>id</td><td>x123</td></tr>
                    <tr><td>PublishDate</td><td></td></tr>
                    <tr><td>channelId</td><td></td></tr>
                    <tr><td>channelTitle</td><td></td></tr>
                    <tr><td>playlistId</td><td></td></tr>
                    <tr><td>position</td><td></td></tr>
                    <tr><td>resourceKind</td><td></td></tr>
                    <tr><td>resourceVideoId</td><td></td></tr>
                    <tr><td>etag</td><td></td></tr>
                    <tr><td>thumbnail_120_url</td><td></td></tr>
                    <tr><td>thumbnail_320_url</td><td></td></tr>
                    <tr><td>thumbnail_480_url</td><td></td></tr>
                    <tr><td>thumbnail_640_url</td><td></td></tr>
                    <tr><td>thumbnail_1280_url</td><td></td></tr>
                </tbody>
            </table>
            <table class="sortable darkTable">
                <caption>Youtube: Jesus Collective</caption>

                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Title</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                    <tr><td>Description</td><td><textarea rows="4" cols="50" class="metaInput">adjkdash asd ksahdjh sjd aj dja dja dhjkda jhkad hjasd adhjk ahja hjkdhjkd ajhjkd ajsdhjkadhjk adjksh hjkd hjkd hjkd hjkad dadshjk hjkhjk hjk dhajkd</textarea></td></tr>
                    <tr><td>Public</td><td><input class="metaCheck" type="checkbox"></input></td></tr>
                    <tr><td>Kind</td><td>Youtube</td></tr>
                    <tr><td>id</td><td>x123</td></tr>
                    <tr><td>PublishDate</td><td></td></tr>
                    <tr><td>channelId</td><td></td></tr>
                    <tr><td>channelTitle</td><td></td></tr>
                    <tr><td>playlistId</td><td></td></tr>
                    <tr><td>position</td><td></td></tr>
                    <tr><td>resourceKind</td><td></td></tr>
                    <tr><td>resourceVideoId</td><td></td></tr>
                    <tr><td>etag</td><td></td></tr>
                    <tr><td>thumbnail_120_url</td><td></td></tr>
                    <tr><td>thumbnail_320_url</td><td></td></tr>
                    <tr><td>thumbnail_480_url</td><td></td></tr>
                    <tr><td>thumbnail_640_url</td><td></td></tr>
                    <tr><td>thumbnail_1280_url</td><td></td></tr>
                </tbody>
            </table>
        </div>
        <div id="metadataColumn2" class="metaDataColumns">
            <table class="sortable darkTable">
                <caption>Teaching</caption>
                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Series</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                    <tr><td>Episode Name</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                    <tr><td>Episode #</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Recorded Date</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Speakers</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Topics</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Q&Eh Questions</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Bible Verses</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Quotes</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Referenced Media</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Location</td><td><input class="metaInput" type="text" value="" /></td></tr>
                    <tr><td>Campaigns</td><td><input class="metaInput" type="text" value="" /></td></tr>
                </tbody>
            </table>
            <table class="sortable darkTable">
                <caption>Internal Meeting House</caption>
                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Master Google Drive Location</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                    <tr><td>Has TMH Branding</td><td><input class="metaCheck" type="checkbox" /></td></tr>
                    <tr><td>Has TMH Specific Content</td><td><input class="metaCheck" type="checkbox" /></td></tr>
                    <tr><td>Has Date Specific Content</td><td><input class="metaCheck" type="checkbox" /></td></tr>
                    <tr><td>TMH Free Google Drive Location</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                </tbody>
            </table>
            <table class="sortable darkTable">
                <caption>Associated Content</caption>
                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Handout</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                    <tr><td>Homechurch Questions</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                    <tr><td>Dynamic Web</td><td><input class="metaInput" type="text" value="test" /></td></tr>
                </tbody>
            </table>
        </div>
        <div id="metadataColumn3" class="metaDataColumns">
            <table class="sortable darkTable">
                <caption>Jesus Collective</caption>
                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Is Public</td><td><input class="metaCheck" type="checkbox" /></td></tr>
                    <tr><td>Is For Sale</td><td><input class="metaCheck" type="checkbox" /></td></tr>
                    <tr><td>S3 Location</td><td><input class="metaInput" type="textbox" /></td></tr>
                    <tr><td>Vertical</td><td><input class="metaInput" type="textbox" /></td></tr>
                </tbody>
            </table>
            <table class="sortable darkTable">
                <caption>Website: TMH</caption>
                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Description</td><td><input class="metaInput" type="textbox" /></td></tr>
                    <tr><td>Is on Homepage</td><td><input class="metaCheck" type="checkbox" /></td></tr>
                </tbody>
            </table>
            <table class="sortable darkTable">
                <caption>Website: Jesus Collective</caption>
                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Description</td><td><input class="metaInput" type="textbox" /></td></tr>
                    <tr><td>Is on Homepage</td><td><input class="metaCheck" type="checkbox" /></td></tr>
                </tbody>
            </table>
            <table class="sortable darkTable">
                <caption>Podcast: Teaching</caption>
                <thead>
                    <tr><th>key</th><th>value</th></tr>
                </thead>
                <tbody>
                    <tr><td>Audio File</td><td><input class="metaInput" type="textbox" /></td></tr>
                    <tr><td>Video File</td><td><input class="metaInput" type="textbox" /></td></tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
      
    );
  }
}
