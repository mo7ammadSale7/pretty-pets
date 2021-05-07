import pet1 from "../images/pet-01.png";
import pet2 from "../images/pet-02.png";
import pet3 from "../images/pet-03.png";
import pet4 from "../images/pet-04.png";
import story1 from "../images/stories/1.png";
import story2 from "../images/stories/2.png";
import story3 from "../images/stories/3.png";

export const pets = [
  {
    name: "rocco",
    type: "dog",
    gender: "male",
    age: "young",
    address: { country: "egypt", city: "giza" },
    image: pet1,
  },
  {
    name: "chanona",
    type: "cat",
    gender: "male",
    age: "young",
    address: { country: "egypt", city: "cairo" },
    image: pet2,
  },
  {
    name: "morio",
    type: "dog",
    gender: "male",
    age: "young",
    address: { country: "egypt", city: "cairo" },
    image: pet3,
  },
  {
    name: "danio",
    type: "dog",
    gender: "male",
    age: "young",
    address: { country: "egypt", city: "cairo" },
    image: pet4,
  },
];

export const stories = [
  {
    title: "This Is How I Met Kori",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: story1,
  },
  {
    title: "I Can’t Live Without Nochi.",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: story2,
  },
  {
    title: "My Cat, My New Friend!",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: story3,
  },
];
