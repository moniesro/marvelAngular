export class Character {
  id: number;
  name: string;
  description: string;
  thumbnail : Thumbnail;
}

export class Thumbnail {
  path: string;
  extension: string;
}
