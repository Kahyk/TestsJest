# # 🧮 Atividade 4 – Algoritmos Fundamentais (Jest)

## 🎯 Objetivo
Esta atividade tem como objetivo aplicar os conceitos de **testes automatizados** em JavaScript utilizando a biblioteca **Jest**, garantindo que cada algoritmo fundamental funcione corretamente por meio de casos de teste automatizados.

---


---

## ⚙️ Tecnologias Utilizadas
- **Node.js**
- **Jest** (para testes automatizados)
- **JavaScript (CommonJS)**

---

## ▶️ Como Executar os Testes

1. **Instalar as dependências**  
   No terminal, dentro da pasta do projeto:
   ```bash
   npm install
2. **Executar os testes com Jest** 
   No terminal: npm test

3. **Ao executar, a saída deve ser semelhante a esta**

PASS  ./allFunctions.test.js
  Testes dos Algoritmos Fundamentais
    ✓ sunFunc 10+20 = 30
    ✓ sunFunc -10+20 = 30
    ✓ primeFunc 10 = false
    ✓ primeFunc 3 = true
    ✓ contFunc 10 = true
    ✓ contFunc 3 = false
    ✓ fibonacciFunc 5 = 0, 1, 1, 2, 3
    ✓ fibonacciFunc 1 = 0
    ✓ mdcFunc 5 10 = 5
    ✓ mdcFunc 1 = 1
    ✓ quicksortFunc 5,4,3,1 = 1,3,4,5
    ✓ quicksortFunc 100,4,3,150 = 3,4,100,150

Test Suites: 1 passed, 1 total  
Tests:       12 passed, 12 total  
Time:        0.13 s
