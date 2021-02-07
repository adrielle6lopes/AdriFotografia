function valida() {
    //verifica nome
    if (form.nome.value == "") {
        alert("Digite seu nome")
        form.nome.focus();
        return (false);
    }
    //verifica e-mail
    if (form.email.value == "") {
        alert("Digite seu E-mail");
        form.email.focus();
        return (false);
    }

    if (form.email.value.indexOf('@', 0) == -1) {
        alert("O E-mail é Ivalido");
        form.email.focus();
        return (false);
    }
    //verifica telefone

    if (form.telefone.value == "") {
        alert("Digite seu número");
        form.telefone.focus();
        return (false);
    }
    var ver_numero = "1234567890-()";
    var sk15 = form.telefone.value;
    var invalido = true;

    for (i = 0; i < sk15.length; i++) {
        ch = sk15.charAt(i);

        for (j = 0; j < ver_numero.length; j++)
            if (ch == ver_numero.charAt(j)) break;

        if (j == ver_numero.length) {
            invalido = false;
            break;
        }
    }

    if (!invalido) {
        alert("O Campo telefone deve conter apenas números");
        form.telefone.focus();
        return (false);
    }
    //verifica mensagem

    if (form.mensagem.value == "") {
        alert("Digite uma mensagem");
        form.mensagem.focus();
        return (false);
    }
    return (true);
}