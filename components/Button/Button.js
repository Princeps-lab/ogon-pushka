import styles from './button.module.css';

const Button = ({text}) => {
  return (
    <div className={styles.button} onClick={() => console.log(text)}>
      {text}
    </div>
  )
};

export default Button;