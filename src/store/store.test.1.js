// import expect from 'expect';
// import {createStore} from 'redux';
// import rootReducer from '../reducers';
// import initialState from '../reducers/initialState';
// import * as fooActions from '../actions/fooActions'

// describe ('Store', () => {
//     it('Should handle creating a foo', ()=>{
//         //arrange entry point
//         const store = createStore(rootReducer, initialState);
//         const foo = {
//             title: 'Some title'
//         };

//         // act
//         const action = fooActions.createFooSuccess(foo);
//         store.dispatch(action);

//         // assert
//         const actual = store.getState().foos[0];
//         const expected = {
//             title: 'Some title'
//         };
//         expect(actual).toEqual(expected)
//     })
// });
