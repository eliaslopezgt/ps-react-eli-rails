import React from 'react';
import Label from './Label';
import {shallow} from 'enzyme';

test('Display label with default content', () => {
  const wrapper = shallow(<Label
    htmlFor="testId"
    label="test"
  />
  );

  /** Expect a label with html for and content */
  expect(wrapper.matchesElement(<label htmlFor="testId">test</label>)).toBe(true);
});

