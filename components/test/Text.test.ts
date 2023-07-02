import { shallowMount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import Text from '../Text.vue';

test('check text', () => {
  const wrapper = shallowMount(Text);
  expect(wrapper.text()).toEqual('Hello Test');
});
