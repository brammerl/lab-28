import React, { Component } from 'react'
import  UrlInput  from '../url-input/UrlInput';
import ResponseSection from '../response-section/ResponseSection';
import { fetchApi } from '../../utils/fetchApi';

export default class MainContainer extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    display: { 'Hi': 'Please make a request'}
  }

  fetch = () => {
    const { url, method, body } = this.state;

    return fetchApi(url, method, body) 
      .then(res => this.setState({ display: res}))
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetch();
  }

  handleChange = ({target }) => {
    this.setState({ [target.name]: target.value})
  }

  render() {
    const { url, method, body, display } = this.state;
    return (
      <div>
        <UrlInput 
        url={url}
        body={body}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}/>
        <ResponseSection display={display}/>
      </div>
    )
  }
}
