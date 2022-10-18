import './Faces.css'
import Javascript from "../../assets/javascript.webp";
import Typescript from "../../assets/typescript.webp";
import React, {useLayoutEffect} from "react";

function Faces(){
    useLayoutEffect(() => {
        // Select all the elements we want to animate
        const elements = document.querySelectorAll('.jsts');
        // For each element, observe it
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // If the element is visible, animate it
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('animate__animated');
                    entry.target.classList.add('animate__fadeInRight');
                }
                // else{
                //     entry.target.classList.add('hidden');
                //     entry.target.classList.remove('animate__animated');
                //     entry.target.classList.remove('animate__fadeInRight');
                // }
            });
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    });

    return (
        <div className="App-body">
            <div>
                <img src={Javascript} alt={'Javascript'} className={"jstslogo jsts"}/>
                <p className={"title jsts"}>Javascript</p>
            </div>
            <div>
                <img src={Typescript} alt={'Typescript'} className={"jstslogo jsts"}/>
                <p className={"title jsts"}>Typescript</p>
            </div>
        </div>
    );
}

export default Faces;