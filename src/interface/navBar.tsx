

interface NavItems {
    lable: string,
    link ?: string,
    child ?: NavItems[];
}

export const navItems: NavItems[] = [
    {
        lable: "Home",
        link: "/home"
    },
    {
        lable: "Patients",
        child: [
            {
                lable: "Add Patient",
                link: "/patients/add"
            },
            {
                lable: "View Patients",
                link: "/patients"
            }
        ]
    }, 
    {
        lable: "Doctors",
        child: [
            {
                lable: "Add Doctor",
                link: "/doctors/add"
            },
            {
                lable: "View Doctors",
                link: "/doctors"
            }
        ]
    } 
]  