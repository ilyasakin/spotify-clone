import React from 'react';

const Edit = () => {
  return (
    <>
      <h1 className="overview-page-title">Edit profile</h1>
      <label htmlFor="email" className="overview-page-label">
        Email
      </label>
      <input type="text" id="email" className="overview-big-input" />
      <label htmlFor="username" className="overview-page-label">
        Username
      </label>
      <input type="text" id="username" className="overview-big-input" />
      <label htmlFor="country" className="overview-page-label">
        Country
      </label>
      <select id="country" className="overview-big-input">
        <option>Test</option>
      </select>
    </>
  );
};

export default Edit;
