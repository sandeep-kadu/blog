import { PersonModel } from './person.model';

describe('PersonModel', () => {
  it('should create an instance', () => {
    expect(new PersonModel(1, 'Test Name')).toBeTruthy();
  });
});
