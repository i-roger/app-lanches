// Regra dos Produtos

export interface Iproduto {
    id: string;
    title: string;
    descricao: string;
    price: number;
    img: string; // Foi adicionado na interface "img": "string" -> pois passa o caminho da imagem.
    tipo: string;
  }
  
export interface IShoppingCartItem {
    product: Iproduto;
    quantity: number;
}

// Down below was created for test
// Using localhost:3000/teste --> page.tsx