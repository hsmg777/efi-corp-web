import { Link } from "react-router-dom";
import {
    Download,
    CheckCircle2,
    Zap,
    BarChart3,
    FileText,
    Package,
    Users,
    CreditCard,
    Phone,
    MessageCircle,
    Shield,
    Smartphone,
    Globe,
    TrendingUp
} from "lucide-react";

export function Sistema() {
    const caracteristicas = [
        {
            icon: FileText,
            title: "Facturación Electrónica Ilimitada",
            description: "Emite facturas, notas de crédito y más sin límites ni costos adicionales.",
            color: "bg-[#10b981]"
        },
        {
            icon: BarChart3,
            title: "Contabilidad General",
            description: "Sistema completo de contabilidad con todos los reportes que necesitas.",
            color: "bg-[#1e3a8a]"
        },
        {
            icon: CreditCard,
            title: "Cuentas por Cobrar y Pagar",
            description: "Gestiona tus cobros y pagos con control total de vencimientos.",
            color: "bg-[#f59e0b]"
        },
        {
            icon: Package,
            title: "Control de Inventarios",
            description: "Administra tu inventario en tiempo real con alertas de stock.",
            color: "bg-[#10b981]"
        },
        {
            icon: TrendingUp,
            title: "Información en Tiempo Real",
            description: "Reportes actualizados al instante para tomar mejores decisiones.",
            color: "bg-[#1e3a8a]"
        },
        {
            icon: Globe,
            title: "Cumplimiento SRI",
            description: "100% compatible con todas las normativas del SRI Ecuador.",
            color: "bg-[#f59e0b]"
        },
        {
            icon: Users,
            title: "Multi-usuario",
            description: "Varios usuarios trabajando simultáneamente sin conflictos.",
            color: "bg-[#10b981]"
        },
        {
            icon: Shield,
            title: "Seguridad de Datos",
            description: "Tu información protegida con respaldos automáticos.",
            color: "bg-[#1e3a8a]"
        }
    ];

    const versiones = [
        {
            name: "Versión Gratuita",
            price: "GRATIS",
            features: [
                "Facturación electrónica ilimitada",
                "Hasta 100 productos",
                "Contabilidad básica",
                "1 usuario",
                "Soporte por correo",
                "Actualizaciones incluidas"
            ],
            highlighted: false,
            cta: "Descargar Gratis",
            color: "border-[#10b981]"
        },
        {
            name: "Versión Profesional",
            price: "Consultar",
            features: [
                "Todo lo de versión gratuita",
                "Productos ilimitados",
                "Contabilidad completa",
                "Usuarios ilimitados",
                "Inventarios avanzados",
                "Soporte prioritario 24/7",
                "Capacitación incluida",
                "Personalización"
            ],
            highlighted: true,
            cta: "Solicitar Cotización",
            color: "border-[#1e3a8a]"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-[#10b981] text-white rounded-full mb-6">
                                <span className="font-semibold">🇪🇨 100% Ecuatoriano</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                PC-Gerente: El sistema contable{" "}
                                <span className="text-[#f59e0b]">que sí trabaja para ti</span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                El único sistema contable del Ecuador con versión gratuita completa,
                                soporte humano real y facturación electrónica ilimitada.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#descargar"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                                >
                                    <Download className="mr-2" size={20} />
                                    Descargar Gratis Ahora
                                </a>
                                <Link
                                    to="/contacto"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                                >
                                    Ver Demo
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <img
                                    src="https://images.unsplash.com/photo-1731834452405-a472facfae95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MDE0NjM1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Sistema PC-Gerente"
                                    className="rounded-xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Características Principales */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                            Características que{" "}
                            <span className="text-[#10b981]">marcan la diferencia</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            PC-Gerente no es solo un software contable, es tu aliado para el crecimiento empresarial.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {caracteristicas.map((caracteristica, index) => {
                            const Icon = caracteristica.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 ${caracteristica.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0f172a] mb-2">{caracteristica.title}</h3>
                                    <p className="text-gray-600 text-sm">{caracteristica.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Por qué es diferente */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                                ¿Por qué PC-Gerente es{" "}
                                <span className="text-[#10b981]">diferente</span>?
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-[#10b981]/10 to-transparent rounded-xl">
                                <div className="w-12 h-12 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Zap className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Verdaderamente Gratuito</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        No es una "prueba" ni una versión limitada. La versión gratuita de PC-Gerente incluye
                                        facturación electrónica ilimitada y todas las funciones esenciales para gestionar tu negocio.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-[#1e3a8a]/10 to-transparent rounded-xl">
                                <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Soporte Humano Real</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Nada de chatbots ni respuestas automáticas. Nuestro equipo de soporte está formado por
                                        personas reales con experiencia contable que entienden tus necesidades y te ayudan a resolverlas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-[#f59e0b]/10 to-transparent rounded-xl">
                                <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Globe className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Hecho en Ecuador, para Ecuador</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Diseñado específicamente para cumplir con todas las normativas del SRI y las necesidades
                                        reales de las empresas ecuatorianas. Actualizaciones constantes según cambios regulatorios.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Versiones y Precios */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                            Elige la{" "}
                            <span className="text-[#10b981]">versión perfecta</span> para tu empresa
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comienza gratis y actualiza cuando lo necesites. Sin compromisos ni sorpresas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {versiones.map((version, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 ${version.color} ${version.highlighted ? 'ring-4 ring-[#1e3a8a]/20 transform scale-105' : ''
                                    }`}
                            >
                                {version.highlighted && (
                                    <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white text-center py-2 font-semibold">
                                        ⭐ MÁS POPULAR
                                    </div>
                                )}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{version.name}</h3>
                                    <div className="mb-6">
                                        <span className="text-5xl font-bold text-[#10b981]">{version.price}</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        {version.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start space-x-3">
                                                <CheckCircle2 className="text-[#10b981] flex-shrink-0 mt-1" size={20} />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to="/contacto"
                                        className={`block w-full py-4 text-center rounded-lg transition-all duration-300 ${version.highlighted
                                            ? 'bg-[#1e3a8a] text-white hover:bg-[#1e40af] shadow-xl hover:shadow-2xl'
                                            : 'bg-[#10b981] text-white hover:bg-[#059669] shadow-lg hover:shadow-xl'
                                            }`}
                                    >
                                        {version.cta}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Soporte Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1766066014237-00645c74e9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBwZXJzb24lMjBoZWxwaW5nfGVufDF8fHx8MTc3MDE0NjQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Soporte personalizado"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                                Soporte que realmente{" "}
                                <span className="text-[#10b981]">te ayuda</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                No estás solo. Nuestro equipo de profesionales está disponible para ayudarte
                                en cada paso de tu gestión contable.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-[#10b981]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-1">Atención Telefónica</h4>
                                        <p className="text-gray-600">Habla directamente con nuestros expertos</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="text-[#1e3a8a]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-1">Chat en Vivo</h4>
                                        <p className="text-gray-600">Respuestas inmediatas a tus consultas</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users className="text-[#f59e0b]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0f172a] mb-1">Capacitación Personalizada</h4>
                                        <p className="text-gray-600">Aprende a usar el sistema a tu ritmo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final con Descarga */}
            <section id="descargar" className="py-20 bg-gradient-to-br from-[#10b981] via-[#059669] to-[#10b981]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Descarga PC-Gerente hoy mismo
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Comienza a usar el mejor sistema contable del Ecuador. Sin costo, sin compromiso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#10b981] rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                            <Download className="mr-2" size={20} />
                            Descargar PC-Gerente GRATIS
                        </button>
                        <Link
                            to="/contacto"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                            <Phone className="mr-2" size={20} />
                            Solicitar Demostración
                        </Link>
                    </div>
                    <p className="text-white/80 mt-6 text-sm">
                        Compatible con Windows 10/11 • Actualizaciones automáticas incluidas • Sin costos ocultos
                    </p>
                </div>
            </section>
        </div>
    );
}
