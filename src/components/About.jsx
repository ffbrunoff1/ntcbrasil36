import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: 'Expertise em Construção',
      description:
        'Anos de experiência no setor de construção, entregando projetos excepcionais.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Foco em Resultados',
      description:
        'Comprometimento com prazos e qualidade em cada projeto que realizamos.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Confiabilidade',
      description:
        'Transparência e segurança em todos os processos construtivos.',
    },
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Sobre a NTC Brasil</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa comprometida com a excelência na construção civil,
            combinando inovação tecnológica com práticas sustentáveis para criar
            soluções que transformam sonhos em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 inline-block p-3 bg-primary bg-opacity-10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Construir o futuro de forma sustentável e inovadora, superando as
            expectativas dos nossos clientes através de soluções personalizadas
            e execução impecável.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
