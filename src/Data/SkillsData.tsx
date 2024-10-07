type examples = { [key: string]: string };

interface skills {
    ProgrammingLanguages: examples;
    ArtSoftware: examples;
    ProductivityTools: examples;
};


const Skills: skills = {
    ProgrammingLanguages: {
        Python: "https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png",
        Java: "https://brandslogos.com/wp-content/uploads/images/large/java-logo-1.png",
        React: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        CSS: "https://brandslogos.com/wp-content/uploads/images/large/css-logo.png",
        Typescript: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
        C: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
        Kotlin: "https://brandslogos.com/wp-content/uploads/images/large/kotlin-logo-1.png",
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