/* eslint-disable no-console */
import { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Pagination from './Pagination';

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage); // Update the current page state
    args.onPageChange(newPage); // Call the onPageChange callback
  };


  return (
    <Pagination
      {...args}
      currentPage={currentPage} // Pass the updated currentPage state
      onPageChange={handlePageChange} // Pass the handler
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  totalSize: 100,
  perPageSize: 10,
  currentPageSiblings: 2,
  currentPage: 1,
  onPageChange: (newPage: number) => {
    console.log('Page changed to:', newPage); // Log the new page for testing
  },
};