import React from "react"
export default function Hero() {

    const [formData, setFormData] = React.useState(
        {
            topText: '',
            bottomText: '',
            randomImage: "http://i.imgflip.com/1bij.jpg" 
        }
    )

    function getRandomImage() {
        
    }

    const [memesData, setmemesData] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
           .then(res => res.json())
           .then(data => setmemesData(data.data.memes))
    },[])

    console.log(memesData)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData((prevformData) => {
            return {
                ...prevformData,
                [name] : value
            }
        })
    }

    

    function submitForm(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <section className="hero">
            <form onSubmit={submitForm} className="meme--from">
                <div className="inputs-container">
                    <input
                        className="text--input"
                        type="text"
                        name="topText"
                        onChange={handleChange}
                        value={formData.topText}
                    />
                    <input
                        className="text--input"
                        type="text"
                        name="bottomText"
                        onChange={handleChange}
                        value={formData.bottomText}
                    />
                </div>
                <button className="get--meme-btn">Get new meme image</button>
            </form>
            <section className="img-display-area">
                <img className="meme--image" src={formData.randomImage} alt="" />
                <h2 className="top--text">{formData.topText}</h2>
                <h2 className="bottom--text">{formData.bottomText}</h2>
            </section>
        </section>
    )
}