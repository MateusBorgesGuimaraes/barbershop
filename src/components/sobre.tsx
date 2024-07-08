import CardSobre from './CardSobre';
import styles from './sobre.module.css';

export default function Sobre() {
  return (
    <section id="sobre" className={` ${styles.sobreContainer} container`}>
      <CardSobre
        path="/assets/images/barbeiro380-280.jpg"
        alt="barbeiro limpando as ferramentas"
        title="Prossional de primeira"
        icon="/assets/icons/brush-40.svg"
        iconAlt="icon de um pincel de barbeiro"
        content="Um cabeleireiro profissional é um artista e especialista em cuidados
          capilares, habilidoso na arte de cortar, colorir e estilizar cabelos
          de acordo com as preferências e características de cada cliente. Este
          profissional possui uma formação técnica em cosmetologia, além de
          frequentemente participar de cursos de atualização para se manter
          informado sobre as últimas tendências e técnicas do mercado."
      />

      <CardSobre
        path="/assets/images/ferramentas-380-280.jpg"
        even={true}
        alt="Ferramentas de corte de cabelo"
        title="Ferramentas de alta qualidade"
        icon="/assets/icons/tools-40.svg"
        iconAlt="Icon de uma tesoura e pente"
        content="As ferramentas de um cabeleireiro incluem tesouras profissionais, máquinas de cortar cabelo, pentes, escovas, secadores, chapinhas e babyliss. Essas ferramentas precisam ser de alta qualidade para garantir precisão e eficiência no trabalho. A higienização é essencial: tesouras e pentes devem ser desinfetados após cada uso, as lâminas das máquinas esterilizadas regularmente, e escovas lavadas com água quente e sabão. Manter essas ferramentas limpas assegura a segurança dos clientes e a durabilidade dos equipamentos."
      />

      <CardSobre
        path="/assets/images/ambiente-380-280.jpg"
        alt="salão de cortar cabelo, ambientação"
        title="Ambiente aconchegante"
        icon="/assets/icons/pole-40.svg"
        iconAlt="icon de um poste de barbeiro"
        content="A  nossa barbearia oferece um ambiente aconchegante com um tema rústico e tradicional, decorado com quadros vintage e enfeites de madeira que evocam uma sensação nostálgica. O mobiliário robusto e os detalhes artesanais realçam o charme antigo. A limpeza impecável garante um espaço seguro e convidativo, proporcionando uma experiência autêntica e visualmente agradável."
      />
    </section>
  );
}
