export class BookDto {
  id: number | undefined;
  isbn: string | undefined;
  title: string | undefined;
  author: string | undefined;
  availableCopies: number | undefined;
  publisher: string | undefined;
  publicationYear: number | undefined;
}

export class BookResponseDto {}
export {};
