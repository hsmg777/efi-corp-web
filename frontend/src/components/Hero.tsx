import { Link } from "react-router-dom";
import { Download, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/pcgerente.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                {/* Overlay to ensure text legibility */}
                <div className="absolute inset-0 bg-[#0e3750]/80"></div>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl text-left lg:pl-16">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Todo tu cumplimiento legal, contable y tecnológico{" "}
                            <span className="text-[#f9d634]">en un solo lugar</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                            className="text-xl text-gray-200 mb-8 leading-relaxed"
                        >
                            Servicios contables integrales + PC-Gerente, el único sistema contable del Ecuador con{" "}
                            <span className="text-[#f59e0b] font-semibold">versión gratuita</span>
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                to="/sistema"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                            >
                                Sistema contable PC Gerente
                            </Link>
                            <a
                                href="https://wa.me/593979248868?text=hola%20quiero%20mas%20informacion%20de%20sus%20servicios!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                            >
                                <Phone className="mr-2" size={20} />
                                Contáctanos
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side Visual Composition */}
                    <div className="hidden lg:flex relative h-[600px] items-center justify-center">
                        {/* Animated Rings */}
                        <div className="absolute w-[500px] h-[500px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                        {/* Central Circular Image */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="relative z-20 w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl p-1 bg-gradient-to-tr from-[#10b981] to-[#f9d634]"
                        >
                            <img
                                src="/images/hero_central.jpeg"
                                alt="Professional Consultant"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </motion.div>

                        {/* Floating Cards (Square with rounded corners) */}
                        {/* SRI Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute top-16 right-24 z-30 w-32 h-32 bg-white rounded-2xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/20"
                        >
                            <img src="/images/sri.png" alt="SRI" className="w-full h-full object-cover rounded-xl" />
                        </motion.div>

                        {/* MDT Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute top-1/2 right-8 z-30 w-32 h-32 bg-white rounded-2xl p-1 shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-300 border border-white/20"
                        >
                            <img src="/images/mdt.png" alt="MDT" className="w-full h-full object-cover rounded-xl" />
                        </motion.div>

                        {/* IESS Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4 }}
                            className="absolute top-1/4 left-16 z-30 w-32 h-32 bg-white rounded-2xl p-1 shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-300 border border-white/20"
                        >
                            <img src="/images/iess.png" alt="IESS" className="w-full h-full object-cover rounded-xl" />
                        </motion.div>

                        {/* Supercias Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6 }}
                            className="absolute bottom-12 left-24 z-30 w-32 h-32 bg-white rounded-2xl p-1 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/20"
                        >
                            <img src="/images/super.jpeg" alt="Supercias" className="w-full h-full object-cover rounded-xl" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
