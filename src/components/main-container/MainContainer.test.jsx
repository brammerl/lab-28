import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';

jest.mock('../../utils/fetchApi');

describe('Main container', () => {
  let wrapper;
  let main;

  beforeEach(() => {
    wrapper = shallow(<MainContainer/>);
    main = wrapper.instance();
  })

  it('renders the entire app', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('changes the url in state', () => {
    main.handleChange({
      target: {
        name: 'url',
        value: 'https://tester.com'
      }
    });

    expect(wrapper.state('url')).toEqual('https://tester.com');
  });

  it('changes the body in state', () => {
    main.handleChange({
      target: {
        name: 'body',
        value: 'testing body'
      }
    });

    expect(wrapper.state('body')).toEqual('testing body');
  })
})