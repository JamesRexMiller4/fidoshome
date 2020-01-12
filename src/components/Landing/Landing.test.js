import React from 'react';
import { shallow} from 'enzyme';
import Landing from './Landing.js';

describe('Landing Component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Landing />)
    expect(wrapper).toMatchSnapshot();
  });
})