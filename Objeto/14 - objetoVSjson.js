const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a + b + c
    }
}
//DE OBJ PRA JSON
console.log(JSON.stringify(obj))

//DE JSON PARA OBJ -- trabalhando com formatos válidos
console.log(JSON.parse('{"a": 1,  "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1,  "b": true, "c": "string", "d": {}, "e": []}'))
console.log(JSON.parse('{"a": 1,  "b": true, "c": "string", "d": {}, "e": []}'))