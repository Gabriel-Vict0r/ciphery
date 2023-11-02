import copy from "copy-to-clipboard";

//copiar para a área de transferência
function copyToClipboard(value: string, typeValue: string) {
    if (value === '') {
        alert(`primeiro você deve gerar a ${typeValue}!`);
    }
    else {
        copy(value!);
        alert(`${typeValue} copiada para a área de transferência!`);
    }
}

export { copyToClipboard }