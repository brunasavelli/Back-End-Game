class Aluno {
    constructor(nome, turma, idade){
        this.id = this.generateId();
        this.nome = nome;
        this.turma = turma;
        this.idade = idade;
    }

    generateId(){
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default Aluno;