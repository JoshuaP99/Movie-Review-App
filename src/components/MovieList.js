import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movieList: [
                {
                    id: 0,
                    image: "https://resizing.flixster.com/4LOnSrFH-AbN_4BwC7kVTo6qtGg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzU1OWIwMWQwLWYyZDItNDk4Yi04MDIxLWI3OTJlNDI1NjA3NS5qcGc=",
                    name: "Topgun: Maverick",
                    release: "6-24-2022",
                    synopsis:"After more than 30 years of service as one of the Navy's top aviators, Pete Maverick Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
                    reviews: []
                },
                
                {
                    id: 1,
                    image: "https://imgr.cineserie.com/2021/12/2106027-1.jpg?imgeng=/f_jpg/cmpr_0/w_1000/h_1500/m_cropbox&ver=1",
                    name: "Everything Everywhere",
                    release: "5-02-2022",
                    synopsis: "When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.",
                    reviews: []
                },

                {
                    id: 2,
                    image: "https://media1.popsugar-assets.com/files/thumbor/Gt88ci2_BzAHGpI30HgOJ0yJX_c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/02/18/046/n/48559432/tmp_4Jidgl_a07f3c1a97539ad1_MCDLIGH_WD007.jpg",
                    name: "Lightyear",
                    release: "6-30-2022",
                    synopsis: "Legendary space ranger Buzz Lightyear embarks on an intergalactic adventure alongside ambitious recruits Izzy, Mo, Darby, and his robot companion, Sox.",
                    reviews: []
                }
            ]
        }
    }
    
    render(){
        return(
            <div className="card w=75">
                <Movie movie={this.state.movieList[0]}/>
                <Movie movie={this.state.movieList[1]}/>
                <Movie movie={this.state.movieList[2]}/>
            </div>
        )
    }
}

