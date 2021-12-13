const CHAPTERS = {
    "phishing": [
        {
            id: 1,
            title: "O que é Pesca Cibernética (Phishing)?",
            desc: `
                <p>O termo phishing foi escolhido devido à semelhança com outra palavra do vocabulário inglês, fishing, que significa pescar. Isso quer dizer a prática de “pescar” as informações e dados secretos dos usuários através de informações falsas ou dados não reais porém muito atrativos.</p>
                <p>Assim como na pesca, a pessoa que pratica o phishing consegue estas informações através de uma isca lançada aos usuários para então obter as ações que precisam para aplicar os golpes.</p>
                <p>Phishing é um crime virtual no qual pessoas comuns são contactadas através de email, telefone ou mensagens de texto (SMS) por uma outra pessoa ou empresa. O contato se faz de maneira genuína, para atrair e induzir o contactado a fornecer informações sigilosas dados bancários, cartão de crédito, senhas e outros informações confidenciais</p>
                <p>Ao compartilhar estas informações, as pessoas têm sua conta e cartão violados, e podem ser vítimas de crimes de falsa identidade ou perder dinheiro através de transações financeiras indesejadas.</p>
            `,
            subChapters: [],
            src: ['https://www.hostinger.com.br/tutoriais/o-que-e-phishing-e-como-se-proteger-de-golpes-na-internet']
        },
        {
            id: 2,
            title: "De onde vem a Pesca Cibernética (Phishing)?",
            desc: `
                <p>Os crimes de phishing podem chegar até você via email, SMS, ligações telefônicas, falsos sites e falsos pop-ups inseridos em sites desprotegidos, todos com uma abordagem atrativa.</p>
                <p>Os conteúdos podem ser dos mais variados, em nome de bancos, governo, instituições financeiras, como PayPal ou até mesmo Correios, sempre solicitando uma ação ou informação. Por exemplo, pode ser pedido para que abra determinado link ou arquivo, faça ligação ou instale/ atualize um software específico.</p>
                <p>Os criminosos utilizam de todas as formas para atacar os usuários e conseguir acesso à informações sigilosas das quais poderão se beneficiar.</p>
            `,
            subChapters: [],
            src: ['https://www.hostinger.com.br/tutoriais/o-que-e-phishing-e-como-se-proteger-de-golpes-na-internet']
        },
        {
            id: 3,
            title: "Tipos de Pesca Cibernética (Phishing)",
            desc: `
                <p>Enquanto você lê este artigo sobre o que é phishing e já pensando em como melhorar sua técnica para evitar cair nessas armadilhas, existem criminosos trabalhando pesado em novas técnicas para roubar os seus dados.</p>
                <p>Existem diversas formas de ataques phishing e o <a class="externalLink" href="https://revistapegn.globo.com/Tecnologia/noticia/2017/11/brasil-e-lider-global-em-ataques-virtuais-feitos-por-e-mails-e-links-suspeitos.html" target="_blank">Brasil é líder mundial em ataques virtuais feitos via email, SMS e links suspeitos</a>. Conheça os principais tipos de phishing.</p>
            `,
            subChapters: [
                {
                    title: "Golpe Cibrenético (Scam)",
                    desc: `
                        <p>Os golpes de phishing scam são tentativas dos criminosos de induzi-lo a fornecer informações pessoais, como números de contas bancárias, senhas e números de cartão de crédito, através da abertura de links ou arquivos contaminados. Essas informações serão usadas para usar sua conta indevidamente, roubar dinheiro e realizar transações. O contato pode ser feito via telefone, email, mensagem de texto ou pelas redes sociais.</p>
                    `
                },
                {
                    title: "Pesca Cega (Blind Phishing)",
                    desc: `
                        <p>É o mais comum de todos, disparado via email em massa e sem muitas estratégias, que contam apenas com a “sorte” de que algum usuário caia na armadilha.</p>
                    `
                },
                {
                    title: "Arpão Cibernético (Spear phishing)",
                    desc: `
                        <p>É quando o ataque é contra um grupo específico. Pode ser contra funcionários do governo, clientes de uma empresa específica ou até mesmo uma pessoa específica. O spear phishing tem como objetivo acessar este banco de dados específico para obter informações sigilosas, arquivos confidenciais ou financeiros.</p>
                    `
                },
                {
                    title: "Cópia Cibernética (Clone phishing)",
                    desc: `
                        <p>Este golpe clona um site original para atrair os usuários. Geralmente, ao acessar o site falso, a pessoa tem que inserir informações cadastrais em um formulário malicioso que transmitirá as informações para os criminosos. Em seguida o usuário é direcionado para a página original sem perceber que foi vítima.</p>
                    `
                },
                {
                    title: "Pesca de Baleias (Whaling)",
                    desc: `
                        <p>O termo vem da palavra whale (baleia, em inglês) e quer dizer caçando baleias. Isso significa que este crime está ligado ao “tamanho do peixe a ser pescado”. Whaling mira executivos de alto nível ou personalidades de relevância, como um presidente de uma corporação, e faz isso em nome da empresa para qual trabalha. Estes ataques vêm mascarados como intimações judiciais ou notificações empresariais internas.</p>
                    `
                },
                {
                    title: "Estelionato Cibernético (Phone Phishing)",
                    desc: `
                        <p>O Estelionato Cibernético utiliza mecanismos de voz para aplicar golpes. Podem vir acompanhados de SMS que dizem que o seu cartão foi bloqueado e você precisa ligar para um determinado número para pedir a liberação, mas também pode ser uma ligação direta para sua casa ou seu celular. Os criminosos usam o VoIP pela facilidade em esconder a identidade de quem faz a chamada.</p>
                    `
                }
            ],
            src: ['https://www.hostinger.com.br/tutoriais/o-que-e-phishing-e-como-se-proteger-de-golpes-na-internet', 'https://www.trendmicro.com/pt_br/what-is/phishing/types-of-phishing.html']
        },
    ],
    "pharming": [
        {
            id: 1,
            title: "O que é Colheita Cibernética (Pharming)",
            desc: `
                <p>Pharming, uma fusão das palavras "phishing" e "farming", é um tipo de crime virtual muito parecido com o phishing, em que o tráfego de um site é manipulado e informações confidenciais são roubadas. O pharming explora a base de funcionamento da navegação na Internet, ou seja, a conversão da sequência de letras que forma um endereço da Internet, como www.google.com, em um endereço IP por um servidor DNS para que ocorra a conexão. Essa exploit ataca esse processo de duas maneiras: Em primeiro lugar, um hacker pode instalar no computador do usuário um vírus ou cavalo de Troia que altera o arquivo host do computador para desviar o tráfego de seu destino para um site falso. Em segundo lugar, o hacker pode "envenenar" um servidor DNS, fazendo com que vários usuários acessem o site falso sem querer. Os sites falsos podem ser usados para instalar vírus ou cavalos de Troia no computador do usuário, ou podem tentar coletar informações pessoais e financeiras para roubar identidades.</p>
                <p>O pharming é uma forma bastante preocupante de crime virtual, pois, em caso de envenenamento do servidor DNS, o usuário afetado pode ter um computador completamente livre de malware e ainda assim se tornar uma vítima. Mesmo que o usuário tome cuidado, por exemplo, digite manualmente o endereço do site ou sempre use favoritos confiáveis, ele pode ter problemas, pois o direcionamento incorreto acontece depois que o computador envia uma solicitação de conexão.</p>
                <p>A proteção contra esses tipos de golpes começa com a instalação de uma boa solução antimalware e antivírus, que deve ser associada a práticas inteligentes de computação, como evitar sites suspeitos e jamais clicar em links de mensagens de e-mail suspeitas. Essas etapas evitam que a maioria dos malwares acesse seu computador e altere o arquivo host.</p>
                <p>No entanto, como isso é apenas parte da ameaça, você também precisa ficar atento aos sites que acessa, principalmente aqueles que contêm suas informações pessoais ou financeiras. Se o site ou o endereço na barra de endereços parecem estranhos, ou se o site começa a solicitar informações que normalmente não pede, verifique se há um ícone de cadeado na barra de endereços, indicando que o site é seguro, e clique no cadeado para ver se o site possui um certificado confiável e atualizado. Os servidores DNS em execução têm algumas técnicas antipharming bastante sofisticadas à disposição, mas como o risco de ser invadido está sempre presente, para reduzir o perigo, é necessário combinar a proteção pessoal com a consciência quanto aos riscos da Internet.</p>
            `,
            subChapters: [],
            src: ['https://www.kaspersky.com.br/resource-center/definitions/pharming']
        }
    ],
    "social engeneering": [
        {
            id: 1,
            title: "O que é Engenharia Social?",
            desc: `
                </p>Engenharia social é uma técnica empregada por criminosos virtuais para induzir usuários desavisados a enviar dados confidenciais, infectar seus computadores com malware ou abrir links para sites infectados. Além disso, os hackers podem tentar explorar a falta de conhecimento do usuário.</p>
            `,
            subChapters: [],
            src: ['https://www.kaspersky.com.br/resource-center/definitions/what-is-social-engineering']
        },
        {
            id: 2,
            title: "Como Funciona Engenharia Social?",
            desc: `
                <p>Praticamente todo tipo de ataque contém algum método de engenharia social. O clássico e-mail de "phishing" e os golpes com vírus, por exemplo, são repletos de insinuações de conotação social. Os e-mails de phishing tentam convencer os usuários de que são, de fato, de fontes legítimas, na esperança de conseguir obter qualquer dado pessoal ou corporativos, por menor que seja. Os e-mails que contêm anexos cheios de vírus, por sua vez, muitas vezes alegam ser de contatos confiáveis ou oferecem conteúdo de mídia que parece inofensivo, como vídeos "divertidos" ou "fofos".</p>
                <p>Em alguns casos, os invasores usam métodos mais simples de engenharia social para conseguir acessar a rede ou o computador. Por exemplo, um hacker pode frequentar a praça de alimentação de um edifício corporativo e bisbilhotar os usuários que trabalham com tablets ou laptops. Assim, pode conseguir um grande número de senhas e nomes de usuários, sem enviar sequer um e-mail ou escrever uma linha de código de vírus . Por sua vez, outros ataques dependem da comunicação real entre invasores e vítimas. Nesse caso, o invasor pressiona o usuário a conceder acesso à rede com a alegação de um problema sério que requer ação imediata. Raiva, culpa e tristeza são palavras usadas na mesma medida para convencer os usuários de que sua ajuda é necessária e que eles não podem recusar. Por fim, é importante ter cuidado com a engenharia social usada para confundir as pessoas. Muitos funcionários e clientes não percebem que, com poucas informações (nome, data de nascimento ou endereço), os hackers conseguem ter acesso a diversas redes depois de se disfarçar de usuários legítimos para o pessoal do suporte de TI. A partir daí, é só uma questão de redefinir senhas e obter acesso praticamente ilimitado.</p>
            `,
            subChapters: [],
            src: ['https://www.kaspersky.com.br/resource-center/definitions/what-is-social-engineering']
        },
        {
            id: 3,
            title: "Como se defender de engenharia social",
            desc: `
                <p>A proteção contra a engenharia social começa com o treinamento. Os usuários devem ser condicionados a nunca clicar em links suspeitos e a sempre proteger suas credenciais de login, seja em casa ou no trabalho. Se as táticas sociais derem certo, no entanto, o resultado provável será uma infecção por malware. Para combater rootkits, cavalos de Troia e outros bots, é importante empregar uma solução de segurança de Internet de alta qualidade, capaz de eliminar infecções e rastrear sua origem.</p>
            `,
            subChapters: [],
            src: ['https://www.kaspersky.com.br/resource-center/definitions/what-is-social-engineering']
        }
    ],
    "ddos": [
        {
            id: 1,
            title: "O que é um Ataque de Negação de Serviço (DDoS)?",
            desc: `
                <p>Em um ataque de DDoS (negação distribuída de serviço), um invasor sobrecarrega seu alvo com tráfego de Internet indesejado para que o tráfego normal não possa atingir o destino pretendido.</p>
                <p>Mas o que isso realmente significa? Imagine seu filme favorito de zumbis. Hordas de criaturas infectadas, todas com o mesmo objetivo: assolar a civilização enquanto espalham sua "praga zumbi". Elas inundam os recursos dos órgãos de segurança pública, destroem as forças militares e desativam os serviços de saúde. Então, inevitavelmente, há um enorme engarrafamento que chega até onde os olhos podem ver, enquanto as pessoas fogem na estrada para ficar em segurança. Um ataque de DDoS é assim: um apocalipse zumbi on-line. Mas, em vez de zumbis, hordas de computadores infectados vão atrás de um website direcionado, todos ao mesmo tempo, afastando os humanos e os negócios.</p>
                <p>Um ataque de DDoS ao website, à aplicação da Web, às APIs, à rede ou à infraestrutura de data center de uma empresa pode causar tempo de inatividade e impedir que usuários legítimos comprem produtos, usem um serviço, obtenham informações ou façam qualquer outro acesso.</p>
                <p>Durante um ataque de DDoS, os invasores usam muitas máquinas exploradas e dispositivos conectados pela Internet, incluindo dispositivos de IoT (Internet das Coisas), smartphones, computadores pessoais e servidores de rede, para enviar uma inundação de tráfego para os alvos.</p>
            `,
            subChapters: [],
            src: ['https://www.akamai.com/pt/our-thinking/ddos?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNFs_z86ngZL35Y2qEBkpaqcxCF6bnAjq_FjJgj5zLqP3innvwuJlRBoCm5QQAvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=F-MC-52611&utm_term=ddos%20attack&utm_content=Brazil&ef_id=CjwKCAiA-9uNBhBTEiwAN3IlNFs_z86ngZL35Y2qEBkpaqcxCF6bnAjq_FjJgj5zLqP3innvwuJlRBoCm5QQAvD_BwE:G:s&utm_source=google&utm_medium=cpc']
        },
        {
            id: 2,
            title: "Como funciona um Ataque de Negação de Serviço (DDos)?",
            desc: `
                <p>Os ataques de DDoS exploram redes de dispositivos conectados à Internet para cortar usuários de um servidor ou recurso de rede, como um website ou uma aplicação que eles podem acessar com frequência.</p>
                <p>Para iniciar um ataque de DDoS, os invasores usam malware ou aproveitam as vulnerabilidades de segurança para infectar e controlar de forma mal-intencionada as máquinas e os dispositivos. Cada computador ou dispositivo infectado, chamado de "bot" ou "zumbi", consegue espalhar o malware ainda mais e participar de ataques de DDoS. Esses bots formam exércitos de bots chamados "botnets", que aproveitam sua força em números e ampliam o tamanho de um ataque. E, como a infecção de dispositivos de Internet das coisas muitas vezes passa despercebida (assim como aquele zumbi irritante dos filmes de terror que você não percebeu que estava infectado), os proprietários legítimos de dispositivos se tornam vítimas secundárias ou participantes inocentes, enquanto a organização que foi vítima do ataque continua com dificuldades para identificar os invasores.</p>
                <p>Depois que um invasor cria um botnet, ele pode enviar instruções remotas a cada bot, direcionando um ataque de DDoS ao sistema alvo. Quando um botnet ataca uma rede ou um servidor, o invasor instrui os bots individuais a enviar solicitações ao endereço IP da vítima. Assim como nós, humanos, temos impressões digitais únicas, nossos dispositivos têm um endereço exclusivo que os identifica na Internet ou na rede local. O resultado desse tráfego esmagador cria uma negação de serviço, impedindo que o tráfego normal acesse o website, a aplicação da Web, a API ou a rede.</p>
                <p>Às vezes, os botnets, com suas redes de dispositivos comprometidos, são alugados para iniciar outros possíveis ataques por meio de serviços de "ataque por aluguel". Isso permite que as pessoas com más intenções, mas sem treinamento ou experiência, iniciem ataques de DDoS facilmente por conta própria.</p>
            `,
            subChapters: [],
            src: ['https://www.akamai.com/pt/our-thinking/ddos?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNFs_z86ngZL35Y2qEBkpaqcxCF6bnAjq_FjJgj5zLqP3innvwuJlRBoCm5QQAvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=F-MC-52611&utm_term=ddos%20attack&utm_content=Brazil&ef_id=CjwKCAiA-9uNBhBTEiwAN3IlNFs_z86ngZL35Y2qEBkpaqcxCF6bnAjq_FjJgj5zLqP3innvwuJlRBoCm5QQAvD_BwE:G:s&utm_source=google&utm_medium=cpc']
        },
        {
            id: 3,
            title: "Tipos de Ataques de Negação de Serviço (DDoS)",
            desc: `
                <p>Há muitos tipos diferentes de ataques de DDoS e, muitas vezes, os invasores usam mais de um tipo para causar estragos em seus alvos. Três tipos principais são volumétrico, protocolo, e ataques à camada de aplicação. O objetivo de todos os ataques é retardar drasticamente ou impedir que o tráfego legítimo chegue ao destino pretendido. Por exemplo, isso pode significar impedir que um usuário acesse um website, compre um produto ou serviço, assista a um vídeo ou interaja nas redes sociais. Além disso, ao tornar os recursos indisponíveis ou diminuir o desempenho, o DDoS pode paralisar uma empresa. Isso pode impedir que os funcionários acessem e-mails, aplicações da Web ou realizem negócios normalmente.</p>
                <p>Para entender melhor como funcionam os ataques de DDoS, vamos detalhar os diferentes caminhos que os invasores podem seguir. O modelo de interconexão de sistemas abertos, também chamado de "modelo de OSI", é uma estrutura em camadas para vários padrões de rede que contém sete camadas diferentes. Cada camada do modelo de OSI tem um propósito único, como os andares de um prédio de escritórios onde operam as diferentes funções de uma empresa. Os invasores visam às diferentes camadas, dependendo do tipo de ativo voltado para a Web ou para a Internet que eles gostariam de interromper.</p>
            `,
            subChapters: [
                {
                    title: "Injeção de SQL (SQLi)",
                    desc: `
                        <p>Uma injeção de SQL pode ser feita através de uma falha de segurança em um site, onde o hacker abusa desta falha para ter acesso ao banco de dados do serviço, podendo copiar, alterar ou até apagar dados do banco.</p>
                    `
                },
                {
                    title: "Inclusão de Arquivo Local (LFI)",
                    desc: `
                        <p>A inclusão de arquivo local é realizada através de uma falha de segurança num site, onde o hacker altera a origem de um arquivo, fazendo com que o site utilize um arquivo malicioso, podendo resultar em inúmeras formas de prejudicar o uso do serviço.</p>
                    `
                },
                {
                    title: "Comandos Externos (XSS)",
                    desc: `
                        <p>Comandos Externos ou Cross-Site Scripting, é uma falha de segurança do servidor que quando explorada faz com que o hacker seja capaz de realizar comandos no serviço através de outro serviço ou servidor, dando liberdade para fazer praticamente qualquer coisa com o serviço ou com os dados dos usuários.</p>
                    `
                }
            ],
            src: ['https://www.akamai.com/pt/our-thinking/ddos?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNFs_z86ngZL35Y2qEBkpaqcxCF6bnAjq_FjJgj5zLqP3innvwuJlRBoCm5QQAvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=F-MC-52611&utm_term=ddos%20attack&utm_content=Brazil&ef_id=CjwKCAiA-9uNBhBTEiwAN3IlNFs_z86ngZL35Y2qEBkpaqcxCF6bnAjq_FjJgj5zLqP3innvwuJlRBoCm5QQAvD_BwE:G:s&utm_source=google&utm_medium=cpc']
        }
    ],
    "https": [
        {
            id: 1,
            title: "O que é o Protocolo HTTPS?",
            desc: `
                <p>Afinal, o que é HTTPS? A abreviação corresponde a Hyper Text Transfer Protocol Secure, traduzindo para o português como: Protocolo de Transferência de Hipertexto Seguro.</p>
                <p>A função principal do código é garantir que a URL acessada — endereço eletrônico — tenha de fato uma conexão segura entre os servidores que hospedam um site e o seu dispositivo.</p>
            `,
            subChapters: [],
            src: ['https://br.godaddy.com/blog/o-que-e-https-e-qual-a-sua-importancia/', 'https://pt.wikipedia.org/wiki/Hyper_Text_Transfer_Protocol_Secure', 'https://www.techtudo.com.br/noticias/2014/02/o-que-e-https-e-como-ele-pode-proteger-sua-navegacao-na-internet.ghtml']
        },
        {
            id: 2,
            title: "Como Funciona o Protocolo HTTPS?",
            desc: `
                <p>O funcionamento é feito por meio da criptografia de dados. Ou seja, para que a troca de informações seja segura, os dois servidores devem ser autenticados. Aliás, você sabia que, atualmente, essa é a versão de protocolo considerada a mais segura? Isso porque há a combinação da sigla convencional HTTP com o protocolo Secure Sockets Layers — SSL.</p>
            `,
            subChapters: [],
            src: ['https://br.godaddy.com/blog/o-que-e-https-e-qual-a-sua-importancia/', 'https://pt.wikipedia.org/wiki/Hyper_Text_Transfer_Protocol_Secure', 'https://www.techtudo.com.br/noticias/2014/02/o-que-e-https-e-como-ele-pode-proteger-sua-navegacao-na-internet.ghtml']
        },
        {
            id: 3,
            title: "Quais as Diferenças entre HTTP e HTTPS?",
            desc: `
                <p>Agora que você já sabe o que é HTTPS, podemos falar sobre as diferenças entre essa sigla e a HTTP.</p>
                <p>Saiba que ambas correspondem a protocolos de transmissão de dados. Mas a diferença é que o processo de ação do HTTPS, como já comentamos, é por comunicação criptografada. Dessa forma, ajuda a evitar roubos de informações durante a troca de dados. Já o HTTP apenas permite que o computador troque conhecimentos que possuam texto com o servidor.</p>
                <p>Aqui vale uma observação muito importante: o uso da conexão HTTPS não significa que o site esteja totalmente protegido. Mas, o que fazer, então? O recomendado é a instalação de softwares de Internet Security no computador.</p>
                <p>Fora isso, é preciso ter atenção redobrada quanto a endereços potencialmente suspeitos. Um exemplo de problema é o caso de phishing, em que o usuário pensa estar em um site com HTTPS ativo, mas, na verdade, trata-se de uma conexão falsa.</p>
            `,
            subChapters: [],
            src: ['https://br.godaddy.com/blog/o-que-e-https-e-qual-a-sua-importancia/', 'https://pt.wikipedia.org/wiki/Hyper_Text_Transfer_Protocol_Secure', 'https://www.techtudo.com.br/noticias/2014/02/o-que-e-https-e-como-ele-pode-proteger-sua-navegacao-na-internet.ghtml']
        },
        {
            id: 4,
            title: "Quais são as vantagens do HTTPS?",
            desc: `
                <p>Os benefícios do protocolo HTTPS valem tanto para donos quanto para usuários de sites.</p>
                <p>Sobre o primeiro caso, vale destacar a oportunidade de desenvolver uma casa virtual segura e, consequentemente, de grande reputação. Fatores essenciais para quem quer construir autoridade no mundo digital.</p>
                <p>Além disso, é importante saber o que é HTTPS pode ajudar, inclusive, nas estratégias de SEO do seu site. Isso acontece porque o uso desse protocolo de segurança se tornou um dos critérios de motores de busca.</p>
                <p>Sendo assim, quando você utiliza o Hyper Text Transfer Protocol Secure, há muito mais chances das suas páginas aparecem nos rankings de sites de busca, como, por exemplo, o Google. Logo, as taxas de acesso e de conversão podem ser muito melhores do que você imagina.</p>
                <p>Já para os usuários do seu site, o principal benefício é a possibilidade de navegar por “um ambiente” altamente seguro. Ou seja, com mais proteção contra a ação de criminosos que podem roubar informações pessoais e dados bancários.</p>
            `,
            subChapters: [],
            src: ['https://br.godaddy.com/blog/o-que-e-https-e-qual-a-sua-importancia/', 'https://pt.wikipedia.org/wiki/Hyper_Text_Transfer_Protocol_Secure', 'https://www.techtudo.com.br/noticias/2014/02/o-que-e-https-e-como-ele-pode-proteger-sua-navegacao-na-internet.ghtml']
        },
    ],
    "hijacking": [
        {
            id: 1,
            title: "O que é o Sequestro de Dados?",
            desc: `
                <p>Também conhecido como extorsão ou sequestro digital, ocorre quando uma pessoa clica em um e-mail, acessa a um site ou pen drive infectado com um vírus malicioso, o ransomware.</p>
                <p>Indo além disso, as vulnerabilidades de VPN e a distribuição via botnets também são meios usados para a disseminação do vírus.</p>
                <p>Importante ressaltar que o ransomware não afeta apenas computadores desktop e laptops; também tem como alvo os dispositivos móveis.</p>
                <p>O criminoso passa a ter acesso à rede ou ao servidor da empresa. A partir disso, procura por arquivos sigilosos e importantes para roubá-los e colocá-los em uma pasta ou servidor restrito, impedindo o acesso de todos os colaboradores.</p>
                <p>Após este momento, os hackers entram em contato com o dono dos dados e exigem um alto valor como resgate. Muitas vezes, solicitam a transferência via bitcoin, um tipo de moeda virtual que dificulta o rastreamento.</p>
            `,
            subChapters: [],
            src: ['https://www.trustcontrol.com.br/blog/saiba-como-funciona-o-crime-cibernetico-de-sequestro-de-dados/']
        },
        {
            id: 2,
            title: "Como se protejer do Sequestro de Dados?",
            desc: `
                <p>Além de roubados, os sistemas da sua empresa podem ser danificados e seus dados vazados, perdidos e/ou corrompidos. Você tem certeza que o nível de risco do seu ambiente relacionado a cibersegurança é aceitável a ponto de evitar um vazamento de dados ou mesmo a paralisação do seu negócio?</p>
                <p>Uma rede segura de empresa ou corporação não é mais constituída simplesmente por servidores e desktops, mas também:</p>
                <ul>
                    <li>Trabalhadores remotos;</li>
                    <li>Nuven</li>
                    <li>Virtualização</li>
                    <li>Dispositivos Móveis</li>
                </ul>
                <p>O que significa que a sua exposição de risco está mudando a cada minuto. Por isso, a proteção mais eficaz é a combinação de tecnologia e soluções modernas.</p>
                <p>Neste sentido, convidamos você a conhecer nossa estrutura de SOC – Security Operation Center (SOC) ou Centro de Operações de Segurança e elevar a cibersegurança da sua empresa.</p>
                <p>Trata-se de uma plataforma de operação cujo objetivo é detectar, analisar e responder incidentes em cyber security utilizando uma combinação de soluções de tecnologia, processos e pessoas.</p>
            `,
            subChapters: [],
            src: ['https://www.trustcontrol.com.br/blog/saiba-como-funciona-o-crime-cibernetico-de-sequestro-de-dados/']
        },
    ]
}

const initChapters = () => {
    if (!hasTable("CHAPTERS")) {
        window.localStorage.setItem('CHAPTERS', JSON.stringify(CHAPTERS));
    }
}

initChapters();