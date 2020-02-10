# Sistema de Agendamento de Serviços - Governo do Estado do Ceará

Utilizando o software Camunda Modeler, foi desenvolvido o fluxo do processo de agendamento dos serviços presentes no portal [Carta de Serviços](http://cartadeservicos.ce.gov.br/ConsultaCesec/pg_cs_servico.aspx) do Governo do Estado. Este processo explicita tanto o fluxo do usuário quanto o fluxo dos seus dados em nossos sistemas e nos sistemas do governo.

Após a modelagem do processo principal, foi também implementada uma aplicação servidora em Node.js com o foco de se comunicar com a engine do Camunda. Assim, é possível por meio desta tanto completar uma atividade, dando assim continuidado ao fluxo, quanto executar processamentos quando uma atividade de serviço for completada. Essa comunicação bidirecional permite ao Camunda gerenciar o lógica de negócio da aplicação e ser também comunicado por ela de qualquer evento.

Cada instância da definição processo é controlado por um token enviado nas requisições HTTP, sendo possível assim gerenciar cada instância particularmente e com o padrão stateless na perspectiva do servidor. Na aplicação Web do Camunda Engine pode-se visualizar cada instância em seu momento atual diretamente na modelagem da fluxo, podendo ter informações como gargalos mais palpável.

Toda essa comunicação acontece por meio de uma API Rest, utilizando também o módulo [camunda-external-task-client-js](https://www.npmjs.com/package/camunda-external-task-client-js).

## Equipe
- Narciso Arruda
- Nicksson Arrais
- Rebeca Maia
- Samir Braga
- Ticiana Linhares

## Modelagem do processo
![Alt text](C:/Users/Rebeca/Documents/processobpm.png?raw=true "Title")

## Benefícios da aplicação do Camunda:
 - Facilita o planejamento das funcionalidades do sistema;
 - Demonstra como o usuário irá interagir com o sistema;
 - Dá suporte à geração de código-fonte do sistema a partir da modelagem feita através do BPMN;
 - Provê uma suit de ferramentas, como Cockpit e Tasklist para administração e monitoramento do fluxo de atividades do processo BPMN do sistema modelado no Camunda Modeler.
 - Possibilita integração com IDEs como Intellij Idea e Eclipse.
 
 ## Dificuldades:
 - Uso das ferramentas é pouco intuitivo, principalmente na geração do deployment do processo;
 - Os erros são difíceis de identificar e corrigir;
 - A notação da modelagem BPMN aplicada na ferramenta é diferente da modelagem BPMN que é comumente usada.
 
 ## Melhorias:
 - Especializar-se na modelagem BPMN usada pelo Camunda;
 - Aprender as propriedades intrísecas do Camunda 
 - Decidir qual o melhor momento da fase do desenvolvimento do sistema para uso da ferramenta Camunda.
 
