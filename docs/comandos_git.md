Aqui está um guia completo e organizado de comandos Git, detalhando cada função essencial para o controle de versão, desde a configuração inicial até o trabalho com branches e resolução de conflitos. 

---

# Guia Completo de Comandos Git

## 1. Configuração Inicial

- **`git config --global user.name "Seu Nome"`**: Define o nome do usuário para todos os repositórios.
- **`git config --global user.email "seuemail@exemplo.com"`**: Define o email do usuário.
- **`git config --global color.ui auto`**: Configura a exibição de cores no terminal para melhorar a leitura.
- **`git config --list`**: Exibe todas as configurações atuais do Git.

---

## 2. Inicialização e Clonagem de Repositório

- **`git init`**: Inicia um novo repositório Git no diretório atual, criando a pasta oculta `.git` com arquivos de controle de versão.
  
  ```bash
  git init
  ```

- **`git clone <URL do repositório>`**: Clona um repositório remoto para o diretório local, copiando o histórico de commits e a estrutura do projeto.

  ```bash
  git clone <URL do repositório>
  ```

---

## 3. Status e Histórico de Alterações

- **`git status`**: Exibe o estado atual do repositório, indicando arquivos modificados, adicionados, e não rastreados.
  
  ```bash
  git status
  ```

- **`git log`**: Exibe o histórico de commits com detalhes como hash, autor, data e mensagem.
  
  ```bash
  git log
  git log --oneline   # Exibe uma linha resumida por commit.
  git log --stat      # Exibe detalhes das mudanças em cada commit.
  ```

- **`git diff`**: Mostra as diferenças entre o diretório de trabalho e a área de staging ou o último commit.
  
  ```bash
  git diff                # Exibe as diferenças atuais.
  git diff --cached       # Exibe as diferenças na área de staging.
  ```

---

## 4. Adicionar e Comitar Alterações

- **`git add <arquivo>`**: Adiciona um arquivo específico à área de staging para preparação do commit.
- **`git add .`**: Adiciona todos os arquivos modificados à área de staging.

  ```bash
  git add <arquivo>
  git add .
  ```

- **`git commit -m "Mensagem do commit"`**: Realiza um commit com uma mensagem.
- **`git commit -am "Mensagem"`**: Adiciona e comita todas as alterações monitoradas em uma etapa.

  ```bash
  git commit -m "Mensagem do commit"
  git commit -am "Mensagem do commit"
  ```

- **`git commit --amend`**: Permite modificar o último commit, alterando a mensagem ou adicionando arquivos.

  ```bash
  git commit --amend
  ```

---

## 5. Trabalhando com Branches (Ramos)

- **`git branch`**: Lista todas as branches no repositório.
- **`git branch <nome-da-branch>`**: Cria uma nova branch sem trocar para ela.

  ```bash
  git branch
  git branch <nome-da-branch>
  ```

- **`git checkout <nome-da-branch>`**: Alterna para uma branch existente.
- **`git checkout -b <nome-da-branch>`**: Cria e troca para uma nova branch.

  ```bash
  git checkout <nome-da-branch>
  git checkout -b <nome-da-branch>
  ```

- **`git merge <nome-da-branch>`**: Mescla uma branch específica à branch atual. Lembre-se de estar na branch de destino.

  ```bash
  git merge <nome-da-branch>
  ```

---

## 6. Atualizar e Enviar Alterações ao Repositório Remoto

- **`git push`**: Envia os commits do repositório local para o repositório remoto.
- **`git push origin <nome-da-branch>`**: Envia uma branch específica para o repositório remoto.

  ```bash
  git push
  git push origin <nome-da-branch>
  ```

- **`git pull`**: Atualiza o repositório local com as mudanças do remoto, mesclando-as na branch atual.

  ```bash
  git pull
  ```

- **`git fetch`**: Baixa as atualizações do repositório remoto sem mesclar automaticamente, útil para revisar antes de aplicar as mudanças.

  ```bash
  git fetch
  ```

---

## 7. Desfazendo Alterações

- **`git reset <arquivo>`**: Remove um arquivo da área de staging, mantendo as alterações no diretório de trabalho.
- **`git reset --hard <hash-do-commit>`**: Restaura o repositório a um commit específico, perdendo todas as mudanças locais não salvas.

  ```bash
  git reset <arquivo>
  git reset --hard <hash-do-commit>
  ```

- **`git checkout -- <arquivo>`**: Desfaz as alterações não comitadas em um arquivo específico, revertendo-o ao último commit.

  ```bash
  git checkout -- <arquivo>
  ```

---

## 8. Comandos de Colaboração e Revisão

- **`git stash`**: Salva temporariamente as mudanças não comitadas para que você possa trocá-las ou descartar depois.
  
  ```bash
  git stash          # Salva as mudanças.
  git stash apply    # Aplica as mudanças salvas.
  ```

- **`git rebase <nome-da-branch>`**: Move o histórico da branch atual para um ponto de base diferente, organizando um histórico linear e limpo.

  ```bash
  git rebase <nome-da-branch>
  git rebase -i      # Rebase interativo para manipulação avançada de commits.
  ```

- **`git cherry-pick <hash-do-commit>`**: Aplica um commit específico de outra branch para a branch atual.

  ```bash
  git cherry-pick <hash-do-commit>
  ```

---

## 9. Verificar e Resolver Conflitos

- **`git mergetool`**: Abre uma ferramenta de merge para ajudar a resolver conflitos automaticamente.
  
  ```bash
  git mergetool
  ```

- **`git diff`** e **`git diff --cached`**: Mostram diferenças entre a área de staging e o último commit ou entre arquivos preparados para commit e o último commit.

  ```bash
  git diff
  git diff --cached
  ```

---

## 10. Trabalhando com Tags

- **`git tag <nome-da-tag>`**: Cria uma tag leve para marcar uma versão ou ponto importante do projeto.
- **`git tag -a <nome-da-tag> -m "mensagem"`**: Cria uma tag anotada com mensagem e metadados.

  ```bash
  git tag <nome-da-tag>
  git tag -a <nome-da-tag> -m "descrição da tag"
  ```

- **Listar, enviar ou remover tags**:

  ```bash
  git tag                  # Lista todas as tags.
  git push --tags          # Envia todas as tags para o remoto.
  git tag -d <nome-da-tag> # Remove uma tag localmente.
  git push --delete origin <nome-da-tag> # Remove uma tag do remoto.
  ```

---

Esse guia cobre os principais comandos para ajudar a gerenciar um projeto com Git. Cada comando serve para etapas específicas do fluxo de trabalho, como configuração inicial, controle de histórico, colaboração e manutenção de um repositório limpo.