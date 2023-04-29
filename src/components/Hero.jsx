import React from "react"
export default function Hero() {

    const [formData, setFormData] = React.useState(
        {
            topText: '',
            bottomText: ''
        }
    )

    function handleChange() {

    }

    return (
        <section className="hero">
            <form action="" className="meme--from">
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
            <section className="img-display-area"></section>
        </section>
    )
}