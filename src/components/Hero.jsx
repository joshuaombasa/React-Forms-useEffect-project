import React from "react"
export default function Hero() {

    const [formData, setFormData] = React.useState(
        {
            topText: '',
            bottomText: ''
        }
    )

    return (
        <section>
            <form action="" className="meme--from">
                <div className="inputs-container">
                    <input className="text--input" type="text" />
                    <input className="text--input" type="text" />
                </div>
                <button className="get--meme-btn">Get new meme image</button>
            </form>
            <section className="img-display-area"></section>
        </section>
    )
}