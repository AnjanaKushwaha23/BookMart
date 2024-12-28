import { assets } from "src/assets/assets";
import { v4 as uuidv4 } from 'uuid';

const products = [
    {
      _id: uuidv4(),
      title: "Iron Lake (20th Anniversary Edition)",
      author: "William Kent Krueger",
      price: "500",
      categoryName: "Mystery",
      image: assets.ironLake,
      description:
      "A genre of fiction that deals with the solution of a crime or the unraveling of secrets. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      _id: uuidv4(),
      title: "Camino Winds",
      author: "John Grisham",
      price: "700",
      categoryName: "Romance",
      image: assets.winds,
      description:"A genre that focuses on the romantic relationship between two or more people. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      _id: uuidv4(),
      title: "Killing Floor",
      author: "Lee Child",
      price: "300",
      categoryName: "Thriller",
      image: assets.killing,
      description:
      "A genre characterized by excitement, suspense, and high levels of anticipation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      _id: uuidv4(),
      title: "Black Butler Volume 1",
      author: "Yana Toboso",
      price: "1000",
      categoryName: "Graphic Novel",
      image: assets.butler,
      description:
      "A narrative work in which the story is conveyed to the reader using sequential art. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      _id: uuidv4(),
      title: "Beauty and the Beast",
      author: "Jeanne-Marie Leprince de Beaumont",
      price: "1000",
      categoryName: "Fairy Tale",
      image: assets.beautyBeast,
      description:
      "A short story that features folkloric characters such as fairies, goblins, elves, and magical creatures. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      _id: uuidv4(),
      title: "The Ugly Duckling",
      author: "Hans Christian Andersen",
      price: "1000",
      categoryName: "Fairy Tale",
      image: assets.duckling,
      description:
      "A short story that features folkloric characters such as fairies, goblins, elves, and magical creatures. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  
    {
      _id: uuidv4(),
      title: "The Amityville Horror",
      author: "Jay Anson",
      price: "1000",
      categoryName: "Horror",
      image:assets.amityville,
      description:
      "A genre intended to create feelings of fear, dread, repulsion, and terror in the audience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },{
      _id: uuidv4(),
      title: "Presumed Innocent (Kindle County Legal Thriller, #1)",
      author: "Scott Turow",
      price: "1000",
      categoryName: "Thriller",
      image: assets.presumed,
      description:
      "A genre characterized by excitement, suspense, and high levels of anticipation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
 
    },{
      _id: uuidv4(),
      title: "And Then There Were None",
      author: "Agatha Christie",
      price: "1000",
      categoryName: "Mystery",
      image: assets.andThenThereWereNone,
      description:
      "A genre of fiction that deals with the solution of a crime or the unraveling of secrets. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },{
      _id: uuidv4(),
      title: "The Point of Light (Historical Fiction #1)",
      author: "John Ellsworth ",
      price: "1000",
      categoryName: "Historical",
      image: assets.light,
      description:
      "A genre where the plot takes place in a setting located in the past. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },{
      _id: uuidv4(),
      title: "The Girl in the Picture",
      author: "Kerry Barrett",
      price: "1000",
      categoryName: "Historical",
      image: assets.girl,
      description:
      "A genre where the plot takes place in a setting located in the past. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      _id: uuidv4(),
      title: "I Know Why the Caged Bird Sings",
      author: "Maya Angelou",
      price: "1000",
      categoryName: "Autobiography",
      image: assets.caged,
      description:
      "A genre in which the author tells their own life story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      _id: uuidv4(),
      title: "The Autobiography of Benjamin Franklin",
      author: "Benjamin Franklin",
      price: "1000",
      categoryName: "Autobiography",
      image:assets.bejammin,
      description:
      "A genre in which the author tells their own life story. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      _id: uuidv4(),
      title: "Salvager",
      author: "Scott Moon",
      price: "1000",
      categoryName: "Adventure",
      image: assets.salvager,
      description:
      "A genre of fiction that usually presents danger, or gives the reader a sense of excitement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  
    },
    {
      _id: uuidv4(),
      title: "The Silver Sphere Trilogy",
      author: "David Gittlin",
      price: "1000",
      categoryName: "Adventure",
      image: assets.silver,
      description:
      "A genre of fiction that usually presents danger, or gives the reader a sense of excitement. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum mollis viverra. Aenean et pulvinar arcu. Phasellus luctus sem non lacinia pellentesque. Morbi a venenatis erat. Quisque rutrum lorem vitae congue hendrerit. Vivamus rutrum imperdiet elit. Nullam facilisis leo faucibus nunc egestas bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ];

  export default products;