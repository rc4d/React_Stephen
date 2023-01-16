import './SeasonDisplay.css';

const seasonCheck = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer':'winter';
    }else{
        return lat > 0 ? 'winter':'summer';
    }
};
const seasonConfig = {
    winter: {
        text: "Burr, it is chilly",
        icon: "snowflake"
    },
    summer: {
        text: "Lets hit the beach",
        icon: "sun"
    }
}
function SeasonDisplay({lat}){
    const season = seasonCheck(lat, new Date().month);
    const {text, icon} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`} />
            <h1>{text}</h1> 
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    );
}

export default SeasonDisplay;