import addAnimals from './addAnimals';
import VeryGoodBoy from '../images/verygoodboy.PNG';

describe('addAnimals Reducer', () => {
  it('should have a default state', () => {
    const expected = [];
    const result = addAnimals(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should update state when type is "ADD_ANIMALS"', () => {
    const mockPayload = [{
      photos: [{medium: VeryGoodBoy}],
      id: 4, 
      name: 'Fido',
      age: 'Older than time itself',
      contact: {address: {city: 'Venice'}}
    }];
    const mockAction = {type: 'ADD_ANIMALS', animals: mockPayload};
    const expected = mockPayload;
    const result = addAnimals([], mockAction);
    expect(result).toEqual(expected);
  });
});