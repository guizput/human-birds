import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Nav from "./components/Nav";
import Video from "./components/Video";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading } = useFetch("/content.json");

  if (loading) return <p>Chargement...</p>;

  return (
    <>
      <Nav data={data.nav} />
      <Hero data={data.hero} />
      <Music data={data.music} />
      <Video data={data.video} />
      <Footer data={data.footer} />
    </>
  );
}

export default App;
