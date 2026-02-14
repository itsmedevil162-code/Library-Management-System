export interface CreateBookDTO {
  name: string;
  description?: string;
  author: string;
  imageUrl?: string;
  quantity: number;
}

export interface UpdateBookDTO {
  name?: string;
  description?: string;
  author?: string;
  imageUrl?: string;
  quantity?: number;
}
