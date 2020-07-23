import React from 'react';
import { shallow } from 'enzyme'
import UrlInput from './UrlInput';
import { Input } from '@material-ui/core';

describe('UrlInput Test', () => {
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<UrlInput/>)
  })
  
  it('has an input with a value set to the api url', () => {
    expect(wrapper.find('Input').prop('value')).toEqual('https://api.com')
  })
})