import React from 'react';
import {shallow} from 'enzyme';
import { Results, mapStateToProps, mapDispatchToProps } from './Results';
import VeryGoodBoy from '../../images/verygoodboy.PNG';

describe('Results Container', () => {
  let mockData;
  beforeEach(() => {
    mockData = [{
      photos: [{medium: VeryGoodBoy}],
      id: 4, 
      name: 'Fido',
      age: 'Older than time itself',
      contact: {address: {city: 'Venice'}}
    }]
  });

  it('should match the snapshot with no data passed through', () => {
      const wrapper = shallow(<Results 
        animals={[]}
        />)
      expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot with data passed through', () => {
      const wrapper = shallow(<Results 
      animals={mockData}
      />);
      expect(wrapper).toMatchSnapshot();
  });

  it('should render a "no photo available" picture if the data does not have a photo', () => {
    const wrapper = shallow(<Results 
      animals={[{
        photos: [],
        id: 4, 
        name: 'Fido',
        age: 'Older than time itself',
        contact: {address: {city: 'Venice'}}
      }]}
      />);
      expect(wrapper).toMatchSnapshot();
  });
    describe('mapStateToProps', () => {
      it('should return an object with animals', () => {
        const mockState = {animals: mockData};
        const expected = {animals: mockData};
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
      });
    });
});