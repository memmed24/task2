import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import User from './components/users';
import { shallow } from 'enzyme';

describe('User component', () => {
  it('it started', () => {
    const wrapper = shallow(<User />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('User')
  })
})