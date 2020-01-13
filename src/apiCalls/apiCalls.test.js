import { fetchToken, fetchAnimals } from './apiCalls';
import VeryGoodBoy from '../images/verygoodboy.PNG';

describe('apiCalls', () => {
  describe('fetchToken', () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = {
        token_type: 'Bearer',
        expires_in: 3600,
        access_token: 'WSbJu2ktgXx4XL29oIVATIp/UEoYnmradsb3fp6BOZzYStLPwdhA3X7vrQlq/BC7vo3mYJ2KP6iNdJ7cgwD2l6mvmHxUke7DCgvpTnD2AMRtRKdlMKmX0Ft1XVA75sAu'
      }
    });

    it('should return an object with a token type, expiration, and a token', () => {
        window.fetch= jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
        expect(fetchToken()).resolves.toEqual(mockResponse);
    });
    it('SAD: should throw an error if the response is not ok', () => {
      window.fetch= jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchToken()).rejects.toEqual(Error('Failed fetching token'))
    });
    it('SAD: should throw an error if the Promise does not resolve', () => {
      window.fetch= jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });
      expect(fetchToken()).rejects.toEqual(Error('fetch failed'));
    });
  });
  describe('fetchAnimals', () => {
    let location, type, page, mockOptions, mockResponse;
    beforeEach(() => {
      mockResponse = {
        animals: [{
          photos: [{medium: VeryGoodBoy}],
          id: 4, 
          name: 'Fido',
          age: 'Older than time itself',
          contact: {address: {city: 'Venice'}}
        }],
        pagination: {count_per_page: 20, total_count: 103861, current_page: 1, total_pages: 5194, _links: {next: {href: 'example.com'}}}
      };

      location = 'location=co';
      type='dog';
      page='4';

      mockOptions = {
        headers: {
          'Authorization': 'Bearer WSbJu2ktgXx4XL29oIVATIp/UEoYnmradsb3fp6BOZzYStLPwdhA3X7vrQlq/BC7vo3mYJ2KP6iNdJ7cgwD2l6mvmHxUke7DCgvpTnD2AMRtRKdlMKmX0Ft1XVA75sAu',
          'Content-Type': 'application/json',
          'Origin': 'localhost:3000/home'
        }
      }

      window.fetch= jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    })
    it('should be called with the correct arguments', () => {
      global.sessionStorage.setItem('token', 'WSbJu2ktgXx4XL29oIVATIp/UEoYnmradsb3fp6BOZzYStLPwdhA3X7vrQlq/BC7vo3mYJ2KP6iNdJ7cgwD2l6mvmHxUke7DCgvpTnD2AMRtRKdlMKmX0Ft1XVA75sAu')
      window.fetch= jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });

      const expected = ['https://api.petfinder.com/v2/animals?location=co&status=adoptable&type=dog&page=4', mockOptions];
        fetchAnimals(type, location, page);
        expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
    it('should return an object with animals, and pagination', () => {
        window.fetch= jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });

        expect(fetchAnimals(type, location, page)).resolves.toEqual(mockResponse);
    });
    it('SAD: should throw an error if the response is not ok', () => {
      window.fetch= jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(fetchAnimals(type, location, page)).rejects.toEqual(Error('Failed fetching animals'));
    });
    it('SAD: should throw an error if the promise does not resolve', () => {
      window.fetch= jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });
      expect(fetchAnimals(type, location, page)).rejects.toEqual(Error('fetch failed'));
    });
  });
});
