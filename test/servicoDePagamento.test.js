const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', function() {
  it('deve armazenar pagamento com categoria "cara" quando valor > 100', function() {
    const servico = new ServicoDePagamento();
    servico.pagar('0987-7656-3475', 'Samar', 156.87);
    const ultimo = servico.consultarUltimoPagamento();
    assert.strictEqual(ultimo.codigoBarras, '0987-7656-3475');
    assert.strictEqual(ultimo.empresa, 'Samar');
    assert.strictEqual(ultimo.valor, 156.87);
    assert.strictEqual(ultimo.categoria, 'cara');
  });

  it('deve armazenar pagamento com categoria "padrão" quando valor <= 100', function() {
    const servico = new ServicoDePagamento();
    servico.pagar('1111-2222-3333', 'Empresa X', 56.87);
    const ultimo = servico.consultarUltimoPagamento();
    assert.strictEqual(ultimo.categoria, 'padrão');
    assert.strictEqual(ultimo.valor, 56.87);
  });

  it('consultarUltimoPagamento retorna null quando não há pagamentos', function() {
    const servico = new ServicoDePagamento();
    const ultimo = servico.consultarUltimoPagamento();
    assert.strictEqual(ultimo, null);
  });

  it('pagar retorna o objeto de pagamento criado', function() {
    const servico = new ServicoDePagamento();
    const p = servico.pagar('2222', 'Y', 101);
    assert.strictEqual(p.categoria, 'cara');
  });

  it('deve retornar o último pagamento realizado', function() {
    const servico = new ServicoDePagamento();

    servico.pagar('111', 'Empresa A', 50);
    servico.pagar('222', 'Empresa B', 80);
    servico.pagar('333', 'Empresa C', 200);

    const ultimo = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimo.codigoBarras, '333');
    assert.strictEqual(ultimo.empresa, 'Empresa C');
    assert.strictEqual(ultimo.valor, 200);
  });
});
