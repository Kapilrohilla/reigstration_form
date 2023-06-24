import passwordValidator from "password-validator";

const regexForEmail = /\w*\d*@{1}\w+.{1}\w{2,5}/
const pswdSchema = new passwordValidator();
pswdSchema
    .is().min(4)
    .is().max(16)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().symbols()


export default { pswdSchema, regexForEmail } 