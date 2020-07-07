
import style from './description.module.css';

const Description = () => {
  return (
    <div className={style.description}>
      <div className={style.window}>
        <div className={style.blackBg}></div>
        <div>
          OGON PUSHKA
        </div>
        <p>
          Это то, в чем ты точно будешь сворачивать головы этим летом.
          <br/>
          Сочная подборка максимально востребованных цветов и стилей.
        </p>
      </div>
    </div>
  )
};

export default Description;