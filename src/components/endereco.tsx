'use client';

import Image from 'next/image';
import styles from './endereco.module.css';
import Title from './Title';
import React from 'react';

export default function Endereco() {
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    const hora = new Date().getHours();
    if (hora > 8 && hora < 18) {
      setState(true);
    } else {
      setState(false);
    }
  }, []);

  return (
    <section id="contato" className={`${styles.bgEndereco}`}>
      <div className="container">
        <Title text="Endereco e Horarios" />

        <div className={styles.agendamentoContent}>
          <div className={styles.contentEndereco}>
            <ul className={styles.infoList}>
              <li>
                <span>Estado</span>
                <span>São Paulo</span>
              </li>
              <li>
                <span>Cidade</span>
                <span>São Paulo</span>
              </li>

              <li>
                <span>Bairro</span>
                <span>Alexandre Eimar Casa</span>
              </li>

              <li>
                <span>Rua</span>
                <span>Joaquin Fernandes Bandeira</span>
              </li>

              <li>
                <span>Atendimento</span>
                <span>Segunda a sexta das 08:00 as 17:00</span>
              </li>
            </ul>

            <div className={styles.state}>
              <span
                style={{ background: `${state ? 'green' : 'red'}` }}
                className={styles.ball}
              ></span>
              <span>{state ? 'ABERTO' : 'FECHADO'}</span>
            </div>
          </div>

          <div className={styles.imageEndereco}>
            <Image
              src={'/assets/images/barbershop-552-352.jpg'}
              alt="Imagem da barbearia"
              width={552}
              height={352}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
