# Sistema de gerenciamento escolar

Sistema de gerenciamento escolar, que visa os seguintes objetivos:

* O sistema deve possibilitar o cadastro de alunos, funcionários, professores e disciplinas.
* As disciplinas devem exibir a quantidade de alunos e as notas dos mesmos.
* O sistema deve exibir se o aluno foi aprovado ou não (N1 e N2 são obrigatórias).
* O sistema deve exibir relatórios de: alunos cadastrados, alunos por disciplina, funcionários (em 3 níveis administrativos,
coordenador de curso e professor) e de disciplinas por curso.

## Sumário

- [Página do projeto](https://github.com/Kalebeadv/gerenciamento-escolar.github.io/tree/main/src)

- [Relatórios](#relatórios)

- [Diagrama de classe](#diagrama-de-classe)

- [Sobre](#sobre)

- [Diagramas de caso de uso](#diagramas-de-caso-de-uso)
- [Descrição simples dos casos de uso](#descrição-simples-dos-casos-de-uso)

- [Classe users](#classe-users)

- [Classe employees](#classe-employees)

- [Classe students](#classe-students)

- [Classe courses](#classe-courses)

- [Classe notes](#classe-notes)

- [Classe inscriptions](#classe-inscriptions)

- [Classe matters](#classe-matters)

- [Telas em uso](#telas-do-sistema-em-uso)

  - [Tela principal](#tela-principal)
  - [Matters](#matters)
  - [Students](#students)
  - [Employees](#employees)

- [Referências](#referências)

## Relatórios

### Diagrama de classe

![Trabalho do Ed - Sistema escola (2)](https://user-images.githubusercontent.com/62080789/142788977-0df66e7a-1b85-49ea-bb7a-207dbc0fcc08.png)

## Sobre

* users é a classe principal, ele será usado como base para a criação das classes students e employees.
* Employees estende users, desta forma adquirindo seus atributos base, name, bith_date e sex.
* employeers_courses, através desta tabela, os funcionários (professores, coordenadores e administradores de curso) poderão ministrar os cursos.
* students estende users, adquirindo todos os seus atributos base, então por conta disso, a classe students, só possuirá a seu _id_ como atributo exclusivo da própria classe.
* courses, essa tabela possui dois atributos, seu _id_ e o nome do curso.
* student_Courses, através desta classe, o estudante terá acesso aos seus cursos.
* matters, essa classe servirá para guardar as informações das matérias que o aluno irá cursar.
* notes, essa classe servirá para guardar as informações das notas dos estudantes.
* inscriptions, essa classe servirá para guardar as inscrições dos estudantes em determinado curso.

## Diagramas de caso de uso

![Sistema escolar - trabalho do ED](https://user-images.githubusercontent.com/62080789/142790807-83a0145c-63df-4b3f-acbb-c095025aec70.png)

### Descrição simples dos casos de uso

|Caso de uso: cadastrar-se|
|:----|
|Resumo: o funcionário poderá ser cadastrado, esse funcionário poderá ser: professor, coordenador ou gerente.|

|Caso de uso: exibir quantidade de alunos|
|:-----|
|Resumo: As disciplinas poderão exibir a quantidade de alunos cadastrados|

|Caso de uso: exibir as notas dos alunos|
|:----|
|Resumo: as disciplinas poderão exibir as notas dos alunos|

|Caso de uso: exibir se o aluno foi aprovado ou não|
|:----|
|Resumo: o sistema poderá exibir se o aluno foi aprovado ou não|

|Caso de uso: exibir relatório de alunos por disciplina|
|:---|
|Resumo: o sistema poderá exibir os relatórios dos alunos divido podido por disciplina|

|Caso de uso: exibir relatório de funcionário|
|:----|
|Resumo: o sistema poderá exibir relatórios dos funcionários, sendo eles, professores, coordenadores, e administradores|

|Caso de uso: exibir relatório de disciplina por curso|
|:-----|
|Resumo: o sistema poderá exibir o relatório das disciplinas contidas em cada curso|

|Caso de uso: exibir relatório dos aniversariantes do mês|
|:----|
|Resumo: o sistema poderá exibir o relatório dos aniversariantes de cada mês|

## Implementação

## Classe users

```js
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

A nossa classe user possui como base quatro atributos, sendo estes: _id_, _name_, _birth_date_ e _sex_. A classe user sera exportada para outras classes, desta forma, possibilitando a herança entre as classes.

> _Obs: para que seja possível a importação e exportação entre classes, as mesmas necessitam está em módulo_

## Classe employees

```js
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

Esta função tem como objetivo possibilitar um cadastro de funcionário, salvando os dados do cadastro no_sessionStorage_ da guia atual do navegador.

```js
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

Primeiramente, nossa função possuirá um laço _for_, que será o responsável por percorrer todos os atributos do cadastro. Os atributos do cadastro são guardados em um _array_ de _strings_, chamado _atribute_array_, esse_array_tem como objetivo guardar (de forma pré-definida) as_IDs_ do cadastro contidas no HTML da página de cadastro.

```js
for (let i = 0; i < atribute_array.length; i++) 
    {
        //implementação
    }
```

Com o laço _for_ criado, precisamos criar um controle para salvar os dados do cadastro, para isso, usaremos o operador lógico _if_, esse operador visa realizar uma verificação, se o campo for nulo, então preenchê ele com uma _string_  pré-definida anteriormente na classe.

```js
//...
if (document.getElementById(atribute_array[i]).value == null) 
        {
            sessionStorage.setItem(atribute_array[i], element_array[i]);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
//...
```

Caso o campo não esteja vazio, os dados digitados pelo usuário serão salvos no _sessionStorare_ do navegador sem pré-definição. Assim como visto na condição acima, utilizamos o método _setItem_ para mudarmos o valor do campo dentro do _sessionStorage_, como parâmetro  será utilizado a chave (ID) do campo que queremos salvar e o valor que queremos adicionar. No primeiro parámetro colocaremos o nosso arranjo chamado _atribute_array_na posição_i_do nosso laço atual. No segundo parâmetro utilizaremos os dados digitados pelo usuário, pegando esses dados através do método_getElementById_, que utilizará o nosso arranjo na posição_i_para dizer qual o_ID_ do campo em que ele deve retornar o valor.

```js
//...
else 
        {
            sessionStorage.setItem(atribute_array[i], document.getElementById(atribute_array[i]).value);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
//...
```

#### functions show_teacher_registers, show_coordinator_registers, show_administrator_registers

Esta função utiliza uma lógica parecida com a função vista a cima. Um laço _for_ percorrendo um _array_ e dentro dele existe uma condição.

```js
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

Para exibir os professores cadastrados, o operador _if_ irá verificar se o funcionário atual é um professor. Para realizar esta verificação é necessário acessar o objeto no índice atual do arranjo. Dentro deste objeto, é solicitado o atributlo _type_of_employee_, então esse atributo é comparado a nível de *conteúdo* com a palavra _Teacher_. Caso a categoria de funcionário esteja como _Teacher_, a condição irá mostrar um alerta na tela informando o nome do professor.

```js
//...
if(employees_guard[i].type_of_employee === "Teacher")
        {
            window.alert("Teacher name: " + employees_guard[i].name);
        }
//...
```

Este mesmo formato de função será utilizado em _show_coordinator_registers_ e _show_administrator_registers_.

```js
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

```js
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

#### function show_birth_days

Esta função tem como objetivo mostrar os aniversariantes de cada mês. Caso o mês não possua nenhum aniversariante, este mês não será exibido ao usuário.

```js
function show_birth_days()
{
    let birthdays = "";
    for(let i = 0; i < employees_guard.length; i++)
    {
        let date = "" + employees_guard[i].bith_date;
        let splitao = date.split("/");
        console.log(splitao[1]);
        switch(splitao[1]) 
        {
            case "01" : birthdays += "January\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;
            case "02" : birthdays += "February\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "03" : birthdays += "March\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "04" : birthdays += "April\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "05" : birthdays += "May\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "06" : birthdays += "June\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "07" : birthdays += "July\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "08" : birthdays += "August\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "09" : birthdays += "September\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "10" : birthdays += "October\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "11" : birthdays += "November\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "12" : birthdays += "December\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

        }
    }
    window.alert(birthdays);
}
```

Primeiramente temos uma variável local (que só existe dentro desta função) para armazenar os aniversariantes do mês. Seguindo adiante temos um laço _for_, que irá percorrer um arranjo de objetos chamado _employee_guard_, este_array_ possui todos os funcionários cadastrados.

```js
let birthdays = "";
for(let i = 0; i < employees_guard.length; i++)
{
    //Implementação
}
```

Dentro do laço _for_ possui duas variáveis, sendo a primeira responsável por guardar a data em que cada funcionário faz aniversário, a segunda é responsável por dividir a data em partes, essas partes estão separadas por _/_, em seguida exibimos no console o _splitao_, para termos certeza que está funcionando.

```js
{
       //...
        let date = "" + employees_guard[i].bith_date;
        let splitao = date.split("/");
        console.log(splitao[1]);
        //...
}
```

Logo em seguida chegamos onde as coisas realmente acontecem, criamos um _switch_ e passamos o _splitao_ com índex _1_ como parâmetro, desta forma o _swtich_ irá escolher sempre o mês do aniversariante e com isso, atribui-lo na variável _birthdays_ e por fim, exibimos esta variável com um _window.alert_.

```js
       switch(splitao[1]) 
        {
            case "01" : birthdays += "January\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;
            case "02" : birthdays += "February\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "03" : birthdays += "March\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "04" : birthdays += "April\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "05" : birthdays += "May\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "06" : birthdays += "June\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "07" : birthdays += "July\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "08" : birthdays += "August\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "09" : birthdays += "September\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "10" : birthdays += "October\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "11" : birthdays += "November\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "12" : birthdays += "December\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

        }
    }
    window.alert(birthdays);
}
```

### Constuindo os objetos da classe

Antes de qualquer coisa, precisamos definir quais serão os dois _arrays_ que utilizaremos em nossas funções. Criaremos criar duas variáveis constantes, chamadas _const atribute_array_e_const element_array. A  primeira é responsável por salvar o nome dos atritubos (id,name,birth_date e etc). A segunda é responsável por guardar uma lista de valores referentes a cada atributo da nossa classe _employee_, este arranjo se torna necessário caso o usuário esqueça de preencher algum campo no registro do funcionário.

```js
//...
const atribute_array = ["id", "user_id", "name", "bith_date", "sex","type_of_employee","cpf","status"];
const element_array = ["4", "4", "Willian", "01/06/1985", "M", "Coordinator", "111.222.333-33", "active"];
//...
```

Agora precisamos criar os objetos de fato. Criaremos três objetos pré-definidos e deixaremos um objeto para guardar os dados que o usuário irá inserir no cadastro, então, nesse último objeto, invés de digitar os valores de cada campo, buscaremos esses dados no _sessionStorege_, utilizando o método _getItem_ e passando o identificador do campo como parâmetro.

```js
var employ1 = new Employees("1", "1", "kalebe", "03/12/1960", "M", "Teacher", "123.123.333-22", "active");
var employ2 = new Employees("2", "2", "Gustavo", "03/10/1950", "M", "Administrator", "111.111.222-00", "active");
var employ3 = new Employees("3", "3", "Evelyn", "01/06/1983", "F", "Coordinator", "333.333.333-33", "active");
var employ4 = new Employees(sessionStorage.getItem("id"),
    sessionStorage.getItem("user_id"),
    sessionStorage.getItem("name"),
    sessionStorage.getItem("bith_date"),
    sessionStorage.getItem("sex"),
    sessionStorage.getItem("type"),
    sessionStorage.getItem("cpf"),
    sessionStorage.getItem("status"));

```

A seguir criaremos uma variável constante para guardar todos os nossos objetos. Essa variável será exportada para outras classes.

```js
//...
export const employees_guard = [employ1, employ2, employ3,employ4];
//...
```

Com o nosso _array_ de objeto criado, precisamos ouvir quando uma solicitação vier pela parte do usuário e para isso criaremos variáveis responsáveis em "ouvir" as requisições do usuário. Então criaremos cinco variáveis, cada uma para "ouvir" um _button_ diferente, a primeira será responsável pelo registro, a segunda é para os relatórios dos professores, a terceira é para os relatórios dos coordenadores, a quarta é para os relatórios dos administradores e a última é responsável pelo relatório de aniversariantes do mês.

```js
//...
let button_register = document.getElementById("button_employee_registration");
let button_teacher_report = document.getElementById("teacher_register");
let button_coordinador_report = document.getElementById("coordinator_register");
let button_admin_report = document.getElementById("administrator_register");
let button_birth_day = document.getElementById("birth_day_register");
//...
```

Após criarmos e iniciarmos todas as variáveis, precisamos fazer uso das mesmas. Cada uma destas variáveis será responsável por ativar uma função, assim que ela "ouvir" um clique, chamará a função.

```js
//...
button_register.addEventListener("click", register_employees);
button_teacher_report.addEventListener("click", show_teacher_registers);
button_coordinador_report.addEventListener("click", show_coordinator_registers);
button_admin_report.addEventListener("click", show_administrator_registers);
button_birth_day.addEventListener("click", show_birth_days);
//...
```

Este é o código completo da classe employees:

```js
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


const atribute_array = ["id", "user_id", "name", "bith_date", "sex","type_of_employee","cpf","status"];
const element_array = ["4", "4", "Willian", "01/06/1985", "M", "Coordinator", "111.222.333-33", "active"];

var employ1 = new Employees("1", "1", "kalebe", "03/12/1960", "M", "Teacher", "123.123.333-22", "active");
var employ2 = new Employees("2", "2", "Gustavo", "03/10/1950", "M", "Administrator", "111.111.222-00", "active");
var employ3 = new Employees("3", "3", "Evelyn", "01/06/1983", "F", "Coordinator", "333.333.333-33", "active");
var employ4 = new Employees(sessionStorage.getItem("id"),
    sessionStorage.getItem("user_id"),
    sessionStorage.getItem("name"),
    sessionStorage.getItem("bith_date"),
    sessionStorage.getItem("sex"),
    sessionStorage.getItem("type"),
    sessionStorage.getItem("cpf"),
    sessionStorage.getItem("status"));

export const employees_guard = [employ1, employ2, employ3,employ4];
let button_register = document.getElementById("button_employee_registration");
button_register.addEventListener("click", register_employees);
let button_teacher_report = document.getElementById("teacher_register");
let button_coordinador_report = document.getElementById("coordinator_register");
let button_admin_report = document.getElementById("administrator_register");
let button_birth_day = document.getElementById("birth_day_register");
button_teacher_report.addEventListener("click", show_teacher_registers);
button_coordinador_report.addEventListener("click", show_coordinator_registers);
button_admin_report.addEventListener("click", show_administrator_registers);
button_birth_day.addEventListener("click", show_birth_days);
let hr = "\n___________________\n";

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

function show_birth_days()
{
    let birthdays = "";
    for(let i = 0; i < employees_guard.length; i++)
    {
        let date = "" + employees_guard[i].bith_date;
        let splitao = date.split("/");
        console.log(splitao[1]);
        switch(splitao[1]) 
        {
            case "01" : birthdays += "January\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;
            case "02" : birthdays += "February\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "03" : birthdays += "March\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "04" : birthdays += "April\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "05" : birthdays += "May\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "06" : birthdays += "June\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "07" : birthdays += "July\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "08" : birthdays += "August\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "09" : birthdays += "September\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "10" : birthdays += "October\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "11" : birthdays += "November\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

            case "12" : birthdays += "December\n" +employees_guard[i].name + " " + 
            employees_guard[i].bith_date + hr; break;

        }
    }
    window.alert(birthdays);
}
```

## Classe students

A classe _students_ é responsável por gerenciar os alunos, essa classe estende _users_, desta forma adquirindo seus atributos. Além disso, ela possui acesso aos _arrays_ de objetos das classes: _notes, matters_ e _inscriptions_.

```js
import { Users } from "./users.js";
import { notes_guard } from "./notes.js";
import { matters_guard } from "./matters.js"; 
import { inscriptions_guard } from "./inscriptions.js"
export class Students extends Users
{
    constructor(id,user_id,name,bith_date,sex)
    {
        super(user_id,name,bith_date,sex);
        this.id = id;
    }
}
//...
```

### funções

#### function register_students

Esta função é bem parecida com a função _register_employees_da classe_employees_, porém sua diferença é nos itens que ela percorre, enquanto a função vista a cima perceorre um arranjo de funcionários, está percorre um de estudantes.

```js
//...
function register_students()
{
    for(let i = 0; i < atribute_array.length; i++)
    {
        if(document.getElementById(atribute_array[i]).value == null)
        {
            sessionStorage.setItem(atribute_array[i],element_array[i]);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
        else
        {
            sessionStorage.setItem(atribute_array[i], document.getElementById(atribute_array[i]).value);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
    }
}
//...
```

#### function show_students_registers

Esta _function_ mostra os estudantes cadastrados.

```js
//...
function show_students_registers()
{
    let student_registers = "";
    for(let i = 0; i < students_guard.length; i++)
    {
        student_registers += "Name: " +students_guard[i].name + " ID: "+ students_guard[i].id + hr; 
    }
    window.alert(student_registers);
}
//...
```

Primeiramente precisamos criar uma variável do tipo _string_ que irá armazenar os registros dos alunos, ela se chamará _student_registers_.

```js
//...
let student_registers = "";
//...
```

Agora chegamos na parte principal da funcao, um laço _for_ que percorre o _array_ de objetos chamado _students_guard_.

```js
//...
for(let i = 0; i < students_guard.length; i++)
    {
        //implementation 
    }
//...
```

Dentro deste laço a variavel local _student_registers_soma e adiciona uma_string_contendo o atributo nome do estudante em um objeto dentro do_array_, assim como o_ID_do estudante. Após finalizar o laço com todos os registros o_students_registers_ é mostrado ao usuário atrávés de um _window.alert_.

```js
//...
for(let i = 0; i < students_guard.length; i++)
    {
        student_registers += "Name: " +students_guard[i].name + " ID: "+ students_guard[i].id + hr; 
    }
    window.alert(student_registers);
//...
```

#### function show_notes_registers

Esta função visa exibir ao usuário o relatório das notas dos estudantes. Este relatório, dirá o nome do estudante, dirá se ele foi aprovado ou não, além de mostrar suas notas (n1 e n2).

```js
function show_notes_registers() {
    for (let i = 0; i < students_guard.length; i++) 
    {
        if (((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) >= 7.0) 
        {

            note +="name: " + students_guard[i].name +"\nStatus: " + "Approved\n" + "first_assessment: " + 
            notes_guard[i].first_assessment + "\n" +"second_assessment: " + 
            notes_guard[i].second_assessment + hr;
        }

        else if (((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) < 7.0 &&
            ((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) > 4.0) 
        {

            note += "name: " + students_guard[i].name +"\nStatus: " +"Recovery\n" + "first_assessment: " 
            + notes_guard[i].first_assessment + "\n" +
            "second_assessment: " + notes_guard[i].second_assessment + hr;
        }

        else 
        {
            note += "name: " + students_guard[i].name +"\nStatus: " + "Failed\n" + "first_assessment: " +
            notes_guard[i].first_assessment + "\n" +
            "second_assessment: " + notes_guard[i].second_assessment + hr;
        }
    }
    window.alert(note);
}
```

Um laço _for_ irá percorrer todos os objetos _students_ contidos em _students_guard_e quando o laço for finalizado mostrará ao usuário (através de um_window.alert_) o relatório das notas dos estudantes.

```js
//...
for (let i = 0; i < students_guard.length; i++) 
    {
      //implementação 
    }
    window.alert(note);
}
//...
```

No laço _for_ será realizado várias verificações para saber se o aluno foi aprovado ou não. A primeira verificação busca saber se a média das duas notas é maior ou igual a _7_ se sim, o aluno é salvo com estado de _Approved_, se não, o laço irá para o segundo if.

```js
//...
if (((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) >= 7.0) 
        {

            note +="name: " + students_guard[i].name +"\nStatus: " + "Approved\n" + "first_assessment: " + 
            notes_guard[i].first_assessment + "\n" +"second_assessment: " + 
            notes_guard[i].second_assessment + hr;
        }
//...
```

A segunda verificação busca saber se a média do aluno está abaixo de _7_ e maior que _4_. Se a média estiver dentro destes limites, o aluno é salvo com um estado de _Recovery_
Indicando que ele está de recuperação.

```js
 else if (((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) < 7.0 &&
            ((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) > 4.0) 
        {

            note += "name: " + students_guard[i].name +"\nStatus: " +"Recovery\n" + "first_assessment: " 
            + notes_guard[i].first_assessment + "\n" +
            "second_assessment: " + notes_guard[i].second_assessment + hr;
        }
```

Se a média do aluno não estiver dentro deste limite, ele irá para a opção predefinida, ou seja, caso ele não tenha atendido nenhuma das requisições acima, ele irá cair nesta obrigatoriamente. Por fim, o aluno está com a média abaixo de _4_, então ele será armazenado com um estatuto de _failed.

```js
else 
        {
            note += "name: " + students_guard[i].name +"\nStatus: " + "Failed\n" + "first_assessment: " +
            notes_guard[i].first_assessment + "\n" +
            "second_assessment: " + notes_guard[i].second_assessment + hr;
        }
```

#### function students_for_matters_register

Esta função mostra os estudantes por disciplinas/matérias cadastradas.

```js
function students_for_matters_register()
{
    let matters = "";
    let count = 0;
    for(let i = 0; i < students_guard.length; i++)
    {
        if(students_guard[i].id == inscriptions_guard[i].student_id)
        {
            quantity_student_count++;
            if(students_guard[i].id){count++;} 
            matters += "Matter id:" + inscriptions_guard[i].matter_id + "\n" + 
            "Matter name: " + matters_guard[i].name + "\n" +
            "Student id: " + inscriptions_guard[i].student_id +"\n"+ 
            "Student name: " + students_guard[i].name + "\n" +
            "Quantity: " + count + hr;
            count = 0;
        } 
    }
    window.alert(matters);
}
```

Primeiramente criaremos duas variáveis locais, a primeira irá armazenar uma _string_ contendo as informações dos estudantes e a segunda mostrará a quantidade de estudantes em cada disciplina/matéria.

```js
//...
let matters = "";
let count = 0;
//...
```

Agora criaremos um laço _for_ que irá percorrer um _array_ de objetos chamado _students_guard_.

```js
//...
for(let i = 0; i < students_guard.length; i++)
    {
        //implementation 
    }
//...
```

Dentro do laço faremos uma verificação para saber se o _ID_ do aluno no index do _array_ é igual a sua inscrição (As inscrições estão contidas em um arranjo chamado _inscriptions_guard_que importamos no início da classe), se a verificação for verdadeira o aluno será adicionado na a variável_matters_com as seguintes informaçoes:_matter id, _matter name_, _student_id_,_quantity_.

```js
//...
if(students_guard[i].id == inscriptions_guard[i].student_id)
        {
            if(students_guard[i].id){count++;} 
            matters += "Matter id:" + inscriptions_guard[i].matter_id + "\n" + 
            "Matter name: " + matters_guard[i].name + "\n" +
            "Student id: " + inscriptions_guard[i].student_id +"\n"+ 
            "Student name: " + students_guard[i].name + "\n" +
            "Quantity: " + count + hr;
            count = 0;
        } 
//...
```

Por fim a exibiremos aos usuário a variável _matters_ através do _window.alert_.

```js
//...
  window.alert(matters);
//...
```

#### function show_birth_days

Esta função é quase a mesma das funções _show_birth_days_ apresentadas acima. O que a diferencia das outras funções é no tipo de _array_ que  o laço _for_ estará percorrendo e os dados que serão guardados na variável _birthdays_.

```js
function show_birth_days()
{
    
    let birthdays = "";
    for(let i = 0; i < students_guard.length; i++)
    {
        let date = "" + students_guard[i].bith_date;
        let splitao = date.split("/");
        console.log(splitao[1]);
        switch(splitao[1]) 
        {
            case "01" : birthdays += "January\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;
            case "02" : birthdays += "February\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "03" : birthdays += "March\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "04" : birthdays += "April\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "05" : birthdays += "May\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "06" : birthdays += "June\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "07" : birthdays += "July\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "08" : birthdays += "August\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "09" : birthdays += "September\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "10" : birthdays += "October\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "11" : birthdays += "November\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "12" : birthdays += "December\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

        }
    }
    window.alert(birthdays);
}
```

### constuindo os objetos da classe

Primeiramente precisamos criar duas constantes, a primeira será para guardar os _IDs_ referentes aos _inputs_ contidos no _HTML_, a segunda é uma garantia caso o usuário esqueça de preencher algum campo na hora de registrar um estudante.

```js
//...
const atribute_array = ["student_id", "user_id_student", "student_name", "student_bith_date", "student_sex"];
const element_array = ["4","4","Kalebe o iracundo", "03/12/2000", "M"];
//...
```

Agora precisamos criar os objetos _students_, primeiramente criaremos três objets pré-definidos na classe e um quarto objeto para que o usuário possa registrar um estudante.  

```js
//...
var student1 = new Students("1", "1", "alberto", "03/12/1960", "M")
var student2 = new Students("2", "2", "luciano", "03/10/1950", "M");
var student3 = new Students("3", "3", "emely", "01/06/1983", "F")
var student4 = new Students(sessionStorage.getItem("student_id"),
    sessionStorage.getItem("user_id_student"),
    sessionStorage.getItem("student_name"),
    sessionStorage.getItem("student_bith_date"),
    sessionStorage.getItem("student_sex"));
//...
```

Após criarmos os objetos, precisamos de um _array_ de objetos para armazená-los, esse _object_array_ será exportado para outras classes.

```js
//..
export const students_guard = [student1,student2,student3,student4];
//...
```

A seguir criaremos as variáveis que serão responsáveis por ouvir as requisições do usuário, assim como outras duas que serão utilizadas dentro das funções, sendo a primeira para guardar as notas dos alunos e a segunda para melhorar a formatação da exibição dos relatórios.

>Obs: Essas variáveis (tirando as duas ultimas) guardam os _buttons_ contido no _HTML_. Eles obtidos através do método _getElementById_.

```js
//...
let register_student = document.getElementById("button__student_registration");
let show_students_register = document.getElementById("student_register");
let show_notes = document.getElementById("notes_register");
let show_birhday = document.getElementById("birthday_register");
let show_students_for_matters_registers = document.getElementById("students_for_matters_registers");
var note = "";
let hr = "\n___________________\n";
//...
```

Após criarmos as variáveis necessárias, precisamos "falar" o que elas irão fazer. Para a variável _register_student_precisaremos realizar uma verificação para saber se ela *não* é nula, pois o método_addEventListener_não aceita valores nulos. Para as próximas variáveis essa verificação não se mostra necessária, tendo em vista que os_buttons_contidos nelas não correspondem ao envio de registros inseridos pelo usuário.

```js
if(register_student)
{
    register_student.addEventListener("click", register_students);
}

show_students_register.addEventListener("click", show_students_registers);
show_notes.addEventListener("click", show_notes_registers);
show_students_for_matters_registers.addEventListener("click", students_for_matters_register);
show_birhday.addEventListener("click", show_birth_days);
```

Este é o código completo da classe _students_:

```js
import { Users } from "./users.js";
import { notes_guard } from "./notes.js";
import { matters_guard } from "./matters.js"; 
import { inscriptions_guard } from "./inscriptions.js"
export class Students extends Users
{
    constructor(id,user_id,name,bith_date,sex)
    {
        super(user_id,name,bith_date,sex);
        this.id = id;
    }
}

const atribute_array = ["student_id", "user_id_student", "student_name", "student_bith_date", "student_sex"];
const element_array = ["4","4","Kalebe o iracundo", "03/12/2000", "M"];

var student1 = new Students("1", "1", "alberto", "03/12/1960", "M")
var student2 = new Students("2", "2", "luciano", "03/10/1950", "M");
var student3 = new Students("3", "3", "emely", "01/06/1983", "F")
var student4 = new Students(sessionStorage.getItem("student_id"),
    sessionStorage.getItem("user_id_student"),
    sessionStorage.getItem("student_name"),
    sessionStorage.getItem("student_bith_date"),
    sessionStorage.getItem("student_sex"));

export const students_guard = [student1,student2,student3,student4];
let register_student = document.getElementById("button__student_registration");
let show_students_register = document.getElementById("student_register");
let show_notes = document.getElementById("notes_register");
let show_birhday = document.getElementById("birthday_register");
let show_students_for_matters_registers = document.getElementById("students_for_matters_registers");
var note = "";
let hr = "\n___________________\n";

if(register_student)
{
    register_student.addEventListener("click", register_students);
}

show_students_register.addEventListener("click", show_students_registers);
show_notes.addEventListener("click", show_notes_registers);
show_students_for_matters_registers.addEventListener("click", students_for_matters_register);
show_birhday.addEventListener("click", show_birth_days);

function register_students()
{
    for(let i = 0; i < atribute_array.length; i++)
    {
        if(document.getElementById(atribute_array[i]).value == null)
        {
            sessionStorage.setItem(atribute_array[i],element_array[i]);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
        else
        {
            sessionStorage.setItem(atribute_array[i], document.getElementById(atribute_array[i]).value);
            console.log(sessionStorage.getItem(atribute_array[i]));
        }
    }
    
}

function show_students_registers()
{
    let student_registers = "";
    for(let i = 0; i < students_guard.length; i++)
    {
        student_registers += "Name: " +students_guard[i].name + " ID: "+ students_guard[i].id + hr; 
    }
    window.alert(student_registers);
}

function show_notes_registers() {
    for (let i = 0; i < students_guard.length; i++) 
    {
        if (((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) >= 7.0) 
        {

            note +="name: " + students_guard[i].name +"\nStatus: " + "Approved\n" + "first_assessment: " + 
            notes_guard[i].first_assessment + "\n" +"second_assessment: " + 
            notes_guard[i].second_assessment + hr;
        }

        else if (((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) < 7.0 &&
            ((notes_guard[i].first_assessment + notes_guard[i].second_assessment)/2) > 4.0) 
        {

            note += "name: " + students_guard[i].name +"\nStatus: " +"Recovery\n" + "first_assessment: " 
            + notes_guard[i].first_assessment + "\n" +
            "second_assessment: " + notes_guard[i].second_assessment + hr;
        }

        else 
        {
            note += "name: " + students_guard[i].name +"\nStatus: " + "Failed\n" + "first_assessment: " +
            notes_guard[i].first_assessment + "\n" +
            "second_assessment: " + notes_guard[i].second_assessment + hr;
        }
    }
    window.alert(note);
}

function students_for_matters_register()
{
    let matters = "";
    let count = 0;
    for(let i = 0; i < students_guard.length; i++)
    {
        if(students_guard[i].id == inscriptions_guard[i].student_id)
        {
           
            if(students_guard[i].id){count++;} 
            matters += "Matter id:" + inscriptions_guard[i].matter_id + "\n" + 
            "Matter name: " + matters_guard[i].name + "\n" +
            "Student id: " + inscriptions_guard[i].student_id +"\n"+ 
            "Student name: " + students_guard[i].name + "\n" +
            "Quantity: " + count + hr;
            count = 0;
        } 
    }
    window.alert(matters);
}
function show_birth_days()
{
    
    let birthdays = "";
    for(let i = 0; i < students_guard.length; i++)
    {
        let date = "" + students_guard[i].bith_date;
        let splitao = date.split("/");
        console.log(splitao[1]);
        switch(splitao[1]) 
        {
            case "01" : birthdays += "January\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;
            case "02" : birthdays += "February\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "03" : birthdays += "March\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "04" : birthdays += "April\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "05" : birthdays += "May\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "06" : birthdays += "June\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "07" : birthdays += "July\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "08" : birthdays += "August\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "09" : birthdays += "September\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "10" : birthdays += "October\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "11" : birthdays += "November\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

            case "12" : birthdays += "December\n" +students_guard[i].name + " " + 
            students_guard[i].bith_date + hr; break;

        }
    }
    window.alert(birthdays);
}
```

### Classe courses

A classe _courses_ é responsável por disponibilizar os cursos a outras classes.

```js
class Courses
{
    constructor(id, name)
    {
        this.id = id;
        this.name = name
    }
}
//..
```

#### Construindo os objetos da classe

Antes de exportar precisamos criar os objetos, serão quatro cursos: historia básica, matemática, geografia e inglês básico.

```js
//..
var course1 = new Courses("1","basic history I");
var course2 =  new Courses("2", "basic mathematic I");
var course3 =  new Courses("2", "basic geography I");
var course4 =  new Courses("4", "basic english I");
/..
```

Após criamos os cursos, precisamos criar um _object_array_ para guardar os cursos e logo em seguida, exportaremos este arranjo.

```js
//..
export const courses_guard = [course1,course2,course3,course4];
```

Este é codígo completo da classe:

```js
class Courses
{
    constructor(id, name)
    {
        this.id = id;
        this.name = name
    }
}

var course1 = new Courses("1","basic history I");
var course2 =  new Courses("2", "basic mathematic I");
var course3 =  new Courses("2", "basic geography I");
var course4 =  new Courses("4", "basic english I");

export const courses_guard = [course1,course2,course3,course4];
```

### Classe notes

Está classe é responsável por gerenciar as notas dos estudantes, para isso, ela utiliza em seu construtor os seguintes parâmetros: _id_,_inscription_id_, first_assessment_,_second_assessment_.

```js
class Notes 
{
    constructor(id, inscription_id, first_assessment, second_assessment)
    {
        this.id = id;
        this.inscription_id = inscription_id; 
        this.first_assessment = first_assessment;
        this.second_assessment = second_assessment;
    }
}
//...
```

#### Construindo os objetos

Iremos criar quatro objetos contendo as _IDs_,_inscriptions_IDs_ e as notas dos estudantes.

```js
//...
var notes_students1 = new Notes("1", "1", 8.1, 8);
var notes_students2 = new Notes("2", "2", 9.3, 9.2);
var notes_students3 = new Notes("3", "3", 5.5, 10);
var notes_students4 = new Notes("4","4",8.5,5.1);
//...
```

Por fim, criaremos um _array_ para guardas as notas e exportaremos para outras classes.

```js
//...
export const notes_guard = [notes_students1,notes_students2,notes_students3,notes_students4];
```

### Classe inscriptions

A classe inscription é responsável por inscriver os alunos nos cursos, o seu construtor utiliza as _IDs_ de outras classes para possiubilitar este cadastro.

```js
class Inscriptions
{
    constructor (id, course_id, matter_id, student_id, note_id)
    {
        this.id = id;
        this.course_id = course_id;
        this.matter_id = matter_id;
        this.student_id = student_id;
        this.note_id = note_id;
    }
}
//...
```

#### Construindo objetos da classe

Criaremos quatro inscrições, para os quatro alunos registrados no sistema. Cada objeto utilizara as _IDs_ referentes as outras classes.

```js
//...
var inscription1 = new Inscriptions("1","1","1","1","1");
var inscription2 = new Inscriptions("2","2","2","2","2");
var inscription3 = new Inscriptions("3","3","3","3","3");
var inscription4 = new Inscriptions("4","4","4","4","4");
//...
```

Por fim, como já é de costume, criaremos um _array_ para guardar todas as nossas inscrições e exportá-las para outra classe.

```js
//...
export const inscriptions_guard = [inscription1,inscription2,inscription3,inscription4];
```

### Classe matters

A classe _matters_ visa permitir o cadastro de matérias/disciplinas, além de exibir o relatório.

```js
import {notes_guard} from "./notes.js"

class Matters {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    atribute_array = ["id", "name", "description"];
    element_array = ["4", "matter4", "Pro matter4"];
}
//..
```

#### Construindo os objetos

Agora precisamos criar as matérias/disciplinas, cada uma possui um _id_, nome e descrição. Então criaremos três matérias predefinidas na classe e deixaremos a quarta para que o usuário possa realizar cadastro de disciplinas.

```js
//...
var history = new Matters("0", "History", "The study of the past – specifically the people,"
    + "societies, events and problems of the past – as well as" 
    + "our attempts to understand them. It is a pursuit common to all human societies.");

var mathematics = new Matters("1", "Mathematic", "mathematics, the science of structure" 
    + "order, and relation that has evolved from"
    + "elemental practices of counting, measuring,"
    + "and describing the shapes of objects." 
    + "It deals with logical reasoning and quantitative calculation,"
    + "and its development has involved an increasing degree of idealization"
    + "and abstraction of its subject matter.");

var geography = new Matters("2", "Geography", "the study of the world, its physical and"
    + "social environments, and the dynamic nature of the relationships" 
    + "among them, from local to global scales.");

var matter4 = new Matters();
//...
```

Agora criaremos um _object_array_ para guardar as matérias e exportá-las para outras classes.

```js
//...
export const matters_guard = [history,mathematics,geography,matter4];
//...
```

Por fim criaremos duas variáveis para guardar os _buttons_ do nosso _HTML_.

```js
//...
let button = document.getElementById("matter_register_class");
let button2 = document.getElementById("quantity_students");
//...
```

#### Eventos listener

Para que o nosso sistema salve as informações digitadas pelo usuário, precisamos saber quando o _button_ for pressionado, então realizaremos uma verificação, se o _button_ não for nulo, realize o evento _listener_. A primeira variável botão é responsável pelo evento de registro e a segunda é responsável pelo evento de  exibir o relatório.

```js
//...
if(button)
{
    button.addEventListener("click",function()
 {
     sessionStorage.setItem("id", document.getElementById("id").value);
     sessionStorage.setItem("name", document.getElementById("name").value);
     sessionStorage.setItem("description", document.getElementById("description").value);

     matter4 = new Matters(sessionStorage.getItem("id"),sessionStorage.getItem("name"), 
     sessionStorage.getItem("description"));
 });
}
//...
```

```js
//...
if(button2)
 {
    button2.addEventListener("click", function(){
        let text = "";
        let count = 0;
        for(let i = 0; i < notes_guard.length; i++)
        {
            count++;
            text += "first assessment: " +notes_guard[i].first_assessment + "\n" +
            "second assessment: "+notes_guard[i].second_assessment + "\n";
        }
        window.alert(text += "Quantity of students: " + count); 
     });
 }
```

## Telas do sistema em uso

### Tela principal

![index](https://user-images.githubusercontent.com/62080789/143313094-633d1b34-9cd8-4eaa-be7c-55623c7eb3e6.gif)


### Matters

![matters](https://user-images.githubusercontent.com/62080789/143317502-0efcb4f6-2055-4431-84c4-850d18692251.gif)

### Students

![students](https://user-images.githubusercontent.com/62080789/143317794-f5c84172-2be0-4a46-8ca1-f16a6d223961.gif)


### Employees

![employee](https://user-images.githubusercontent.com/62080789/143317816-e5684265-30a8-46e7-a3e7-34e2eae9111b.gif)

## Referências 

[Stack overflow](https://stackoverflow.com/)

[Guia básico de markdown](https://markdown.net.br/sintaxe-basica/)



