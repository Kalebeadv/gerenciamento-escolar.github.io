# Gerenciamento-escolar.github.io

Sistema de gerenciamento escolar, que visa os seguintes objetivos:
* O sistema deve possibilitar o cadastro de alunos, funcionários, professores e disciplinas.
* As disciplinas devem exibir a quantidade de alunos e as notas dos mesmos.
* O sistema deve exibir se o aluno foi aprovado ou não (N1 e N2 são obrigatórias).
* O sistema deve exibir relatórios de: alunos cadastrados, alunos por disciplina,funcionários (em 3 níveis administrativo,
coordenador de curso e professor) e de disciplinas por curso.

## Sumário

#### [Página principal](https://github.com/Kalebeadv/gerenciamento-escolar.github.io/tree/main/src) 
#### [Arquivos javaScript](https://github.com/Kalebeadv/gerenciamento-escolar.github.io/tree/main/src/js)
#### [Arquivos HTML](https://github.com/Kalebeadv/gerenciamento-escolar.github.io/tree/main/src/html)


## Relátorios

### Diagrama de classe
![Trabalho do Ed - Sistema escola (2)](https://user-images.githubusercontent.com/62080789/142788977-0df66e7a-1b85-49ea-bb7a-207dbc0fcc08.png)

### Sobre o diagrama

* users é a classe principal, ele sera usada como base para a criacao das classes students e employeers.
* employeers estende users, desta forma adquirindo seus atributos base,name, bith_date e sex.
* employeers_courses, atrávez desta tabela, os funcionarios (professores, coordenadores e administradores de curso) poderam ministrar os cursos.
* students estende users, adquirindo todos os seus atributos base, então por conta disso, a classe students, só possuirá a sua id como atributo exclusivo da própria classe.
* courses, essa tabela possui dois atributos, sua id e o nome do curso.
* student_Courses, atrávez desta classe, o student terá acesso aos seus cursos. 
* matters, essa classe servirá para guardar as informacoes das materias que o aluno irá cursar.
* notes, essa classe servirá para guardar as informacoes das notas dos estudantes.
* inscriptions, essa classe servirá para guardar as incricoes dos estudantes em determinado curso.

### Diagramas de caso de uso
![Sistema escolar - trabalho do ED](https://user-images.githubusercontent.com/62080789/142790807-83a0145c-63df-4b3f-acbb-c095025aec70.png)

|Caso de uso: cadastrar-se|
|---|
|Resumo: o funcionário podera se cadastrado, esse funcionário poderá ser: professor, coodenador ou gerente.|
