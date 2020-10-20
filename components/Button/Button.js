import styles from './button.module.css';

const Button = ({text, white}) => {
  return (
      white ?
      <div className={styles.button} style={{"backgroundColor" : "#fff", "color" : "#141414"}}>
        {text}
      </div> :
      <div className={styles.button}>
        {text}
      </div>
  )
};
export default Button;