import ResponsiveCardGrid from "@/components/recipe-list";

async function fetchRecipeLists() {
   try {
     const response = await fetch('https://dummyjson.com/recipes');
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
     const data = await response.json();
     return data.recipes;
   } catch (error) {
     console.error("Failed to fetch recipes:", error);
     throw error;
   }
 }
 
 export default async function Recipes() {
   try {
     const recipelist = await fetchRecipeLists();
     
     if (!Array.isArray(recipelist)) {
       throw new Error('Received data is not an array');
     }
 
     return (

        <div className="mt-12">
          {/* <RecipesList recipelist={recipelist} /> */}
          <ResponsiveCardGrid recipelist={recipelist} />
        
       </div>
     );
   } catch (error) {
     return (
       <div>
         <h1>Error</h1>
         <p>Failed to load recipes: {error.message}</p>
       </div>
     );
   }
 }
