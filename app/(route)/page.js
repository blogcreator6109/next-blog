import MainBackground from "./_components/MainBackground";
import MainHeader from "./_components/MainHeader";
import Dock from "./_components/Dock";
import "./page.scss";

export default function Home() {
  return (
    <main className="Home">
      <MainBackground />
      <MainHeader />
      <Dock />
    </main>
  );
}
