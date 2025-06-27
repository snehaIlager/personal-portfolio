import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import ResumeButton from './components/ResumeButton';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-cream-light">
      <Header />
      <section className="w-full max-w-3xl px-4 mt-24">
        <AboutMe />
        <Projects />
        <Skills />
        <Timeline />
        <div className="flex justify-center my-8">
          <ResumeButton />
        </div>
      </section>
    </main>
  );
}