function verificarCodigo() {
    // Obter o valor digitado, remover espaços e converter para maiúsculas
    const inputElement = document.getElementById('codigoInput');
    const input = inputElement.value.trim().toUpperCase();
    
    const recWallpaper = document.getElementById('recompensaWallpaper');
    const recBastidores = document.getElementById('recompensaBastidores');
    const mensagemErro = document.getElementById('mensagemErro');

    // Esconder tudo primeiro antes de validar
    recWallpaper.style.display = "none";
    recBastidores.style.display = "none";
    mensagemErro.style.display = "none";

    // Verificar qual código foi inserido
    if (input === "NOOBITO2026") {
        recWallpaper.style.display = "block";
    } else if (input === "#BASTIDORES" || input === "BASTIDORES") {
        recBastidores.style.display = "block";
    } else {
        // Se nenhum estiver correto, mostra o erro
        mensagemErro.style.display = "block";
    }
}