import styles from './button.module.css';

const Button = ({text, white}) => {
  return (
      white ?
      <div className={styles.button} style={{"backgroundColor" : "#fff", "color" : "#141414"}} onClick={() => console.log(text)}>
        {text}
      </div> :
      <div className={styles.button} onClick={() => console.log(text)}>
        {text}
      </div>
  )
};
export default Button;