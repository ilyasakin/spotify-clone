import React, { useState, useContext } from 'react';
import CountryList from 'country-list';
import BigInput from '../../components/BigInput/BigInput';
import BigButton from '../../components/BigButton/BigButton';
import User from '../../context/User';

const Edit = () => {
  document.title = 'Edit Profile - Spotify';
  const { user } = useContext(User);
  const [email, setEmail] = useState(user?.email);
  const [uname, setUname] = useState(user?.name);
  const [country, setCountry] = useState(user?.country);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <h1 className="overview-page-title">Edit profile</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'inherit', gap: 'inherit', flexDirection: 'inherit' }}
      >
        <BigInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <BigInput label="Username" value={uname} onChange={(e) => setUname(e.target.value)} />
        <BigInput
          label="Country"
          value={country}
          select
          onChange={(e) => setCountry(e.target.value)}
        >
          {CountryList.getNames().map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </BigInput>
        <BigButton text="Save" className="overview-save-button" loading={loading} />
      </form>
    </>
  );
};

export default Edit;
