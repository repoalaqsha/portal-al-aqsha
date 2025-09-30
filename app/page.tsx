"use client";

import React from "react";
import Berita from "@/components/berita";
import Reveal from "@/components/reveal";
import PostsAside from "@/components/berita-aside";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import KepsekReveal from "@/components/kepsek-reveal";
import KepalaSekolahSection from "@/components/kepsek-data";
export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Reveal>
        <Berita />
      </Reveal>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 px-6">
        {/* Kontak Sekolah */}
        <Reveal>
          <aside className="lg:col-span-3 bg-gray-100 shadow-md rounded-xl p-6 border-gray-200 border flex flex-col gap-4">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-2">
              Kontak
            </h2>
            <Reveal>
              <div className="space-y-3 text-sm ">
                <div>
                  <p className="font-semibold flex items-center gap-2">
                    <IoLocationOutline /> Alamat:
                  </p>
                  <p className="text-justify text-gray-600">
                    Jl. Sutra Ungu No.31, RT.13/RW.10, Klp. Gading Tim., Kec.
                    Klp. Gading, Jkt Utara
                  </p>
                </div>
                <div>
                  <p className="font-semibold flex items-center gap-2">
                    <AiOutlineMail /> Email:
                  </p>
                  <p className="text-gray-600">mtssalaqsha@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold flex items-center gap-2">
                    <BsTelephone /> Telepon:
                  </p>
                  <p className="text-gray-600">(021) 4505722</p>
                </div>
                <div>
                  <p className="font-semibold flex items-center justify-center gap-2">
                    Media Sosial:
                  </p>
                  <div className="px-auto flex gap-3 text-teal-700 font-medium justify-between">
                    <p>Instagram</p>
                    <p>Youtube</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </Reveal>

        <KepsekReveal>
          <div className="w-full col-span-1 mb-20 lg:mb-0">
            <h1 className="text-3xl font-bold text-teal-600 mb-4">
              Sambutan Kepala Sekolah
            </h1>
            <KepalaSekolahSection />
          </div>
        </KepsekReveal>

        <Reveal>
          <PostsAside />
        </Reveal>
        {/* Berita Populer */}
      </div>
    </div>
  );
}
