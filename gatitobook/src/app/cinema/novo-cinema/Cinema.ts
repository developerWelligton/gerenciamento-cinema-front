import { Endereco } from "../novo-endereco/Endereco";
import { Gerente } from "../novo-gerente/Gerente";

export interface Cinema { 
    Id:string | any;
    Nome:string | any;
    EnderecoId:Endereco;
    GerenteId:Gerente | any;
}
