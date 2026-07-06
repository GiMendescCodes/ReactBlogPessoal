import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    function logout() {
        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate("/");
    }

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <nav className="w-full flex justify-center py-4 bg-[#4F46C8] text-white shadow-md">
                <div className="container flex justify-between items-center mx-8">

                    <Link
                        to="/home"
                        className="text-2xl font-bold transition-transform duration-200 hover:scale-105 relative
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-white
      hover:after:w-full after:transition-all after:duration-300"
                    >
                        Blog Pessoal
                    </Link>

                    <div className="flex items-center gap-6 text-lg">

                        {[
                            { to: "/postagens", label: "Postagens" },
                            { to: "/temas", label: "Temas" },
                            { to: "/cadastrartema", label: "Cadastrar tema" },
                            { to: "/perfil", label: "Perfil" },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="relative transition-transform duration-200 hover:scale-105
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-[2px] after:w-0 after:bg-white
          hover:after:w-full after:transition-all after:duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <button
                            onClick={logout}
                            className="relative transition-transform duration-200 hover:scale-105"
                        >
                            Sair
                        </button>

                    </div>
                </div>
            </nav>
        );
    }

    return <>{component}</>;
}

export default Navbar;