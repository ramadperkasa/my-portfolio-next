import Home from './section/home/home';
import Feature from './section/feature/feature';
import Portfolio from './section/portfolio/portfolio';
import Resume from './section/resume/resume';
import Collaborate from './section/collaborate/collaborate';
import Certificate from './section/certificate/certificate';
import Divider from './components/divider';

export default function Page() {
  return (
    <>
      <Home />

      <Feature />

      <Divider />

      <Portfolio />

      <Divider />

      <Resume />

      <Divider />

      <Certificate />

      <Divider />

      <Collaborate />
    </>
  );
}
