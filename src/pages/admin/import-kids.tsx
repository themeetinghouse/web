
import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
//{ API, graphqlOperation } 
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';

import awsmobile from '../../aws-exports';
import { Button } from 'reactstrap';
import ImportYoutube from '../../components/ImportYoutube/ImportYoutube'
Amplify.configure(awsmobile);

String.prototype.replaceAll = function (find: any, replace: any) {
  var str = this;
  return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};
Amplify.configure(awsmobile);
const federated = {
  google_client_id: '',
  facebook_app_id: '579712102531269',
  amazon_client_id: ''
};
/*var getFileBlob = function (url:any, cb:any) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.addEventListener('load', function() {
    cb(xhr.response);
  });
  xhr.send();
};*/
const Index = () => (
  <div>
    <Authenticator federated={federated} hide={[Greetings, SignOut]}>
      <AuthIndexApp></AuthIndexApp>
    </Authenticator>
  </div>
)
interface Props {
  authState?: any
}
interface State { }

class AuthIndexApp extends React.Component<Props, State> {

  render() {
    if (this.props.authState === "signedIn") {
      return (
        <div>
          <IndexApp></IndexApp>
        </div>
      );
    } else {
      return null;
    }
  }
}

class IndexApp extends React.Component {


  recurse(obj: any) {
    //console.log(typeof (obj))
    if (typeof (obj) == "object") {
      Object.keys(obj).forEach(key => {
        if (obj[key]["__text"] != null)
          obj[key] = obj[key]["__text"]
        else if (obj[key]["__cdata"] != null)
          obj[key] = obj[key]["__cdata"]
        else
          obj[key] = this.recurse(obj[key]);
      })
      return obj
    }
    else if (typeof (obj) == "string")
      return obj
  }

  unserialize(data: any) {
    // From: http://phpjs.org/functions
    // +     original by: Arpad Ray (mailto:arpad@php.net)
    // +     improved by: Pedro Tainha (http://www.pedrotainha.com)
    // +     bugfixed by: dptr1988
    // +      revised by: d3x
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +        input by: Brett Zamir (http://brett-zamir.me)
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: Chris
    // +     improved by: James
    // +        input by: Martin (http://www.erlenwiese.de/)
    // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: Le Torbi
    // +     input by: kilops
    // +     bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jaroslaw Czarniak
    // +     improved by: Eli Skeggs
    // %            note: We feel the main purpose of this function should be to ease the transport of data between php & js
    // %            note: Aiming for PHP-compatibility, we have to translate objects to arrays
    // *       example 1: unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}');
    // *       returns 1: ['Kevin', 'van', 'Zonneveld']
    // *       example 2: unserialize('a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}');
    // *       returns 2: {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}
    //var that = this,
    var utf8Overhead = function (chr: any) {
      // http://phpjs.org/functions/unserialize:571#comment_95906
      var code = chr.charCodeAt(0);
      if (code < 0x0080) {
        return 0;
      }
      if (code < 0x0800) {
        return 1;
      }
      return 2;
    },
      error = function (type: any, msg: any, filename: any, line: any) {
        console.log(type, msg, filename, line)
        //throw new that.window[type](msg, filename, line);
      },
      read_until = function (data: any, offset: any, stopchr: any) {
        var i = 2, buf = [], chr = data.slice(offset, offset + 1);

        while (chr !== stopchr) {
          if ((i + offset) > data.length) {
            error('Error', 'Invalid', null, null);
          }
          buf.push(chr);
          chr = data.slice(offset + (i - 1), offset + i);
          i += 1;
        }
        return [buf.length, buf.join('')];
      },
      read_chrs = function (data: any, offset: any, length: any) {
        var i, chr, buf;

        buf = [];
        for (i = 0; i < length; i++) {
          chr = data.slice(offset + (i - 1), offset + i);
          buf.push(chr);
          length -= utf8Overhead(chr);
        }
        return [buf.length, buf.join('')];
      },
      _unserialize = function (data: any, offset: any) {
        var dtype: any, dataoffset: any, keyandchrs, keys: any, contig,
          length: any, array, readdata: any, readData: any, ccount,
          stringlength: any, i: any, key: any, kprops: any, kchrs: any, vprops: any,
          vchrs: any, value: any, chrs: any = 0

        var typeconvert = function (x: any) {
          return x;
        };

        if (!offset) {
          offset = 0;
        }
        dtype = (data.slice(offset, offset + 1)).toLowerCase();

        dataoffset = offset + 2;

        switch (dtype) {
          case 'i':
            typeconvert = function (x) {
              return parseInt(x, 10);
            };
            readData = read_until(data, dataoffset, ';');
            chrs = readData[0];
            readdata = readData[1];
            dataoffset += chrs + 1;
            break;
          case 'b':
            typeconvert = function (x) {
              return parseInt(x, 10) !== 0;
            };
            readData = read_until(data, dataoffset, ';');
            chrs = readData[0];
            readdata = readData[1];
            dataoffset += chrs + 1;
            break;
          case 'd':
            typeconvert = function (x) {
              return parseFloat(x);
            };
            readData = read_until(data, dataoffset, ';');
            chrs = readData[0];
            readdata = readData[1];
            dataoffset += chrs + 1;
            break;
          case 'n':
            readdata = null;
            break;
          case 's':
            ccount = read_until(data, dataoffset, ':');
            chrs = ccount[0];
            stringlength = ccount[1];
            dataoffset += chrs + 2;

            readData = read_chrs(data, dataoffset + 1, parseInt(stringlength, 10));
            chrs = readData[0];
            readdata = readData[1];
            dataoffset += chrs + 2;
            if (chrs !== parseInt(stringlength, 10) && chrs !== readdata.length) {
              error('SyntaxError', 'String length mismatch', null, null);
            }
            break;
          case 'a':
            readdata = {};

            keyandchrs = read_until(data, dataoffset, ':');
            chrs = keyandchrs[0];
            keys = keyandchrs[1];
            dataoffset += chrs + 2;

            length = parseInt(keys, 10);
            contig = true;

            for (i = 0; i < length; i++) {
              kprops = _unserialize(data, dataoffset);
              kchrs = kprops[1];
              key = kprops[2];
              dataoffset += kchrs;

              vprops = _unserialize(data, dataoffset);
              vchrs = vprops[1];
              value = vprops[2];
              dataoffset += vchrs;

              if (key !== i)
                contig = false;

              readdata[key] = value;
            }

            if (contig) {
              array = new Array(length);
              for (i = 0; i < length; i++)
                array[i] = readdata[i];
              readdata = array;
            }

            dataoffset += 1;
            break;
          case 'u':
            readdata = null;
            break;
          default:
            //    console.log(dtype)
            error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype, null, null);
            break;
        }
        return [dtype, dataoffset - offset, typeconvert(readdata)];
      }
      ;

    return _unserialize((data + ''), 0)[2];
  }

  write(json: any) {
    json.forEach((item: any) => {
      // console.log(item)
      var ptb_all_files
      if (item.postmeta != null) {
        item.postmeta.forEach((item2: any) => {
          if (item2.meta_key === "ptb_all_files")
            ptb_all_files = item2.meta_value
        })
      }
      var ptb_series_playlist
      if (item.postmeta != null) {
        item.postmeta.forEach((item2: any) => {
          if (item2.meta_key === "ptb_series_playlist")
            ptb_series_playlist = item2.meta_value
        })
      }
      ptb_all_files = this.unserialize(ptb_all_files)
      if (ptb_all_files != null)
        ptb_all_files = ptb_all_files.url[0]
      var id = item.title.toLowerCase().replaceAll(" ", "-").replaceAll("'", "").replaceAll("?", "").replaceAll(",", "").replaceAll("--", "-").replaceAll("(", "").replaceAll(")", "")
      id = id.replaceAll("&", "and").replaceAll(".", "").replaceAll("--", "-")

      if (item.category != null && item.post_type != null) {
        if (item.post_type.flat().includes("series") && item.status.flat().includes("publish")) {
          if (!item.category.flat().includes("Preschool")) {
            if (item.category.flat().includes("Junior High"))
              id = "jrhigh-" + id
            if (item.category.flat().includes("Youth"))
              id = "youth-" + id
            if (item.category.flat().includes("Preschool"))
              id = "preschool-" + id
            if (item.category.flat().includes("Kids"))
              id = "kids-" + id
            if (item.category.flat().includes("Senior High"))
              id = "srhigh-" + id
            var jsonValue = {
              id: id,
              category: item.category,
              description: item.encoded[0],
              type: item.post_type,
              status: item.status,
              title: item.title,
              allFiles: ptb_all_files,
              playlist: ptb_series_playlist,
              image: item.image
            }







            var ptb_episode_1_title
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_1_title"))
                ptb_episode_1_title = item2.meta_value[0]
            })

            var ptb_episode_1_lesson_plan
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_1_lesson_plan"))
                ptb_episode_1_lesson_plan = item2.meta_value[0]
            })

            var ptb_episode_1_activity_page
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_1_activity_page"))
                ptb_episode_1_activity_page = item2.meta_value[0]
            })

            var ptb_episode_1_video_message_file_high_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_1_video_message_file_high_res"))
                ptb_episode_1_video_message_file_high_res = item2.meta_value[0]
            })

            var ptb_episode_1_video_message_file_low_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_1_video_message_file_low_res"))
                ptb_episode_1_video_message_file_low_res = item2.meta_value[0]
            })

            var ptb_episode_1_video_preview

            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_1_video_preview"))
                ptb_episode_1_video_preview = item2.meta_value[0]
            })
            ptb_episode_1_lesson_plan = this.unserialize(ptb_episode_1_lesson_plan)
            ptb_episode_1_activity_page = this.unserialize(ptb_episode_1_activity_page)
            ptb_episode_1_video_message_file_high_res = this.unserialize(ptb_episode_1_video_message_file_high_res)
            ptb_episode_1_video_message_file_low_res = this.unserialize(ptb_episode_1_video_message_file_low_res)
            ptb_episode_1_video_preview = this.unserialize(ptb_episode_1_video_preview)

            if (ptb_episode_1_lesson_plan != null)
              ptb_episode_1_lesson_plan = ptb_episode_1_lesson_plan.url[0]
            if (ptb_episode_1_activity_page != null)
              ptb_episode_1_activity_page = ptb_episode_1_activity_page.url[0]
            if (ptb_episode_1_video_message_file_high_res != null)
              ptb_episode_1_video_message_file_high_res = ptb_episode_1_video_message_file_high_res.url[0]
            if (ptb_episode_1_video_message_file_low_res != null)
              ptb_episode_1_video_message_file_low_res = ptb_episode_1_video_message_file_low_res.url[0]
            if (ptb_episode_1_video_preview != null)
              ptb_episode_1_video_preview = ptb_episode_1_video_preview.url[0]

            var episode1 = {
              episodeNumber: 1,
              title: ptb_episode_1_title,
              lessonPlan: ptb_episode_1_lesson_plan,
              activityPage: ptb_episode_1_activity_page,
              videoHiRes: ptb_episode_1_video_message_file_high_res,
              videoLowRes: ptb_episode_1_video_message_file_low_res,
              videoPreview: ptb_episode_1_video_preview
            }



            var ptb_episode_2_title
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_2_title"))
                ptb_episode_2_title = item2.meta_value[0]
            })

            var ptb_episode_2_lesson_plan
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_2_lesson_plan"))
                ptb_episode_2_lesson_plan = item2.meta_value[0]
            })

            var ptb_episode_2_activity_page
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_2_activity_page"))
                ptb_episode_2_activity_page = item2.meta_value[0]
            })

            var ptb_episode_2_video_message_file_high_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_2_video_message_file_high_res"))
                ptb_episode_2_video_message_file_high_res = item2.meta_value[0]
            })

            var ptb_episode_2_video_message_file_low_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_2_video_message_file_low_res"))
                ptb_episode_2_video_message_file_low_res = item2.meta_value[0]
            })

            var ptb_episode_2_video_preview
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_2_video_preview"))
                ptb_episode_2_video_preview = item2.meta_value[0]
            })

            ptb_episode_2_lesson_plan = this.unserialize(ptb_episode_2_lesson_plan)
            ptb_episode_2_activity_page = this.unserialize(ptb_episode_2_activity_page)
            ptb_episode_2_video_message_file_high_res = this.unserialize(ptb_episode_2_video_message_file_high_res)
            ptb_episode_2_video_message_file_low_res = this.unserialize(ptb_episode_2_video_message_file_low_res)
            ptb_episode_2_video_preview = this.unserialize(ptb_episode_2_video_preview)

            if (ptb_episode_2_lesson_plan != null)
              ptb_episode_2_lesson_plan = ptb_episode_2_lesson_plan.url[0]
            if (ptb_episode_2_activity_page != null)
              ptb_episode_2_activity_page = ptb_episode_2_activity_page.url[0]
            if (ptb_episode_2_video_message_file_high_res != null)
              ptb_episode_2_video_message_file_high_res = ptb_episode_2_video_message_file_high_res.url[0]
            if (ptb_episode_2_video_message_file_low_res != null)
              ptb_episode_2_video_message_file_low_res = ptb_episode_2_video_message_file_low_res.url[0]
            if (ptb_episode_2_video_preview != null)
              ptb_episode_2_video_preview = ptb_episode_2_video_preview.url[0]

            var episode2 = {
              episodeNumber: 2,
              title: ptb_episode_2_title,
              lessonPlan: ptb_episode_2_lesson_plan,
              activityPage: ptb_episode_2_activity_page,
              videoHiRes: ptb_episode_2_video_message_file_high_res,
              videoLowRes: ptb_episode_2_video_message_file_low_res,
              videoPreview: ptb_episode_2_video_preview
            }



            var ptb_episode_3_title
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_3_title"))
                ptb_episode_3_title = item2.meta_value[0]
            })

            var ptb_episode_3_lesson_plan
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_3_lesson_plan"))
                ptb_episode_3_lesson_plan = item2.meta_value[0]
            })

            var ptb_episode_3_activity_page
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_3_activity_page"))
                ptb_episode_3_activity_page = item2.meta_value[0]
            })

            var ptb_episode_3_video_message_file_high_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_3_video_message_file_high_res"))
                ptb_episode_3_video_message_file_high_res = item2.meta_value[0]
            })

            var ptb_episode_3_video_message_file_low_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_3_video_message_file_low_res"))
                ptb_episode_3_video_message_file_low_res = item2.meta_value[0]
            })

            var ptb_episode_3_video_preview
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_3_video_preview"))
                ptb_episode_3_video_preview = item2.meta_value[0]
            })

            ptb_episode_3_lesson_plan = this.unserialize(ptb_episode_3_lesson_plan)
            ptb_episode_3_activity_page = this.unserialize(ptb_episode_3_activity_page)
            ptb_episode_3_video_message_file_high_res = this.unserialize(ptb_episode_3_video_message_file_high_res)
            ptb_episode_3_video_message_file_low_res = this.unserialize(ptb_episode_3_video_message_file_low_res)
            ptb_episode_3_video_preview = this.unserialize(ptb_episode_3_video_preview)

            if (ptb_episode_3_lesson_plan != null)
              ptb_episode_3_lesson_plan = ptb_episode_3_lesson_plan.url[0]
            if (ptb_episode_3_activity_page != null)
              ptb_episode_3_activity_page = ptb_episode_3_activity_page.url[0]
            if (ptb_episode_3_video_message_file_high_res != null)
              ptb_episode_3_video_message_file_high_res = ptb_episode_3_video_message_file_high_res.url[0]
            if (ptb_episode_3_video_message_file_low_res != null)
              ptb_episode_3_video_message_file_low_res = ptb_episode_3_video_message_file_low_res.url[0]
            if (ptb_episode_3_video_preview != null)
              ptb_episode_3_video_preview = ptb_episode_3_video_preview.url[0]

            var episode3 = {
              episodeNumber: 3,
              title: ptb_episode_3_title,
              lessonPlan: ptb_episode_3_lesson_plan,
              activityPage: ptb_episode_3_activity_page,
              videoHiRes: ptb_episode_3_video_message_file_high_res,
              videoLowRes: ptb_episode_3_video_message_file_low_res,
              videoPreview: ptb_episode_3_video_preview
            }



            var ptb_episode_4_title
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_4_title"))
                ptb_episode_4_title = item2.meta_value[0]
            })

            var ptb_episode_4_lesson_plan
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_4_lesson_plan"))
                ptb_episode_4_lesson_plan = item2.meta_value[0]
            })

            var ptb_episode_4_activity_page
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_4_activity_page"))
                ptb_episode_4_activity_page = item2.meta_value[0]
            })

            var ptb_episode_4_video_message_file_high_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_4_video_message_file_high_res"))
                ptb_episode_4_video_message_file_high_res = item2.meta_value[0]
            })

            var ptb_episode_4_video_message_file_low_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_4_video_message_file_low_res"))
                ptb_episode_4_video_message_file_low_res = item2.meta_value[0]
            })

            var ptb_episode_4_video_preview
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_4_video_preview"))
                ptb_episode_4_video_preview = item2.meta_value[0]
            })

            ptb_episode_4_lesson_plan = this.unserialize(ptb_episode_4_lesson_plan)
            ptb_episode_4_activity_page = this.unserialize(ptb_episode_4_activity_page)
            ptb_episode_4_video_message_file_high_res = this.unserialize(ptb_episode_4_video_message_file_high_res)
            ptb_episode_4_video_message_file_low_res = this.unserialize(ptb_episode_4_video_message_file_low_res)
            ptb_episode_4_video_preview = this.unserialize(ptb_episode_4_video_preview)

            if (ptb_episode_4_lesson_plan != null)
              ptb_episode_4_lesson_plan = ptb_episode_4_lesson_plan.url[0]
            if (ptb_episode_4_activity_page != null)
              ptb_episode_4_activity_page = ptb_episode_4_activity_page.url[0]
            if (ptb_episode_4_video_message_file_high_res != null)
              ptb_episode_4_video_message_file_high_res = ptb_episode_4_video_message_file_high_res.url[0]
            if (ptb_episode_4_video_message_file_low_res != null)
              ptb_episode_4_video_message_file_low_res = ptb_episode_4_video_message_file_low_res.url[0]
            if (ptb_episode_4_video_preview != null)
              ptb_episode_4_video_preview = ptb_episode_4_video_preview.url[0]

            var episode4 = {
              episodeNumber: 4,
              title: ptb_episode_4_title,
              lessonPlan: ptb_episode_4_lesson_plan,
              activityPage: ptb_episode_4_activity_page,
              videoHiRes: ptb_episode_4_video_message_file_high_res,
              videoLowRes: ptb_episode_4_video_message_file_low_res,
              videoPreview: ptb_episode_4_video_preview
            }



            var ptb_episode_5_title
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_5_title"))
                ptb_episode_5_title = item2.meta_value[0]
            })

            var ptb_episode_5_lesson_plan
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_5_lesson_plan"))
                ptb_episode_5_lesson_plan = item2.meta_value[0]
            })

            var ptb_episode_5_activity_page
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_5_activity_page"))
                ptb_episode_5_activity_page = item2.meta_value[0]
            })

            var ptb_episode_5_video_message_file_high_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_5_video_message_file_high_res"))
                ptb_episode_5_video_message_file_high_res = item2.meta_value[0]
            })

            var ptb_episode_5_video_message_file_low_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_5_video_message_file_low_res"))
                ptb_episode_5_video_message_file_low_res = item2.meta_value[0]
            })

            var ptb_episode_5_video_preview
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_5_video_preview"))
                ptb_episode_5_video_preview = item2.meta_value[0]
            })

            ptb_episode_5_lesson_plan = this.unserialize(ptb_episode_5_lesson_plan)
            ptb_episode_5_activity_page = this.unserialize(ptb_episode_5_activity_page)
            ptb_episode_5_video_message_file_high_res = this.unserialize(ptb_episode_5_video_message_file_high_res)
            ptb_episode_5_video_message_file_low_res = this.unserialize(ptb_episode_5_video_message_file_low_res)
            ptb_episode_5_video_preview = this.unserialize(ptb_episode_5_video_preview)

            if (ptb_episode_5_lesson_plan != null)
              ptb_episode_5_lesson_plan = ptb_episode_5_lesson_plan.url[0]
            if (ptb_episode_5_activity_page != null)
              ptb_episode_5_activity_page = ptb_episode_5_activity_page.url[0]
            if (ptb_episode_5_video_message_file_high_res != null)
              ptb_episode_5_video_message_file_high_res = ptb_episode_5_video_message_file_high_res.url[0]
            if (ptb_episode_5_video_message_file_low_res != null)
              ptb_episode_5_video_message_file_low_res = ptb_episode_5_video_message_file_low_res.url[0]
            if (ptb_episode_5_video_preview != null)
              ptb_episode_5_video_preview = ptb_episode_5_video_preview.url[0]

            var episode5 = {
              episodeNumber: 5,
              title: ptb_episode_5_title,
              lessonPlan: ptb_episode_5_lesson_plan,
              activityPage: ptb_episode_5_activity_page,
              videoHiRes: ptb_episode_5_video_message_file_high_res,
              videoLowRes: ptb_episode_5_video_message_file_low_res,
              videoPreview: ptb_episode_5_video_preview
            }



            var ptb_episode_6_title
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_6_title"))
                ptb_episode_6_title = item2.meta_value[0]
            })

            var ptb_episode_6_lesson_plan
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_6_lesson_plan"))
                ptb_episode_6_lesson_plan = item2.meta_value[0]
            })

            var ptb_episode_6_activity_page
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_6_activity_page"))
                ptb_episode_6_activity_page = item2.meta_value[0]
            })

            var ptb_episode_6_video_message_file_high_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_6_video_message_file_high_res"))
                ptb_episode_6_video_message_file_high_res = item2.meta_value[0]
            })

            var ptb_episode_6_video_message_file_low_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_6_video_message_file_low_res"))
                ptb_episode_6_video_message_file_low_res = item2.meta_value[0]
            })

            var ptb_episode_6_video_preview
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_6_video_preview"))
                ptb_episode_6_video_preview = item2.meta_value[0]
            })

            ptb_episode_6_lesson_plan = this.unserialize(ptb_episode_6_lesson_plan)
            ptb_episode_6_activity_page = this.unserialize(ptb_episode_6_activity_page)
            ptb_episode_6_video_message_file_high_res = this.unserialize(ptb_episode_6_video_message_file_high_res)
            ptb_episode_6_video_message_file_low_res = this.unserialize(ptb_episode_6_video_message_file_low_res)
            ptb_episode_6_video_preview = this.unserialize(ptb_episode_6_video_preview)

            if (ptb_episode_6_lesson_plan != null)
              ptb_episode_6_lesson_plan = ptb_episode_6_lesson_plan.url[0]
            if (ptb_episode_6_activity_page != null)
              ptb_episode_6_activity_page = ptb_episode_6_activity_page.url[0]
            if (ptb_episode_6_video_message_file_high_res != null)
              ptb_episode_6_video_message_file_high_res = ptb_episode_6_video_message_file_high_res.url[0]
            if (ptb_episode_6_video_message_file_low_res != null)
              ptb_episode_6_video_message_file_low_res = ptb_episode_6_video_message_file_low_res.url[0]
            if (ptb_episode_6_video_preview != null)
              ptb_episode_6_video_preview = ptb_episode_6_video_preview.url[0]

            var episode6 = {
              episodeNumber: 6,
              title: ptb_episode_6_title,
              lessonPlan: ptb_episode_6_lesson_plan,
              activityPage: ptb_episode_6_activity_page,
              videoHiRes: ptb_episode_6_video_message_file_high_res,
              videoLowRes: ptb_episode_6_video_message_file_low_res,
              videoPreview: ptb_episode_6_video_preview
            }



            var ptb_episode_7_title
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_7_title"))
                ptb_episode_7_title = item2.meta_value[0]
            })

            var ptb_episode_7_lesson_plan
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_7_lesson_plan"))
                ptb_episode_7_lesson_plan = item2.meta_value[0]
            })

            var ptb_episode_7_activity_page
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_7_activity_page"))
                ptb_episode_7_activity_page = item2.meta_value[0]
            })

            var ptb_episode_7_video_message_file_high_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_7_video_message_file_high_res"))
                ptb_episode_7_video_message_file_high_res = item2.meta_value[0]
            })

            var ptb_episode_7_video_message_file_low_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_7_video_message_file_low_res"))
                ptb_episode_7_video_message_file_low_res = item2.meta_value[0]
            })

            var ptb_episode_7_video_preview
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_7_video_preview"))
                ptb_episode_7_video_preview = item2.meta_value[0]
            })

            ptb_episode_7_lesson_plan = this.unserialize(ptb_episode_7_lesson_plan)
            ptb_episode_7_activity_page = this.unserialize(ptb_episode_7_activity_page)
            ptb_episode_7_video_message_file_high_res = this.unserialize(ptb_episode_7_video_message_file_high_res)
            ptb_episode_7_video_message_file_low_res = this.unserialize(ptb_episode_7_video_message_file_low_res)
            ptb_episode_7_video_preview = this.unserialize(ptb_episode_7_video_preview)

            if (ptb_episode_7_lesson_plan != null)
              ptb_episode_7_lesson_plan = ptb_episode_7_lesson_plan.url[0]
            if (ptb_episode_7_activity_page != null)
              ptb_episode_7_activity_page = ptb_episode_7_activity_page.url[0]
            if (ptb_episode_7_video_message_file_high_res != null)
              ptb_episode_7_video_message_file_high_res = ptb_episode_7_video_message_file_high_res.url[0]
            if (ptb_episode_7_video_message_file_low_res != null)
              ptb_episode_7_video_message_file_low_res = ptb_episode_7_video_message_file_low_res.url[0]
            if (ptb_episode_7_video_preview != null)
              ptb_episode_7_video_preview = ptb_episode_7_video_preview.url[0]

            var episode7 = {
              episodeNumber: 7,
              title: ptb_episode_7_title,
              lessonPlan: ptb_episode_7_lesson_plan,
              activityPage: ptb_episode_7_activity_page,
              videoHiRes: ptb_episode_7_video_message_file_high_res,
              videoLowRes: ptb_episode_7_video_message_file_low_res,
              videoPreview: ptb_episode_7_video_preview
            }



            var ptb_episode_8_title
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_8_title"))
                ptb_episode_8_title = item2.meta_value[0]
            })

            var ptb_episode_8_lesson_plan
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_8_lesson_plan"))
                ptb_episode_8_lesson_plan = item2.meta_value[0]
            })

            var ptb_episode_8_activity_page
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_8_activity_page"))
                ptb_episode_8_activity_page = item2.meta_value[0]
            })

            var ptb_episode_8_video_message_file_high_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_8_video_message_file_high_res"))
                ptb_episode_8_video_message_file_high_res = item2.meta_value[0]
            })

            var ptb_episode_8_video_message_file_low_res
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_8_video_message_file_low_res"))
                ptb_episode_8_video_message_file_low_res = item2.meta_value[0]
            })

            var ptb_episode_8_video_preview
            item.postmeta.forEach((item2: any) => {
              if (item2.meta_key.includes("ptb_episode_8_video_preview"))
                ptb_episode_8_video_preview = item2.meta_value[0]
            })

            ptb_episode_8_lesson_plan = this.unserialize(ptb_episode_8_lesson_plan)
            ptb_episode_8_activity_page = this.unserialize(ptb_episode_8_activity_page)
            ptb_episode_8_video_message_file_high_res = this.unserialize(ptb_episode_8_video_message_file_high_res)
            ptb_episode_8_video_message_file_low_res = this.unserialize(ptb_episode_8_video_message_file_low_res)
            ptb_episode_8_video_preview = this.unserialize(ptb_episode_8_video_preview)

            if (ptb_episode_8_lesson_plan != null)
              ptb_episode_8_lesson_plan = ptb_episode_8_lesson_plan.url[0]
            if (ptb_episode_8_activity_page != null)
              ptb_episode_8_activity_page = ptb_episode_8_activity_page.url[0]
            if (ptb_episode_8_video_message_file_high_res != null)
              ptb_episode_8_video_message_file_high_res = ptb_episode_8_video_message_file_high_res.url[0]
            if (ptb_episode_8_video_message_file_low_res != null)
              ptb_episode_8_video_message_file_low_res = ptb_episode_8_video_message_file_low_res.url[0]
            if (ptb_episode_8_video_preview != null)
              ptb_episode_8_video_preview = ptb_episode_8_video_preview.url[0]

            var episode8 = {
              episodeNumber: 8,
              title: ptb_episode_8_title,
              lessonPlan: ptb_episode_8_lesson_plan,
              activityPage: ptb_episode_8_activity_page,
              videoHiRes: ptb_episode_8_video_message_file_high_res,
              videoLowRes: ptb_episode_8_video_message_file_low_res,
              videoPreview: ptb_episode_8_video_preview
            }


            //  console.log (jsonValue)

            this.updateVideo(item, jsonValue, episode1)
            this.updateVideo(item, jsonValue, episode2)
            this.updateVideo(item, jsonValue, episode3)
            this.updateVideo(item, jsonValue, episode4)
            this.updateVideo(item, jsonValue, episode5)
            this.updateVideo(item, jsonValue, episode6)
            this.updateVideo(item, jsonValue, episode7)
            this.updateVideo(item, jsonValue, episode8)
            //      this.createGroup(jsonValue, [episode1, episode2, episode3, episode4, episode5, episode6, episode7, episode8])
            //  console.log (episode1)
          }
        }
      }
    })

  }
  writeYoutube(vid1: any) {
    console.log("Write Youtube: " + vid1);
    var youtubeId: any = vid1['id']

    const getVideoByYoutubeIdent = API.graphql(graphqlOperation(queries.getVideoByYoutubeIdent, { YoutubeIdent: youtubeId }));
    getVideoByYoutubeIdent.then((json: any) => {
      //console.log("Success queries.searchVideos: " + json);
      if (json.data.getVideoByYoutubeIdent.items.length === 0) {
        console.log(json)

        console.log("Do mutations.createVideo")
        delete vid1['id'];

        delete vid1['selected'];
        if (vid1.snippet.description === "")
          delete vid1.snippet['description']
        if (vid1.snippet.localized === null)
          delete vid1.snippet['localized']
        if (vid1.snippet.localized.description === "")
          delete vid1.snippet.localized['description']
        if (vid1.contentDetails.videoId === null)
          delete vid1.contentDetails['videoId']
        if (vid1.contentDetails.videoPublishedAt === null)
          delete vid1.contentDetails['videoPublishedAt']
        const createVideo = API.graphql(graphqlOperation(mutations.createVideo, { input: { id: youtubeId, YoutubeIdent: youtubeId, Youtube: vid1 } }));
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
      else if (json.data.getVideoByYoutubeIdent.items.length === 1) {
        console.log(json)

        console.log("Do mutations.createVideo")
        delete vid1['id'];

        delete vid1['selected'];
        if (vid1.snippet.description === "")
          delete vid1.snippet['description']
        if (vid1.snippet.localized === null)
          delete vid1.snippet['localized']
        if (vid1.snippet.localized.description === "")
          delete vid1.snippet.localized['description']
        if (vid1.contentDetails.videoId === null)
          delete vid1.contentDetails['videoId']
        if (vid1.contentDetails.videoPublishedAt === null)
          delete vid1.contentDetails['videoPublishedAt']
        const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: youtubeId, Youtube: vid1 } }));
        updateVideo.then((json3: any) => {
          /* this.setState({
               currentVideoData: json3.data.createVideo
           })*/
          console.log("Success mutations.updateVideo: " + json3);
        }).catch((err: any) => {
          console.log("Error mutations.updateVideo: " + err);
          console.log(err)
          console.log(vid1)
        });
      }




    }).catch((err: any) => {
      console.log("Error queries.getVideoByYoutubeIdent: " + err);
      console.log(err)
    });
  }
  updateVideo(original: any, series: any, episode: any) {
    //series = series
    // original = original
    // console.log(original)
    if (episode.title != null) {
      var youtube: any = episode.videoPreview.replace("https://youtu.be/", "").replace("https://www.youtube.com/watch?v=", "")
      if (youtube !== "") {
        var episodeTitle: any
        if (episode.title.includes("|"))
          episodeTitle = episode.title.split("|")[1].trim()
        else
          episodeTitle = episode.title.trim()

        const getVideoByYoutubeIdent = API.graphql(graphqlOperation(queries.getVideoByYoutubeIdent, { YoutubeIdent: youtube }));
        getVideoByYoutubeIdent.then((json: any) => {
          //console.log("Success queries.searchVideos: " + json);
          if (json.data.getVideoByYoutubeIdent.items.length === 0) {
            console.log("not found")
            console.log(episodeTitle)
            console.log(youtube)
            const getYoutubeVideoSearch = API.graphql(graphqlOperation(queries.getYoutubeVideoSearch, { videoId: youtube }));
            getYoutubeVideoSearch.then((json: any) => {
              console.log(json.data.getYoutubeVideoSearch.items[0])
              this.writeYoutube(json.data.getYoutubeVideoSearch.items[0])
            }).catch((e: any) => {
              console.log(e)
            })

          }
          else {
            var category: any
            if (series.category.flat().includes("Junior High"))
              category = "jrhigh"
            if (series.category.flat().includes("Youth"))
              category = "youth"
            if (series.category.flat().includes("Preschool"))
              category = "preschool"
            if (series.category.flat().includes("Kids"))
              category = "kids"
            if (series.category.flat().includes("Senior High"))
              category = "srhigh"
            var seriesId = "ky-" + category + "-" + series.title
            console.log(seriesId + "---" + series.title)

            /* const createSeries = API.graphql(graphqlOperation(mutations.createSeries, { input: { id: seriesId, title: series.title } }));
              createSeries.then((json: any) => {
                console.log("Success mutations.createSeries: " + json);
              }).catch((err: any) => {
                console.log("Error mutations.createSeries: " + err);
                console.log(err)
              });*/
            var z = "ky-" + category
            console.log(original)
            const updateSeries = API.graphql(graphqlOperation(mutations.updateSeries, { input: { id: seriesId, image: series.image, seriesType: z, title: series.title, startDate: original.post_date[0].split(" ")[0], endDate: original.post_date[0].split(" ")[0] } }));
            updateSeries.then((json: any) => {
              console.log("Success mutations.updateSeries: " + json);
            }).catch((err: any) => {
              console.log("Error mutations.updateSeries: " + err);
              console.log(err)
            });

            const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: youtube, videoTypes: z, publishedDate: original.post_date[0].split(" ")[0], episodeTitle: episodeTitle, episodeNumber: episode.episodeNumber, seriesTitle: series.title, videoSeriesId: seriesId } }));
            updateVideo.then(() => {
              console.log("updateVideo success")

            }).catch((err: any) => {
              console.log("Error queries.updateVideo: " + err);
              console.log(err)
            })

            //console.log(+ "---" + episode.episodeNumber + "---" + series.category + "---" + youtube + "---" + episodeTitle + "---")


            //    else console.log(json)
          }
          //          console.log("found")
        })
        /*     if (!episode.title.includes(episode.episodeNumber))
     {        console.log(original)
            
          }   */
        //console.log(episode.title)
        //console.log(youtube)
      }
    }
  }

  createEpisode(episode: any, id: any) {
    episode.curriculumEpisodeGroupId = id
    /*  const createCurriculumEpisode = API.graphql(graphqlOperation(mutations.createCurriculumEpisode, { input: episode }));
      createCurriculumEpisode.then((json:any) => {
        console.log("Success queries.createCurriculumEpisode: " + json);
        // console.log(json)
   
   
      }).catch((err:any) => {
        console.log("Error queries.createCurriculumEpisode: " + err);
        console.log(err)
        console.log(episode)
   
      });*/

  }
  createGroup(group: any, episodes: any) {
    console.log(episodes)
    // console.log("createCurriculumGroup")
    if (group.image === null)
      delete group.image
    if (group.image === undefined)
      delete group.image
    if (group.playlist === "")
      delete group.playlist
    if (group.description === "")
      delete group.description
    if (group.playlist === null)
      delete group.playlist
    if (group.allFiles === "")
      delete group.allFiles
    /*  const createCurriculumGroup = API.graphql(graphqlOperation(mutations.createCurriculumGroup, { input: group }));
      createCurriculumGroup.then((json:any) => {
        console.log("Success queries.createCurriculumGroup: " + json);
        //  console.log(json)
        episodes.forEach(
          (item:any) => {
            if (item.title == "")
              delete item.title
            if (item.lessonPlan == "")
              delete item.lessonPlan
            if (item.activityPage == "")
              delete item.activityPage
            if (item.videoHiRes == "")
              delete item.videoHiRes
            if (item.videoLowRes == "")
              delete item.videoLowRes
            if (item.videoPreview == "")
              delete item.videoPreview
            if (item.image == null)
              delete item.image
            if (item.image == undefined)
              delete item.image
            this.createEpisode(item, json.data.createCurriculumGroup.id)
          }
        )
      }).catch((err:any) => {
        console.log("Error queries.createCurriculumGroup: " + err);
        console.log(err)
        console.log(group)
   
      });*/
  }
  importKidsAndYouth() {
    console.log("importKidsAndYouth")

    fetch('/static/imports/kids-2019-09-23.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        //  console.log(myJson)
        myJson = this.recurse(myJson)
        this.write(myJson["rss"]["channel"]["item"])
        //  console.log(myJson["rss"]["channel"]["item"])
      });

  }



  //  readFile(filePath:any) {
  //    return RNFetchBlob.fs.readFile(filePath, 'base64').then((data:any) => new Buffer(data, 'base64'));
  //  }
  /*
    importKidsAndYouthVideos() {
      const listCurriculumEpisodes = API.graphql(graphqlOperation(queries.listCurriculumEpisodes, { limit: 50 }));
      listCurriculumEpisodes.then((json:any) => {
        console.log("Success queries.listCurriculumEpisodes: " + json);
        console.log(json)
       
   
        json.data.listCurriculumEpisodes.items.forEach((item:any) => {
          console.log(item.videoHiRes)
          if (item.videoHiRes!=null)
          getFileBlob(item.videoHiRes, (blob:any) => {
          console.log(blob)
          });
   
         /* SetS3Config("jcbucket", "protected");
          Storage.put(`test/${this.upload.files[0].name}`,
                      this.upload.files[0],
                      { contentType: this.upload.files[0].type })
            .then(result => {
              this.upload = null;
              this.setState({ response: "Success uploading file!" });
            })
            .catch(err => {
              this.setState({ response: `Cannot uploading file: ${err}` });
            });*/
  /*
        })
   
      }).catch((err:any) => {
        console.log("Error queries.listCurriculumEpisodes: " + err);
        console.log(err)
   
      });
   
    }*/

  fixAdultSeries(nextId: any) {
    const listSeriess = API.graphql(graphqlOperation(queries.listSeriess, { limit: 100, nextToken: nextId }));
    listSeriess.then((json: any) => {
      //  console.log(json)
      json.data.listSeriess.items.forEach((item: any) => {

        if (!item.id.includes("ky-")) {
          console.log(item.id)


          const updateSeriess = API.graphql(graphqlOperation(mutations.updateSeries, { input: { id: item.id, seriesType: "adult-sunday" } }));
          updateSeriess.then((json2: any) => {
            console.log(json2)
          }).catch((err: any) => {
            console.log("Error mutations.createSeries: " + err);
            console.log(err)
          });
        }
      })

      if (json.data.listSeriess.nextToken != null)
        this.fixAdultSeries(json.data.listSeriess.nextToken)
      // const arrSum = (x:any) => x.reduce((a:any,b:any) => a + b, 0)
      //  console.log(arrSum(z))
    }).catch((err: any) => {
      console.log("Error mutations.createSeries: " + err);
      console.log(err)
    });

  }
  importYoutube() {
    var z = new ImportYoutube()
    z.reloadPlaylists()

  }
  importLifeStores() {
    const createSeries = API.graphql(graphqlOperation(mutations.createSeries, { input: { id: "life-story-Life Stories", title: "Life Stories", seriesType: "life-story", startDate: "2017-01-01", endDate: "2019-09-13" } }));
    createSeries.then((json: any) => {
      console.log("Success mutations.createSeries: " + json);
    }).catch((err: any) => {
      console.log("Error mutations.createSeries: " + err);
      console.log(err)
    });
    fetch('/static/imports/life-stories.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson: any) => {
        //  console.log(myJson)
        return myJson.map((item: any) => {
          var publishedA: any = ""
          var youtubeId = item.replace("https://youtu.be/", "")
          const getVideoByYoutubeIdent = API.graphql(graphqlOperation(queries.getVideoByYoutubeIdent, { YoutubeIdent: youtubeId }));
          publishedA = getVideoByYoutubeIdent.then((json2: any) => {
            //console.log("Success queries.searchVideos: " + json);
            if (json2.data.getVideoByYoutubeIdent.items.length === 0) {
              console.log("not found")
              console.log(youtubeId)
              const getYoutubeVideoSearch = API.graphql(graphqlOperation(queries.getYoutubeVideoSearch, { videoId: youtubeId }));
              getYoutubeVideoSearch.then((json: any) => {
                console.log(json.data.getYoutubeVideoSearch.items[0])
                this.writeYoutube(json.data.getYoutubeVideoSearch.items[0])
              }).catch((e: any) => {
                console.log(e)
              })

            } else {
              /*      const getYoutubeVideoSearch = API.graphql(graphqlOperation(queries.getYoutubeVideoSearch, { videoId: youtubeId }));
                    getYoutubeVideoSearch.then((json: any) => {
                      console.log(json.data.getYoutubeVideoSearch.items[0])
                      this.writeYoutube(json.data.getYoutubeVideoSearch.items[0])
                    }).catch((e: any) => {
                      console.log(e)
                    })*/

              var episodeTitle = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.title.replace("Life Story | ", "")
              var episodeDesc = ""
              try {
                episodeDesc = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.description.split("\n")[0].replace("[Log] We want to spend Easter with YOU! Learn more at http://www.themeetinghouseeaster.com", "")
              } catch{
                episodeDesc = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.description

              }
              //             console.log(json2.data.getVideoByYoutubeIdent.items[0].Youtube)
              var published = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.publishedAt.split("T")[0]
              console.log(episodeTitle + episodeDesc)
              console.log(published)

              const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: youtubeId, videoTypes: "life-story", publishedDate: published, episodeTitle: episodeTitle, videoSeriesId: "life-story-Life Stories", seriesTitle: "Life Stories", description: episodeDesc } }));
              updateVideo.then(() => {
                console.log("updateVideo success")


              }).catch((err: any) => {
                console.log("Error queries.updateVideo: " + err);
                console.log(err)
              })
              return { pub: published, id: youtubeId }
              // console.log(json2.data.getVideoByYoutubeIdent.items[0].videoTypes)
            }

          })
          return publishedA

        })
        //  console.log(myJson["rss"]["channel"]["item"])
      }).then((series: any) => {

        Promise.all(series)
          .then((r: any) => {
            var ar = r.sort((a: any, b: any) => { return (new Date(a.pub).valueOf() - new Date(b.pub).valueOf()) })
            ar.forEach((item: any, index: any) => {
              const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: item.id, episodeNumber: index + 1 } }));
              updateVideo.then(() => {
                console.log("updateVideo success")


              }).catch((err: any) => {
                console.log("Error queries.updateVideo: " + err);
                console.log(err)
              })


            })
          })



      })
  }
  importBBQs(pageToken: String | null) {

    /*  const createSeries = API.graphql(graphqlOperation(mutations.createSeries, { input: { id: "bbq-Bruxy's Bag of Questions", title: "Bruxy's Bag of Questions", seriesType: "bbq", startDate: "2015-03-19", endDate: "2019-09-13" } }));
      createSeries.then((json: any) => {
        console.log("Success mutations.createSeries: " + json);
      }).catch((err: any) => {
        console.log("Error mutations.createSeries: " + err);
        console.log(err)
      });*/

    const playlistItems = API.graphql(graphqlOperation(queries.getYoutubePlaylistItems, { playlistId: "PLB5r2P47beqLMKzJAjoiKwoMO7bWR6zcb", pageToken: pageToken }));
    playlistItems.then((json: any) => {
      //console.log("Success queries.getYoutubePlaylistItems: " + json)
      json.data.getYoutubePlaylistItems.items.forEach((item: any) => {
        // console.log(item.contentDetails.videoId)
        const getVideoByYoutubeIdent = API.graphql(graphqlOperation(queries.getVideoByYoutubeIdent, { YoutubeIdent: item.contentDetails.videoId }));
        getVideoByYoutubeIdent.then((json2: any) => {


          // console.log(json2.data.getVideoByYoutubeIdent.videoTypes)

          var episodeTitle = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.title
          var episodeDesc = ""
          try {
            episodeDesc = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.description.split("\n")[0].replace("[Log] We want to spend Easter with YOU! Learn more at http://www.themeetinghouseeaster.com", "")
          } catch{
            episodeDesc = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.description

          }
          //             console.log(json2.data.getVideoByYoutubeIdent.items[0].Youtube)
          var published = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.publishedAt.split("T")[0]

          //console.log(published)

          const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: item.contentDetails.videoId, videoTypes: "bbq", publishedDate: published, episodeTitle: episodeTitle, videoSeriesId: "bbq-Bruxy's Bag of Questions", seriesTitle: "Bruxy's Bag of Questions", description: episodeDesc } }));
          updateVideo.then(() => {
            console.log("updateVideo success")

            return { id: item.contentDetails.videoId, pub: published }
          }).catch((err: any) => {
            console.log("Error queries.updateVideo: " + err);
            console.log(err)
          })

        }).catch((err: any) => {
          console.log(err)
          console.log("Error queries.getVideoByYoutubeIdent: " + err)
        });
      })
      console.log(json.data)
      if (json.data.getYoutubePlaylistItems.nextPageToken !== null)
        this.importBBQs(json.data.getYoutubePlaylistItems.nextPageToken)
    }).catch((err: any) => {
      console.log(err)
      console.log("Error queries.getYoutubePlaylistItems: " + err)
    });

    /*
    fetch('/static/imports/life-stories.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson: any) => {
        //  console.log(myJson)
        return myJson.map((item: any) => {
          var publishedA: any = ""
          var youtubeId = item.replace("https://youtu.be/", "")
          const getVideoByYoutubeIdent = API.graphql(graphqlOperation(queries.getVideoByYoutubeIdent, { YoutubeIdent: youtubeId }));
          publishedA = getVideoByYoutubeIdent.then((json2: any) => {
            //console.log("Success queries.searchVideos: " + json);
            if (json2.data.getVideoByYoutubeIdent.items.length === 0) {
              console.log("not found")
              console.log(youtubeId)
              const getYoutubeVideoSearch = API.graphql(graphqlOperation(queries.getYoutubeVideoSearch, { videoId: youtubeId }));
              getYoutubeVideoSearch.then((json: any) => {
                console.log(json.data.getYoutubeVideoSearch.items[0])
                this.writeYoutube(json.data.getYoutubeVideoSearch.items[0])
              }).catch((e: any) => {
                console.log(e)
              })
 
            } else {
              /*      const getYoutubeVideoSearch = API.graphql(graphqlOperation(queries.getYoutubeVideoSearch, { videoId: youtubeId }));
                    getYoutubeVideoSearch.then((json: any) => {
                      console.log(json.data.getYoutubeVideoSearch.items[0])
                      this.writeYoutube(json.data.getYoutubeVideoSearch.items[0])
                    }).catch((e: any) => {
                      console.log(e)
                    })*/

    /*     var episodeTitle = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.title.replace("Life Story | ", "")
         var episodeDesc = ""
         try {
           episodeDesc = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.description.split("\n")[0].replace("[Log] We want to spend Easter with YOU! Learn more at http://www.themeetinghouseeaster.com", "")
         } catch{
           episodeDesc = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.description

         }
         //             console.log(json2.data.getVideoByYoutubeIdent.items[0].Youtube)
         var published = json2.data.getVideoByYoutubeIdent.items[0].Youtube.snippet.publishedAt.split("T")[0]
         console.log(episodeTitle + episodeDesc)
         console.log(published)

         const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: youtubeId, videoTypes: "life-story", publishedDate: published, episodeTitle: episodeTitle, videoSeriesId: "life-story-Life Stories", seriesTitle: "Life Stories", description: episodeDesc } }));
         updateVideo.then(() => {
           console.log("updateVideo success")


         }).catch((err: any) => {
           console.log("Error queries.updateVideo: " + err);
           console.log(err)
         })
         return { pub: published, id: youtubeId }
         // console.log(json2.data.getVideoByYoutubeIdent.items[0].videoTypes)
       }

     })
     return publishedA

   })
   //  console.log(myJson["rss"]["channel"]["item"])
 }).then((series: any) => {

   Promise.all(series)
     .then((r: any) => {
       var ar = r.sort((a: any, b: any) => { return (new Date(a.pub).valueOf() - new Date(b.pub).valueOf()) })
       ar.map((item: any, index: any) => {
         const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: item.id, episodeNumber: index + 1 } }));
         updateVideo.then(() => {
           console.log("updateVideo success")


         }).catch((err: any) => {
           console.log("Error queries.updateVideo: " + err);
           console.log(err)
         })


       })
     })



 })*/
  }
  orderBBQStart() {
    this.orderBBQ(null)
  }
  orderBBQ(nextToken: any) {

    const getVideoByVideoType = API.graphql(graphqlOperation(queries.getVideoByVideoType, { videoTypes: "bbq", limit: 200, nextToken: nextToken }));
    getVideoByVideoType.then((json: any) => {
      //console.log(json)
      //var z:[]
      return json.data.getVideoByVideoType.items.map((item: any) => { return { pub: item.publishedDate, id: item.id } })
    }).then((items: any) => {
      Promise.all(items).then((r: any) => {
        var ar = r.sort((a: any, b: any) => { return (new Date(a.pub).valueOf() - new Date(b.pub).valueOf()) })
        ar.forEach((item: any, index: any) => {
          const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: item.id, episodeNumber: index + 1 } }));
          updateVideo.then(() => {
            console.log("updateVideo success")


          }).catch((err: any) => {
            console.log("Error queries.updateVideo: " + err);
            console.log(err)
          })


        })
      }
      )
    })
  }
  render() {
    return (
      <div>
        <AdminMenu></AdminMenu>
        <Button onClick={() => { this.importYoutube() }}>Load New Youtube Items</Button>

        <Button onClick={() => { this.importKidsAndYouth() }}>Import Kids and Youth</Button>
        <Button onClick={() => { this.fixAdultSeries(null) }}>Fix Adult</Button>
        <Button onClick={() => { /*this.importKidsAndYouthVideos() */ }}>Import Kids and Youth Videos</Button>

        <Button onClick={() => { this.importLifeStores() }}>Import Life Stories</Button>
        <Button onClick={() => { this.importBBQs(null) }}>Import BBQs</Button>
        <Button onClick={() => { this.orderBBQStart() }}>BBQs Order</Button>

      </div >
    );
  }
}
export default Index;