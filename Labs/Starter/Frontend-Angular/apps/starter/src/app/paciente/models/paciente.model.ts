import { Telefone } from "./telefone.model";

export interface Paciente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefones: Telefone[];
  datanascimento: string;
}
