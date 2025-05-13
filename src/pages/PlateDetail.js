import '../styles/PlateDetail.css'
import { LiWithDelete } from '../components/General/LiWithDelete'

export function PlateDetail(){
    return(
        <div className='detailContainer'>
            <div className='infoHeader'>
                <p>Id:<strong>4569</strong></p>
                <p><strong>Beef</strong></p>
            </div>
            <div>
                <hr/>
                <h1 id='title'>Título</h1>
                <hr/>
            </div>
            
            <main className='foodDisplayGrid'>
                <div className='plateImage'>
                    <img src="https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg"/>
                </div>
                <div className='foodSideView'>
                    <div className='foodSideViewInnerContainer'>
                        <div className='ingredientsList'>
                            <h2>Ingredients</h2>
                            <ul>
                                <LiWithDelete text={"Carne"}/>
                            </ul>
                        </div>

                        <div className='linksList'>
                            <h2>Links</h2>
                            <div>
                                <p><strong>Youtube</strong> </p>
                                <p>https://www.youtube.com/watch?v=fvjcE8fwI2k</p>
                            </div>
                            <div>
                                <p><strong>Website</strong> </p>
                                <p>https://www.bbcgoodfood.com/recipes/7745/baked-salmon-with-fennel-and-tomatoes</p>
                            </div>
                            
                        </div>
                    </div> 
                </div>
                <div className='foodSteps'>
                    <h2>Steps</h2>
                    <ol>
                        <li>Calentar la carne</li>
                        <li>Calentar la carne</li>
                        <li>Calentar la carne</li>
                        <li>Calentar la carne</li>
                        <li>Calentar la carne</li>
                    </ol>
                </div>
            </main>
            
        </div>
    )

}