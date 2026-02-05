import { Shield, Heart, Users, Target, Award, TrendingUp } from "lucide-react";

export function Nosotros() {
    const valores = [
        {
            icon: Shield,
            title: "Ética Profesional",
            description: "Actuamos con integridad absoluta en cada servicio que brindamos, respetando la confidencialidad de nuestros clientes.",
            color: "from-[#10b981] to-[#059669]"
        },
        {
            icon: Heart,
            title: "Compromiso Total",
            description: "Nos involucramos profundamente con el éxito de cada cliente, trabajando como parte de su equipo.",
            color: "from-[#1e3a8a] to-[#1e40af]"
        },
        {
            icon: Users,
            title: "Atención Personalizada",
            description: "Cada cliente es único. Diseñamos soluciones adaptadas a las necesidades específicas de su empresa.",
            color: "from-[#f59e0b] to-[#d97706]"
        },
        {
            icon: Target,
            title: "Orientación a Resultados",
            description: "Nos enfocamos en generar valor real y medible para nuestros clientes y sus negocios.",
            color: "from-[#10b981] to-[#059669]"
        },
        {
            icon: Award,
            title: "Excelencia Continua",
            description: "Actualizamos constantemente nuestros conocimientos para brindar el mejor servicio posible.",
            color: "from-[#1e3a8a] to-[#1e40af]"
        },
        {
            icon: TrendingUp,
            title: "Innovación",
            description: "Combinamos experiencia tradicional con tecnología moderna para ofrecer soluciones de vanguardia.",
            color: "from-[#f59e0b] to-[#d97706]"
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Quiénes{" "}
                            <span className="text-[#10b981]">Somos</span>
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Tu socio estratégico en cumplimiento legal, contable y tecnológico
                        </p>
                    </div>
                </div>
            </section>

            {/* Nuestra Historia */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzAwNTQzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Equipo EFICORP-PCGerente"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                                Nuestra{" "}
                                <span className="text-[#10b981]">Historia</span>
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    <strong className="text-[#1e3a8a]">EFICORP-PCGerente</strong> nace de la pasión por ayudar
                                    a las empresas ecuatorianas a crecer de manera ordenada, cumpliendo con todas sus obligaciones
                                    legales y aprovechando la tecnología para mejorar su gestión.
                                </p>
                                <p>
                                    Con más de <strong className="text-[#10b981]">15 años de experiencia</strong> en el mercado
                                    ecuatoriano, hemos acompañado a cientos de empresas en su camino hacia el éxito, desde
                                    emprendimientos que están dando sus primeros pasos hasta compañías consolidadas que buscan
                                    optimizar sus procesos.
                                </p>
                                <p>
                                    Nuestra misión es simple pero poderosa: <strong className="text-[#f59e0b]">
                                        ser el aliado estratégico que toda empresa necesita</strong> para navegar el complejo
                                    entorno regulatorio ecuatoriano, mientras aprovecha la tecnología para impulsar su
                                    crecimiento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lo que nos define */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                            Lo que nos{" "}
                            <span className="text-[#10b981]">Define</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Nuestros valores son el fundamento de cada servicio que brindamos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {valores.map((valor, index) => {
                            const Icon = valor.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${valor.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{valor.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{valor.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Nuestro Compromiso */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                                Nuestro{" "}
                                <span className="text-[#10b981]">Compromiso</span>
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-[#10b981]/10 via-[#1e3a8a]/10 to-[#f59e0b]/10 p-8 md:p-12 rounded-2xl border border-[#10b981]/20">
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    En <strong className="text-[#1e3a8a]">EFICORP-PCGerente</strong>, entendemos que detrás
                                    de cada empresa hay personas con sueños, metas y responsabilidades. Por eso, no solo
                                    gestionamos números y documentos: acompañamos a nuestros clientes en su crecimiento empresarial.
                                </p>

                                <div className="bg-white p-6 rounded-xl border-l-4 border-[#10b981]">
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-3">Confidencialidad Absoluta</h3>
                                    <p>
                                        La información de nuestros clientes es sagrada. Manejamos todos los datos con el más
                                        alto nivel de confidencialidad y seguridad, cumpliendo rigurosamente con todas las
                                        normativas de protección de datos.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border-l-4 border-[#1e3a8a]">
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-3">Acompañamiento Continuo</h3>
                                    <p>
                                        No somos un proveedor más, somos parte de tu equipo. Estamos contigo en los momentos
                                        críticos, celebramos tus logros y te apoyamos en los desafíos. Tu éxito es nuestro éxito.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border-l-4 border-[#f59e0b]">
                                    <h3 className="text-xl font-bold text-[#0f172a] mb-3">Experiencia que Genera Confianza</h3>
                                    <p>
                                        Más de 15 años en el mercado nos han enseñado a anticiparnos a los problemas, a encontrar
                                        soluciones creativas y a brindar un servicio que realmente agrega valor a tu empresa.
                                    </p>
                                </div>

                                <p className="text-center pt-4">
                                    <strong className="text-[#10b981] text-xl">
                                        Trabajamos todos los días para ser el socio que tu empresa merece.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Por qué elegirnos */}
            <section className="py-20 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            ¿Por qué elegir{" "}
                            <span className="text-[#f59e0b]">EFICORP-PCGerente</span>?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                                <div className="text-5xl font-bold text-[#10b981] mb-2">15+</div>
                                <p className="text-white text-lg">Años de Experiencia</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                                <div className="text-5xl font-bold text-[#f59e0b] mb-2">500+</div>
                                <p className="text-white text-lg">Empresas Atendidas</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                                <div className="text-5xl font-bold text-[#10b981] mb-2">100%</div>
                                <p className="text-white text-lg">Satisfacción Garantizada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                        ¿Listo para trabajar juntos?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Descubre cómo podemos ayudarte a simplificar tu gestión empresarial
                    </p>
                    <a
                        href="/contacto"
                        className="inline-flex items-center px-8 py-4 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Contáctanos Hoy
                    </a>
                </div>
            </section>
        </div>
    );
}
