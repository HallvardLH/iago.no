import Image from "next/image";

type Links = {
    label: string;
    button?: boolean;
    dropdown?: boolean;
}

type NavbarProps = {
    logo?: string;
    logoText?: string;
    links?: Array<Links>;
}

export default function Navbar({logo, logoText, links}: NavbarProps) {
    return(
        <nav className="h-24 px-standard sticky top-0 bg-background-color flex content-center justify-between z-10">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}
            />
            <div className="flex gap-10 items-center">
                <div className="">
                    Hjem
                </div>
                <div>
                    Om oss
                </div>
                <div>
                    Tjenester
                </div>
                <div>
                    Portefølje
                </div>
            </div>
        </nav>
    )
}