/*
import expect from 'expect';
import fooReducer from './fooReducer';
import * as actions from '../actions/fooActions';

describe('Foo Reducer', () => {
  it('should add foo when passed CREATE_FOO_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newFoo = {title: 'C'};
    const action = actions.createFooSuccess(newFoo);

    // act
    const newState = fooReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update foo when passed UPDATE_FOO_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const foo = {id: 'B', title: 'New Title'};
    const action = actions.updateFooSuccess(foo);

    // act
    const newState = fooReducer(initialState, action);
    const updatedFoo = newState.find(a => a.id == foo.id);
    const untouchedFoo = newState.find(a => a.id == 'A');

    // assert
    expect(updatedFoo.title).toEqual('New Title');
    expect(untouchedFoo.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
*/