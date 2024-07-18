import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Recipes() {

    type RecipeType = {
        created_at: string;
        id: string;
        img_url: string;
        instructions: string;
        preparation_time: string;
        product_quantity: string;
        product_quantity_unit: string;
        product_texture_type_id: string;
        recipe_category_id: string;
        safety_precautions: string;
        slug: string;
        storage_method: string;
        storage_time: string;
        title: string;
        updated_at: string | null;
    }

    const [data, setData] = useState([])
    useEffect(() => {
        async function getSkinTypes() {
            try {
                const queryString = `/`;
                const url = "http://localhost:3000" + queryString;
                const response = await axios.get(url);
                const data = response.data
                setData(data)
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        }
        getSkinTypes()
    }, []);

    return (
        <div className="border border-gray-300 border-2 rounded-md">
            {data.map((recipe: RecipeType) => (
                <div key={recipe.id} className="border border-transparent border-b-gray-300 last:border-b-transparent flex px-3 py-3 items-center">
                    <div className="aspect-[2/1] w-1/6 h-fit">
                        <img src={recipe.img_url} className="object-cover w-full h-full overflow-hidden" />
                    </div>
                    <div className="w-full pl-4">
                        <h3 className="text-base font-semibold flex">{recipe.title}</h3>
                        <p className="text-sm text-gray-700 bg-gray-100 font-medium rounded-xl inline-block px-2 py-0.5 mt-2">Catégorie</p>

                        <div className="flex mt-2 justify-between items-center">
                            <div>
                                <p className="text-xs">
                                    date de création
                                </p>
                            </div>


                        </div>
                    </div>

                </div>
            ))}

        </div>
    )


}
