import React from 'react';
import Card from './card';

export default {
  title: 'Card',
};

export const card = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', columnGap: 16 }}>
      <Card title="Title" artist="Artist" />
      <Card title="Title" artist="Artist" />
      <Card title="Title" artist="Artist" />
    </div>
  );
};
