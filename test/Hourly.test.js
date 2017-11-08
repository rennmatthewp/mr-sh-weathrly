import React from 'react';
import { shallow, mount } from 'enzyme';
import Hourly from '../lib/Hourly';
import {data, filterData} from '../lib/cleanData';
import Card from '../lib/Card';

const hourly = shallow(<Hourly hourlyData={[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />);


describe('Hourly unit testing', () => {
  
  it('It should render Hourly', () => {
    
    expect(hourly).toBeDefined;
  });

  it('should render twelve cards', () => {

    expect(hourly.find(Card).length).toEqual(12)
  });

  it('should start rendering cards at the index of zero', () => {
    
    expect(hourly.find(Card).nodes[0].key).toEqual('0');
  });

});