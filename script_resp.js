    // puxando os dados do formulário
    const simular = document.getElementById('Simular');

    function simulador() {
        const nome = document.getElementById("nome").value;
        const mensalidade = document.getElementById("mensalidade").value;
        const tempo = document.getElementById("periodo").value;
        const resultado = document.getElementById('resultado');
    
        // validação do formulário
        if (nome !== '' && mensalidade !== '' && tempo !== '') {
            const calculo = (tempo * 12 * mensalidade).toFixed(2);
            resultado.textContent = `Olá, ${nome}! Juntando ${mensalidade} todo mês, você terá ${calculo} em ${tempo} ano(s).`;
        } else {
            resultado.textContent = "Preencha todos os campos.";
        }
    }
    simular.addEventListener('click', simulador);
