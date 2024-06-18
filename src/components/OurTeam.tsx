import Image from "next/image"
import teamImg from "../../public/assets/images/team/1.jpg"

const OurTeam = () => {
const teamData = [
    {
        title: "Jonathan Scot",
        name: "CEO",
        image: teamImg,
        socials: [
            {
                linkedin: "#",
                facebook: "#",
                twitter: "#"
            }
        ]
    },
        {
        title: "Oliver Bastin",
        name: "Designer",
        image: teamImg,
        socials: [
            {
                linkedin: "#",
                facebook: "#",
                twitter: "#"
            }
        ]
    },
        {
        title: "Eric Johnson",
        name: "Developer",
        image: teamImg,
        socials: [
            {
                linkedin: "#",
                facebook: "#",
                twitter: "#"
            }
        ]
    },
        {
        title: "John Doe",
        name: "Marketing Officer",
        image: teamImg,
        socials: [
            {
                linkedin: "#",
                facebook: "#",
                twitter: "#"
            }
        ]
    },
]


    return (
        <div>
            <div className="w-[90%] mx-auto flex flex-col gap-10 mt-8">
                <div className="text-center">

                    <h1 className="text-2xl">Our Team</h1>
                    <p className="text-sm mt-2">Accumsan vitae pede lacus ut ullamco</p>
                </div>
                <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 pb-14 md:pb-20">
                    {
                     teamData.map(teammember=>(
                        <div key={teammember.name} className="">
                            <Image src={teammember.image} alt={teammember.name} />
                            <h4 className="text-lg">{teammember.name}</h4>
                            <p className="text-primary">{teammember.title}</p>
                        </div>
                     ))   
                    }
                </div>
            </div>
        </div>

    )
}

export default OurTeam