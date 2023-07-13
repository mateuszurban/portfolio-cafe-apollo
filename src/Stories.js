import React from "react";

import Nav from "./components/Nav";
import Footer from './components/Footer'

import './css/style.css'

const Stories = () => {
    return (
        <>
        <Nav/>
        <div className="stories">
            <div className="post">
                <h2 className="postTitle">Possimus voluptatum</h2>
                <p className="postDetails">Ann, April 15, 2022</p>
                <p className="postContent">Temporibus cumque repudiandae optio eveniet assumenda quae obcaecati quas sapiente ex dicta tempore architecto consequuntur exercitationem aperiam cupiditate, quidem hic, natus fugit esse repellat alias itaque. Aliquam aliquid repellat sed nesciunt nostrum veniam ab eligendi reiciendis nam perspiciatis soluta nihil obcaecati voluptatem corporis, eius placeat et tenetur harum possimus voluptatum. Ea qui, necessitatibus ad maiores cupiditate quidem aliquid pariatur, magni dolorem libero omnis sit, laboriosam eius dolores? Illo officia numquam accusamus ipsum labore quos eius maiores. Dolor.</p>
                
            </div>
            <div className="post">
                <h2 className="postTitle">Adipisicing elit</h2>
                <p className="postDetails">George, March 7, 2022</p>
                <p className="postContent">Adipisicing elit. Nam nisi minima laboriosam expedita ab, voluptatum laudantium totam accusamus repudiandae architecto! Atque repellat ipsum, aliquid et dolorum consectetur aperiam, soluta at aliquam, laboriosam excepturi natus. Omnis repellat fugiat non, ipsam ipsa similique, dolores nisi dolor autem provident laboriosam aliquid suscipit consequatur temporibus quaerat harum! Nemo recusandae odit accusantium qui reprehenderit earum necessitatibus molestias, id quas vero aperiam itaque distinctio ratione, sequi sit dolore aliquam incidunt officia.</p>
                
            </div>
            <div className="post">
                <h2 className="postTitle">Nostrum veniam</h2>
                <p className="postDetails">Pete, Jan 5, 2022</p>
                <p className="postContent">Temporibus cumque repudiandae optio eveniet assumenda quae obcaecati quas sapiente ex dicta tempore architecto consequuntur exercitationem aperiam cupiditate, quidem hic, natus fugit esse repellat alias itaque. Aliquam aliquid repellat sed nesciunt nostrum veniam ab eligendi reiciendis nam perspiciatis soluta nihil obcaecati voluptatem corporis, eius placeat et tenetur harum possimus voluptatum. Ea qui, necessitatibus ad maiores cupiditate quidem aliquid pariatur, magni dolorem libero omnis sit, laboriosam eius dolores? Illo officia numquam accusamus ipsum labore quos eius maiores. Dolor.</p>
                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Stories