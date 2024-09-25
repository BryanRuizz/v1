export interface projectsInterfaces {
    href: string,
    name: string,
    label: string,
    desc: string
    srcsett: string,
    mainimg: string
}

export interface allprojects {
    Title: string;
    date:string;
    Img: string;
    ImgDesc: string;
    Uri: string;
    Github: string;
    GeneralDescription: string;
    Button: string;
    index: string[];
}
// 
export interface ProjectInfo {
    P: string;
    ref: string;
    img: string;
    p2: string;
    ref2: string;
    images: string[];
}

export interface Project {
    Title: string;
    date: string;
    Img: string;
    ImgDesc: string;
    Uri: string;
    Github: string;
    GeneralDescription: string;
    Button: string;
    index: string[];
    info: ProjectInfo;
}
