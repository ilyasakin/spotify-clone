import '../../styles/App.scss';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import styles from '../../styles/Overview.module.scss';
import TopbarAlt from '../../components/TopbarAlt/TopbarAlt';
import HeroOverview from '../../components/Hero/Hero';
import Page from '../../containers/Page/Page';
import Account from './Account';
import Edit from './Edit';
import Sidebar from './Sidebar';

const Overview: React.FC = () => {
  const match = useRouteMatch();

  return (
    <div className={styles['overview-background']} style={{ height: '100%' }}>
      <TopbarAlt />
      <div className={styles['overview-wrapper']}>
        <HeroOverview
          HeroTitle="Hello!"
          HeroBody="Want to edit your profile? Find an old playlist? Put off work for a while? You can do it all here."
        />
        <div className={styles['overview-page-wrapper']}>
          <Sidebar />
          <Page>
            <Switch>
              <Route path={`${match.path}/account`}>
                <Account />
              </Route>
              <Route path={`${match.path}/edit`}>
                <Edit />
              </Route>
              <Route path={`${match.path}/`}>
                <Redirect to={`${match.url}/account`} />
              </Route>
            </Switch>
          </Page>
          {/* TODO: FOOTER */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
