import Icon from "../icons/Icon.jsx";
import '../cards/card.css'

function Card({gameEnd, player, onPlay, index}){
    let icon = <Icon/>

    if(player =='X'){
        icon = <Icon name="cross"/>
    }else if (player == 'O'){
        icon = <Icon name = 'circle'/>
    }

    return (
        <div className="card" onClick={() => !gameEnd && player =="" &&  onPlay(index)} >
            {icon}
        </div>
    )
}

export default Card;