import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Music from "../components/Music";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

const CMS = () => {
  const { data, loading } = useFetch("/content.json");
  const [content, setContent] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // État de la sidebar

  // Change le title SEO de la page
  useEffect(() => {
    setContent(data);
    document.title = "Admin - HumanBirds";
  }, [data]);

  if (loading || !content)
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-stone-100">
        Chargement...
      </div>
    );

  const handleSave = async () => {
    return;
    try {
      const response = await fetch("/api/updateContent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        alert("Changements sauvegardés !");
      } else {
        alert("Erreur lors de la sauvegarde.");
      }
    } catch (err) {
      alert("Erreur réseau : " + err.message);
    }
  };

  return (
    <div className="relative flex h-screen flex-col">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        handleSave={handleSave}
      />

      <div className="mt-[59px] flex flex-grow">
        <Sidebar isSidebarOpen={isSidebarOpen}>
          <h2 className="text-lg font-bold">Modifier le contenu</h2>
          <div className="mt-4">
            <label className="block font-medium">Titre :</label>
            <input
              type="text"
              value={content.music.title}
              onChange={(e) =>
                setContent({
                  ...content,
                  music: { ...content.music, title: e.target.value },
                })
              }
              className="mt-2 w-full rounded border p-2"
            />
          </div>
          <div className="mt-4">
            <label className="block font-medium">Texte à propos :</label>
            <textarea
              value={content.music.desc}
              onChange={(e) =>
                setContent({
                  ...content,
                  music: { ...content.music, desc: e.target.value },
                })
              }
              className="mt-2 w-full rounded border p-2"
            />
          </div>
        </Sidebar>

        <div className="bg-amber-600 bg-bkg bg-cover bg-center bg-no-repeat text-humanBird">
          <Nav data={content.nav} />
          <Hero data={content.hero} />
          <Music data={content.music} />
          <Video data={content.video} />
          <Footer data={content.footer} />
        </div>
      </div>
    </div>
  );
};

export default CMS;
