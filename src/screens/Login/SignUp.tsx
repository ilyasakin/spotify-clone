import { useState, useContext } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import CountryList from 'country-list';
import User from '../../context/User';
import BigButton from '../../components/BigButton/BigButton';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState<Date | Date[]>(new Date());
  const [selectedCountry, setCountry] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(User);
  const history = useHistory();
  const [, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/users/signup`, {
        name: username,
        email,
        password,
        birthDate,
        country: selectedCountry,
      })
      .then((res: AxiosResponse) => {
        setLoading(false);
        setUser?.(res.data);
        history.push('/player');
      })
      .catch((res: AxiosError) => {
        setLoading(false);
        setError(res?.response?.data.error);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'inherit', gap: 'inherit', flexDirection: 'inherit' }}
      >
        <input
          className="spot-input"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="spot-input"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="spot-input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <h5 className="subtitle">Date of birth</h5>
        <DatePicker
          value={birthDate}
          onChange={(e: Date | Date[]) => setBirthDate(e)}
          className="datepicker"
        />
        <h5 className="subtitle">Country</h5>
        <select
          id="countries"
          className="spot-input"
          style={{ paddingTop: '5px', paddingBottom: '5px' }}
          onChange={(e) => setCountry(e.currentTarget.value)}
        >
          {CountryList.getNames().map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <BigButton text="Sign up" loading={isLoading} />
      </form>
    </>
  );
};

export default SignUp;
