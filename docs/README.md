# Sistema de gerenciamento escolar 

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

## Sobre 

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

# Implementação 

# Classe user

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
A nossa classe user possui como base quatro atributos, sendo estes: id, name, birth_date e sex. A classe user sera exportada para outras classes, desta forma, possibilitando a herança entre as classes.

> _obs: para que seja possivel a importacao e exportacao entre classes, as mesmas necessitam está em módulo_

## Classe employees

```
import { Users } from "./users.js"

export class Employees extends Users {
    constructor(id, user_id, name, bith_date, sex, type_of_employee, cpf, status) {
        super(user_id, name, bith_date, sex);
        this.id = id;
        this.type_of_employee = type_of_employee;
        this.cpf = cpf;
        this.status = status;
    }

}
```
A classe employee herda os atributos básicos (nome, data de nascimento e etc.) da classe users. Em seu construtor, é colocado todos os atributos necessários para construção do objeto employee, incluindo atributos da classe mãe.

### Funções

#### function register_employees
Esta função tem como objetivo possibilitar um cadastro de funcionário, salvando os dados do cadastro no _sessionStorage_ da guia atual do navegador.
```
function register_employees() {
    for (let i = 0; i < atribute_array.length; i++) 
    {
        if (document.getElementById(atribute_array[i]).value == null) 
        {
            sessionStorage.setItem(atribute_array[i], element_array[i]);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
        else 
        {
            sessionStorage.setItem(atribute_array[i], document.getElementById(atribute_array[i]).value);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
    }
}
```
Primeiramente, nossa função possuirá um laço _for_, que será o responsável por percorrer todos os atributos do cadastro. Os atributos do cadastro são guardados em um _array_ de _strings_, chamado _atribute_array_, esse _array_ tem como objetivo guardar (de forma pré-definida) as _IDs_ do cadastro contidas no HTML da página de cadastro.

```
for (let i = 0; i < atribute_array.length; i++) 
    {
        //implementação
    }
```
Com o laço _for_ criado, precisamos criar um controle para salvar os dados do cadastro, para isso, usaremos o operador lógico _if_, esse operador tem como objetivo realizar uma verificação, se o campo for nulo, então preenchê ele com uma _string _  pré-definida anteriormente na classe. 

```
...
if (document.getElementById(atribute_array[i]).value == null) 
        {
            sessionStorage.setItem(atribute_array[i], element_array[i]);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
...
```
Caso o campo não esteja vazio, os dados digitados pelo usuário serão salvos no _sessionStorare_ do navegador sem pré-definição. Assim como visto na condição acima, utilizamos o método _setItem_ para mudarmos o valor do campo dentro do _sessionStorage_,como parâmetro  será utilizado a chave (ID) do campo que queremos salvar e o valor que queremos adicionar. No primeiro parámetro colocaremos o nosso arranjo chamado _atribute_array_ na posição _i_ do nosso laço atual. No segundo parâmetro utilizaremos os dados digitados pelo usuário, pegando esses dados através do método _getElementById_, que utilizará o nosso arranjo na posição _i_ para dizer qual o _ID_ do campo em que ele deve retornar o valor.

```
...
else 
        {
            sessionStorage.setItem(atribute_array[i], document.getElementById(atribute_array[i]).value);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
...
```
#### functions show_teacher_registers, show_coordinator_registers, show_administrator_registers

Esta função utiliza uma logica parecida com a função vista a cima. Um laço _for_ percorrendo um _array_ e dentro dele existe uma condição. 

```
function show_teacher_registers()
{
    for(let i = 0; i < employees_guard.length; i++)
    {
        
        if(employees_guard[i].type_of_employee === "Teacher")
        {
            window.alert("Teacher name: " + employees_guard[i].name);
        }
    }
}
```
Para exibir os professores cadastrados, o operador _if_ irá verificar se o funcionário atual é um professor. Para realizar esta verificação é necessário acessar o objeto no índice atual do arranjo. Dentro deste objeto, é solicitado o atributlo _type_of_employee_, então esse atributo é comparado a nível de *conteúdo* com a palavra _Teacher_. Caso o tipo de funcionário esteja como _Teacher_, a condição irá mostrar um alerta na tela informando o nome do professor.
```
...
if(employees_guard[i].type_of_employee === "Teacher")
        {
            window.alert("Teacher name: " + employees_guard[i].name);
        }
...
```
Este mesmo formato de função será utlizado em _show_coordinator_registers_ e _show_administrator_registers_.
```
function show_coordinator_registers()
{
    for(let i = 0; i < employees_guard.length; i++)
    {
        
        if(employees_guard[i].type_of_employee === "Coordinator")
        {
            window.alert("Coordinator name: " + employees_guard[i].name);
        }
    }
}
```
```
function show_administrator_registers()
{
    for(let i = 0; i < employees_guard.length; i++)
    {
        
        if(employees_guard[i].type_of_employee === "Administrator")
        {
            window.alert("Administrator name: " + employees_guard[i].name);
        }
    }
}
```
