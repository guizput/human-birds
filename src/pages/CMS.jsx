import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Music from "../components/Music";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";
import FileInput from "../ui/FileInput";
import ToggleElement from "../ui/ToggleElement";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";

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
          <ToggleElement title="Hero">
            <FileInput
              title="Image"
              options={{
                maxSizeMB: 1,
                maxWidthOrHeight: 1600,
                useWebWorker: true,
              }}
              onChange={(value) =>
                setContent({
                  ...content,
                  hero: {
                    desktop: value,
                    mobile: value,
                  },
                })
              }
            />
          </ToggleElement>

          <ToggleElement title="Music">
            <TextInput
              title="Titre"
              value={content.music.title}
              onChange={(e) =>
                setContent({
                  ...content,
                  music: { ...content.music, title: e.target.value },
                })
              }
            />
            <TextArea
              title="Texte"
              value={content.music.desc}
              onChange={(e) =>
                setContent({
                  ...content,
                  music: { ...content.music, desc: e.target.value },
                })
              }
            />
          </ToggleElement>
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
