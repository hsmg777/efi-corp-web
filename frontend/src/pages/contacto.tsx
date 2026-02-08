import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Facebook,
    Instagram,
    Linkedin,
    Twitter
} from "lucide-react";
import { Seo } from "../components/Seo";

export function Contacto() {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const siteUrl = origin || undefined;

    const [formData, setFormData] = useState({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        mensaje: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        const apiBase = (import.meta.env.VITE_API_URL as string | undefined) ?? "";
        const apiUrl = `${apiBase.replace(/\/$/, "")}/send-email`;

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("No se pudo enviar el mensaje.");
            }

            setSubmitMessage("Gracias por contactarnos! Responderemos tu consulta en las proximas 24 horas.");
            setFormData({
                nombre: "",
                empresa: "",
                email: "",
                telefono: "",
                mensaje: ""
            });
        } catch (error) {
            setSubmitMessage("Ocurrio un error al enviar tu mensaje. Intentalo de nuevo mas tarde.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitMessage("");
            }, 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="pt-20">
            <Seo
                title="Contacto | EFICORP-PCGerente"
                description="Contáctanos para asesoría contable, tributaria y laboral en Ecuador. Atención en Quito y soporte humano rápido."
                keywords="contacto EFICORP, asesoría contable Quito, servicios contables Ecuador, soporte PC-Gerente"
                imagePath="/images/us.jpg"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    name: "Contacto",
                    description:
                        "Formulario de contacto y datos para asesoría contable, tributaria y laboral en Ecuador.",
                    url: siteUrl ? `${siteUrl}/contacto` : undefined,
                }}
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Hablemos de tu{" "}
                            <span className="text-[#10b981]">Empresa</span>
                        </h1>
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Estamos listos para ayudarte. Contáctanos y descubre cómo podemos simplificar tu gestión empresarial.
                        </p>
                    </div>
                </div>
            </section>

            {/* Información de Contacto y Formulario */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Información de Contacto */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8">
                                Información de{" "}
                                <span className="text-[#10b981]">Contacto</span>
                            </h2>

                            <div className="space-y-6">
                                {/* Teléfono */}
                                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-[#10b981]" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0f172a] mb-1">Teléfono</h3>
                                        <p className="text-gray-600 mb-2">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                                        <a href="tel:+593979248868" className="text-[#10b981] hover:text-[#059669] font-semibold">
                                            +593 97 924 8868
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-[#1e3a8a]" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0f172a] mb-1">Correo Electrónico</h3>
                                        <p className="text-gray-600 mb-2">Respuesta en 24 horas o menos</p>
                                        <a href="mailto:eficorp.contabilidad@gmail.com" className="text-[#1e3a8a] hover:text-[#1e40af] font-semibold">
                                            eficorp.contabilidad@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Dirección */}
                                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-[#f59e0b]" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0f172a] mb-1">Oficina Principal</h3>
                                        <p className="text-gray-600">
                                            Av. Clemente Ponce y Piedrahita<br />
                                            Edificio fénix P2, Oficina A-204<br />
                                            Quito, Ecuador
                                        </p>
                                    </div>
                                </div>

                                {/* Horario */}
                                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="text-[#10b981]" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0f172a] mb-1">Horario de Atención</h3>
                                        <p className="text-gray-600">
                                            Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                                            Sábados: Cerrado<br />
                                            Domingos: Cerrado
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Redes Sociales */}
                            <div className="mt-8">
                                <h3 className="justify-center font-bold text-[#0f172a] mb-4">Síguenos en Redes Sociales</h3>
                                <div className="flex space-x-4 justify-center lg:justify-start">
                                    <a
                                        href="https://www.facebook.com/share/1HkUid1oYo/?mibextid=wwXIfr" target="_blank"
                                        className="w-12 h-12 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="text-white" size={24} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/eficorpacc?igsh=MWEzcXNoaTBkaTliOQ%3D%3D&utm_source=qr" target="_blank"
                                        className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="text-white" size={24} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/eficorp-accounting-9904b03aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"
                                        className="w-12 h-12 bg-[#0A66C2] hover:bg-[#004182] rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="text-white" size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Formulario de Contacto */}
                        <div>
                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
                                    Envíanos un{" "}
                                    <span className="text-[#10b981]">Mensaje</span>
                                </h2>

                                {submitMessage && (
                                    <div className="mb-6 p-4 bg-[#10b981]/10 border border-[#10b981] rounded-lg">
                                        <p className="text-[#059669] font-semibold">{submitMessage}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-semibold text-[#0f172a] mb-2">
                                            Nombre Completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                                            placeholder="Juan Pérez"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="empresa" className="block text-sm font-semibold text-[#0f172a] mb-2">
                                            Empresa
                                        </label>
                                        <input
                                            type="text"
                                            id="empresa"
                                            name="empresa"
                                            value={formData.empresa}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                                            placeholder="Mi Empresa S.A."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-[#0f172a] mb-2">
                                            Correo Electrónico *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                                            placeholder="correo@ejemplo.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="telefono" className="block text-sm font-semibold text-[#0f172a] mb-2">
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
                                            placeholder="+593 99 999 9999"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="mensaje" className="block text-sm font-semibold text-[#0f172a] mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all resize-none"
                                            placeholder="Cuéntanos cómo podemos ayudarte..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-[#10b981] text-white rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>Enviando...</>
                                        ) : (
                                            <>
                                                <Send className="mr-2" size={20} />
                                                Enviar Consulta
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-8 text-center">
                        Nuestra{" "}
                        <span className="text-[#10b981]">Ubicación</span>
                    </h2>

                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        {/* Mapa incrustado de Google Maps (Quito, Ecuador - ubicación aproximada) */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d993.6104105459715!2d-78.50078098585418!3d-0.21220300124131522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTInNDQuMCJTIDc4wrAzMCcwMS4zIlc!5e0!3m2!1sen!2sus!4v1770482911172!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación EFICORP-PCGerente"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-gradient-to-br from-[#10b981] via-[#059669] to-[#10b981]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ¿Prefieres una asesoría telefónica?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Llámanos ahora y habla directamente con uno de nuestros especialistas.
                    </p>
                    <a
                        href="tel:+593979248868"
                        className="inline-flex items-center px-8 py-4 bg-white text-[#10b981] rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        <Phone className="mr-2" size={20} />
                        +593 97 924 8868
                    </a>
                </div>
            </section>
        </div>
    );
}
