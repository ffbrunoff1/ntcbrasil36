import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Construção Civil',
      description: 'Execução de obras com excelência e qualidade superior.',
      features: ['Projetos Residenciais', 'Obras Comerciais', 'Infraestrutura'],
    },
    {
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada para seu projeto construtivo.',
      features: [
        'Análise de Viabilidade',
        'Gestão de Projetos',
        'Otimização de Recursos',
      ],
    },
    {
      title: 'Soluções Sustentáveis',
      description: 'Construção com responsabilidade ambiental.',
      features: [
        'Materiais Ecológicos',
        'Eficiência Energética',
        'Gestão de Resíduos',
      ],
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Nossas Especialidades</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas e personalizadas para atender às suas
            necessidades específicas no setor da construção civil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary inline-block">
            Solicite um Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
