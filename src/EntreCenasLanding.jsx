import React from 'react';
import { motion } from 'framer-motion';

export default function EntreCenasLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090a0e] to-[#0c0d11] text-gray-100 font-sans transition-colors duration-700">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold text-cyan-400 tracking-tight"
        >
          EntreCenas
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          href="https://gamma.app/docs/Copy-of-EntreCenas-nvd3cbgc3qjb1i4"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition-colors"
        >
          Acessar Guia
        </motion.a>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto px-6 pt-12 pb-20 text-center"
      >
        <img
          src="/mnt/data/imagem1.png"
          alt="Profissional planejando com tecnologia futurista"
          className="mx-auto rounded-2xl mb-10 shadow-lg shadow-cyan-400/10"
        />
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Enraizando memórias, inspirando futuros.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          A EntreCenas é uma startup de audiovisual que transforma lembranças em arte. Nosso propósito é eternizar as memórias positivas dos jovens, ajudando-os a projetar um futuro próspero e repleto de belas histórias.
        </p>
        <a
          href="https://gamma.app/docs/Copy-of-EntreCenas-nvd3cbgc3qjb1i4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors"
        >
          Conheça o Projeto
        </a>
      </motion.section>

      {/* Production Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 pb-24 text-center"
      >
        <img
          src="/mnt/data/imagem2.png"
          alt="Equipe de produção audiovisual jovem"
          className="mx-auto rounded-2xl mb-10 shadow-lg shadow-cyan-400/10"
        />
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Onde a criatividade encontra a tecnologia.
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Nossos estúdios e talentos se unem para transformar ideias em obras audiovisuais impactantes. Aqui, inovação e sensibilidade andam lado a lado para capturar o que há de mais humano: as emoções.
        </p>
      </motion.section>

      {/* Data Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 pb-24 text-center"
      >
        <img
          src="/mnt/data/imagem3.png"
          alt="Gráfico de retenção de vídeos em dispositivo móvel"
          className="mx-auto rounded-2xl mb-10 shadow-lg shadow-cyan-400/10"
        />
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Resultados que permanecem na memória.
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Combinamos dados e emoção para gerar impacto real. Nossa abordagem une criatividade e métricas para garantir que cada memória criada tenha significado e alcance.
        </p>
      </motion.section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-24">
        {[
          {
            title: 'Inovação',
            text: 'Buscamos constantemente novas formas de conectar emoções, tecnologia e arte para criar experiências únicas.'
          },
          {
            title: 'Arte',
            text: 'Cada projeto é uma obra viva que traduz sentimentos, histórias e visões em imagens que perduram no tempo.'
          },
          {
            title: 'Pioneirismo',
            text: 'Lideramos a transformação do audiovisual jovem, eternizando memórias com propósito e impacto.'
          }
        ].map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-[#111319] p-8 rounded-2xl border border-[#1a1c23] hover:border-cyan-400/40 transition-all shadow-lg shadow-black/10"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
            <p className="text-gray-400 leading-relaxed">{value.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1c23] py-8 text-center text-gray-500 text-sm">
        <p>
          © 2025 EntreCenas — Inovação, Arte e Pioneirismo.{' '}
          <a
            href="https://gamma.app/docs/Copy-of-EntreCenas-nvd3cbgc3qjb1i4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Ver guia
          </a>
        </p>
      </footer>
    </div>
  );
}
