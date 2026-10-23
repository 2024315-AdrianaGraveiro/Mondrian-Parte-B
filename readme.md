# Ex01 — Mondrian · Parte B


Mantive a composição da Parte A intacta e acrescentei um único elemento generativo: o bloco vermelho oscila lentamente entre um laranja quente e um carmim frio. Escolhi uma cor porque é a alteração mais subtil possível, já que a geometria continua perfeita e só a superfície parece "respirar", o que a torna viva e ligeiramente inquietante, sem destruir a ordem de Mondrian. A oscilação usa uma onda seno lenta, com um pouco de noise() para a tornar irregular, e uma camada muito transparente (alpha 30) para a mudança ser quase imperceptível. Não usei random(), porque o ruído suave de Perlin dá variação contida e sem saltos bruscos.
