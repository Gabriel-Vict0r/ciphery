import { Message } from "../context/PassContext";
const copyedPass: Message = {
    title: "Ciphery",
    firstMessage: `Conteúdo copiado para a àrea de transferência!`,
    secondMessage: `Para colar a senha em outro campo, tecle CTRL + V no seu teclado.`,
};
const voidValue: Message = {
    title: "Ciphery",
    firstMessage: `Primeiro você deve gerar a senha!`,
};

const throughChar: Message = {
    title: "Ciphery",
    firstMessage: `Tamanho máximo atingido!`,
    secondMessage: 'Você ultrapassou o limite de caracteres, o máximo é 70'
};
export { copyedPass, voidValue, throughChar }