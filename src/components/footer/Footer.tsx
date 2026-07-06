import { useContext, type ReactNode } from "react";
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {

    const data = new Date().getFullYear();

    const { usuario } = useContext(AuthContext);

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <footer className="flex justify-center bg-[#4F46C8] text-white">
                <div className="container flex flex-col items-center gap-2 py-6">
                    <p className="text-xl font-bold">
                        Blog Pessoal Generation | Copyright © {data}
                    </p>

                    <p className="text-lg text-[#E8E6FF]">
                        Acesse nossas redes sociais
                    </p>

                    <div className="mt-2 flex gap-4">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#E8E6FF]"
                        >
                            <LinkedinLogoIcon size={36} weight="fill" />
                        </a>

                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#E8E6FF]"
                        >
                            <InstagramLogoIcon size={36} weight="fill" />
                        </a>

                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#E8E6FF]"
                        >
                            <FacebookLogoIcon size={36} weight="fill" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }

    return <>{component}</>;
}

export default Footer;