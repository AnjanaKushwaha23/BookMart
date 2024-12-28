import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

const categories = [
  {
    _id: uuid(),
    categoryName: "Mystery",
    description:
      "A genre of fiction that deals with the solution of a crime or the unraveling of secrets. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    _id: uuid(),
    categoryName: "Romance",
    description:
      "A genre that focuses on the romantic relationship between two or more people. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    _id: uuid(),
    categoryName: "Thriller",
    description:
      "A genre characterized by excitement, suspense, and high levels of anticipation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    _id: uuid(),
    categoryName: "Graphic Novel",
    description:
      "A narrative work in which the story is conveyed to the reader using sequential art. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    _id: uuid(),
    categoryName: "Fairy Tale",
    description:
      "A short story that features folkloric characters such as fairies, goblins, elves, and magical creatures. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    description:
      "A genre intended to create feelings of fear, dread, repulsion, and terror in the audience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    _id: uuid(),
    categoryName: "Historical",
    description:
      "A genre where the plot takes place in a setting located in the past. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    _id: uuid(),
    categoryName: "Autobiography",
    description:
      "A genre in which the author tells their own life story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    description:
      "A genre of fiction that usually presents danger, or gives the reader a sense of excitement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

export default categories;