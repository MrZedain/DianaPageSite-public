import "./About.css";

const About = ({ page }) => {
    return (
        <div className='about-content'>
            <img className='backgroundImage' src="../images/aboutDiana.jpg" alt="" />

            {page === "Biography" && (
                <div className='bioContent'>
                    <h1 className='pageName'>biography</h1>
                    <div className="bioContentWrap">
                        <div className='bioPhoto'>
                            <img src="../images/dianabio2.jpg" alt="" />
                            <h5>(Photograph by Monica Fritz)</h5>
                        </div>
                        <div className="bioText">
                            <p>Diana Page is a South African artist based in Istanbul, Turkey.</p>
                            <p> Throughout her career, Diana Page has exhibited her work extensively and has participated in significant events and collaborations. A proud moment was her involvement in a collaborative community project, designing carpets for the Judges' Chambers of South Africa's New Constitutional Court. In 2008 she directed the second in a trilogy of citybased rooftop performances titled "Pitch Blue" in Brooklyn, NYC
                            </p>
                            <p>Diana's work has been showcased in various prestigious venues. In 2024 she was selected for Women in Art Fair held at the Mall Galleries, London. The recent touring exhibition 'Walking on a Rim of Light' brought together her artistic trajectory, spanning South Africa and Turkey, interweaving the different strands of her art practice, including drawing, performance, and painting. Notably, the tour featured a museum show at Oliewenhuis in Bloemfontein.</p>
                            <p> Another noteworthy exhibition, 'Trans-Idyllic,' curated by Lewis Johnson in Istanbul, drew connections between Diana's work and post-modern painters such as Sigmar Polke. Furthermore, 'Akıs Flow,' curated by Jochen Proehl at BAUART, presented the flow of Diana's work through a captivating digital presentation of her numerous sketchbooks alongside her paintings.</p>
                            <p>These accomplishments and exhibitions have solidified Diana Page's reputation as an artist who continually explores new artistic territories, diverse creative mediums, and inspires others through her evocative works.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {page === "CV" && (
                <div className='CVContent'>
                    <h1 className='pageName'>cv</h1>
                    <div className='educationList'>
                        <h3><u>Education</u></h3>
                        <ul>
                            <li>Rhodes University, South Africa, 1992</li>
                            <li>Master of Fine Art, with distinction</li>
                        </ul>

                        <ul>
                            <li>University of Natal</li>
                            <li>Pietermaritzburg, South Africa, 1986</li>
                            <li>Bachelor of Fine Art & History of Art with distinction</li>
                            <li></li>
                        </ul>

                        <ul>
                            <li>University of Cape Town, South Africa, 1988</li>
                            <li>Higher Diploma of Education, PGS</li>
                        </ul>
                    </div>

                    <div className='soloExhibitionsList'>
                        <h3><u>Solo Exhibitions</u></h3>
                        <ul>
                            <li>Par par page, a drawing installation,  Ateliers Ouvertes, Cite Internationale des Arts, Paris 2024 </li>
                            <li>Artist's residency, Cite Internationale des Arts, Paris 2024</li>
                            <li>Walking on a rim of light, IS Art Gallery, Stellenbosch, South Africa, 2023</li>
                            <li>Walking on a rim of light, Oliewenhuis Art Museum, Bloemfontein, South Africa 2022</li>
                            <li>Shearwater, Henry George Gallery, Johannesburg, South Africa, 2019</li>
                            <li>Trans-Idyllic, Buyukdere 35, Istanbul, Turkey, 2017</li>
                            <li>Akis/Flow, BAUART, Bahcesehir University, Istanbul, Turkey, 2015</li>
                            <li>Ships and Dreams, Arnavutkoy Art Gallery, Istanbul, Turkey, 2010</li>
                            <li>Night Fishing, 360Istanbul, Istanbul, Turkey, 2007</li>
                            <li>Unknown Cities, Buchanan Square, Woodstock, South Africa, 2006</li>
                            <li>Paintings & Drawings, Association of Visual Arts, Cape Town, South Africa, 2001</li>
                            <li>Diana Page: Paintings, Chelsea Gallery, Cape Town, South Africa, 2000</li>
                            <li>Feeling the Spaces, Chelsea Gallery, Cape Town, South Africa, 1996</li>
                            <li>Pilgrims, Chelsea Gallery, Cape Town, South Africa, 1995</li>
                            <li>Going Home, Market Galleries, Johannesburg, South Africa, 1993</li>
                        </ul>
                    </div>

                    <div className='groupExhibitionsList'>
                        <h3><u>Group Exhibitions (selected)</u></h3>
                        <ul>
                            <li>Small pains, great songs Artist's Book Collection, curated by Seçil Yaylali, hosted by PASAJ İstanbul, exhibited Los Angeles, Bodrum, Singapore 2025</li>
                            <li>Women’s Day Exhibition, Buyukdere 35, Istanbul 2024</li>
                            <li>Gallery ONE962, online January Art Prize and Purple 2024</li>
                            <li>The Other Art Fair, Truman Brewery, London, October 2023</li>
                            <li>Women in Art Fair, Mall Galleries, London, October 2023</li>
                            <li>Sitting Duck Studios, Cape Town (Launch of Limited Edition reproduction of sketchbooks “Page by Page” )</li>
                            <li>Borderless Art Book Fair, Arter, Istanbul (launch of Limited Edition reproduction of sketchbooks “Page by Page”)2022 /2023</li>
                            <li>Imitation of Life, Winter online exhibition, Teresa Lizamore Gallery, Johannesburg, South Africa, 2021 Jack Ginsberg Artist’s Book Collection, permanent exhibit, Wits Art Museum, Johannesburg, South Africa, 2019</li>
                            <li>TWO, Smith Studios, Cape Town, South Africa, 2015</li>
                            <li>Between Colour and Line: Diana Page and Joicy Koothur, Ouvroir d’Art, Sainte Pulcherie, Istanbul, Turkey, 2012</li>
                            <li>Imprints, Axis Gallery, New York, USA, 2005</li>
                            <li>New Work: Diana Page & Jane Young, Irma Stern Art Museum, University of Cape Town (UCT), South Africa, 2005</li>
                            <li>AVA Exhibition of Cape-based Artists, Gesseau Art, Johannesburg, South Africa, 2004</li>
                            <li>Interpreted Works: the Michaelis Collection, Old Town House, Cape Town, South Africa, 2001</li>
                            <li>Batsoso Manuscript Exhibition 2000, Boekehuis, Gauteng, South Africa, 2000</li>
                            <li>Boudoir Biscuits, traveling exhibition, Irma Stern Gallery, Ibis Art Centre, King George VI Museum, South Africa, 1998</li>
                            <li>District Six Exhibition, National Gallery, Cape Town, South Africa, 1995</li>
                        </ul>
                    </div>

                    <div className='resindeciesList'>
                        <h3><u>Residencies</u></h3>
                        <ul>
                            <li>2018 Cité Internationale Des Arts, Paris, France</li>
                            <li>2012 Bag Factory, Johannesburg, South Africa</li>
                            <li>2008 Platform Garanti, Istanbul, Turkey</li>
                        </ul>
                    </div>

                    <div className='awardsList'>
                        <h3><u>Awards</u></h3>
                        <ul>
                            <li>Ampersand Fellowship, 2008</li>
                            <li>Tribeca, New York, USA</li>
                            <li>New Constitutional Court, carpet design commission, 2003</li>
                            <li>Johannesburg, South Africa (Boudoir Biscuits)</li>
                            <li>CONVENCO public art competition, runner-up, 2002</li>
                            <li>Cape Town, South Africa (Boudoir Biscuits)</li>
                            <li>National Student Art Competition, Silver Award, 1986</li>
                            <li>Johannesburg, South Africa</li>
                        </ul>
                    </div>

                    <div className='projectsList'>
                        <h3><u>Projects</u></h3>
                        <ul>
                            <li>2021 Konusma Zaman, exhibition, book and public billboard project, Toplumsal Cinsiyet Muzesi, Istanbul</li>
                            <li>2016 The Purple Cloak: Paintings by Lindsay Page, curated for Irma Stern Art Museum, UTC, South Africa</li>
                            <li>2015 - present Founder, Art Wonderers Worldwide web-based creative hub</li>
                            <li>2014 Paintings on a Garden Wall in Cayirbasi, studio Installation, Istanbul, Turkey</li>
                            <li>2012 Ek se: Women's Voices, performance, Infecting the City Public Arts Festival, Cape Town, South Africa</li>
                            <li>2008 Pitch Blue: Women's Voices, performance, New York, New York, USA</li>
                            <li>2007 Kadinin Sesleri: Women's Voices, performance, Gorunurluk Projesi 3, Galataperform, Galata, Istanbul</li>
                            <li>1994 Boudoir Biscuits, founding member of artists’ group, Cape Town, South Africa</li>
                        </ul>
                    </div>

                    <div className='collectionsList'>
                        <h3><u>Collections</u></h3>
                        <ul>
                            <li>Jack Ginsberg Artists’ Book Collection WAM, Johannesburg; ABSA Bank; BP Southern Africa; Citibank;</li>
                            <li>Grindrod; HSBC; LTA & Grinaker; Maersk Shipping; MAC Shipping; University of Cape Town; Old Mutual;</li>
                            <li>Pretoria Technikon; Nando’s England; Lady Graaff Collection; Prof. Semra Kahraman Collection; private collectors worldwide.</li>
                        </ul>
                    </div>


                </div>
            )}

            {page === "Statement" && (
                <div className="statementContent">
                    <h1 className='pageName'>statement</h1>


                    <p>Drawing is fundamental to me, a way of being in the world.</p>
                    <p>I am interested in cities as sites of human energy in flux. My paintings embrace both the mundane and the poetic aspects of the city,
                        within the confines of the built environment and then sometimes into wilder places of water, forest and land. Sometimes the paintings
                        are paeans to the city’s resilient beauty.</p>
                    <p>The paintings become arenas in which the way that I work echoes the city itself: the unpredictability, the search for order out of chaos,
                        that comes to express itself either in highly layered paintings, jazzy in their embrace of evolving abstract form; or the paintings happen
                        just like drawings representing a gathering of energy, gestural and fluid, often leaving space and empty, unworked areas or raw canvas
                        allowing breath and a sense of freedom to prevail amidst the swathes of colour and mark making.</p>
                </div>
            )}

        </div>
    );
};

export default About;
