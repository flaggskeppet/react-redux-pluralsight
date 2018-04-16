/*
import expect from 'expect';
import * as fooActions from './fooActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Foo Actions Thunk', () => {
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading foos', (done) => {
      
      // To mock out an http call, you can use Nock to intercept all
      // calls to a given address or pattern. This means you can test
      // without making actual HTTP calls, and specify the data
      // your mock API should return. 
      nock('http://someapi.com/')
        .get('/foo')
        .reply(200, { body: { course: [{ id: '123', title: 'Some title here'}] }});

      const expectedActions = [
        {type: types.BEGIN_AJAX_CALL},
        {type: types.LOAD_FOOS_SUCCESS, body: {courses: [{id: '123', title: 'Some title here'}]}}
      ];

      const store = mockStore({courses: []}, expectedActions, done);
      store.dispatch(fooActions.loadFoos()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_FOOS_SUCCESS);
        done();
      });
    });
  });
});
*/