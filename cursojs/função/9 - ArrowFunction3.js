let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) 
comparaComThis(this) 

const obj = {}
comparaComThis(obj)
comparaComThis = comparaComThis.bind(obj) // o this vai sempre referenciar ao OBJ agora
comparaComThis(global) // vai dar false
comparaComThis(obj) // vai dar true

let comparaComArrow = param => console.log(this === param)
comparaComArrow(global) // dentro de uma função arrow vai sempre apontar pro objeto corrente , arquivo corrente
comparaComArrow(module.exports) // pertence ao arquivo corrente é true
comparaComArrow(this)

comparaComArrow = comparaComArrow.bind(obj)
comparaComArrow(obj) // vai dar false a arrow function é mais forte que o bind

