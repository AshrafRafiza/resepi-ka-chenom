import React, {useState, useEffect} from 'react'
import { db } from '../firebase.js'

function RecipeList() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        db.collection('resepi').orderBy('postTime').limit(50).onSnapshot(snapshot => {
            setRecipes(snapshot.docs.map(doc => doc.data()))
        })
      },[])

  return (
    <main className="bg-gray-900">
        <section className="min-h-screen px-5">
            <div className="flex flex-col gap-5 py-5 lg:flex-row lg:flex-wrap">
                {recipes.map(({id, altTitle, imgUrl, owner, postTime, title, videoUrl}) => (
                    <div className="block max-w-sm rounded-lg bg-neutral-700 shadow-lg items-center" key={id}>
                        <img 
                            class="rounded-t-lg object-cover h-48 w-96" 
                            src={imgUrl} 
                            alt={altTitle}
                            href={videoUrl} 
                            width="100%" 
                            height="100%" 
                        />
                        <h1 className='text-red-500 bg-purple-200'>Title: {title}</h1>
                        <p>Owner: {owner}</p>
                        <p>Url: {videoUrl}</p>
                    </div>
                ))}
            </div>
        </section>
        
    </main>
    
  )
}

export default RecipeList