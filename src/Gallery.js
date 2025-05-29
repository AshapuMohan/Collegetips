import React, { useState, useEffect } from "react";

const galleryData = [
  {
    src: "/Collegetips/team1.png",
    category: "Team Vibes",
    title: "Our Yellow Day!",
  },
  {
    src: "/Collegetips/team2.png",
    category: "Team Vibes",
    title: "Collab Energy",
  },
  {
    src: "/Collegetips/team3.png",
    category: "Team Vibes",
    title: "Collab Energy",
  },
  {
    src: "/Collegetips/team4.png",
    category: "Team Vibes",
    title: "Collab Energy",
  },
  {
    src: "/Collegetips/team5.png",
    category: "Team Vibes",
    title: "Collab Energy",
  },
  {
    src: "/Collegetips/campaign1.png",
    category: "Creative Campaigns",
    title: "Interns Behindbhrs",
  },
  {
    src: "/Collegetips/campaign2.png",
    category: "Creative Campaigns",
    title: "Color Vibes",
  },
  {
    src: "/Collegetips/fun1.png",
    category: "Work Hard, Play Hard",
    title: "Game On!",
  },
  {
    src: "/Collegetips/fun2.png",
    category: "Work Hard, Play Hard",
    title: "Office LOLs",
  },
  {
    src: "/Collegetips/fun3.png",
    category: "Work Hard, Play Hard",
    title: "Office LOLs",
  },
  {
    src: "/Collegetips/fun4.png",
    category: "Work Hard, Play Hard",
    title: "Office LOLs",
  },
  {
    src: "/Collegetips/fun5.png",
    category: "Work Hard, Play Hard",
    title: "Office LOLs",
  },
  {
    src: "/Collegetips/fun6.png",
    category: "Work Hard, Play Hard",
    title: "Office LOLs",
  },
  {
    src: "/Collegetips/fun7.png",
    category: "Work Hard, Play Hard",
    title: "Office LOLs",
  },
  {
    src: "/Collegetips/behind1.png",
    category: "Behind-The-Scenes",
    title: "Camera Rolling",
  },
  {
    src: "/Collegetips/behind2.png",
    category: "Behind-The-Scenes",
    title: "Camera Rolling",
  },
  {
    src: "/Collegetips/behind3.png",
    category: "Behind-The-Scenes",
    title: "Camera Rolling",
  },
  {
    src: "/Collegetips/behind4.png",
    category: "Behind-The-Scenes",
    title: "Camera Rolling",
  },
  {
    src: "/Collegetips/behind5.png",
    category: "Behind-The-Scenes",
    title: "Camera Rolling",
  },
];

const categories = ["All", ...new Set(galleryData.map((img) => img.category))];

export default function Gallery() {
  const [selected, setSelected] = useState("All");

  const filteredImages =
    selected === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === selected);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "");
    document.body.appendChild(script);

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-800">📸 Collegetips Photo Gallery</h1>

      <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto gap-2 sm:justify-center mb-8 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200 ${
              selected === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white px-3 py-2 text-sm font-medium">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <blockquote
          className="instagram-media w-full max-w-md"
          data-instgrm-permalink="https://www.instagram.com/p/Bk5KmT0gdhQ/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 6,
            boxShadow: "0 0 4px rgba(0,0,0,0.1)",
            margin: "0 auto",
            minWidth: "326px",
            maxWidth: "100%",
            width: "100%",
          }}
        ></blockquote>
      </div>
    </section>
  );
}
