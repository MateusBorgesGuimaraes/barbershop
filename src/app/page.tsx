import Precos from '@/components/precos';
import HeroSection from '../components/hero';
import Sobre from '@/components/sobre';
import Agendamento from '@/components/agendamento';
import Endereco from '@/components/endereco';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Sobre />
      <Precos />
      <Agendamento />
      <Endereco />
    </main>
  );
}
