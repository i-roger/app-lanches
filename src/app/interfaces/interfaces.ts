// Regra dos Produtos

export interface IBook {
    id: number;
    title: string;
    descricao: string;
    price: number;
    img: string; // Foi adicionado na interface "img": "string" -> pois passa o caminho da imagem.
  }
  
export interface IShoppingCartItem {
    product: IBook;
    quantity: number;
  }

// Down below was created for test
// Using localhost:3000/teste --> page.tsx
export interface IBebidas {
  id: number;
  title: string;
  price: number;
  img: string;
}