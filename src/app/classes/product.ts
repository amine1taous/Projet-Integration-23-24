export class Product {
  constructor(
    public id: String,
    public nom: string,
    public description: string,
    public prix: number,
    public stock: number,
    public disponibilite: boolean,
    public image: string,
    public categorie: string
  ) {}
}
