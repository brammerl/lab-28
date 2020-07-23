import React, { Component } from 'react'
import MethodButtons  from '../method-buttons/MethodButtons'
import  JsonInput  from '../json-input/JsonInput';
import  UrlInput  from '../url-input/UrlInput';
import ResponseSection from '../response-section/ResponseSection';

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <UrlInput/>
        <MethodButtons/>
        <JsonInput/>
        <ResponseSection/>
      </div>
    )
  }
}
