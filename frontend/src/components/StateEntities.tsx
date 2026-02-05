import { Link } from "react-router-dom";
import {
    FileText,
    Users,
    Shield,
    Building2,
    TrendingUp,
    PenTool,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const entities = [
    {
        id: "sri",
        title: "SRI",
        image: "/images/sri.png",
        icon: FileText,
        color: "#10b981",
        items: [
            "Registro y actualización de RUC",
            "Declaraciones de IVA e IR",
            "Anexos tributarios"
        ]
    },
    {
        id: "mdt",
        title: "Ministerio del Trabajo",
        image: "/images/mdt.png",
        icon: Users,
        color: "#1e3a8a",
        items: [
            "Contratos laborales",
            "Roles de pago",
            "Liquidaciones"
        ]
    },
    {
        id: "iess",
        title: "IESS",
        image: "/images/iess.png",
        icon: Shield,
        color: "#10b981",
        items: [
            "Afiliaciones",
            "Planillas mensuales",
            "Gestión de glosas"
        ]
    },
    {
        id: "gad",
        title: "GAD Municipales",
        icon: Building2,
        color: "#f59e0b",
        items: [
            "Patente municipal",
            "Licencias metropolitanas",
            "Impuesto predial"
        ]
    },
    {
        id: "super",
        title: "Superintendencia de Compañías",
        image: "/images/super.jpeg",
        icon: TrendingUp,
        color: "#1e3a8a",
        items: [
            "Constitución de empresas",
            "Estados financieros",
            "Obligaciones anuales"
        ]
    },
    {
        id: "firmas",
        title: "Firmas Electrónicas",
        icon: PenTool,
        color: "#10b981",
        items: [
            "Obtención de firma electrónica",
            "Renovación de firma",
            "Asesoría técnica"
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8 }
    }
};

export function StateEntities() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#10b981] font-semibold tracking-wider uppercase text-sm mb-4 block">Gestión Pública</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                        Servicios ante <span className="text-[#10b981]">Entidades del Estado</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Soluciones integrales para optimizar tus trámites y cumplimiento ante los organismos regulatorios del Ecuador.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                >
                    {entities.map((entity) => (
                        <motion.div
                            key={entity.id}
                            variants={cardVariants}
                            className="bg-gray-50/50 rounded-2xl p-6 lg:p-8 border border-gray-100 transition-all duration-300 group hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] cursor-default relative overflow-hidden"
                        >
                            {/* Accent Line */}
                            <div
                                className="absolute top-0 left-0 w-1 h-full opacity-40 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: entity.color }}
                            />

                            <div className="flex items-center sm:items-start gap-5 sm:gap-8">
                                {/* Side Image/Icon - ALWAYS VISIBLE */}
                                <div className="flex w-16 h-16 sm:w-28 sm:h-28 bg-white rounded-xl sm:rounded-2xl shadow-sm items-center justify-center p-2 sm:p-4 flex-shrink-0 group-hover:shadow-md transition-shadow">
                                    {entity.image ? (
                                        <img
                                            src={entity.image}
                                            alt={entity.title}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    ) : (
                                        <entity.icon
                                            style={{ color: entity.color }}
                                            className="w-8 h-8 sm:w-11 sm:h-11 transition-all"
                                        />
                                    )}
                                </div>

                                <div className="flex-grow pt-0 sm:pt-2">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] mb-2 sm:mb-4 group-hover:text-[#10b981] transition-colors line-clamp-1 sm:line-clamp-none">
                                        {entity.title}
                                    </h3>
                                    <ul className="space-y-1.5 sm:space-y-3">
                                        {entity.items.map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-600">
                                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mr-2 sm:mr-3 flex-shrink-0" style={{ backgroundColor: entity.color }} />
                                                <span className="text-xs sm:text-sm font-medium line-clamp-1">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to="/servicios"
                                    className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 border border-gray-100 shadow-sm transition-all group-hover:bg-[#10b981] group-hover:text-white group-hover:border-[#10b981] active:scale-95"
                                    aria-label={`Ver más sobre ${entity.title}`}
                                >
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
