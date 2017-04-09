import React from 'react';
import {shallow} from 'enzyme';
import Avatar from '../Avatar';

describe('FeaturedTitle component', () => {
  it('should render without issues', () => {
    const component = shallow(<Avatar />);

    expect(component.length).toBe(1);
    expect(component).toMatchSnapshot();
  });
});
