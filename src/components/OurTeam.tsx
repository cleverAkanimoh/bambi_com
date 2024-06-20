import Image from "next/image";
import teamImg from "../../public/assets/images/team/1.jpg";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";

const OurTeam = () => {
  const teamData = [
    {
      name: "Jonathan Scott",
      title: "CEO",
      image: teamImg,
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "Oliver Bastin",
      title: "Designer",
      image: teamImg,
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "Eric Johnson",
      title: "Developer",
      image: teamImg,
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      name: "John Doe",
      title: "Marketing Officer",
      image: teamImg,
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="bg-white  pt-16 pb-8">
      <div className="w-[90%] mx-auto flex flex-col gap-10 mt-8">
        <div className="text-center">
          <h1 className="text-2xl">Our Team</h1>
          <p className="text-sm mt-2">Accumsan vitae pede lacus ut ullamco</p>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 pb-14 md:pb-20 text-center">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="group transition-all ease-in-out duration-200"
            >
              <Image
                className="group-hover:h-[60%] group-hover:opacity-85 ease-in-out transition-transform duration-200"
                src={member.image}
                alt={member.name}
              />
              <div className="justify-center gap-4 mt-2 hidden opacity-0 pointer-events-none translate-y-[20%] group-hover:flex group-hover:pointer-events-auto group-hover:translate-y-[0%] group-hover:opacity-100 transition-all ease-in-out duration-200">
                <Link
                  className="text-[#222] hover:bg-primary hover:text-white p-2 grid place-items-center text-center bg-slate-100 shadow rounded-md"
                  href={member.socials.linkedin}
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  className="text-[#222] hover:bg-primary hover:text-white p-2 grid place-items-center text-center bg-slate-100 shadow rounded-md"
                  href={member.socials.facebook}
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="text-[#222] hover:bg-primary hover:text-white p-2 grid place-items-center text-center bg-slate-100 shadow rounded-md"
                  href={member.socials.twitter}
                >
                  <TiSocialTwitter />
                </Link>
              </div>
              <h4 className="text-lg mt-4 text-center">{member.name}</h4>
              <p className="text-primary text-center">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
