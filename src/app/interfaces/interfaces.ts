export interface IBook {
    id:number;
    title:string;
    descricao:string;
    price:number;
    img:string; // Foi adicionado na interface "img": "string" -> pois passa o caminho da imagem.
  }
  
export interface IShoppingCartItem {
    product: IBook;
    quantity: number;
  }