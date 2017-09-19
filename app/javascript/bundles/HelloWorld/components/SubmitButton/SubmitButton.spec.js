import React from 'react';
import SubmitButton from './SubmitButton';
import {shallow} from 'enzyme';

test('Display button with class, label and icon class', () => {
  const wrapper = shallow(<SubmitButton
    className="testbuttonclass"
    label="testlabel"
    iconClassName="testiconclass"
  />
  );

  // Should have a container with the testClass specified type submit
  expect(wrapper.find('button.testbuttonclass[type="submit"]').length).toBe(1);

  // Should find an i inside the button with the test icon class attached
  expect(wrapper.find('button.testbuttonclass i.testiconclass').length).toBe(1);

  // Should find a label inside the button
  expect(wrapper.text()).toBe('testlabel');

});

