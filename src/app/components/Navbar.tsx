import react from "react";
import { useRouter } from "next/navigation";
import "./navbar.css";

export default function Navbar() {
 const router = useRouter();

    return (
        <nav className="navbar">
            <button onClick={() => router.push("/portfolio")}>Portfolio</button>
        </nav>
    );
}