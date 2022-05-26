//1.Crie uma função getAdmins que recebe um Map;
function getAdmins(map) {
    //3.Dentro de getAdmins, utilize o loop for...of
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

//2.Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

//...retornar uma lista com os nomes dos usuários que são administradores.
console. log(getAdmins(usuarios));