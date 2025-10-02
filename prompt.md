Crie um projeto Next.js 15 (React) + TailwindCSS com as seguintes características:

📌 Estrutura do projeto

Use Next.js 15 com o App Router (diretório app/).

Configure TailwindCSS com postcss e autoprefixer.

Estrutura de pastas:

/app
  /components   -> componentes reutilizáveis (Navbar, Footer, Button, Card, Carousel, etc.)
  /sections     -> blocos de página (Hero, Features, Conheca, Testimonials, Eventos, CTA, FAQ)
  /(pages)      -> rotas principais
  /styles       -> estilos globais
/public
  /images       -> coloque aqui as imagens dos eventos


🎨 Identidade visual (Luminare Produções e Eventos)

    O site deve ter um fundo verde escuro #306440 como cor principal.

    Detalhes em dourado elegante (#D4AF37 ou similar).

    Layout moderno e sofisticado, transmitindo sustentabilidade e sofisticação.

    Fontes elegantes e legíveis (ex.: Inter, Montserrat ou Poppins).

    Estilo minimalista, com destaque para imagens e chamadas de ação.

🖼️ Layout e Seções

    Navbar fixa no topo com logo da Luminare e botões dourados.

    Hero Section:

        Grande título: “Luminare Produções e Eventos”

        Subtítulo sobre sustentabilidade, inovação e sofisticação em eventos.

        Botão CTA dourado: “Solicitar Orçamento”.

        Imagem de fundo elegante (natureza + tecnologia).

    Conheça a Luminare Section:

        Título e descrição institucional sobre a empresa.

        Texto destacando valores de inovação, sustentabilidade e excelência em eventos.

    Carrossel de Eventos Realizados:

        Componente de carrossel responsivo usando framer-motion ou biblioteca React.

        Carregar imagens da pasta /public/images.

        Legendas curtas opcionais em cada imagem.

    Próximos Eventos Section:

        Lista em cards elegantes mostrando data, nome do evento, local e link para mais informações.

        Destaque visual em tons dourados sobre o fundo verde escuro.

    Features Section: serviços principais (produções culturais, eventos corporativos, sustentabilidade).

    Testimonials Section: depoimentos de clientes.

    FAQ Section: perguntas frequentes em estilo accordion.

    Call to Action Section: chamada final para contato e orçamento, fundo verde escuro e botão dourado.

    Footer Section:

        Links de redes sociais: Instagram, YouTube, WhatsApp, LinkedIn (ícones dourados sobre fundo verde).

        Copyright © Luminare Produções e Eventos.

⚙️ Funcionalidades extras

    Configure ESLint + Prettier para manter o código padronizado.

    Inclua configuração de SEO (next/head ou metadata API).

    Adicione suporte a dark mode (Tailwind darkMode: 'class').

    Estruture os componentes de forma desacoplada e reutilizável.

    Use framer-motion para animações sutis (fade-in, slide-up).

🚀 Deploy

    O projeto deve estar pronto para deploy em Vercel.

    Inclua um README.md com instruções de instalação e execução.

✅ Resultado esperado

    Um projeto inicial completo, rodando com npm run dev.

    Landing page bonita, moderna, sustentável e elegante.

    Paleta de cores: verde escuro #306440 (fundo) + dourado elegante (detalhes).

    Código limpo, escalável e bem organizado.

    Estrutura preparada para fácil substituição de imagens e eventos futuros.