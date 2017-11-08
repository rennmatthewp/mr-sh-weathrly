import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';

describe('Card unit testing', () => {
  
  it('It should render Card', () => {
    const card = shallow(<Card />)
    expect(card).toBeDefined;
  });

})