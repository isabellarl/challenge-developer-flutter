### 3: Elabore uma estratégia para prevenção de bugs:

Manter o código organizado, comentado e ágil (usando hooks por exemplo), criar uma documentação de how-to para automação, criando um padrão entre todos os desenvolvedores do código.
Sempre validar o payload e código retornados dentro do teste, positivos e negativos.
Criar uma prática de análise de Pull Request entre o time, reforçando que nenhum teste tenha passado, ou que algum teste esteja com erro.
Executar ciclo de regressão de testes regularmente, para garantir que nenhuma outra funcionalidade possa ter sido quebrada.


------------------------------------


4. Um app foi entregue para realizar os testes finais antes de seu lançamento,
durante o seu desenvolvimento foram realizados testes funcionais pela
equipe de QA, porém, quando iniciou os testes de regressão so sistema
você se deparou com vários problemas diferentes, que não foram
percebidos durante os testes funcionais que foram aplicados. Diante dessa
situação, nós temos alguns problemas:
• O app está com prazo comprometido visando a entrega para o
cliente.
• O tempo de teste que você tinha estimado no início é pouco, diante
dos problemas encontrados.

### 4.1 Um plano de ação diante dessa situação.

Primeiro, devemos classificar cada bug por criticidade:
- Crítico: Impede o uso da ferramenta;
- Alto: Atinge uma ou mais funcionalidades essênciais;
- Médio: Atinge uma ou mais funcionalidades secundárias;
- Baixo: Pode ser corrigido posteriormente.

Classificando os bugs, o time pode se mover em uma task-force e resolver os problemas mais críticos primeiro.
Depois disso, uma análise deve ser feita na automação, pois provavelmente existem brechas nos testes ou testes mal-automatizados. Um ciclo de regressão deve cobrir principalmente as funcionalidades mais críticas da aplicação, criando uma segurança de que novas funcionalidades implementadas, ou bugs corrigidos, não estão afetando essas funcionalidades principais.

É interessante alertar o cliente sobre a situação real, que o prazo pode ser impactado mas que as medidas cabíveis já foram tomadas, isso é interessante para alinhar as expectativas e não criar um mal-estar com o cliente, caso a entrega atrase sem aviso.

### 4.2 Uma estratégia para que esse problema talvez não houvesse ocorrido.

Ter como pilar uma automação do máximo de testes possível, especialmente das principais funcionalidades da aplicação. Assegurando que mudanças em qualquer outra parte da aplicação, não afete essas funcionalidades.
Documentar todos os fluxos, regras de negócio e cenários de testes possíveis (incluindo testes de borda), e também documentar as taxas de falha e sucesso de execução da automação de testes, isso é importante para observarmos se estamos evoluindo na cobertura de testes, cobrindo mais cenários a cada período e resultando em menos bugs surpresas.
Manter uma rotina de testes exploratórios, garantindo que o fluxo da aplicação está correto e com boa usabilidade.
Seria interessante realizar uma revisão períodica na automação de testes para garantir 100% de cobertura.

