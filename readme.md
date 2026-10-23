# Ex01 — Mondrian · Parte B


Mantive a composicao da Parte A intacta e acrescentei um unico elemento generativo: o bloco vermelho oscila lentamente entre um laranja quente e um carmim frio. Escolhi uma cor porque e a alteracao mais subtil possivel, ja que a geometria continua perfeita e so a superficie parece "respirar", o que a torna viva e ligeiramente inquietante, sem destruir a ordem de Mondrian. A oscilacao usa uma onda seno lenta, com um pouco de noise() para a tornar irregular, e uma camada muito transparente (alpha 30) para a mudanca ser quase imperceptivel. Nao usei random(), porque o ruido suave de Perlin da variacao contida e sem saltos bruscos.
