import React from 'react';
import {shallow} from 'enzyme';
import { Form, mapDispatchToProps } from './Form';
import VeryGoodBoy from '../../images/verygoodboy.PNG';
import { addAnimals } from '../../actions/index';

describe('Form', () => {
let wrapper, mockData;

  beforeEach(() => {
    wrapper = shallow(<Form />)
    mockData = [{
      photos: [{medium: VeryGoodBoy}],
      id: 4, 
      name: 'Fido',
      age: 'Older than time itself',
      contact: {address: {city: 'Venice'}}
    }];
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default local state', () => {
    const mockState = {
      type: 'dog',
      state: '',
      zipcode: '',
      page: 1
    };
    expect(wrapper.instance().state).toEqual(mockState);
  });
  describe('handleChange', () => {
    it('should update state when handleChange is called', () => {
      const mockEvent = {target: {name: 'state', value: 'CO'}}
      const mockState = {
        type: 'dog',
        state: '',
        zipcode: '',
        page: 1
      };
      const expectedState = {
        type: 'dog',
        state: 'co',
        zipcode: '',
        page: 1
      };
      expect(wrapper.instance().state).toEqual(mockState);
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.instance().state).toEqual(expectedState);
    });
  });
  describe('onSearch', () => {
  it('should call fetchAnimals when onSearch is called from a user click', async () => {
      const apiCalls = require('../../apiCalls/apiCalls');
      const fetchSpy = jest.spyOn(apiCalls, 'fetchAnimals');
      fetchSpy.mockResolvedValue();

      wrapper.find('.form-btn').simulate('click');

      await Promise.resolve();
      
      expect(fetchSpy).toHaveBeenCalled();
    });
  });
  describe('mapDispatchToProps', () => {
    it('should call addAnimals with dispatch', () => {
      const mockDispatch = jest.fn();
      const mockActionToDispatch = addAnimals(mockData);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addAnimals(mockData);
      expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch);
    });
  });
});