function validateEmail(email) {
    //On peut ajouter un tableau de fournisseur trusted
    var exp = /\S+@\S+\.\S+/;
    return exp.test(email);
}

export {validateEmail}