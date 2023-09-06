import type { Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FilterableList } from './filterable-list';

const Story: Meta<typeof FilterableList> = {
  component: FilterableList,
  title: 'FilterableList',
};
export default Story;

export const Primary = {
  args: {
    items: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
      { id: 4, name: 'Date' },
      { id: 5, name: 'Fig' },
    ],
  },
};

export const Empty = {
  args: {
    items: [],
  },
};

export const WithFilter = {
  args: {
    items: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
      { id: 4, name: 'Date' },
      { id: 5, name: 'Fig' },
    ],
    filter: 'ap',
  },
};

export const InteractionTest = {
  args: {
    items: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
      { id: 4, name: 'Date' },
      { id: 5, name: 'Fig' },
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement);

    await expect(await canvas.findAllByTestId('item')).toHaveLength(5);

    await userEvent.type(canvas.getByTestId('filter'), 'a');
    await expect(await canvas.findAllByTestId('item')).toHaveLength(3);

    await userEvent.type(canvas.getByTestId('filter'), 'pp');
    await expect(await canvas.findAllByTestId('item')).toHaveLength(1);

    await userEvent.clear(canvas.getByTestId('filter'));
    await expect(await canvas.findAllByTestId('item')).toHaveLength(5);
  },
};
