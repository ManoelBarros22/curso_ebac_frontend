const alunos = [
    { nome: "José", nota: 7.5 },
    { nome: "Miguel", nota: 4.5 },
    { nome: "Mariana", nota: 6.0 },
    { nome: "Vanessa", nota: 10 }
   
]

const aprovados = alunos.filter((aluno) => {
return aluno.nota >= 6
})

console.log(aprovados)