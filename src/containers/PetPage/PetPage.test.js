import React from 'react';
import {shallow} from 'enzyme';
import { PetPage, mapStateToProps } from './PetPage';
import VeryGoodBoy from '../../images/verygoodboy.PNG';

describe('PetPage', () => {
let wrapper, mockData;

  beforeEach(() => {
    mockData = [{
      photos: [{medium: VeryGoodBoy}],
      id: 1, 
      name: 'Keiko',
      breeds: {primary: 'Akita'},
      colors: {primary: 'White, Black, Brown'},
      gender: 'female',
      attributes: {spayed_neutered: true, house_trained: true, shots_current: true},
      age: 'Older than time itself',
      contact: {address: {address1: 'All Dogs Go to Heaven Ct.', city: 'Big Sky', state: 'IL', postcode: '60614'}, email: 'jarvisblargus@gmail.com', phone: '773-312-9456'}
    },
    {
      photos: [{medium: VeryGoodBoy}],
      id: 2, 
      name: 'Buster',
      breeds: {primary: 'Dachshund'},
      colors: {primary: 'Brown, Dappled'},
      gender: 'male',
      attributes: {spayed_neutered: false, house_trained: true, shots_current: true},
      age: 'Older than time itself',
      contact: {address: {address1: 'All Dogs Go to Heaven Ct.', city: 'Big Sky', state: 'IL', postcode: '60614'}, email: 'jarvisblargus@gmail.com', phone: '773-312-9456'}
    }];

    wrapper = shallow(<PetPage 
      animals={mockData}
      id={1}
    />)
  });

  it('should match the snapshot with all the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });

    describe('mapStateToProps', () => {
      it('should return an object with animals data', () => {
        const mockState = {
          animals: mockData
        };
        const expected = {animals: mockData};
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
      });
    });
});