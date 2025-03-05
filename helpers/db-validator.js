import User from '../user/user-model.js';


export const existenteEmail = async (correo = ' ') => {

    const existeEmail = await User.findOne({ correo });

    if(existeEmail){
        throw new Error(`The email ${ correo } already exists in the database`);
    }
}

export const existeUsuarioById = async (id = "") => {
    const existeUsuario = await User.findById(id);
 
    if(!existeUsuario){
        throw new Error(`The id  ${id} does not exist in the database`)
    }
}



export const categoryExists = async(name = "") => {
    const existe = await Category.findOne({ name })
    if (existe) {
        throw new Error(`Category: ${name}, is already registered`)
    }
}

export const CompanyExists = async (name = "") => {
    const existe = await Company.findOne({ name })
    if (existe) {
        throw new Error(`Company: ${name}, is already registered`)
    }
}
 export const existeCompanyById = async (id = "") => {
    const existeUsuario = await User.findById(id);
 
    if(!existeUsuario){
        throw new Error(`The id  ${id} does not exist in the database`)
    }
}
export const existeCategoryById = async (id = "") => {
    const existeUsuario = await User.findById(id);
 
    if(!existeUsuario){
        throw new Error(`The id  ${id} does not exist in the database`)
    }
}