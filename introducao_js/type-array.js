const arrayValor = [1,2,3,4,5,6];
console.log(arrayValor);

const arrayObjects = [
    {nome: 'fulano de tal', idade: 23, presidente: false},
    {nome: 'xxxxxxxx', idade: 80, presidente: true}
];
console.log(arrayObjects);

arrayObjects.push({nome: 'yyyyyyy', idade: 40, presidente: false});

console.log('depois', arrayObjects);
