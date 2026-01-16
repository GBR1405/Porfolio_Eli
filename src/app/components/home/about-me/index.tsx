import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = ["Diseño Grafico", "Experiencia en Photoshop", "Indentidad de marca", "Experiencia en aplicaciones adboe"];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Sobre mí</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]"> Hola, soy Elizabeth — estudiante de Diseño Gráfico con una gran creatividad y pasión por el dibujo. Me inspira transformar ideas en piezas visuales que comuniquen  <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">emociones,  </span> at <span className="border-b-2">cuenten historias</span>y dejen una impresión real.</h2>
                            <h5 className="text-secondary font-normal">Me interesa el diseño digital y la identidad visual. Busco una oportunidades donde pueda aportar ideas frescas, crecer como diseñadora y desarrollar proyectos que conecten e inspiren.
</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Servicios</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe