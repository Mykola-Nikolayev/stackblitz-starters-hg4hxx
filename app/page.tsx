import Image from 'next/image';
import './page.css'; // Assurez-vous que le chemin est correct et le fichier existe

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono text-sm lg:flex">
        <h1>Hello</h1>
      </div>
    </main>
  );
}

