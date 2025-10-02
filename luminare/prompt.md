No projeto Next.js 15 (React) + TailwindCSS já criado, adicione a seguinte landing page para a Luminare Produções e Eventos.

📌 Estrutura do código

Use o App Router (diretório app/).

Crie as pastas e arquivos necessários:

/app
  /components   -> componentes reutilizáveis (Navbar, Footer, Button, Card, Carousel, etc.)
  /sections     -> blocos de página (Hero, Features, Conheca, Testimonials, Eventos, CTA, FAQ)
  /styles       -> estilos globais
/public
  /images       -> imagens dos eventos



🎨 Identidade visual

    Fundo principal: verde escuro #306440

    Detalhes: dourado elegante #D4AF37

    Tipografia: Inter, Montserrat ou Poppins

    Estilo moderno, minimalista, sustentável e sofisticado.

🖼️ Seções da página principal (app/page.tsx)

    Navbar fixa com logo e botões dourados.

    Hero Section:

        Título: “Luminare Produções e Eventos”

        Subtítulo: sustentabilidade, inovação e sofisticação em eventos

        Botão CTA: “Solicitar Orçamento”

        Imagem de fundo (natureza + tecnologia)

    Conheça a Luminare: texto institucional destacando valores (inovação, sustentabilidade e excelência).

    Carrossel de Eventos Realizados:

        Carrossel responsivo com framer-motion (ou biblioteca adequada).

        Imagens carregadas da pasta /public/images com legendas opcionais.

    Próximos Eventos: lista em cards elegantes com data, nome, local e link.

    Features: serviços principais (produções culturais, eventos corporativos, sustentabilidade).

    Testimonials: depoimentos de clientes.

    FAQ: perguntas frequentes em accordion.

    Call to Action: chamada final para contato e orçamento, fundo verde escuro, botão dourado.

    Footer:

        Links para Instagram, YouTube, WhatsApp e LinkedIn com ícones dourados.

        Copyright © Luminare Produções e Eventos.

⚙️ Funcionalidades

    Configurar ESLint + Prettier (se ainda não estiver configurado).

    Usar SEO com metadata API (title, description, openGraph).

    Suporte a dark mode (darkMode: 'class').

    Criar componentes desacoplados e reutilizáveis.

    Usar framer-motion para animações (fade-in, slide-up).

🚀 Resultado esperado

    Uma landing page completa no projeto já existente.

    Layout responsivo, moderno, sustentável e elegante.

    Estrutura pronta para adicionar novas imagens e próximos eventos facilmente.

    Rodando com npm run dev.