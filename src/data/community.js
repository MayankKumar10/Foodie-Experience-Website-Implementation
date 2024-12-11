import { Community1, Community2 , Community3 } from "../assets/images";

console.log({Community1})

export const communityData = [
  { 
    id: 1,
    username: "@buzzfeedfood",
    content: "It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto",
    image: {Community1},
    likes: "14.7K",
    comments: "60"
  },
  {
    id: 2,
    username: "@love_food",
    content: "Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood",
    image: {Community2},
    likes: "99.7K",
    comments: "789"
  },
  {
    id: 3,
    username: "@foodandwine",
    content: "Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)",
    image: {Community3},
    likes: "88.5K",
    comments: "422"
  }
];