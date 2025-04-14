import '../styles/Extra/Extra.css'
import { ButtonImage } from "../components/General/IconButton";
import HeroImage from "../assets/img/heroImage.jpg"
import { ReactComponent as BackIcon } from "../assets/img/return-back-button.svg";

export function Extra(){
    return(
        <div className='extraPage'>
            <main>
                <div className="heroImageContainer">
                    <img src="https://i.blogs.es/669147/ram-s6-key--rt-1920x1080/1366_2000.jpeg" alt="Hero Image"/>
                    <div className='heroImageContainerTitle'>
                        <button className='backButton'>
                            <svg data-v-643dae68="" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" class="icon block h-full w-full icon--chevron-left"><path data-v-643dae68="" d="M58.1818 80C57.7273 80 57.2727 79.8095 56.9091 79.4286L20.5455 41.3333C19.8182 40.5714 19.8182 39.4286 20.5455 38.6667L56.9091 0.571429C57.6364 -0.190476 58.7273 -0.190476 59.4545 0.571429C60.1818 1.33333 60.1818 2.47619 59.4545 3.2381L24.3636 40L59.4545 76.7619C60.1818 77.5238 60.1818 78.6667 59.4545 79.4286C59.0909 79.8095 58.6364 80 58.1818 80Z" ></path></svg>
                            Volver
                        </button>
                        <h1>Bienvenido a The Rick and Morty Page</h1>
                    </div>
                </div>

                <div className='seriesInfo'>
                    <p className='marginb-2'>Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos.</p>
                    <img src='https://external-preview.redd.it/ntcywUtfIcq3_gMOJk_tQh3Ior3oFARLga_64nlBUfs.png?width=1080&crop=smart&auto=webp&s=ad8da9b2439c384d10ef37f9a1159d5d1be81853'/>
                    <div>
                        <ul>
                            <li>Explora infinitos universos, realidades alternas y versiones absurdas de tus personajes favoritos. La ciencia ficción nunca fue tan divertida ni tan caótica.</li>
                            <li>Una combinación única de comedia inteligente, teorías científicas alocadas y situaciones completamente inesperadas que te mantendrán pegado a la pantalla.</li>
                            <li>Debajo del caos y las risas, la serie esconde reflexiones profundas sobre la existencia, la familia, la libertad… y el nihilismo interdimensional.</li>
                        </ul>
                        <img src='https://media.newyorker.com/photos/59e78cef57e38e49cd315477/master/pass/Patterson-Rick-and-Morty-Show-We-Need-American-Apocalypse.jpg'/>
                    </div>
                    
                    <p>Rick and Morty nació como una parodia de Volver al Futuro, creada por Justin Roiland para un corto animado llamado The Real Animated Adventures of Doc and Mharti.</p>
                    <img src='https://hips.hearstapps.com/vidthumb/images/rick-y-morty-1626783132.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'/>
                </div>

                <div className='preFooter'>
                    <p>The Super Amazing Rick and Morty Page</p>
                    <div className='preFooterIcons'>
                        <svg data-v-643dae68="" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon block h-full w-full icon--facebook"><path data-v-643dae68="" d="M13.6207 23.998H9.0388C8.70874 23.998 8.43868 23.7246 8.43868 23.3905V14.8841H5.60012C5.27005 14.8841 5 14.6107 5 14.2765V9.71957C5 9.38539 5.27005 9.11197 5.60012 9.11197H8.43568V6.30184C8.43568 4.61577 9.09581 3.03298 10.2931 1.83906C11.4873 0.651211 13.0746 -0.00195312 14.7639 -0.00195312H18.1996C18.5297 -0.00195312 18.7997 0.271465 18.7997 0.605642V5.1626C18.7997 5.49678 18.5297 5.7702 18.1996 5.7702H14.7639C14.6169 5.7702 14.4759 5.82792 14.3739 5.92817C14.2718 6.02843 14.2178 6.15906 14.2178 6.30184V9.11197H18.1996C18.3857 9.11197 18.5597 9.20007 18.6737 9.34589C18.7877 9.49172 18.8268 9.68615 18.7817 9.86843L17.6355 14.4254C17.5665 14.6958 17.3295 14.8841 17.0534 14.8841H14.2178V23.3905C14.2178 23.7246 13.9478 23.998 13.6177 23.998H13.6207ZM9.63592 22.7829H13.0176V14.2765C13.0176 13.9423 13.2876 13.6689 13.6177 13.6689H16.5883L17.4285 10.3272H13.6177C13.2876 10.3272 13.0176 10.0537 13.0176 9.71957V6.30184C13.0176 5.84007 13.2066 5.38741 13.5337 5.06235C13.8638 4.73425 14.2989 4.55501 14.7639 4.55501H17.5995V1.21324H14.7639C13.3927 1.21324 12.1024 1.74488 11.1332 2.70792C10.167 3.66792 9.63592 4.94387 9.63592 6.30184V9.71957C9.63592 10.0537 9.36587 10.3272 9.0358 10.3272H6.20024V13.6689H9.0358C9.36587 13.6689 9.63592 13.9423 9.63592 14.2765V22.7829Z" fill="black"></path></svg>
                        <svg data-v-643dae68="" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon block h-full w-full icon--twitter"><path data-v-643dae68="" d="M14.0951 10.3146L22.2865 0.998047H20.3461L13.2305 9.08584L7.5516 0.998047H1L9.58953 13.2294L1 22.998H2.9404L10.4497 14.4552L16.4484 22.998H23M3.64073 2.42979H6.62173L20.3446 21.6366H17.3629" fill="black"></path></svg>
                        <svg data-v-643dae68="" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon block h-full w-full icon--mail"><path data-v-643dae68="" d="M21.645 19.998H2.355C1.734 19.998 1.128 19.7623 0.69 19.3468C0.243 18.9314 0 18.3756 0 17.7833V6.2184C0 6.2184 0 6.20998 0 6.20436C0 5.61489 0.246 5.06471 0.687 4.64927C1.125 4.23384 1.734 3.99805 2.355 3.99805H21.648C22.278 3.99805 22.869 4.22822 23.313 4.64647C23.754 5.06191 23.997 5.61489 24 6.20156V17.7833C24 18.3728 23.757 18.9286 23.313 19.3468C22.869 19.7651 22.275 19.998 21.648 19.998H21.645ZM1.2 7.28787V17.7833C1.2 18.0724 1.323 18.3531 1.539 18.5552C1.758 18.7602 2.046 18.8724 2.352 18.8724H21.645C21.954 18.8724 22.242 18.7602 22.461 18.5552C22.677 18.3531 22.8 18.0696 22.8 17.7833V7.28787L13.341 13.4605C12.549 13.977 11.451 13.977 10.659 13.4605L1.2 7.28787ZM1.236 5.94331L11.346 12.5398C11.733 12.7924 12.267 12.7924 12.657 12.5398L22.764 5.94331C22.713 5.75524 22.608 5.5784 22.461 5.43805C22.242 5.23313 21.954 5.12085 21.648 5.12085H2.355C2.049 5.12085 1.758 5.23313 1.542 5.43805C1.395 5.5784 1.29 5.75243 1.239 5.94331H1.236Z" fill="black"></path></svg>
                        <svg data-v-643dae68="" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon block h-full w-full icon--link"><g clip-path="url(#clip0_6805_810)" data-v-643dae68=""><path d="M14.2751 16.1588C14.1203 16.1588 13.9655 16.1528 13.8076 16.1406C12.8849 16.0738 12.0046 15.8156 11.1911 15.3721C10.3777 14.9286 9.6856 14.3271 9.13013 13.5859C8.87819 13.2487 8.948 12.7748 9.28189 12.5227C9.61882 12.2706 10.0923 12.3404 10.3443 12.6746C10.7692 13.2396 11.2974 13.7013 11.9166 14.0385C12.5358 14.3787 13.2097 14.5762 13.9139 14.6248C14.6181 14.6734 15.3102 14.5762 15.9749 14.3271C16.6366 14.081 17.2255 13.7013 17.7263 13.2001L21.1199 9.80696C22.0062 8.88653 22.4949 7.66232 22.4828 6.37129C22.4706 5.08026 21.9637 3.86517 21.0501 2.95081C20.1364 2.03646 18.9223 1.52916 17.6322 1.51701C16.3391 1.49574 15.1189 1.99393 14.1901 2.8931L12.2535 4.81901C11.9561 5.11367 11.4765 5.11367 11.179 4.81598C10.8846 4.51828 10.8846 4.03832 11.182 3.74062L13.1277 1.80559C14.354 0.620878 15.9597 -0.0109691 17.6444 -0.00185591C19.3351 0.0133327 20.9256 0.681632 22.1215 1.8785C23.3175 3.07536 23.9853 4.66713 24.0004 6.35914C24.0156 8.05115 23.3752 9.65507 22.2005 10.8732L18.7978 14.2785C18.1422 14.9346 17.3712 15.4298 16.5031 15.7548C15.7806 16.0252 15.0309 16.1588 14.269 16.1588H14.2751Z" fill="black" data-v-643dae68=""></path><path d="M6.41402 23.9984C6.39581 23.9984 6.37759 23.9984 6.35635 23.9984C4.66564 23.9832 3.0751 23.3149 1.87916 22.1181C0.683224 20.9212 0.0154406 19.3294 0.000263676 17.6374C-0.0149132 15.9454 0.625552 14.3415 1.80024 13.1234L5.19987 9.71808C5.85551 9.06193 6.6265 8.56678 7.49461 8.24175C8.36273 7.91671 9.27031 7.78609 10.1931 7.85292C11.1158 7.91975 11.9961 8.17795 12.8096 8.62146C13.623 9.06497 14.3151 9.66644 14.8706 10.4076C15.1225 10.7448 15.0527 11.2187 14.7188 11.4708C14.3819 11.723 13.9084 11.6531 13.6564 11.319C13.2345 10.7539 12.7033 10.2922 12.0841 9.95502C11.4649 9.6148 10.791 9.41735 10.0868 9.36874C9.38262 9.3171 8.68752 9.41734 8.02581 9.66644C7.36409 9.91249 6.77523 10.2922 6.27439 10.7934L2.88387 14.1866C1.99754 15.107 1.50885 16.3312 1.51795 17.6222C1.53009 18.9133 2.037 20.1284 2.95065 21.0427C3.8643 21.9571 5.07845 22.4644 6.36849 22.4765C6.38367 22.4765 6.39581 22.4765 6.41098 22.4765C7.68584 22.4765 8.89089 21.9905 9.81061 21.1004L11.735 19.1745C12.0325 18.8768 12.5121 18.8768 12.8096 19.1745C13.107 19.4722 13.107 19.9522 12.8096 20.2499L10.876 22.1849C9.66491 23.3575 8.08348 23.9954 6.41402 23.9954V23.9984Z" fill="black" data-v-643dae68=""></path></g><defs data-v-643dae68=""><clipPath id="clip0_6805_810" data-v-643dae68=""><rect width="24" height="24" fill="white" data-v-643dae68=""></rect></clipPath></defs></svg>
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    <img/>
                </div>
                <div>
                    
                </div>
            </footer>
        </div>
   
    )
}