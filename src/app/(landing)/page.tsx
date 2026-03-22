import Hero from './hero';
import LandingSections from './landing-sections';

export default function Home() {
  return (
    <div className='bg-[url(/images/home/background.webp)] bg-center bg-cover'>
      <Hero />
      <LandingSections />
    </div>
  );
}
