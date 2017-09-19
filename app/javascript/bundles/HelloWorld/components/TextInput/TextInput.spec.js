import React from 'react';
import TextInput from './TextInput';
import {mount} from 'enzyme';

test('Renders a container div with input and label', () => {
  const wrapper = mount(<TextInput
    htmlId="test"
    cssClass="testClass"
    label="testLabel"
    pattern="testPattern"
    title="testTitle"
    name="test"
    value=""
    onChange={() => {}}
    required
  />
  );

  // Should have a container with the testClass specified
  expect(wrapper.find('div.testClass').length).toBe(1);

  // Should find an input inside the div
  expect(wrapper.find('div.testClass input').length).toBe(1);

  // Should find a label inside the div
  expect(wrapper.find('div.testClass label').length).toBe(1);

});
