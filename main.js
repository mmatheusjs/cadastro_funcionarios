// Função para mudar o tema
let body = document.querySelector('body');
let cadastro = document.querySelector('#cadastro');
let title = document.querySelector('h1');
let font_label = document.querySelectorAll('label');


function mudaCor(){
    if (body.className == 'light'){
        body.className = 'dark';
    } else {
        body.className = 'light';
    }

    if (cadastro.className == 'light_cadastro'){
        cadastro.className = 'dark_cadastro';
    } else {
        cadastro.className = 'light_cadastro';
    }
    
//Interador para verificar a classe de cada elemento do Array
    font_label.forEach(function (element) {
        if (element.className == 'light_font'){
            element.className = 'dark_font';
        } else {
            element.className = 'light_font';
        }     
    });

    if (title.className == 'light_font'){
        title.className = 'dark_font';
    } else { 
        title.className = 'light_font';
    }
}

document.querySelector('#btn_tema').addEventListener('click', mudaCor);



//Função para a máscara do RG
function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

// Função para permitir somente números no input TEXT
function isNumberKey(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        return true;
    } else {
        event.preventDefault();
    }
}

//Função para verificar o tamanho do campo e validar
function validarrg() {
    var rg = document.getElementById("rg");

    if (rg.value.length == 12) {
        alert("RG Válido!");
    } else {
        alert("RG Inválido! Favor, digitar novamente");
    }
}

//EventListener que aciona a função isNumberKey
document.querySelector('#rg').addEventListener('keypress', isNumberKey);

//-------------------------------------------------

// CPF
function fMasc(objeto, mascara) {
    obj = objeto;
    masc = mascara;
    setTimeout("fMascEx()", 1);
}

function fMascEx() {
    obj.value = masc(obj.value);
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf
}

function ValidaCPF() {
    var RegraValida = document.getElementById("cpf").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(RegraValida)) {
        alert("CPF Válido");
    } else {
        alert("CPF Inválido");
    }
}

//-----------CEP----------
//Função para validar o campo CEP

function validarCEP(){
    let cep = document.querySelector('#cep');
    
        if(cep.value.length == 9){
            alert("CEP Válido!");
        } else {
            alert("CEP Inválido! Favor digitar novamente");
        }
}
    document.querySelector('#cep').addEventListener('change', validarCEP);

// Função para requisitar os dados referentes ao CEP na API do viacep
function getDadosEnderecoCEP(cep) {

    let xhr = new XMLHttpRequest();

    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/';

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                    let dadosJSONText = xhr.responseText;
                    let dadosJSONObj = JSON.parse(dadosJSONText);

                    document.getElementById('rua').value = dadosJSONObj.logradouro;
                    document.getElementById('bairro').value = dadosJSONObj.bairro;
                    document.getElementById('cidade').value = dadosJSONObj.localidade;
                    document.getElementById('estado').value = dadosJSONObj.uf;
            }
        }
    }
    xhr.send();
}

//-------------BTN Enviar---------

function validarCampos(){
    var func_name = campos.func_name.value;
    if (func_name == "") {
        alert("Preencha o campo Nome do Funcionário");
        campos.func_name.focus();
        return false;
    }

    var cpf = campos.cpf.value;
    if (cpf == ""){
        alert("Preencha o campo CPF");
        campos.cpf.focus();
        return false;
    }

    var rg = campos.rg.value;
    if (rg ==""){
        alert("Preencha o campo RG");
        campos.rg.focus();
        return false;
    }

    var nascimento = campos.nascimento.value;
    if (nascimento ==""){
        alert("Preencha o campo Data de Nascimento");
        campos.nascimento.focus();
        return false;
    }

    var cnh = campos.cnh.value;
    if (cnh ==""){
        alert("Escolha a categoria de sua habilitação");
        campos.cnh.focus();
        return false;
    }

    var estado_civil = campos.estado_civil.value;
    if(estado_civil == ""){
        alert("Escolha seu estado civil");
        campos.estado_civil.focus();
        return false;
    }

    var cep = campos.cep.value;
    if(cep ==""){
        alert("Preencha o campo CEP");
        campos.cep.focus();
        return false;
    }

    var  rua = campos.rua.value;
    if(rua ==""){
        alert("Preencha o campo Rua");
        campos.rua.focus();
        return false;
    }

    var bairro = campos.bairro.value;
    if(bairro ==""){
        alert("Preencha o campo Bairro");
        campos.bairro.focus();
        return false;
    }

    var cidade = campos.cidade.value;
    if (cidade ==""){
        alert("Preencha o campo Cidade");
        campos.cidade.focus();
        return false;
    }

    var estado = campos.estado.value;
    if (estado ==""){
        alert("Preencha o campo Estado");
        campos.estado.focus();
        return false;
    }

    var numero = campos.numero.value;
    if (numero ==""){
        alert("Preencha o campo Número");
        campos.numero.focus();
        return false;
    }
}

// EventListener para chamar a function "validarcampos()" ao clicar no botão #btn_send
document.querySelector('#btn_send').addEventListener('click', validarCampos);

