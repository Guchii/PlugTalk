import { useState } from "react";
import { auth, provider } from "./firebase";
import "./login.css";
const LoginPage = ({ toggleLogin }) => {
    const [name, setName] = useState("");
    const signIn = (e) =>{
        auth.signInWithPopup(provider)
    }
    return (
        <div className="login-container">
            <nav
                className="navbar navbar-light"
                style={{ backgroundColor: "#4CAB78" }}
            >
                <div className="container-fluid d-flex justify-content-center text-light">
                    <span className="navbar-brand mb-0 h1 fs-2 text-white">
                        Plug Talk
                    </span>
                </div>
            </nav>
            <div
                className="d-flex align-items-center justify-content-center"
                style={{
                    backgroundColor: " #04000A",
                    height: "calc(100vh - 80px - 56px)",
                    margin: 0,
                    padding: 0,
                }}
            >
                <div className="text-center">
                    <p className="fs-4 text-light">
                        Hello {name ? name : "Friend"}
                    </p>
                    <form action="" className="">
                        <div className="mb-3">
                            <input
                                className="form-control bg-dark text-light"
                                type="text"
                                placeholder="UserName"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                className="form-control bg-dark text-light"
                                type="text"
                                placeholder="Password"
                            />
                        </div>
                        <div className="btn-group mt-2">
                            <button
                                onClick={toggleLogin}
                                className="btn btn-dark"
                            >
                                Login
                            </button>
                            <button
                                onClick={toggleLogin}
                                className="btn btn-dark"
                            >
                                Signup
                            </button>
                        </div>
                    </form>
                    <button className="btn bg-warning mt-4" onClick={signIn}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-google"
                            viewBox="0 0 16 16"
                        >
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
            <footer class="footer mt-auto py-3 bg-dark">
                <div class="container d-flex justify-content-end">
                    <span class="text-muted">v 1.0.0</span>
                </div>
            </footer>
        </div>
    );
};

export default LoginPage;
