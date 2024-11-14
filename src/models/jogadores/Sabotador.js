class Sabotador{
    constructor(aluno, equipe, funcao){
        this.id = this.generateId();
        this.aluno = aluno;
        this.equipe = equipe;
        this.funcao = funcao;
    }

    generateId(){
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default Sabotador;