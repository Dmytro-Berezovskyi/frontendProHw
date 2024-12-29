import Travel from "../../assets/images/travel.jpg";
import Mission from "../../assets/images/mission.jpg";
import Home from "../Home";

export default function About() {
    return (
        <>
            <div style={{width:'50%'}}>
                <h1 style={{textTransform: 'uppercase', fontWeight: '800', margin: 0}}>About us</h1>
                <p>
                    Welcome to Plan&Stay, your trusted partner in travel planning and accommodation booking.<br/>

                    At Plan&Stay, we believe that every journey begins with the perfect stay. Whether you’re embarking
                    on a solo adventure, planning a family vacation, or organizing a business trip, we’re here to ensure
                    your booking experience is seamless and tailored to your needs.<br/>

                    Our platform is built on the idea that simplicity and reliability should be at the heart of travel.
                    We provide access to a wide range of accommodations—from cozy budget stays to luxurious
                    retreats—carefully selected to suit every traveler’s style and budget.
                </p>
            </div>
            <div style={{width: '100%', height: '400px'}}>
                <img src={Travel} alt="Travel Map" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>

            <div>
                <div>
                    <h1 style={{textTransform: 'uppercase', fontWeight: '800', margin: 0}}>Our Mission</h1>
                    <p>
                        To empower travelers by offering an easy, transparent, and stress-free booking experience that
                        turns travel dreams into reality.
                    </p>
                </div>

                <div>
                    <img src={Mission} alt="Missiont" style={{}}/>
                </div>

            </div>

        </>
    )
}