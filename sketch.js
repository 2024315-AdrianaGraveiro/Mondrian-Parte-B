

 
let base;   // guarda a composição da Parte A, desenhada uma só vez
 
function setup() {
  pixelDensity(1);          // garante que a imagem guardada coincide com o canvas
  createCanvas(800, 784);   // proporção do quadro (não é quadrado) 
  document.body.style.cssText = 'margin:0; min-height:100vh; display:flex; justify-content:center; align-items:center;';
  noStroke();
 
  // ---------- BRANCO ----------
  background(238, 240, 235);
 
  // ---------- TEXTURA SUAVE NO BRANCO (manchas desfocadas) ----------
  drawingContext.filter = 'blur(12px)';
  fill(255, 255, 255, 70);
  rect(380, 10, 400, 280);
  rect(20, 340, 320, 140);
  rect(380, 340, 400, 140);
  fill(205, 205, 195, 40);
  rect(100, 530, 240, 220);
  rect(630, 530, 160, 240);
  rect(400, 60, 300, 200);
  drawingContext.filter = 'none';
 
  // ---------- BLOCOS DE COR ----------
  fill(233, 42, 0);         // vermelho
  rect(0, 0, 362, 311);
  fill(255, 224, 0);        // amarelo
  rect(0, 519, 76, 265);
  fill(48, 52, 146);        // azul
  rect(373, 519, 235, 222);
 
  // ---------- TEXTURA SUAVE NAS CORES ----------
  drawingContext.filter = 'blur(10px)';
  fill(255, 120, 80, 35);   // vermelho mais claro
  rect(30, 30, 220, 150);
  fill(150, 10, 0, 30);     // vermelho mais escuro
  rect(150, 180, 200, 120);
  fill(255, 245, 120, 40);  // amarelo
  rect(10, 540, 50, 120);
  fill(90, 95, 190, 45);    // azul mais claro (topo)
  rect(390, 530, 200, 80);
  fill(20, 20, 110, 45);    // azul mais escuro (fundo)
  rect(390, 640, 200, 90);
  drawingContext.filter = 'none';
 
  // ---------- LINHAS PRETAS ----------
  fill(14, 14, 16);
  rect(362, 0, 11, 784);    // vertical principal
  rect(0, 311, 800, 18);    // horizontal de cima
  rect(0, 502, 800, 17);    // horizontal de baixo
  rect(76, 519, 10, 265);   // vertical esquerda
  rect(608, 519, 12, 265);  // vertical direita
  rect(373, 741, 235, 14);  // pequena horizontal sob o azul
 
  // Guarda a composição fiel (Parte A) para a reutilizar em cada frame
  base = get();
}
 
function draw() {
  // 1. Repõe a composição original, intacta
  image(base, 0, 0);
 
  // 2. Elemento generativo: os três blocos de cor deslizam suavemente para a cor contrastante e voltam, em loop
  let t = frameCount * 0.015;  // velocidade (sobe para mais rápido, desce para mais lento)
 
  //          x    y    larg alt   cor original       cor contrastante   desfasamento
  pintarBloco(0,   0,   362, 311, [233, 42, 0],    [0, 200, 170],     t);            // vermelho ↔ verde-água
  pintarBloco(373, 519, 235, 222, [48, 52, 146],   [255, 140, 0],     t + TWO_PI / 3);      // azul ↔ laranja
  pintarBloco(0,   519, 76,  265, [255, 224, 0],   [140, 0, 200],     t + TWO_PI * 2 / 3);  // amarelo ↔ violeta
}
 
// Pinta um bloco com uma cor que oscila entre a original e a contrastante
function pintarBloco(x, y, w, h, corA, corB, fase) {
  let k = (sin(fase) + 1) / 2 * 0.3;                 // só vai até 30% da cor contrastante: mudança subtil
  let cor = lerpColor(color(corA), color(corB), k);
  cor.setAlpha(170);                                 // deixa ver a textura por baixo
  noStroke();
  fill(cor);
  rect(x, y, w, h);
}