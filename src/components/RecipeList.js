import React, {useState, useEffect} from 'react'
import { db } from '../firebase.js'

function RecipeList() {
    const [recipes, setRecipes] = useState([])
    const [filter, setFilter] = useState("Air");


    useEffect(() => {
        db.collection('resepi').orderBy('postTime').limit(50).onSnapshot(snapshot => {
            setRecipes(snapshot.docs.map(doc => doc.data()))
        })
      },[])

      const filtered = recipes.filter((e) => e.title.toLowerCase().includes(filter.toLowerCase()))
      console.log(filtered)

  return (
    <main className="bg-gray-900">
        <section className="min-h-screen px-5">
            <div className="flex flex-col gap-5 py-5 lg:flex-row lg:flex-wrap">
                {recipes.map(({id, altTitle, imgUrl, owner, postTime, title, videoUrl}) => (
                    <div className="block max-w-sm rounded-lg bg-neutral-700 shadow-lg items-center hover:-translate-y-1 duration-300" key={id}>
                        <a href={videoUrl} rel="noreferrer" target="_blank" key={id}>
                            <img 
                                className="rounded-t-lg object-cover h-48 w-96 hover:object-scale-down hover:duration-300" 
                                src={imgUrl} 
                                alt={altTitle}
                                href={videoUrl}
                                key={id}
                                // width="100%" 
                                // height="100%" 
                            />
                            <h5 className='mb-2 px-2 text-xl font-medium leading-tight text-neutral-50' key={id}>{title}</h5>
                            <h5 className='text-lg px-2 text-white font-mono' key={id}>{owner}</h5>
                        </a>
                    </div>
                ))}
            </div>
        </section>
        
    </main>
    
  )
}

export default RecipeList