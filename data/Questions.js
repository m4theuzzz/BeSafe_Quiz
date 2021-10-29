/* Modelo
{
    id: 0,
    type: "single",
    subject: "phishing",
    challenge: 0,
    priority: 1,
    question: "Pergunta",
    answers: [
        "Resposta 1",
        "Resposta 2",
        "Resposta 3",
        "Resposta 4"
    ],
    correctAnswersIndex: [0],
    success: "Sucesso!",
    failure: "Faiô",
    experience: 15
},
*/

const QUESTIONS = [
    {
        id: 1,
        type: "single",
        subject: "phishing",
        challenge: 1,
        priority: 0,
        question: "Ao receber um email com uma promoção, qual a atitude correta a se tomar?",
        answers: [
            "Clicar no link e aproveitar imediatamente",
            "Fazer login com seus dados pessoais na página redirecionada",
            "Verificar o remetente e a vericidade da promoção",
            "Fazer download do anexo do email"
        ],
        correctAnswersIndex: [2],
        success: "Parabéns! Você respondeu corretamente, basta ficar tranquilo e analisar emails suspeitos com bastante atenção que ficará tudo bem!",
        failure: "Essa não, infelizmente você errou. Nunca confie em emails promocionais ou alarmantes de imediato, sempre verifique cuidadosamente o remetente. Mas fique tranquilo, na próxima você acerta!",
        experience: 20
    },
    {
        id: 2,
        type: "single",
        subject: "phishing",
        challenge: 1,
        priority: 0,
        question: "Dentre as atitudes a se tomar ao receber um email com assunto alarmante, selecione a atitude que não se deve ser tomada:",
        answers: [
            "Verificar o remetente",
            "Buscar outras fontes confiáveis que confirmem a veracidade do email",
            "Realizar imediatamente as demandas recebidas pelo email",
            "Perguntar a opinião de alguém confiável sobre o assunto"
        ],
        correctAnswersIndex: [2],
        success: "Parabéns! Hackers sempre tentam usar assuntos alarmantes para te distrair e te preocupar, lembre-se sempre de manter a calma e ter certeza que é verdade, antes de se preocupar.",
        failure: "Não foi dessa vez. Nunca confie imediatamente em um email com assunto alarmante, pode ser cilada! Mas fique tranquilo, com certeza você acertará na próxima vez!",
        experience: 20
    },
    {
        id: 3,
        type: "single",
        subject: "phishing",
        challenge: 0,
        priority: 1,
        question: "Qual das alternativas abaixo não representa uma característica de Phishing?",
        answers: [
            "O hacker tenta se passar como algum serviço para tentar fisgar a vítima",
            "O hacker usa bots para atacar contínuamente o serviço do usuário",
            "A vítima, enganada, passa seus dados privados ao hacker por conta própria",
            "O hacker usa de Engenharia Social para convencer a vítima"
        ],
        correctAnswersIndex: [1],
        success: "Mandou bem! Ataques de bots são outro tipo de crime cibernético, não se classifica como Phishing.",
        failure: "Essa não, essa é uma característica de Phishing, mas valeu o aprendizado, na próxima com certeza você acerta!",
        experience: 15
    },
    {
        id: 4,
        type: "single",
        subject: "social engeneering",
        challenge: 2,
        priority: 1,
        question: "Marque a opção que melhor define Engenharia Social:",
        answers: [
            "É uma técnica empregada por engenheiros para estudar os impactos de suas obras na sociedade, afim de minimizar prejuízos sócio-culturais ou realizar melhorias para a sociedade.",
            "É uma área de estudo das engenharias, focada em estudar a sociedade e seus elementos.",
            "É uma forma de estudar os indivíduos e suas atitudes na internet.",
            "É uma técnica empregada por criminosos virtuais para induzir usuários desavisados a enviar dados confidenciais, infectar seus computadores com malware ou abrir links para sites infectados."
        ],
        correctAnswersIndex: [3],
        success: "Parabéns, você acertou! Nem tudo que você vê, não importa o quão bem feito, pode ser confiado imediatamente, sempre verifique o remetente e a URL.",
        failure: "Essa não, você errou! Mas fique tranquilo, valeu o aprendizado, na próxima você acerta!",
        experience: 30
    },
    {
        id: 5,
        type: "single",
        subject: "pharming",
        challenge: 0,
        priority: 1,
        question: "Dentre as opções abaixo, marque a que não é uma característica de Pharming:",
        answers: [
            "É uma técnica usada pelos hackers para praticar Engenharia Social.",
            "É uma variação do Phishing que rouba dados através do trafego em sites maliciosos.",
            "Normalmente o hacker adultera arquivos base do seu navegador, para que te force a navegar no site malicioso",
            "É facilmente evitado com o uso de antimalwares e antivírus."
        ],
        correctAnswersIndex: [0],
        success: "Mandou bem! Este crime usa da navegação para roubar seus dados, tem que tomar cuidado onde você clica!",
        failure: "Opa! Esta é uma característica de Pharming, mas valeu o aprendizado, na próxima você acerta.",
        experience: 15
    },
    {
        id: 6,
        type: "single",
        subject: "phishing",
        challenge: 0,
        priority: 2,
        question: "Qual das alternativas abaixo descrevem corretamente o Phishing?",
        answers: [
            "É uma técnica de Engenharia Social usada para enganar usuários e obter informações confidenciais.",
            "É um crime que ataca as máquinas dos usuários em busca de informações confidenciais.",
            "É uma técnica de pesca comumente usada na América do Norte.",
            "É uma tentativa de tornar os recursos de um sistema indisponíveis para os seus utilizadores."
        ],
        correctAnswersIndex: [0],
        success: "Isso aí! Continue assim e em breve vai estar dando aula!",
        failure: "Acho que você se confundiu. Mas fique tranquilo, tudo é um aprendizado, na próxima você consegue!",
        experience: 15
    },
    {
        id: 7,
        type: "single",
        subject: "social engeneering",
        challenge: 1,
        priority: 1,
        question: "Das alternativas abaixo, qual não é uma forma de se protejer da Engenharia Social:",
        answers: [
            "Nunca clicar em Links Suspeitos.",
            "Sempre desconfiar da veracidade de uma informação.",
            "Sempre protejer suas credenciais e não preenchê-las em qualquer lugar.",
            "Nunca usar uma solução de segurança na internet (antivírus)."
        ],
        correctAnswersIndex: [3],
        success: "É isso aí! Engenharia Social não passa de uma forma de tentar te enganar, então desde que você navegue sempre em lugares confiáveis, não precisa se preocupar.",
        failure: "Não foi dessa vez. Mas você acabou de descobrir uma forma de se protejer de Engenharia Social, então na próxima você acerta!",
        experience: 20
    },
    {
        id: 8,
        type: "single",
        subject: "ddos",
        challenge: 1,
        priority: 2,
        question: "Marque a opção que melhor defina DDoS (Ataque de Negação de Serviço):",
        answers: [
            "É um ataque que invade a máquina do usuário e o força a navegar em sites maliciosos.",
            "É uma técnica usada por hackers para convencerem os usuários a entregar suas informações sigilosas.",
            "É uma tentativa de tornar os recursos de um sistema indisponíveis para os seus utilizadores.",
            "É a invasão de um sistema usando força bruta para roubar seus dados."
        ],
        correctAnswersIndex: [2],
        success: "Mandou Bem! Ataques DDoS são comuns em sites de grandes empresas, onde tentam se aproveitar da instabilidade do sistema para cometer outros crimes.",
        failure: "Acho que você se confundiu. Mas fique tranquilo, tudo é um aprendizado, na próxima você consegue!",
        experience: 20
    },
    {
        id: 9,
        type: "single",
        subject: "https",
        challenge: 0,
        priority: 2,
        question: "Como a URL pode te ajudar a identificar se o site é seguro?",
        answers: [
            "Identificando se o site é '.com.br'.",
            "Identificando a quantidade de dígitos que a URL possui.",
            "Identificando o protocolo do site, caso seja 'http' o site não é seguro, caso seja 'https', significa que ele é seguro.",
            "Não ajuda."
        ],
        correctAnswersIndex: [2],
        success: "É isso aí! Para evitar cair em qualquer cilada, se mantenha sempre em sites com protocolo 'https', identificado na URL do site.",
        failure: "Essa não, você errou! Mas fique tranquilo pois valeu o aprendizado, na próxima você acerta!",
        experience: 15
    },
    {
        id: 10,
        type: "single",
        subject: "hijacking",
        challenge: 1,
        priority: 0,
        question: "Marque a alternativa que melhor represente o crime de Sequestro de Dados:",
        answers: [
            "É um crime onde o hacker invade a sua casa e sequestra seu computador, exigindo dinheiro para o resgate.",
            "É um crime onde o hacker, após adquirir dados sigilosos, ameaça a vítima para que ela realize ações ou transfira dinheiro, para ter os dados de volta.",
            "É um crime em que o hacker concede informações sigilosas para uma vítima e pede favores em retorno.",
            "É um crime no qual o hacker usa bots para impedir que vc acesse seus dados."
        ],
        correctAnswersIndex: [1],
        success: "Parabéns, você está certo! Sequestros de Dados são crimes muito pesados, não hesite em buscar ajuda com a polícia imediatamente.",
        failure: "Essa não, você errou. Fique tranquilo, pois você acabou de descobrir o que não é o Sequestro de Dados, na próxima você acerta.",
        experience: 20
    },
];