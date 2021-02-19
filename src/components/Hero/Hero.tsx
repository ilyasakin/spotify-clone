import styles from './Hero.module.scss';

const Hero: React.FC<{ HeroTitle: string; HeroBody: string }> = ({ HeroTitle, HeroBody }) => {
  return (
    <div className={styles.hero}>
      <div style={{ alignSelf: 'center' }}>
        <h2 className={styles.title}>{HeroTitle}</h2>
        <p className={styles.body}>{HeroBody}</p>
      </div>
    </div>
  );
};

export default Hero;
