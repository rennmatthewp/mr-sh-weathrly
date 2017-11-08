import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js';


describe('Search unit testing', () => {

  
  it('It should make suggesting as the user inputs city', () => {
    const search = shallow( <Search /> );
    const inst = search.instance();
    
    search.find('input').simulate('change', {target: {value: 'd'}})
    expect(inst.suggestionsArray).toEqual([]);

    search.find('input').simulate('change', {target: {value: 'de'}})
    expect(inst.suggestionsArray).toEqual([]);

    search.find('input').simulate('change', {target: {value: 'den'}})
    expect(inst.suggestionsArray).toEqual(['denver, co', 'denton, tx']);

  });

  it('It should change state in controlds', () => {
    const search = shallow( <Search /> );
    const inst = search.instance();

    expect(inst.state.inputVal).toEqual('');
    search.find('input').simulate('change', {target: {value: 'd'}})
    expect(inst.state.inputVal).toEqual('d');

  });

});