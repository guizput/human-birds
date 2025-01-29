import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Music } from "../components/Music";
import Nav from "../components/Nav";
import { Video } from "../components/Video";
import useFetch from "../hooks/useFetch";

function Home() {
  const { data, loading } = useFetch("/content.json");

  if (loading)
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-stone-100">
        Chargement...
      </div>
    );

  return (
    <div class="bg-amber-600 bg-bkg bg-cover bg-center bg-no-repeat text-humanBird">
      <Nav data={data.nav} />
      <Hero data={data.hero} />
      <Music data={data.music} />
      <Video data={data.video} />
      <Footer data={data.footer} />
    </div>
  );
}

export default Home;
