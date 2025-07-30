import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Construindo o Futuro com Excelência
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Na NTC Brasil, transformamos seus sonhos em realidade com soluções
              inovadoras e sustentáveis na construção civil.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                Entre em Contato
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                Saiba Mais
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-primary opacity-20 absolute inset-0" />
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-xl"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  Inovação
                </h3>
                <p className="text-gray-600">
                  Soluções modernas para desafios complexos
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-xl mt-8"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  Qualidade
                </h3>
                <p className="text-gray-600">
                  Excelência em cada detalhe do projeto
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-xl"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  Confiança
                </h3>
                <p className="text-gray-600">
                  Compromisso com resultados superiores
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-xl mt-8"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  Sustentabilidade
                </h3>
                <p className="text-gray-600">
                  Construindo um futuro mais verde
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
