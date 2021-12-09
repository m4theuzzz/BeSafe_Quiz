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

const SUBJECTS = ["all", "phishing", "social engeneering", "ddos", "https", "hijacking"];

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
        question: "Qual das alternativas abaixo não representa uma característica de Pesca Cibernética (Phishing)?",
        answers: [
            "O hacker tenta se passar como algum serviço para tentar fisgar a vítima",
            "O hacker usa bots para atacar contínuamente o serviço do usuário",
            "A vítima, enganada, passa seus dados privados ao hacker por conta própria",
            "O hacker usa de Engenharia Social para convencer a vítima"
        ],
        correctAnswersIndex: [1],
        success: "Mandou bem! Ataques de bots são outro tipo de crime cibernético, não se classifica como Pesca Cibernética (Phishing).",
        failure: "Essa não, essa é uma característica de Pesca Cibernética (Phishing), mas valeu o aprendizado, na próxima com certeza você acerta!",
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
        question: "Dentre as opções abaixo, marque a que não é uma característica de Colheita Cibernética (Pharming):",
        answers: [
            "É uma técnica usada pelos hackers para praticar Engenharia Social.",
            "É uma variação da Pesca Cibernética (Phishing) que rouba dados através do trafego em sites maliciosos.",
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
        question: "Qual das alternativas abaixo descrevem corretamente a Pesca Cibernética (Phishing)?",
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
    {
        id: 11,
        type: "single",
        subject: "phishing",
        challenge: 0,
        priority: 2,
        question: "Qual das alternativas abaixo é não é uma forma de Pesca Cibernética (Phishing)?",
        answers: [
            "Um email que se diz ser de uma grande empresa",
            "Uma mensagem de testo que se diz ser de um conhecido",
            "Uma notificação dentro do aplicativo oficial da empresa",
            "Uma oferta imperdível em um site suspeito"
        ],
        correctAnswersIndex: [2],
        success: "É isso aí, uma notificação do app oficial de uma empresa não vai tentar roubar suas informações, pois eles já as têm!",
        failure: "Opa! Cuidado, mensagens que não foram bem identificadas podem ser perigosas. Além disso, nunca confie em anúncios muito chamativos",
        experience: 15
    },
    {
        id: 12,
        type: "single",
        subject: "phishing",
        challenge: 2,
        priority: 0,
        question: "Marque a alternativa correta:",
        answers: [
            "Pesca Cibernética (Phishing) é o tipo mais simples de ciberataque e, ao mesmo tempo, o mais perigoso e eficiente",
            "A Pesca Cibernética (Phishing) é um dos poucos crimes cibernéticos que envolvem invadir o computador da vítima",
            "Na Pesca Cibernética (Phishing), o hacker envia somente um email, direcionado somente a uma vítima",
            "Nenhuma das opções é correta"
        ],
        correctAnswersIndex: [0],
        success: "Isso mesmo! Pesca Cibernética (Phishing) é o tipo mais comum de crime cibernético e tem ficado cada dia convincente, é necessário prestar muita atenção por onde navegamos e onde damos nossas informações",
        failure: "Essa não, você errou, mas fique tranquilo, é errando que se aprende, na próxima você acerta!",
        experience: 30
    },
    {
        id: 13,
        type: "single",
        subject: "phishing",
        challenge: 1,
        priority: 2,
        question: "Qual das alternativas abaixo não é uma abordagem comum em Pesca Cibernética (Phishing)?",
        answers: [
            "O hacker copia um email real e altera os links para direcionar o usuário à um site falso",
            "O hacker tenta se passar por alguma pessoa importante através de SMS e tenta convencer o usuário a passar informações pessoais",
            "O hacker conversa pessoalmente com suas vítimas e tenta fazê-las entregar seus dados",
            "O hacker altera o cache do seu navegador para quando acessar um site oficial de um serviço, ele te redirecionar para uma cópia maliciosa daquele site"
        ],
        correctAnswersIndex: [3],
        success: "Isso mesmo! Em Pesca Cibernética não há contato pessoal com o hacker, ele tenta usar da sua anonimidade para se passar por outras pessoas",
        failure: "Opa! Esta é uma abordagem comum de Pesca Cibernética, mas calma, você sempre terá outra chance!",
        experience: 20
    },
    {
        id: 14,
        type: "single",
        subject: "phishing",
        challenge: 2,
        priority: 2,
        question: "Qual das opções abaixo é uma derivação de Pesca Cibernética?",
        answers: [
            "Arpão Cibernético (Spear Phishing): Um tipo de Pesca Cibernética em que o hacker se direciona a somente um usuário ou empresa, coletando o máximo de informações da vida ao redor da pessoa, como nomes, números, endereços, etc. e os usa para ganhar a confiança da vítima",
            "Cópia Cibernética (Clone Phishing): Um tipo de Pesca Cibernética em que o hacker copia um email oficial recebido anteriormente e com alterações nos links e nomes, ele repassa este email clonado para centenas de pessoas, tornando mais difícil reconhecer o golpe",
            "Estelionato Cibernético (Phone Phishing): Um tipo de Pesca Cibernética em que o hacker entra em contato por SMS ou por ligação, onde ele se passa por outra pessoa, seja um oficial ou um conhecido da vítima, tentando ganhar a confiança dela antes de pedir por suas informações pessoais",
            "Todas as alternativas anteriores"
        ],
        correctAnswersIndex: [3],
        success: "É isso aí! Pesca Cibernética (Phishing) possui várias derivações com abordagens diferentes, é preciso sempre tomar cuidado.",
        failure: "Opa, essa é uma derivação de Pesca Cibernética (Phishing). Agora que descobriu, lembre-se de ficar sempre atento à ela! Em relação a pergunta, não se preocupe, você sempre terá outra chance.",
        experience: 30
    },
    // {
    //     id: 0,
    //     type: "single",
    //     subject: "pharming",
    //     challenge: 0,
    //     priority: 1,
    //     question: "Marque a alternativa que melhor define Colheita Cibernética (Pharming):",
    //     answers: [
    //         "",
    //         "É uma forma de invasão simples, que altera o cache do DNS do seu nacegador, fazendo que você seja redirecionado para sites maliciosos, uma vez que tenta entrar no site real de uma empresa. Caso não preste muita atenção, é difícil perceber antes que seja tarde demais",
    //         "Resposta 3",
    //         "Resposta 4"
    //     ],
    //     correctAnswersIndex: [1],
    //     success: "Sucesso!",
    //     failure: "Faiô",
    //     experience: 15
    // },
];

const initQuestions = () => {
    if (!hasTable("QUESTIONS")) {
        createTable("QUESTIONS");
        for (const question of QUESTIONS) {
            insertIntoTable("QUESTIONS", question);
        }
    }
    if (!hasTable("SUBJECTS")) {
        createTable("SUBJECTS");
        for (const subject of SUBJECTS) {
            insertIntoTable("SUBJECTS", subject);
        }
    }
}

initQuestions();