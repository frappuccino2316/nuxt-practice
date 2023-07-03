import { shallowMount } from '@vue/test-utils';
import { expect, describe, it } from 'vitest';

import Panel from '../Panel.vue';

describe('check Panel', () => {
  it('first view has 0', () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'Title',
        message: 'Message',
      },
    });
    expect(wrapper.text()).toContain('0');
  });

  it('first view has Title', () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'Title',
        message: 'Message',
      },
    });
    expect(wrapper.text()).toContain('Title');
  });

  it('first view has Message', () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'Title',
        message: 'Message',
      },
    });
    expect(wrapper.text()).toContain('Message');
  });

  it('count up when pushed button', async () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'Title',
        message: 'Message',
      },
    });
    await wrapper.find('button').trigger('click');

    expect(wrapper.text()).toContain('1');
  });

  it('first view does has special Text', async () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'Title',
        message: 'Message',
      },
    });

    expect(wrapper.text()).toContain('アホになる');
  });

  it('view does has special Text when one click', async () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'Title',
        message: 'Message',
      },
    });
    await wrapper.find('button').trigger('click');

    expect(wrapper.text()).not.toContain('アホになる');
  });

  it('view does has special Text when two click', async () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'Title',
        message: 'Message',
      },
    });
    await wrapper.find('button').trigger('click');
    await wrapper.find('button').trigger('click');

    expect(wrapper.text()).not.toContain('アホになる');
  });

  it('view does has special Text when three click', async () => {
    const wrapper = shallowMount(Panel, {
      propsData: {
        title: 'Title',
        message: 'Message',
      },
    });
    await wrapper.find('button').trigger('click');
    await wrapper.find('button').trigger('click');
    await wrapper.find('button').trigger('click');

    expect(wrapper.text()).toContain('アホになる');
  });
});
