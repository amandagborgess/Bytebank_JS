import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",11122233300, 111114447);
const cliente2 = new Cliente("Josué", 33344455501, 554449993 );

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(1000);
const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.transferir(500, conta2);

console.log(ContaCorrente.numeroDeContas);

