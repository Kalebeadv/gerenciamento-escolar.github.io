# Gerenciamento-escolar.github.io

Sistema de gerenciamento escolar, que visa os seguintes objetivos:
* O sistema deve possibilitar o cadastro de alunos, funcionários, professores e disciplinas.
* As disciplinas devem exibir a quantidade de alunos e as notas dos mesmos.
* O sistema deve exibir se o aluno foi aprovado ou não (N1 e N2 são obrigatórias).
* O sistema deve exibir relatórios de: alunos cadastrados, alunos por disciplina,funcionários (em 3 níveis administrativo,
coordenador de curso e professor) e de disciplinas por curso.

# Sumário

#### [Página principal](https://github.com/Kalebeadv/gerenciamento-escolar.github.io/tree/main/src) 
#### [Arquivos javaScript](https://github.com/Kalebeadv/gerenciamento-escolar.github.io/tree/main/src/js)
#### [Arquivos HTML](https://github.com/Kalebeadv/gerenciamento-escolar.github.io/tree/main/src/html)


# Relatórios

### Diagrama de classe
![Trabalho do Ed - Sistema escola (2)](https://user-images.githubusercontent.com/62080789/142788977-0df66e7a-1b85-49ea-bb7a-207dbc0fcc08.png)

## Sobre o diagrama

* users é a classe principal, ele será usado como base para a criação das classes students e employees.
* Employees estende users, desta forma adquirindo seus atributos base,name, bith_date e sex.
* employeers_courses, através desta tabela, os funcionários (professores, coordenadores e administradores de curso) poderão ministrar os cursos.
* students estende users, adquirindo todos os seus atributos base, então por conta disso, a classe students, só possuirá a sua id como atributo exclusivo da própria classe.
* courses, essa tabela possui dois atributos, sua id e o nome do curso.
* student_Courses, através desta classe, o estudante terá acesso aos seus cursos. 
* matters, essa classe servirá para guardar as informações das matérias que o aluno irá cursar.
* notes, essa classe servirá para guardar as informações das notas dos estudantes.
* inscriptions, essa classe servirá para guardar as inscrições dos estudantes em determinado curso.

## Diagramas de caso de uso
![Sistema escolar - trabalho do ED](https://user-images.githubusercontent.com/62080789/142790807-83a0145c-63df-4b3f-acbb-c095025aec70.png)

#### 1)

|Caso de uso: cadastrar-se|
|:----|
|Resumo: o funcionário poderá ser cadastrado, esse funcionário poderá ser: professor, coordenador ou gerente.|

#### 2)

|Caso de uso: exibir quantidade de alunos|
|-----|
|Resumo: As disciplinas poderão exibir a quantidade de alunos cadastrados|

#### 3)

|Caso de uso: exibir as notas dos alunos|
|:----|
|Resumo: as disciplinas poderão exibir as notas dos alunos|

#### 4)

|Caso de uso: exibir se o aluno foi aprovado ou não|
|:--------------------------------------------------------------|
|Resumo: o sistema poderá exibir se o aluno foi aprovado ou não|

#### 5)

|Caso de uso: exibir relatório de alunos por disciplina|
|:---|
|Resumo: o sistema poderá exibir os relatórios dos alunos divido podido por disciplina|

#### 6) 

|Caso de uso: exibir relatório de funcionário|
|:----|
|Resumo: o sistema poderá exibir relatórios dos funcionários, sendo eles, professores,coordenadores, e administradores|

#### 7)

|Caso de uso: exibir relatório de disciplina por curso|
|:-----|
|Resumo: o sistema poderá exibir o relatórios das disciplinas contidas em cada curso|

#### 8)

|Caso de uso: exibir relatório dos aniversariantes do mês|
|:----|
|Resumo: o sistema poderá exibir o relatório dos aniversariantes de cada mês|

# Implementacao 

### Classe user

```
export class Users
{
    constructor(id,name,bith_date,sex)
    {
        this.id = id;
        this.name = name;
        this.bith_date = bith_date;
        this.sex = sex;
    }
}
```
A nossa classe user possui como base quatro atributos, sendo estes: id, name, birth_date e sex. A classe user sera exportada para outras classes, desta forma, possibilitando a heranca entre as classes.

> _obs: para que seja possivel a importacao e exportacao entre classes, as mesmas necessitam está em modulo_


