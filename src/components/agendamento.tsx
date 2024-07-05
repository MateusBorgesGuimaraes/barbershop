import Image from 'next/image';
import styles from './agendamentto.module.css';
import Title from './Title';

export default function Agendamento() {
  return (
    <section className={`${styles.agendamentoContainer} container`}>
      <div className={styles.agendamentoTitleContainer}>
        <Title text="Agende o seu corte agora" />
        <Image
          src={'/assets/icons/dec-400-38e69.svg'}
          alt="decoração"
          width={400}
          height={38.69}
        />
      </div>
      <div className={styles.agendamentoContent}>
        <div className={styles.photoAgendamento}>
          <Image
            src={'/assets/images/agendar-557-625.jpg'}
            alt="Cadeira de cabelereiro"
            width={556}
            height={625}
          />
        </div>

        <form className={styles.form}>
          <div>
            <label htmlFor="">NOME</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">EMAIL</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="">DATA</label>
            <input type="date" />
          </div>

          <div>
            <label htmlFor="">HORARIO</label>
            <input type="time" />
          </div>

          <div>
            <label htmlFor="">MENSAGEM(opcional)</label>
            <textarea name="" id=""></textarea>
          </div>
          <button>AGENDAR</button>
        </form>
      </div>
    </section>
  );
}
