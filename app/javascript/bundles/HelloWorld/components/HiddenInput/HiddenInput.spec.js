import React from 'react';
import HiddenInput from './HiddenInput';
import {shallow} from 'enzyme';

test('Renders a hidden input with name and value', () => {
  const wrapper = shallow(<HiddenInput
    name="testname"
    value="testvalue"
  />
  );

  // Should be a hidden input with name and value set
  expect(wrapper.find('input[type="hidden"][name="testname"][value="testvalue"]').length).toBe(1);

});
