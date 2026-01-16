import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Product Designer, Tailwind",
        location: "Remote",
        startYear: "2022",
        endYear: "Present",
        bulletPoints: [
            "Led end-to-end redesign of dashboard UI, improving user retention by 23%",
            "Collaborated with engineers and product managers to ship features faster",
            "Designed components used in a system adopted by 4+ internal teams"
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "UI/UX Designer - Asana",
        location: "New York, NY",
        startYear: "2019",
        endYear: "2022",
        bulletPoints: [
            "Created design systems for client projects across finance and healthcare",
            "Conducted user testing and research to validate designs",
            "Helped junior designers grow via mentorship"
        ]
    },
]

const educationData = [
    {
        date: "Sep 2023 - Actualmente",
        title: "Universidad Autonoma de Aguascalientes",
        subtitle: "Diseñadora Gráfico",
    }
];


const projectOverview = {
    caseStudies: [
        
    ],
    sideProjects: [
        { name: "Chupa Chups Concepto", url: "https://drive.google.com/file/d/1rLzl-W9GMLNE5-V0aHB-jitpU7Bs5TUu/view?pli=1" },
        { name: "Ecoturismo Desplegable", url: "https://drive.google.com/file/d/1zk_C_ctJ6P6euywIdYNsCgpvGcXW0VF4/view"},
        { name: "La cuidad como obra de arte", url: "https://drive.google.com/file/d/1w9_6TTEmHHRA8o2H3ACVbUdm2ZPu9D04/view"},
        { name: "Cuidades Coloniales", url: "https://drive.google.com/file/d/1eGpFE1H14Kk159AP-ypvw9g4_lIgqqy0/view"},
        { name: "Periodico Brutalista", url: "https://drive.google.com/file/d/1CMumLSzq7Nb7s2INStSGA8rE8u9NkoaJ/view"},
        { name: "Tripico Museo Espacio", url: "https://drive.google.com/file/d/12eVhwSwJzq0m6-eKemGsZSdAuL3VzIQn/view"},
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};