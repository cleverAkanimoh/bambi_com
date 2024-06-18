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
            </div>
        </div>

    )
}

export default OurTeam