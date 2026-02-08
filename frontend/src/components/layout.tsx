import { Link, Outlet, useLocation } from "react-router-dom";
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Menu,
    X
} from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-[#10b981]/30">
            {/* NAVBAR */}
            <nav className="fixed top-0 w-full z-50 bg-[#061d1d]/95 backdrop-blur-md border-b border-white/5 shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2 group">
                            <img src="/images/logo.png" alt="EFICORP-PCGerente" className="h-28" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-10">
                            <Link to="/" className="text-lg text-white/90 hover:text-[#10b981] font-medium transition-colors">Inicio</Link>
                            <Link to="/servicios" className="text-lg text-white/90 hover:text-[#10b981] font-medium transition-colors">Servicios</Link>
                            <Link to="/sistema" className="text-lg text-white/90 hover:text-[#10b981] font-medium transition-colors">PC-Gerente</Link>
                            <Link to="/nosotros" className="text-lg text-white/90 hover:text-[#10b981] font-medium transition-colors">Nosotros</Link>
                            <Link to="/contacto" className="inline-flex items-center px-8 py-3 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-lg shadow-[#10b981]/20 hover:scale-105 active:scale-95 font-semibold text-base">
                                Contáctanos
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-3 text-white/90 hover:text-[#10b981] transition-colors"
                            >
                                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-24 left-0 w-full bg-[#061d1d] border-b border-white/5 shadow-xl py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-xl font-medium text-white/80 hover:text-[#10b981]">Inicio</Link>
                        <Link to="/servicios" onClick={() => setIsMenuOpen(false)} className="block text-xl font-medium text-white/80 hover:text-[#10b981]">Servicios</Link>
                        <Link to="/sistema" onClick={() => setIsMenuOpen(false)} className="block text-xl font-medium text-white/80 hover:text-[#10b981]">PC-Gerente</Link>
                        <Link to="/nosotros" onClick={() => setIsMenuOpen(false)} className="block text-xl font-medium text-white/80 hover:text-[#10b981]">Nosotros</Link>
                        <Link to="/contacto" onClick={() => setIsMenuOpen(false)} className="block w-full py-4 bg-[#10b981] text-white text-center rounded-xl font-bold text-lg">
                            Contáctanos
                        </Link>
                    </div>
                )}
            </nav>

            {/* MAIN CONTENT */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* FOOTER */}
            <footer className="bg-[#061d1d] text-gray-300 pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Branding & Social */}
                        <div className="space-y-6">
                            <Link to="/" className="flex items-center space-x-2">
                                <img src="/images/logo.png" alt="EFICORP-PCGerente" className="h-24" />
                            </Link>
                            <p className="text-gray-400 leading-relaxed">
                                Expertos en cumplimiento legal, contables y tecnológicos en el Ecuador.
                                Más de 15 años simplificando la gestión empresarial.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/share/1HkUid1oYo/?mibextid=wwXIfr" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#10b981] hover:text-white transition-all duration-300"><Facebook size={20} /></a>
                                <a href="https://www.instagram.com/eficorpacc?igsh=MWEzcXNoaTBkaTliOQ%3D%3D&utm_source=qr" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#10b981] hover:text-white transition-all duration-300"><Instagram size={20} /></a>
                                <a href="https://www.linkedin.com/in/eficorp-accounting-9904b03aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#10b981] hover:text-white transition-all duration-300"><Linkedin size={20} /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
                            <ul className="space-y-4">
                                <li><Link to="/" className="hover:text-[#10b981] transition-colors">Inicio</Link></li>
                                <li><Link to="/servicios" className="hover:text-[#10b981] transition-colors">Servicios</Link></li>
                                <li><Link to="/sistema" className="hover:text-[#10b981] transition-colors">PC-Gerente</Link></li>
                                <li><Link to="/nosotros" className="hover:text-[#10b981] transition-colors">Nosotros</Link></li>
                                <li><Link to="/contacto" className="hover:text-[#10b981] transition-colors">Contacto</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6">Servicios</h4>
                            <ul className="space-y-4">
                                <li><a href="/servicios#sri" className="hover:text-[#10b981] transition-colors">SRI - Tributario</a></li>
                                <li><a href="/servicios#mdt" className="hover:text-[#10b981] transition-colors">MDT - Laboral</a></li>
                                <li><a href="/servicios#iess" className="hover:text-[#10b981] transition-colors">IESS - Seguridad Social</a></li>
                                <li><a href="/servicios#gad" className="hover:text-[#10b981] transition-colors">GAD Municipales</a></li>
                                <li><a href="/servicios#supercias" className="hover:text-[#10b981] transition-colors">Supercias - Societario</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <MapPin size={20} className="text-[#10b981] flex-shrink-0 mt-1" />
                                    <span>Av. Clemente Ponce y Piedrahita Edificio fénix P2, Oficina A-204  Quito, Ecuador</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Phone size={20} className="text-[#10b981] flex-shrink-0" />
                                    <span>+593 97 924 8868</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail size={20} className="text-[#10b981] flex-shrink-0" />
                                    <span> eficorp.contabilidad@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-400 space-y-2">
                        <p>EFICORP-PCGerente © {new Date().getFullYear()} | Todos los derechos reservados</p>
                        <div className="flex items-center justify-center space-x-2">
                            <a href="https://nivusoftware.com" className="flex items-center space-x-1.5 opacity-80 hover:opacity-100 hover:underline transition-all duration-300">
                                <img src="/images/logo_nube.png" alt="Logo" className="h-4" />
                                <span>Desarrollado por <span className="font-bold text-white">Nivusoftware</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
