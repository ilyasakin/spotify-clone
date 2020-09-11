import React from 'react';
import BigInput from '../../components/BigInput/BigInput';

const Edit = () => {
  document.title = 'Edit Profile - Spotify';
  return (
    <>
      <BigInput label="Email" />
      <BigInput label="Username" />
      <BigInput label="Country" select>
        <option>Test</option>
      </BigInput>
    </>
  );
};

export default Edit;
