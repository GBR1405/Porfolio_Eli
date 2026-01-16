"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const FeaturedWork = () => {
  const [featureWork, setFeatureWork] = useState<any[]>([]);
  const [activeWork, setActiveWork] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/featured-work");
      const data = await res.json();
      setFeatureWork(data.featureWork);
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10 px-4 sm:px-7 py-10">
          <p className="text-sm tracking-[2px] text-primary uppercase font-medium mb-8">
            Mis Proyectos
          </p>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3, 1200: 4 }}
          >
            <Masonry gutter="16px">
              {featureWork.map((work, i) => (
                <div
                  key={i}
                  onClick={() => setActiveWork(work)}
                  className="cursor-pointer rounded-xl overflow-hidden bg-muted/30 hover:opacity-90 transition"
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={1200}
                    height={1200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>

      {/* MODAL */}
      {activeWork && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveWork(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-xl max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8 animate-in fade-in zoom-in duration-300"
          >
            {/* Imagen */}
            <div className="flex items-center justify-center">
              <Image
                src={activeWork.image}
                alt={activeWork.title}
                width={1400}
                height={1400}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center gap-6">
              <h3 className="text-3xl font-medium">
                {activeWork.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {activeWork.roles?.map((role: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full border border-border"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveWork(null)}
                className="mt-6 underline w-fit text-sm opacity-70 hover:opacity-100"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedWork;
