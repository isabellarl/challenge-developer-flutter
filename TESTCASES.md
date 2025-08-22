### Funcionalidade: Login do Usuário

Cenário: Login bem-sucedido com login válido
    Dado que o usuário está na página de login
    Quando o usuário informa um nome de usuário e senha válidos
    E clica no botão "Entrar"
    Então o usuário deve ser redirecionado para a tela de menu

  Cenário: Login mal-sucedido com nome de usuário inválido
    Dado que o usuário está na página de login
    Quando o usuário informa um nome de usuário inválido e uma senha válida
    E clica no botão "Entrar"
    Então deve ser exibida a mensagem de erro "Nome de usuário ou senha inválidos."
    E o usuário deve permanecer na página de login

  Cenário: Login mal-sucedido com senha inválida
    Dado que o usuário está na página de login
    Quando o usuário informa um nome de usuário válido e uma senha inválida
    E clica no botão "Entrar"
    Então deve ser exibida a mensagem de erro "Nome de usuário ou senha inválidos."
    E o usuário deve permanecer na página de login

  Cenário: Login mal-sucedido com campos vazios
    Dado que o usuário está na página de login
    Quando o usuário deixa os campos de nome de usuário e senha vazios
    E clica no botão "Entrar"
    Então deve ser exibida a mensagem de erro "Nome de usuário e senha são obrigatórios."
    E o usuário deve permanecer na página de login

Cenário: Senha permanece secreta
    Dado que o usuário está na página de login
    Quando o usuário preenche o campo de senha 
    E não clica no botão para revelar a senha
    Então o texto digitado no campo senha deve permanecer secreto

Cenário: Revelação de senha
    Dado que o usuário está na página de login
    Quando o usuário preenche o campo de senha 
    E clica no botão para revelar a senha
    Então deve ser exibido o texto digitado no campo senha

Cenário: Usuário esqueceu o nome de usuário
    Dado que o usuário está na página de login
    Quando o usuário não sabe o seu nome de usuário
    E clica no botão “esqueci o usuário”
    Então deve ser exibida a mensagem “Funcionalidade em desenvolvimento.”

Cenário: Usuário esqueceu a senha
    Dado que o usuário está na página de login
    Quando o usuário não sabe a sua senha
    E clica no botão “esqueci a senha”
    Então deve ser exibida a mensagem “Funcionalidade em desenvolvimento.”

### Funcionalidade: Cadastro de Aluno

Cenário: Acessar página de lista de alunos
    Dado que o usuário realizou login
    Quando o usuário é redirecionado para a página de lista de alunos
    Então deve ser exibidos todos os alunos cadastrados
    E todos os dados do cadastro devem ser exibidos corretamente na lista

Cenário: Acessar página para adicionar novo aluno
    Dado que o usuário está na página Menu
    Quando o usuário quer adicionar um novo aluno
    E clica no botão “Adicionar Aluno”
    Então deve ser redirecionado para a página de cadastro de aluno

Cenário: Adicionar aluno com todos os campos obrigatórios válidos
    Dado que o usuário está na página Adicionar Aluno
    Quando o usuário preenche todos os campos obrigatórios corretamente
    E clica no botão "Adicionar"
    Então o aluno deve ser adicionado com sucesso
    E a mensagem “O aluno foi adicionado com sucesso!” deve ser exibida.


Cenário: Adicionar aluno com os campos obrigatórios vazios
    Dado que o usuário está na página Adicionar Aluno
    Quando o usuário deixa um ou mais campos obrigatórios vazios
    E clica no botão "Adicionar"
    Então a mensagem “Você precisa preencher os campos obrigatórios!” deve ser exibida

Cenário: Adicionar aluno com o campo Nome do Aluno Inválido
    Dado que o usuário está na página Adicionar Aluno
    Quando o usuário preenche o Nome do Aluno com um valor inválido
    E clica no botão "Adicionar"
    Então deve ser exibida uma mensagem de erro informando que o Nome do aluno é inválido

Cenário: Adicionar aluno com o campo CPF inválido
    Dado que o usuário está na página Adicionar Aluno
    Quando o usuário preenche o CPF com um valor inválido
    E clica no botão "Adicionar"
    Então deve ser exibida uma mensagem de erro informando que o CPF é inválido

Cenário: Adicionar aluno com o campo Registro do Aluno inválido
    Dado que o usuário está na página Adicionar Aluno
    Quando o usuário preenche o Registro do Aluno com um valor inválido
    E clica no botão "Adicionar"
    Então deve ser exibida uma mensagem de erro informando que o Registro do Aluno é inválido

Cenário: Adicionar aluno com o campo e-mail inválido
    Dado que o usuário está na página Adicionar Aluno
    Quando o usuário preenche o e-mail com um valor inválido
    E clica no botão "Adicionar"
    Então deve ser exibida uma mensagem de erro informando que o e-mail é inválido

### Funcionalidade: Excluir aluno

Cenário: Exclusão bem-sucedida de aluno
  Dado que o usuário está na tela de "Alunos"
  E existe um aluno listado
  Quando o usuário clica no ícone de lixeira ao lado do aluno
  E confirma a exclusão clicando em "Excluir aluno"
  Então o aluno deve ser removido da lista

Cenário: Cancelamento de exclusão um aluno bem-sucedido
  Dado que o usuário está na tela de "Alunos"
  E existe um aluno listado
  Quando o usuário clica no ícone de lixeira ao lado do aluno
  E cancela a exclusão clicando em "Cancelar"
  Então o aluno não deve ser removido da lista

### Funcionalidade: Editar cadastro de aluno

Cenário: Acessar a tela de edição de cadastro
  Dado que o usuário está na tela "Alunos"
  E existe um aluno listado
  Quando o usuário clica no ícone de edição ao lado do aluno
  Então o usuário deve ser redirecionado para a tela de edição

Cenário: Edição bem-sucedida de nome de aluno
  Dado que o usuário está na tela de edição de cadastro do Aluno
  Quando o usuário edita o campo “Nome” com conteúdo válido
  E clica no botão “Salvar Edições”
  Então o cadastro do aluno deve ser atualizado com o novo conteúdo.

Cenário: Edição bem-sucedida de nome de aluno
  Dado que o usuário está na tela de edição de cadastro do Aluno
  Quando o usuário edita o campo “Nome” com conteúdo válido
  Dado que os campos estão preenchidos corretamente
  E o usuário clica no botão “Salvar Edições”
  Então o cadastro do aluno deve ser atualizado com o novo conteúdo

Cenário: Edição de CPF do aluno
  Dado que o usuário está na tela de edição de cadastro do Aluno
  Quando o usuário tenta clicar ou digitar no campo “CPF”
  Então o campo deve estar desabilitado para edição
  E o conteúdo atual do "CPF" deve ser exibido como somente leitura

Cenário: Edição bem-sucedida de e-mail do aluno
  Dado que o usuário está na tela de edição de cadastro do Aluno
  Quando o usuário edita o campo “e-mail” com conteúdo válido
  Dado que os campos estão preenchidos corretamente
  E o usuário clica no botão “Salvar Edições”
  Então o cadastro do aluno deve ser atualizado com o novo conteúdo
  

Cenário: Edição de registro acadêmico do aluno
  Dado que o usuário está na tela de edição de cadastro do Aluno
  Quando o usuário tenta clicar ou digitar no campo "Registro acadêmico"
  Então o campo deve estar desabilitado para edição
  E o conteúdo atual do "Registro acadêmico" deve ser exibido como somente leitura

Cenário: Edição de cadastro com campo vazio
  Dado que o usuário está na tela de edição de cadastro do Aluno
  Quando o usuário deixa um campo com conteúdo vazio
  E o usuário clica no botão “Salvar Edições”
  Então deve ser exibida uma mensagem de erro informando que os campos obrigatórios devem ser preenchidos

Cenário: Edição mal-sucedida de nome de aluno
  Dado que o usuário está na tela de edição de cadastro do Aluno
  Quando o usuário edita o campo “Nome” com conteúdo inválido
  Dado que os campos estão preenchidos corretamente
  E o usuário clica no botão “Salvar Edições”
  Então deve ser exibida uma mensagem de erro informando que o nome do aluno é inválido

Cenário: Edição mal-sucedida de e-mail do aluno
  Dado que o usuário está na tela de edição de cadastro do Aluno
  Quando o usuário edita o campo “e-mail” com conteúdo inválido
  E o usuário clica no botão “Salvar Edições”
  Então deve ser exibida uma mensagem de erro informando que o e-mail do aluno é inválido
