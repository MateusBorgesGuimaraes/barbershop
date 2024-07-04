import Image from 'next/image';
import styles from './precos.module.css';
import Title from './Title';
import CardPreco from './CardPreco';

export default function Precos() {
  return (
    <section className={styles.precosBg}>
      <div className="container">
        <div>
          <div className={styles.containerTitle}>
            <Title text="Cortes Mais Pedidos" />
            <Image
              src={'/assets/icons/dec-400-38e69.svg'}
              alt="decoração"
              width={400}
              height={38.69}
            />
          </div>
          <div className={styles.containerPrecos}>
            <CardPreco
              path="/assets/icons/corte-classico-120.svg"
              title="Corte Classico Masculino"
              alt="icon representando um corte de cabelo classico"
              content="O Corte Clássico Masculino é ideal para quem busca um visual
                  tradicional e elegante. O corte é feito com tesoura, mantendo
                  um comprimento médio a curto, e finalizado com um penteado
                  alinhado e polido."
              price="R$ 50,00"
            />

            <CardPreco
              path="/assets/icons/corte-fade-120.svg"
              title="Corte Fade Masculino"
              alt="icon representando um corte de cabelo estilo Fade"
              content="O Corte Fade é uma opção moderna e versátil, caracterizado pelo degradê suave das laterais e da nuca para o topo da cabeça. Pode ser combinado com diversos estilos de cabelo na parte superior."
              price="R$ 60,00"
            />

            <CardPreco
              path="/assets/icons/corte-undercut-120.svg"
              title="Corte Undercut"
              alt="icon representando um corte de cabelo undercut"
              content="O Corte Undercut possui as laterais e a parte de trás da cabeça raspadas ou bem curtas, com o topo do cabelo mantido mais longo. Esse estilo proporciona um contraste marcante e é ideal para quem gosta de um visual arrojado."
              price="R$ 70,00"
            />

            <CardPreco
              path="/assets/icons/corte-desing-e-barba-120.svg"
              title="Corte e Design de Barba"
              alt="icon representando um corte e desing de barba"
              content="A Aparação e Design de Barba inclui a modelagem da barba de acordo com o formato do rosto, utilizando técnicas de tesoura e máquina. O serviço também inclui a limpeza e hidratação da barba."
              price="R$ 40,00"
            />

            <CardPreco
              path="/assets/icons/barba-completa-120.svg"
              title="Barba Completa  Navalha"
              alt="icon representando um corte de barba completa com navalha"
              content="O Corte Fade é uma opção moderna e versátil, caracterizado pelo degradê suave das laterais e da nuca para o topo da cabeça. Pode ser combinado com diversos estilos de cabelo na parte superior."
              price="R$ 55,00"
            />

            <CardPreco
              path="/assets/icons/combo-120.svg"
              title="Combo Completo"
              alt="icon representando um combo completo de barba e cabelo"
              content="O Combo Completo inclui um corte de cabelo à escolha do cliente (Clássico, Fade ou Undercut) e o serviço completo de barba (aparado ou com navalha). Ideal para quem quer um visual renovado e completo."
              price="R$ 100,00"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
