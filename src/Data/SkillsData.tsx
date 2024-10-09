export interface examples {
    [key: string]: string
};

export interface skills {
    [key: string]: examples
};


const Skills: skills = {
    ProgrammingLanguages: {
        Python: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png",
        Java: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
        React: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        CSS: "https://img.icons8.com/color/512/css3.png",
        Typescript: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
        C: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
        Kotlin: "https://user-images.githubusercontent.com/103866722/177941491-1947c6b0-6e38-4880-8bd7-01dac36165df.png",
    },

    ArtSoftware: {
        Blender: "https://logos-world.net/wp-content/uploads/2023/05/Blender-Logo.png",
        MarvelousDesigner: "https://www.cybermania.ws/wp-content/uploads/MarvelousDesigner.png",
        Photoshop: "https://logodownload.org/wp-content/uploads/2019/10/adobe-photoshop-logo-0.png",
        SubtancePainter: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-substance-3d-painter-icon.png",
    },

    ProductivityTools: {
        Github: "https://pngimg.com/uploads/github/github_PNG23.png",
        MicrosoftOffice: "https://quickerpthailand.com/wp-content/uploads/2023/05/Microsoft-365-2.png",
        Notion: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        GoogleWorkspace: "https://serversaurus.com.au/wp-content/uploads/2019/04/google-workspace-logo.png"
    }

};

export { Skills };