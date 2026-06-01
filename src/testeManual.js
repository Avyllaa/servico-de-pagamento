const ServicoDePagamento = require('./ServicoDePagamento');

const servico = new ServicoDePagamento();

servico.pagar('111', 'Empresa A', 50);
servico.pagar('222', 'Empresa B', 80);
servico.pagar('333', 'Empresa C', 200);

console.log(servico.consultarUltimoPagamento());