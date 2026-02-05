import { useState, useEffect } from "react";
import {
    CheckCircle2,
    MessageCircle,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/images/pcgerente.jpeg",
    "/images/pcgerente1.jpeg",
    "/images/pcgerente2.jpeg",
    "/images/pcgerente3.jpeg",
    "/images/logopcg.jpeg"
];

const features = [
    { title: "Facturación Electrónica Ilimitada", desc: "Sin restricciones ni cargos adicionales" },
    { title: "Contabilidad General Completa", desc: "Gestión integral de tu contabilidad" },
    { title: "Inventarios y CxC/CxP", desc: "Control total de tus operaciones" },
    { title: "Soporte Humano Real", desc: "Sin chatbots, atención personalizada" }
];

export function PCGerenteSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="py-16 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contenido de Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            PC-Gerente: Sistema Contable{" "}
                            <span className="text-[#f9d634]">100% Ecuatoriano</span>
                        </h2>
                        <p className="text-lg text-blue-50 mb-8 leading-relaxed max-w-xl font-medium">
                            Solución profesional con versión gratuita funcional y soporte humano de primer nivel.
                        </p>

                        <div className="space-y-5 mb-10">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="w-5 h-5 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                                        <CheckCircle2 className="text-white" size={12} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-base mb-0.5">{item.title}</h4>
                                        <p className="text-blue-100/80 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="https://wa.me/593979248868"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white font-extrabold rounded-xl hover:bg-[#128C7E] transition-all duration-300 shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1 uppercase tracking-wide group"
                        >
                            <MessageCircle className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
                            QUIERO MI SISTEMA!
                        </a>
                    </motion.div>

                    {/* Carousel de Imágenes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group p-4"
                    >
                        {/* Botones de navegación */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight size={24} />
                        </button>

                        <div className="overflow-hidden aspect-video flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt={`Software PC-Gerente Screenshot ${currentIndex + 1}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Indicadores Minimalistas */}
                        <div className="flex justify-center gap-2 mt-6">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-[#f9d634]" : "w-1.5 bg-white/30 hover:bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
