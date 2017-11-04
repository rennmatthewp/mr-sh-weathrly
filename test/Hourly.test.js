import React from 'react';
import { shallow, mount } from 'enzyme';
import Hourly from '../lib/Hourly';
import {data, filterData} from '../lib/cleanData';

describe.skip('Hourly unit testing', () => {
  
  const fakeData = filterData(data);
  let wrapper

  beforeEach( () => {
    wrapper = shallow(
      <Hourly 
        testData={fakeData.hourly}
      />
    )
  })
  
  it.skip('It should render Hourly', () => {
    expect(wrapper.find('.Hourly').length).toEqual(1)
  })

  it.skip('should render twelve cards', () => {

    expect(wrapper.find(Card).length).toEqual(12)
  })

  it.skip('should start rendering cards at the index of zero', () => {
    
    expect(wrapper.find(Card).nodes[0].key).toEqual('0');
  })
  
  it.skip('should start render that display information', () => {
    
    expect(wrapper.find(Card).nodes[1].props.temp).toEqual(fakeData.hourly[1].temp.enghlish);
  })

})