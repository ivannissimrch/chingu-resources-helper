export default function Footer() {
  const contributors = [
    {
      avatar: "/images/contibutors/AlexThomas.jpeg",
      name: "Alex Thomas",
      role: "Scrum Master",
      link: "https://linkedin.com/in/ajt11176",
      github: "https://github.com/BagelTime",
    },
    {
      avatar: "/images/contibutors/WaelKweder.jpeg",
      name: "Wael Kweder",
      role: "Frontend Developer",
      link: "https://linkedin.com/in/wael-kweder-a63836339/",
      github: "https://github.com/WDataW",
    },

    {
      avatar: "/images/contibutors/EmilyCarr.jpeg",
      name: "Emily Carr",
      role: "Web Developer",
      link: "https://www.linkedin.com/in/emily-c-2285a9277/",
      github: "https://github.com/codingEmily",
    },

    {
      avatar: "/images/contibutors/bhoyem.jpeg",
      name: "Bryan Hoyem",
      role: "Developer",
      link: "https://www.linkedin.com/in/bryanhoyem",
      github: "https://github.com/bhoyem",
    },
    {
      avatar: "/images/contibutors/Ivan.jpeg",
      name: "Ivan Rebolledo",
      role: "Frontend Developer",
      link: "https://github.com/ivannissimrch",
      github: "https://github.com/ivannissimrch",
    },
    {
      avatar: "/images/contibutors/JugrajSinghBali.jpeg",
      name: "Jugraj Singh Bali ",
      role: "Web Developer",
      link: "https://www.linkedin.com/in/jugraj-singh-bali-117994268/",
      github: "https://github.com/jugrajsinghbali",
    },
    {
      avatar: "/images/contibutors/MatthewNeie.jpeg",
      name: "Matthew Neie",
      role: "Web Developer",
      link: "https://www.linkedin.com/in/matthew-neie",
      github: "https://github.com/MatthewNeie",
    },
  ];

  return (
    <footer className="gap-4 p-6 bg-gray-800 text-white">
      <h2 className="mb-2 flex justify-center text-2xl">Meet our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {contributors.map((contributor, index) => (
          <section
            key={index}
            className="flex items-center justify-evenly  hover:bg-gray-600 transition-colors duration-100 min-w-fit "
          >
            <img
              src={contributor.avatar}
              alt={contributor.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="m-2">
              <p className=" text-sm font-medium">{contributor.name}</p>
              <p className="text-xs text-gray-400">{contributor.role}</p>
            </div>
            <div className="flex gap-2">
              <a className="text-sm" href={contributor.github}>
                <img
                  src="/images/github-mark.png"
                  alt="GitHub"
                  className="w-8 h-8 bg-white rounded object-cover p-0.5"
                />
              </a>
              <a className="text-sm" href={contributor.link}>
                <img
                  src="/images/LinkedIn.png"
                  alt="LinkedIn"
                  className="w-8 h-8 bg-white  rounded object-cover"
                />
              </a>
            </div>
          </section>
        ))}
      </div>
      <section className="flex mt-2">
        <div className="w-screen flex gap-4 justify-center md:justify-end items-center">
          {" "}
          <a href="https://github.com/chingu-voyages/v59-tier2-team-23">
            Go to the project repo
          </a>
          <a href="https://github.com/chingu-voyages/v59-tier2-team-23">
            <img
              src={"/images/github-mark.png"}
              alt={"github"}
              className="w-6 h-6 rounded-full object-cover bg-white"
            />
          </a>
        </div>
        {/* <div className="w-1/2 flex justify-end">
          {" "}
          <img
            src={"/images/Chingu.png"}
            alt={"github"}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div> */}
      </section>
    </footer>
  );
}
