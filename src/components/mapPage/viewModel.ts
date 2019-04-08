
export interface Tag {
    id: string;
    text: string;
  }
  
  export const createEmptyTag = (): Tag => ({
    id: '',
    text: ''
  })