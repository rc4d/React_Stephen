import'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">Personal Digital Assistance</p>
                    <p class="subtitle"></p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title="Alexa" handle="@alexa99 " imageurl={AlexaImage} description="Alexa was created by Amazon and helps you buy things." />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Cortana" handle="@cortona32" imageurl={CortanaImage} description="Cortana was made by microsoft. It is window assistant." />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard title="Siri" handle="@siri01" imageurl={SiriImage} description="Siri was made by Apple and phased out." /> 
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;