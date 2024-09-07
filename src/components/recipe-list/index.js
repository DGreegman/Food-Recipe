import Link from 'next/link';
import React from 'react';

// const Card = ({ imageUrl, title, description, buttonText }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
//       <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

const ResponsiveCardGrid = ({recipelist}) => {
  // const cards = [
  //   {
  //     imageUrl: "/api/placeholder/400/300",
  //     title: "Card 1",
  //     description: "This is the description for Card 1.",
  //     buttonText: "Learn More"
  //   },
  //   {
  //     imageUrl: "/api/placeholder/400/300",
  //     title: "Card 2",
  //     description: "This is the description for Card 2.",
  //     buttonText: "Learn More"
  //   },
  //   {
  //     imageUrl: "/api/placeholder/400/300",
  //     title: "Card 3",
  //     description: "This is the description for Card 3.",
  //     buttonText: "Learn More"
  //   },
  //   {
  //     imageUrl: "/api/placeholder/400/300",
  //     title: "Card 4",
  //     description: "This is the description for Card 4.",
  //     buttonText: "Learn More"
  //   }
  // ];

  return (
    <div className="container mx-auto px-4">
      <Link href={'/'}>Go Home</Link>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Recipes List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {recipelist.map((recipe) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 hover:scale-[1.1] transition-all">
          <img className="w-full h-48 object-cover object-top" src={recipe.image} alt={recipe.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{recipe.name}</div>
            <p className="text-gray-700 text-base">Ratings {recipe.rating}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href={`/recipe-list/${recipe.id}`}>View Recipe</Link>
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCardGrid;




// import {
//     Card,
//     CardContent,
//   } from "@/components/ui/card"
//   import Link from "next/link"
  
//   export default function RecipesList({ recipelist }) {
//     console.log('recipelist:', recipelist)
  
//     if (!recipelist || recipelist.length === 0) {
//       return <div>No recipes found</div>
//     }
  
//     return (
      
//       <div>
//         <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
//           <h1 className="text-4xl font-bold text-gray-800 mb-12">Recipes List</h1>
//           <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 gap-8">
//             <div>1</div>
//             <div>1</div>
//             <div>1</div>
//             <div>1</div>
//             {recipelist.map((recipe) => (
//               <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
//                 <Card>
//                   <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
//                     <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
//                       <img src={recipe.image}
//                         alt={recipe.name}
//                         className="h-full w-full object-cover object-top"
//                       />
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }