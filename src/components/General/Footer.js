export function RickFooter(){
    return(
        <footer className='extraFooter'>
                <div className='footerBigImage'>
                    <img src='https://i5.walmartimages.com/seo/Rick-and-Morty-Metal-Wall-Art_bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png'/>
                </div>
                <div className='linksAndForm'>
                    <div className='links'>
                        <div>
                            <p className='listOfLinksTitle'><strong>Universos aternativos</strong></p>
                            <ul className='listOfLinks'>
                                <li>Citadel of Ricks</li>
                                <li>Dimension C-137</li>
                                <li>Froopyland</li>
                                <li>Planet Gazorpazorp</li>
                                <li>Birdperson's Planet</li>
                                <li>Purge Planet</li>
                                <li>Blips and Chitz</li>
                                <li>Unity's World</li>
                                <li>Anatomy Park</li>
                            </ul>       
                        </div>
                        <div>
                            <p className='listOfLinksTitle'><strong>Recursos interdimencionales</strong></p>
                            <ul>
                                <li>Consejos de Supervivencia Multiversal</li>
                                <li>Noticias de la Ciudadela</li>
                                <li>Contacto con el Consejo de Ricks</li>
                                <li>Viajes con Portal Gun Garantizados</li>
                                <li>App de Mr. Meeseeks</li>
                                <li>Centro de Reparación de Naves</li>
                                <li>Política de Realidades Paralelas</li>
                                <li>Protocolo de Catástrofes Temporales</li>
                                <li>Política Antipurgas</li>
                                <li>Términos y Condiciones de la Realidad</li>
                                <li>Mapa del Multiverso</li>
                            </ul>
                        </div>
                        <div>
                            <p className='listOfLinksTitle'><strong>Acerca de Rick y Morty</strong></p>
                            <ul>
                                <li>Proyecto Phoenix</li>
                                <li>Servicio de Mr. Poopybutthole</li>
                                <li>Fundación Interdimensional Smith</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footerFormContainer'>
                        <p><strong>Suscribete para recibir nuestras ofertas</strong></p>
                        <div>
                            <form className='footerForm'>
                                <div className='formColumn'>
                                    <input />
                                    <input/>
                                </div>
                                <div className='formColumn'>
                                    <input/>
                                    <select/>
                                </div>
                                <div className='conditions'>
                                    <label class="checkbox-container">
                                        <input type="checkbox" class="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <p>He leído y estoy de acuerdo con los <a href='/'>Aviso de Privacidad Integral</a> puesto a mi disposición.</p>
                                </div>
                                <input className='submitFooter' type='submit' value={"Enviar"}/>
                            </form>

                        </div>
                    </div>
                </div>
                <div className='socials'>
                    <div className='preFooterIcons'>
                        <svg data-v-643dae68="" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon block h-full w-full icon--facebook"><path data-v-643dae68="" d="M13.6207 23.998H9.0388C8.70874 23.998 8.43868 23.7246 8.43868 23.3905V14.8841H5.60012C5.27005 14.8841 5 14.6107 5 14.2765V9.71957C5 9.38539 5.27005 9.11197 5.60012 9.11197H8.43568V6.30184C8.43568 4.61577 9.09581 3.03298 10.2931 1.83906C11.4873 0.651211 13.0746 -0.00195312 14.7639 -0.00195312H18.1996C18.5297 -0.00195312 18.7997 0.271465 18.7997 0.605642V5.1626C18.7997 5.49678 18.5297 5.7702 18.1996 5.7702H14.7639C14.6169 5.7702 14.4759 5.82792 14.3739 5.92817C14.2718 6.02843 14.2178 6.15906 14.2178 6.30184V9.11197H18.1996C18.3857 9.11197 18.5597 9.20007 18.6737 9.34589C18.7877 9.49172 18.8268 9.68615 18.7817 9.86843L17.6355 14.4254C17.5665 14.6958 17.3295 14.8841 17.0534 14.8841H14.2178V23.3905C14.2178 23.7246 13.9478 23.998 13.6177 23.998H13.6207ZM9.63592 22.7829H13.0176V14.2765C13.0176 13.9423 13.2876 13.6689 13.6177 13.6689H16.5883L17.4285 10.3272H13.6177C13.2876 10.3272 13.0176 10.0537 13.0176 9.71957V6.30184C13.0176 5.84007 13.2066 5.38741 13.5337 5.06235C13.8638 4.73425 14.2989 4.55501 14.7639 4.55501H17.5995V1.21324H14.7639C13.3927 1.21324 12.1024 1.74488 11.1332 2.70792C10.167 3.66792 9.63592 4.94387 9.63592 6.30184V9.71957C9.63592 10.0537 9.36587 10.3272 9.0358 10.3272H6.20024V13.6689H9.0358C9.36587 13.6689 9.63592 13.9423 9.63592 14.2765V22.7829Z" ></path></svg>
                        <svg data-v-643dae68="" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon block h-full w-full icon--twitter"><path data-v-643dae68="" d="M14.0951 10.3146L22.2865 0.998047H20.3461L13.2305 9.08584L7.5516 0.998047H1L9.58953 13.2294L1 22.998H2.9404L10.4497 14.4552L16.4484 22.998H23M3.64073 2.42979H6.62173L20.3446 21.6366H17.3629" ></path></svg>
                        <svg data-v-643dae68="" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon block h-full w-full icon--mail"><path data-v-643dae68="" d="M21.645 19.998H2.355C1.734 19.998 1.128 19.7623 0.69 19.3468C0.243 18.9314 0 18.3756 0 17.7833V6.2184C0 6.2184 0 6.20998 0 6.20436C0 5.61489 0.246 5.06471 0.687 4.64927C1.125 4.23384 1.734 3.99805 2.355 3.99805H21.648C22.278 3.99805 22.869 4.22822 23.313 4.64647C23.754 5.06191 23.997 5.61489 24 6.20156V17.7833C24 18.3728 23.757 18.9286 23.313 19.3468C22.869 19.7651 22.275 19.998 21.648 19.998H21.645ZM1.2 7.28787V17.7833C1.2 18.0724 1.323 18.3531 1.539 18.5552C1.758 18.7602 2.046 18.8724 2.352 18.8724H21.645C21.954 18.8724 22.242 18.7602 22.461 18.5552C22.677 18.3531 22.8 18.0696 22.8 17.7833V7.28787L13.341 13.4605C12.549 13.977 11.451 13.977 10.659 13.4605L1.2 7.28787ZM1.236 5.94331L11.346 12.5398C11.733 12.7924 12.267 12.7924 12.657 12.5398L22.764 5.94331C22.713 5.75524 22.608 5.5784 22.461 5.43805C22.242 5.23313 21.954 5.12085 21.648 5.12085H2.355C2.049 5.12085 1.758 5.23313 1.542 5.43805C1.395 5.5784 1.29 5.75243 1.239 5.94331H1.236Z" ></path></svg>
                    </div>
                    <div>
                        <img src='https://www.leblancsparesorts.com/tripadvisor_2024_Best_of_the_Best_2d097d03c3.svg'/>
                        <img src='https://www.leblancsparesorts.com/AAA_5_diamond_63f08f410e.svg'/>
                        <img src='https://www.leblancsparesorts.com/Earth_check_silver_footer_c7c32a55cf.svg'/>
                    </div>
                </div>
                <div className='socials finalSection'>
                    <p>Este sitio es propiedad de Ventthos Inc. © 2024</p>
                    <div className='lenguages'>
                        <p>English</p>
                        <p><strong>Español</strong></p>
                    </div>
                </div>
            </footer>
    )
}