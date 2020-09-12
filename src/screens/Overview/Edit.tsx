import React, { useState } from 'react';
import BigInput from '../../components/BigInput/BigInput';
import BigButton from '../../components/BigButton/BigButton';

const Edit = () => {
  document.title = 'Edit Profile - Spotify';
  const [, setEmail] = useState('');
  const [, setUname] = useState('');
  const [, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'inherit', gap: 'inherit', flexDirection: 'inherit' }}
      >
        <BigInput label="Email" onChange={(e) => setEmail(e.target.value)} />
        <BigInput label="Username" onChange={(e) => setUname(e.target.value)} />
        <BigInput label="Country" select onChange={(e) => setCountry(e.target.value)}>
          <option>Test</option>
        </BigInput>
        <BigButton text="Save" className="overview-ml-auto" loading={loading} />
      </form>
    </>
  );
};

export default Edit;
