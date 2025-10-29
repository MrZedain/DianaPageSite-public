import { Link } from 'react-router-dom';
import "./DrawingMentor.css"

const DrawingMentor = () => {
    return (
        <div className='drawingMentorContent'>

            <img className="image2" src="../DianaView.jpg" alt="" />



            <h1 className='pageName'>drawing mentor</h1>
            <h2 className='marginNone'>ART WONDERERS</h2>
            <h3 className='marginNone riskPlayEnjoy'>risk play enjoy</h3>

            <div className="upperText">
                <p>Do you have a dream to write a book, start a painting, make a coat, design a garden? Are you wanting to think about your life and the world in a new way?
                    Or are you already on a creative path but just need to check-in for a bit of extra support now and then?
                </p>




                <h3>8 week Art Wonderers Course 2025</h3>


            </div>

            <img className="image1" src="../flippingthrough.jpg" alt="" />

            <div className="lowerText">
                <h3>Join the art wonderers' 8 week drawing course </h3>
                <p>The Art Wonderers will help you determine how you like to make stuff, and also help you find new ways to develop your own creativity. <br />
                    <b>Everyone is creative</b>, discover what kind of creative person you are:<br />
                    Scattershot creativity vs routine?<br />
                    Structured vs organic?<br />
                    Methodical or intuitive?<br />
                    Haptic or visually minded?<br />
                    <b>Risk and fail often</b>. The Art Wonderers course is NOT about achieving perfect likenesses. Fast forward failure as a way of learning.<br />
                    <b>Use the grid to get you off the grid!</b> Rediscover that child like joy of making stuff with your hands again.<br />
                    <b>Play.</b> Lose yourself in the joy of your own process. Learn how to make compositions that sing!<br />
                    <b>Enjoy creative community.</b> Share your process and chat and collaborate with fellow creatives from across the world.<br />
                    <b>Explore and discover</b> how <b>other artists</b> have seen the world and made art, as a way of enlarging and enlivening your own.
                    <p>

                        <Link
                            to="/contact"
                            style={{ textDecoration: "underline", color: "rgb(209, 28, 185)" }}
                        >
                            Message
                        </Link>{" "}
                        <strong>
                            for current course details
                        </strong>
                    </p>


                </p>

                <h3 className='notBold'><u>THE STORY</u></h3>
                <p> "In 2016 , I leapt into the web, pretty much blind! and launched Drawing with the Wondering Artist as an online Drawing course, which soon established itself as a community of "Art Wonderers".<br />
                    The Art Wonderers tuned in each week from across the globe to share their art making process, meeting every weekend on Skype to chat about art, life. and pretty much everything else going on in their neck of the woods!<br />
                    In 2025, the Art Wonderers has evolved into a way of life, as more and more people discover the joy of making stuff in your pyjamas.</p>
            </div>


        </div>
    )
}

export default DrawingMentor
