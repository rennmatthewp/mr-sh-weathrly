import React from 'react';
import { shallow, mount } from 'enzyme';
import Daily from '../lib/Daily';
import Card from '../lib/Card';

const daily = shallow(<Daily dailyData={[0, 1, 2, 3, 4, 5, 6]}   />)

describe('Daily unit testing', () => {
  
  it('It should render Daily', () => {
  
    expect(daily).toBeDefined;
  });

  it('should render twelve cards', () => {
    
    expect(daily.find(Card).length).toEqual(7)
  });

  it('should start rendering cards at the index of zero', () => {
    
    expect(daily.find(Card).nodes[0].key).toEqual('0');
  });

})