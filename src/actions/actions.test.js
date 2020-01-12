import * as actions from './index';
import VeryGoodBoy from '../images/verygoodboy.PNG';

describe('addAnimal Action Creator', () => {
it('should have a type of "ADD_ANIMALS"', () => {
    const animals = [{
      photos: [{medium: VeryGoodBoy}],
      id: 4, 
      name: 'Fido',
      age: 'Older than time itself',
      contact: {address: {city: 'Venice'}}
    }];
    const expectedAction = {
      type: 'ADD_ANIMALS',
      animals
    };
    const result = actions.addAnimals(animals);
    expect(result).toEqual(expectedAction);
  });
});