import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { EditNav, Nav } from "../components/Nav";
import { Hero, EditHero } from "../components/Hero";
import { EditMusic, Music } from "../components/Music";
import { EditVideo, Video } from "../components/Video";
import { EditFooter, Footer } from "../components/Footer";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

const Admin = () => {
  const { data, loading } = useFetch("/content.json");
  const [content, setContent] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

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

  const handlePublish = async () => {
    console.log(content);
    setIsPublishing(true);
  };

  return (
    <div className="relative flex h-screen flex-col">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        handlePublish={handlePublish}
        isPublishing={isPublishing}
      />

      <div className="mt-[59px] flex flex-grow">
        <Sidebar isSidebarOpen={isSidebarOpen}>
          <EditNav content={content} setContent={setContent} />
          <EditHero content={content} setContent={setContent} />
          <EditMusic content={content} setContent={setContent} />
          <EditVideo content={content} setContent={setContent} />
          <EditFooter content={content} setContent={setContent} />
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

export default Admin;
