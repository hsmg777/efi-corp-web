import {
    Shield,
    Download,
    Phone,
    Clock,
    Award,
    Handshake,
} from "lucide-react";
import { Hero } from "../components/Hero";
import { StateEntities } from "../components/StateEntities";
import { PCGerenteSection } from "../components/PCGerenteSection";
import { motion } from "framer-motion";
import { Seo } from "../components/Seo";

export function Home() {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const siteUrl = origin || undefined;
    const imageUrl = siteUrl ? `${siteUrl}/images/us.jpg` : "/images/us.jpg";

    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "EFICORP-PCGerente",
            url: siteUrl,
            logo: imageUrl,
            image: imageUrl,
            description:
                "Servicios contables, tributarios y laborales en Ecuador. Gestión ante SRI, IESS, Ministerio del Trabajo, GAD y Superintendencia de Compañías.",
            telephone: "+593 97 924 8868",
            email: "eficorp.contabilidad@gmail.com",
            areaServed: "EC",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Clemente Ponce y Piedrahita, Edificio Fénix P2, Oficina A-204",
                addressLocality: "Quito",
                addressRegion: "Pichincha",
                addressCountry: "EC",
            },
            sameAs: [
                "https://www.facebook.com/share/1HkUid1oYo/?mibextid=wwXIfr",
                "https://www.instagram.com/eficorpacc?igsh=MWEzcXNoaTBkaTliOQ%3D%3D&utm_source=qr",
                "https://www.linkedin.com/in/eficorp-accounting-9904b03aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "EFICORP-PCGerente",
            url: siteUrl,
            description:
                "Servicios contables y cumplimiento legal en Ecuador con soporte humano y tecnología PC-Gerente.",
        },
    ];

    return (
        <div className="pt-20">
            <Seo
                title="EFICORP-PCGerente | Servicios Contables en Ecuador"
                description="Servicios contables, tributarios y laborales en Ecuador. Asesoría experta ante SRI, IESS, Ministerio del Trabajo, GAD y Superintendencia."
                keywords="servicios contables Ecuador, asesoría tributaria, SRI, IESS, Ministerio del Trabajo, GAD, Superintendencia de Compañías, PC-Gerente, software contable, cumplimiento legal, contabilidad Quito"
                imagePath="/images/us.jpg"
                structuredData={structuredData}
            />
            <Hero />

            {/* PRESENTACIÓN EFICORP-PCGerente */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                            Tu socio estratégico en{" "}
                            <span className="text-[#10b981]">cumplimiento empresarial</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            En EFICORP-PCGerente combinamos experiencia contable profesional con tecnología de vanguardia
                            para ofrecerte soluciones integrales que impulsan el crecimiento de tu empresa.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-gradient-to-br from-[#10b981]/10 to-[#10b981]/5 p-8 rounded-2xl border border-[#10b981]/20 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-[#10b981] rounded-xl flex items-center justify-center mb-6">
                                <Award className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">15+ Años de Experiencia</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Experiencia comprobada en servicios contables y cumplimiento legal para empresas de todos los tamaños.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gradient-to-br from-[#1e3a8a]/10 to-[#1e3a8a]/5 p-8 rounded-2xl border border-[#1e3a8a]/20 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-[#1e3a8a] rounded-xl flex items-center justify-center mb-6">
                                <Shield className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Seguridad Garantizada</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Confidencialidad absoluta y cumplimiento de todos los estándares legales y regulatorios del Ecuador.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 p-8 rounded-2xl border border-[#f59e0b]/20 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-[#f59e0b] rounded-xl flex items-center justify-center mb-6">
                                <Clock className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Atención Personalizada</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Acompañamiento continuo con profesionales expertos que entienden las necesidades de tu negocio.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICIOS ANTE ENTIDADES DEL ESTADO */}
            <StateEntities />

            {/* PC-GERENTE SECTION */}
            <PCGerenteSection />

            {/* POR QUÉ ELEGIR EFICORP */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                            ¿Por qué elegir{" "}
                            <span className="text-[#10b981]">EFICORP-PCGerente</span>?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Handshake className="text-[#10b981]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Compromiso Total</h3>
                                <p className="text-gray-600">
                                    Trabajamos como parte de tu equipo, comprometidos con el éxito de tu empresa.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Shield className="text-[#1e3a8a]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Confidencialidad Absoluta</h3>
                                <p className="text-gray-600">
                                    Tu información está protegida con los más altos estándares de seguridad.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Award className="text-[#f59e0b]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Experiencia Comprobada</h3>
                                <p className="text-gray-600">
                                    Más de 15 años ayudando a empresas ecuatorianas a crecer y cumplir con sus obligaciones.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-start space-x-4"
                        >
                            <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock className="text-[#10b981]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Atención Inmediata</h3>
                                <p className="text-gray-600">
                                    Respuesta rápida a tus consultas y necesidades, cuando más lo necesitas.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 bg-gradient-to-br from-[#10b981] via-[#059669] to-[#10b981]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ¿Listo para simplificar tu gestión empresarial?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Únete a cientos de empresas que confían en EFICORP-PCGerente para su cumplimiento legal y contable.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+593979248868"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#10b981] rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                            <Phone className="mr-2" size={20} />
                            Llamar ahora!
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
