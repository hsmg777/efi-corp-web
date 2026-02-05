import { Link } from "react-router-dom";
import {
    FileText,
    Users,
    Shield,
    Building2,
    TrendingUp,
    CheckCircle2,
    PenTool,
    Phone,
    ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BACKGROUND_IMAGES = [
    "/images/iessback.png",
    "/images/superback.jpg",
    "/images/mdt.png",
    "/images/sri.png",
];

export function Servicios() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    const servicios = [
        {
            id: "sri",
            title: "SRI - Servicio de Rentas Internas",
            icon: FileText,
            color: "from-[#10b981] to-[#059669]",
            borderColor: "border-[#10b981]",
            bgColor: "bg-[#10b981]/10",
            textColor: "text-[#10b981]",
            image: "/images/sri.png",
            items: [
                "Registro y actualización de RUC",
                "Declaraciones de IVA e Impuesto a la Renta",
                "Anexos tributarios (ATS, APS, RDEP)",
                "Requerimientos y notificaciones del SRI",
                "Regularización de multas e intereses",
                "Devolución de IVA",
                "Asesoría en planificación tributaria",
                "Representación ante auditorías"
            ]
        },
        {
            id: "mdt",
            title: "MDT - Ministerio del Trabajo",
            icon: Users,
            color: "from-[#1e3a8a] to-[#1e40af]",
            borderColor: "border-[#1e3a8a]",
            bgColor: "bg-[#1e3a8a]/10",
            textColor: "text-[#1e3a8a]",
            image: "/images/mdt.png",
            items: [
                "Elaboración de contratos de trabajo",
                "Roles de pago mensuales",
                "Cálculo de liquidaciones",
                "Registro de trabajadores",
                "Atención a inspecciones laborales",
                "Décimos y utilidades",
                "Reglamentos internos de trabajo",
                "Asesoría en cumplimiento laboral"
            ]
        },
        {
            id: "iess",
            title: "IESS - Instituto Ecuatoriano de Seguridad Social",
            icon: Shield,
            color: "from-[#10b981] to-[#059669]",
            borderColor: "border-[#10b981]",
            bgColor: "bg-[#10b981]/10",
            textColor: "text-[#10b981]",
            image: "/images/iess.png",
            items: [
                "Afiliaciones de trabajadores",
                "Planillas mensuales de aportes",
                "Avisos de entrada y salida",
                "Gestión de glosas y notificaciones",
                "Regularización de aportes pendientes",
                "Fondos de reserva",
                "Trámites de préstamos quirografarios",
                "Atención a requerimientos del IESS"
            ]
        },
        {
            id: "gad",
            title: "GAD Municipales",
            icon: Building2,
            color: "from-[#f59e0b] to-[#d97706]",
            borderColor: "border-[#f59e0b]",
            bgColor: "bg-[#f59e0b]/10",
            textColor: "text-[#f59e0b]",
            items: [
                "Obtención y renovación de patente municipal",
                "Licencias metropolitanas de funcionamiento",
                "Pago de impuesto predial",
                "Actualización de catastro",
                "Permisos de construcción",
                "1.5 por mil sobre activos totales",
                "Certificados de no adeudar al municipio",
                "Trámites ante bomberos"
            ]
        },
        {
            id: "supercias",
            title: "Superintendencia de Compañías, Valores y Seguros",
            icon: TrendingUp,
            color: "from-[#1e3a8a] to-[#1e40af]",
            borderColor: "border-[#1e3a8a]",
            bgColor: "bg-[#1e3a8a]/10",
            textColor: "text-[#1e3a8a]",
            image: "/images/super.jpeg",
            items: [
                "Constitución de compañías",
                "Elaboración de estados financieros",
                "Presentación de obligaciones anuales",
                "Reformas estatutarias",
                "Aumentos y disminuciones de capital",
                "Disolución y liquidación de compañías",
                "Informes de cumplimiento tributario",
                "Asesoría corporativa integral"
            ]
        },
        {
            id: "firmas",
            title: "Firmas Electrónicas",
            icon: PenTool,
            color: "from-[#10b981] to-[#059669]",
            borderColor: "border-[#10b981]",
            bgColor: "bg-[#10b981]/10",
            textColor: "text-[#10b981]",
            items: [
                "Obtención de firma electrónica personal",
                "Firma electrónica para representante legal",
                "Renovación de firmas vencidas",
                "Instalación y configuración",
                "Asesoría técnica para uso",
                "Soporte en facturación electrónica",
                "Capacitación en uso de certificados digitales",
                "Resolución de problemas técnicos"
            ]
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
                {/* Background Carousel */}
                <div className="absolute inset-0 z-0 bg-[#0f172a]">
                    <AnimatePresence>
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <img
                                src={BACKGROUND_IMAGES[currentImage]}
                                alt="Background"
                                className="w-full h-full object-cover"
                            />
                            {/* Solid Overlay for legibility */}
                            <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-[2px]"></div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6"
                        >
                            Servicios Contables{" "}
                            <span className="text-[#10b981]">Integrales</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-200 leading-relaxed"
                        >
                            Gestionamos todas tus obligaciones legales y contables ante las principales entidades del Estado ecuatoriano.
                            Tu tranquilidad es nuestra prioridad.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Servicios por Entidad */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="space-y-8">
                        {servicios.map((servicio, index) => {
                            const Icon = servicio.icon;
                            return (
                                <div
                                    key={servicio.id}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-8"
                                    style={{ borderColor: servicio.borderColor.replace('border-', '') }}
                                >
                                    <div className="p-8 md:p-10">
                                        <div className="flex flex-col md:flex-row items-start gap-8">
                                            <div className="flex-shrink-0">
                                                {servicio.image ? (
                                                    <div className="w-32 h-32 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                                        <img
                                                            src={servicio.image}
                                                            alt={servicio.title}
                                                            className="max-w-full max-h-full object-contain"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className={`w-24 h-24 bg-gradient-to-br ${servicio.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                                                        <Icon className="text-white" size={48} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-3xl font-bold text-[#0f172a] mb-6">{servicio.title}</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {servicio.items.map((item, itemIndex) => (
                                                        <div key={itemIndex} className="flex items-start space-x-3">
                                                            <CheckCircle2 className={servicio.textColor} size={20} />
                                                            <span className="text-gray-700">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${servicio.bgColor} px-8 md:px-10 py-4 border-t ${servicio.borderColor} border-opacity-20`}>
                                        <Link
                                            to="/contacto"
                                            className={`inline-flex items-center ${servicio.textColor} hover:underline font-semibold`}
                                        >
                                            Solicitar asesoría sobre estos servicios
                                            <ChevronRight size={20} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sección de Ventajas */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                            ¿Por qué confiar tus trámites a{" "}
                            <span className="text-[#10b981]">EFICORP-PCGerente</span>?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center p-8 bg-gradient-to-br from-[#10b981]/5 to-[#10b981]/10 rounded-2xl">
                            <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3">Cumplimiento Garantizado</h3>
                            <p className="text-gray-600">
                                Nos aseguramos de que todas tus obligaciones se cumplan a tiempo y correctamente.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-[#1e3a8a]/5 to-[#1e3a8a]/10 rounded-2xl">
                            <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3">Confidencialidad Total</h3>
                            <p className="text-gray-600">
                                Tu información está protegida con los más altos estándares de seguridad y ética profesional.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-[#f59e0b]/5 to-[#f59e0b]/10 rounded-2xl">
                            <div className="w-16 h-16 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-3">Atención Personalizada</h3>
                            <p className="text-gray-600">
                                Un equipo dedicado que conoce tu empresa y te acompaña en cada paso del proceso.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-gradient-to-br from-[#10b981] via-[#059669] to-[#10b981]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ¿Necesitas ayuda con tus obligaciones legales?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Contáctanos hoy y descubre cómo podemos simplificar la gestión de tu empresa.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-flex items-center px-8 py-4 bg-white text-[#10b981] rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        <Phone className="mr-2" size={20} />
                        Solicitar Asesoría Gratuita
                    </Link>
                </div>
            </section>
        </div>
    );
}
