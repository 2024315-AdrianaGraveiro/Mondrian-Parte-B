

let base;   // guarda a composição da Parte A (sem as linhas pretas)
 
function setup() {
  pixelDensity(1);          // garante que a imagem guardada coincide com o canvas
  createCanvas(800, 784);   // proporção do quadro (não é quadrado)
  // Centra o canvas na página (horizontal e verticalmente)
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
 
  // Guarda a composição (blocos e texturas) para a reutilizar em cada frame.
  // As linhas pretas são desenhadas no draw(), para uma delas poder saltar.
  base = get();
}
 
let salto = 0;   // deslocamento vertical da linha que salta
 
function draw() {
  // 1. Repõe a base: fundo, blocos de cor e texturas
  image(base, 0, 0);
 
  // 2. O bloco vermelho muda lentamente de cor (verde-água, mas só até 30%)
  let t = frameCount * 0.015;
  let k = (sin(t) + 1) / 2 * 0.3;
  let cor = lerpColor(color(233, 42, 0), color(0, 200, 170), k);
  cor.setAlpha(170);
  noStroke();
  fill(cor);
  rect(0, 0, 362, 311);
 
  // 3. A linha horizontal de baixo dá um pequeno salto de tempos a tempos
  if (frameCount % 40 === 0) {
    salto = random() < 0.5 ? 0 : random(-10, 10);   // metade das vezes volta ao sítio
  }
 
  // 4. Linhas pretas
  fill(14, 14, 16);
  rect(362, 0, 11, 784);          // vertical principal
  rect(0, 311, 800, 18);          // horizontal de cima
  rect(0, 502 + salto, 800, 17);  // horizontal de baixo (a que salta)
  rect(76, 519, 10, 265);         // vertical esquerda
  rect(608, 519, 12, 265);        // vertical direita
  rect(373, 741, 235, 14);        // pequena horizontal sob o azul
}
 