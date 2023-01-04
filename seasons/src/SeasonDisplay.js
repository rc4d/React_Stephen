

const seasonCheck = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer':'winter';
    }else{
        return lat > 0 ? 'winter':'summer';
    }
};
function SeasonDisplay({lat}){
    const season = seasonCheck(lat, new Date().month);
    return <div><h1>Season: {season}</h1></div>;
}

export default SeasonDisplay;