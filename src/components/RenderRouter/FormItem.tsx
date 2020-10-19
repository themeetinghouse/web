import React from 'react';
import './FormItem.scss';
import { FormItem } from '../types';
import { isSafari, isChrome } from 'react-device-detect';

interface Params {
  content: FormItem;
}

export default function ContentItem({ content }: Params) {
  return (
    <div className="FormContainer">
      <div className="FormItem">
        {content.style === 'white' ? (
          <h1 className="FormItemH1 black">{content.header1}</h1>
        ) : (
          <h1 className="FormItemH1 white">{content.header1}</h1>
        )}
        {content.header2 ? <h2>{content.header2}</h2> : null}
        {content.text1 ? (
          <div className="FormItemText1">{content.text1}</div>
        ) : null}
        <iframe
          src={'https://meeting.formstack.com/forms/' + content.formId}
          title="The Meeting House - Forms"
          className={isSafari || isChrome ? 'FormId FormPadding' : 'FormId'}
          id="form-embed"
          scrolling="yes"
        ></iframe>
      </div>
    </div>
  );
}
