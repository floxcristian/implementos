interface ILine {
  id: string;
  description: string;
}

interface ICategory {
  id: string;
  description: string;
  lines: ILine[];
}

export interface IUen {
  _id: string;
  uen: string;
  categories: ICategory[];
}
