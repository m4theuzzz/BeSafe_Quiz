const translate = (string) => {
    if (string == "phishing") {
        return "Pesca Cibernética";
    }

    if (string == "ddos") {
        return "Ataque de Negação de Serviço";
    }

    if (string == "social engeneering") {
        return "Engenharia Social";
    }

    if (string == "bots") {
        return "Ataque de Sobrecarga";
    }

    if (string == "hijacking") {
        return "Sequestro Digital";
    }

    if (string == "https") {
        return "Protocolos Web";
    }

    if (string == "pharming") {
        return "Colheita Cibernética";
    }

    return string;
};