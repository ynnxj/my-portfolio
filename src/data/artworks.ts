import type { Artwork } from '@/types/Artwork'

export const artworks: Artwork[] = [
  {
    id: 1,
    image: import.meta.env.BASE_URL + 'assets/creative-work/paranoid-orange.JPG',
    alt: 'A painting of multiple orange colored faces, each with a paranoid facial expression and purple background.',
    width: 410,
    height: 590,
  },
  {
    id: 2,
    image: import.meta.env.BASE_URL + 'assets/creative-work/sad-blue.JPG',
    alt: 'A painting of multiple blue faces, each with a sad facial expression, and a red background.',
    width: 410,
    height: 590,
  },
  {
    id: 3,
    image: import.meta.env.BASE_URL + 'assets/creative-work/tears-white.JPG',
    alt: 'A painting of multiple white stars with sad faces, and a black background',
    width: 410,
    height: 590,
  },
  {
    id: 4,
    image: import.meta.env.BASE_URL + 'assets/creative-work/self-portrait.JPG',
    alt: 'A portrait of a woman with long, dark hair and bangs. Face is covered a mischievous smiley.',
    width: 410,
    height: 590,
  },
]
