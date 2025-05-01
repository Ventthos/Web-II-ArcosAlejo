import '../../styles/Header.css'
export function Header(){
    return(
        <header className='rickHeader'>
            <div className="hamburguerMenu">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"/>
            </div>
            <img className='middleImage' src='https://i5.walmartimages.com/seo/Rick-and-Morty-Metal-Wall-Art_bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png'/>
            <nav className='headerLinks'>
                <a href="/"><svg data-v-643dae68="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 80" fill="none" class="icon block h-full w-full icon--chevron-down"><path data-v-643dae68="" d="M40 60C39.5238 60 39.0476 59.8182 38.6667 59.4545L0.571429 23.0909C-0.190476 22.3636 -0.190476 21.2727 0.571429 20.5455C1.33333 19.8182 2.47619 19.8182 3.2381 20.5455L40 55.6364L76.7619 20.5455C77.5238 19.8182 78.6667 19.8182 79.4286 20.5455C80.1905 21.2727 80.1905 22.3636 79.4286 23.0909L41.3333 59.4545C40.9524 59.8182 40.4762 60 40 60Z" fill="#1C1C1C"></path></svg>
                Index
                </a>
                <a href='/static'><svg data-v-643dae68="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 80" fill="none" class="icon block h-full w-full icon--chevron-down"><path data-v-643dae68="" d="M40 60C39.5238 60 39.0476 59.8182 38.6667 59.4545L0.571429 23.0909C-0.190476 22.3636 -0.190476 21.2727 0.571429 20.5455C1.33333 19.8182 2.47619 19.8182 3.2381 20.5455L40 55.6364L76.7619 20.5455C77.5238 19.8182 78.6667 19.8182 79.4286 20.5455C80.1905 21.2727 80.1905 22.3636 79.4286 23.0909L41.3333 59.4545C40.9524 59.8182 40.4762 60 40 60Z" fill="#1C1C1C"></path></svg>
                Estática
                </a>
                <a href='/characters'><svg data-v-643dae68="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 80" fill="none" class="icon block h-full w-full icon--chevron-down"><path data-v-643dae68="" d="M40 60C39.5238 60 39.0476 59.8182 38.6667 59.4545L0.571429 23.0909C-0.190476 22.3636 -0.190476 21.2727 0.571429 20.5455C1.33333 19.8182 2.47619 19.8182 3.2381 20.5455L40 55.6364L76.7619 20.5455C77.5238 19.8182 78.6667 19.8182 79.4286 20.5455C80.1905 21.2727 80.1905 22.3636 79.4286 23.0909L41.3333 59.4545C40.9524 59.8182 40.4762 60 40 60Z" fill="#1C1C1C"></path></svg>
                Búsqueda de personaje
                </a>
            </nav>
        </header>
    )

}