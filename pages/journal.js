import React from 'react'
import JournalLayout from '../components/JournalLayout'
import Blog from '../components/Blog';

const Journal = () => (
  <JournalLayout
    content={
      <Blog contentType='journal' />
    }
  />
)

export default Journal