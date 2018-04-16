/*
import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageFooForm} from './ManageFooForm'; // Note the named import 

describe ('ManageFooForm', () => {
  it('sets error message when submitting an empty bar field', () => {
    const props = {
      // Mock the action and resolve the promise directly 
      actions: { saveFoo: () => { return Promise.resolve(); }},
      foo: {id: '', bar: ''}
    };
    const wrapper = mount(<ManageFooForm {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit'); //assure we found the submit.
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Bar must be at least 5 characters.');
  });
});
*/