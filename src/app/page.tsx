import MinimalHero from '../components/MinimalHero';
import SimpleAbout from '../components/SimpleAbout';
import SimpleContact from '../components/SimpleContact';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <MinimalHero />
        <SimpleAbout />
        <SimpleContact />
      </main>
      <Footer />
    </div>
  );
}
