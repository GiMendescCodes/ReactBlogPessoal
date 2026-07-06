import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
import loginGif from '../../assets/login.gif';

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    useEffect(() => {
        if (usuario.token !== "") {
            navigate("/home");
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

            <div className="flex items-center justify-center bg-[#E8E6FF]">
                <form
                    className="flex w-4/5 max-w-md flex-col gap-5 rounded-2xl bg-white p-10 shadow-lg"
                    onSubmit={login}
                >
                    <h2 className="text-center text-5xl font-bold text-[#5E4FE3]">
                        Entrar
                    </h2>

                    <div className="flex flex-col">
                        <label htmlFor="usuario" className="mb-2 font-semibold text-[#2D2D2D]">
                            Usuário
                        </label>

                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite seu usuário"
                            className="rounded-lg border-2 border-[#D8D4FF] p-3 outline-none focus:border-[#7C6CF2]"
                            value={usuarioLogin.usuario}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="senha" className="mb-2 font-semibold text-[#2D2D2D]">
                            Senha
                        </label>

                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            className="rounded-lg border-2 border-[#D8D4FF] p-3 outline-none focus:border-[#7C6CF2]"
                            value={usuarioLogin.senha}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex justify-center rounded-xl bg-[#7C6CF2] py-3 font-semibold text-white transition hover:bg-[#5E4FE3]"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>

                    <hr className="border-[#D8D4FF]" />

                    <p className="text-center text-[#2D2D2D]">
                        Ainda não tem uma conta?{" "}
                        <Link
                            to="/cadastro"
                            className="font-semibold text-[#5E4FE3] hover:underline"
                        >
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>

            <div className="hidden lg:flex items-center justify-center bg-white">
                <img
                    src={loginGif}
                    alt="Login"
                    className="w-3/4"
                />
            </div>

        </div>
    );
}

export default Login;