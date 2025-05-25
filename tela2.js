// tela2.js

document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";

// Header
const header = document.createElement('header');
header.style.background = "#2c2c74";
header.style.color = "#fff";
header.style.padding = "10px";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

const titulo = document.createElement('h1');
titulo.textContent = "Gerenciamento de Salas";
titulo.style.fontSize = "16px";

const icons = document.createElement('div');
icons.textContent = "🔍 🔔";

header.appendChild(titulo);
header.appendChild(icons);

// Main content
const main = document.createElement('main');
main.style.textAlign = "center";
main.style.padding = "40px 20px";

const h2 = document.createElement('h2');
h2.textContent = "Salas";

const p = document.createElement('p');
p.textContent = "Ops! Parece que não existe nenhuma sala criada. Crie uma!\n= (";
p.style.color = "#666";
p.style.marginTop = "20px";

main.appendChild(h2);
main.appendChild(p);

// Footer nav
const nav = document.createElement('nav');
nav.style.position = "fixed";
nav.style.bottom = "0";
nav.style.width = "100%";
nav.style.background = "#f0f0f0";
nav.style.display = "flex";
nav.style.justifyContent = "space-around";
nav.style.padding = "10px 0";
nav.style.borderTop = "1px solid #ccc";

const buttons = ["🏠 Home", "💬 Solicitação", "➕ Criar", "👤 Perfil", "⚙️ Ajustes"];
buttons.forEach((label, index) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.fontSize = "12px";
    btn.style.color = index === 2 ? "#2c2c74" : "#333"; // marcar 'Criar'
    nav.appendChild(btn);
});

// Bottom sheet
const bottomSheet = document.createElement('div');
bottomSheet.style.position = "fixed";
bottomSheet.style.bottom = "0";
bottomSheet.style.left = "0";
bottomSheet.style.width = "100%";
bottomSheet.style.background = "#fff";
bottomSheet.style.boxShadow = "0 -2px 10px rgba(0,0,0,0.2)";
bottomSheet.style.borderTopLeftRadius = "10px";
bottomSheet.style.borderTopRightRadius = "10px";
bottomSheet.style.padding = "20px";

const closeBtn = document.createElement('button');
closeBtn.textContent = "✕";
closeBtn.style.float = "right";
closeBtn.style.background = "none";
closeBtn.style.border = "none";
closeBtn.style.fontSize = "16px";

const sheetTitle = document.createElement('h2');
sheetTitle.textContent = "Criar";
sheetTitle.style.fontSize = "16px";
sheetTitle.style.marginBottom = "10px";

const options = ["Sala", "Tipo de Recurso", "Tipo de Sala"];
options.forEach((opt, index) => {
    const label = document.createElement('label');
    label.style.display = "flex";
    label.style.alignItems = "center";
    label.style.marginBottom = "10px";
    
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    if (index === 0) checkbox.checked = true;
    checkbox.style.marginRight = "10px";
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(opt));
    bottomSheet.appendChild(label);
});

const salvarBtn = document.createElement('button');
salvarBtn.textContent = "Salvar";
salvarBtn.style.width = "100%";
salvarBtn.style.background = "#2c2c74";
salvarBtn.style.color = "#fff";
salvarBtn.style.border = "none";
salvarBtn.style.padding = "10px";
salvarBtn.style.borderRadius = "20px";
salvarBtn.style.fontSize = "16px";

bottomSheet.appendChild(closeBtn);
bottomSheet.appendChild(sheetTitle);
bottomSheet.appendChild(salvarBtn);

// Append to body
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(nav);
document.body.appendChild(bottomSheet);
