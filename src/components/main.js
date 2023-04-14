import Sign from './sign';

import scissors from '../img/icon-scissors.svg';
import spock from '../img/icon-spock.svg';
import paper from '../img/icon-paper.svg';
import lizard from '../img/icon-lizard.svg';
import rock from '../img/icon-rock.svg';

function Main(props) {
    // console.log(props.setGeneralState)

    return (
        <div className='main'>
            <Sign 
                className='scissors' 
                backgroundColor='hsl(39, 89%, 49%)' 
                boxShadow='0 5px 0 hsla(40, 84%, 53%, 0.493)' 
                img={scissors}
                gridArea='scissors'
                setGeneralState = {props.setGeneralState}
                setChosenSignState = {props.setChosenSignState}
            />

            <Sign 
                className='spock' 
                backgroundColor='hsl(189, 58%, 57%)' 
                boxShadow='0 5px 0 hsl(190, 58%, 57%, 0.493)'
                img={spock}
                gridArea='spock'
                setGeneralState = {props.setGeneralState}
                setChosenSignState = {props.setChosenSignState}
            />

            <Sign 
                className='paper' 
                backgroundColor='hsl(230, 89%, 65%)' 
                boxShadow='0 5px 0 hsl(231, 89%, 65%, 0.493)'
                img={paper}
                gridArea='paper'
                setGeneralState = {props.setGeneralState}
                setChosenSignState = {props.setChosenSignState}
            />

            <Sign 
                className='lizard' 
                backgroundColor='hsl(261, 72%, 63%)' 
                boxShadow='0 5px 0 hsl(262, 72%, 63%, 0.493)'
                img={lizard}
                gridArea='lizard'
                setGeneralState = {props.setGeneralState}
                setChosenSignState = {props.setChosenSignState}
            />

            <Sign 
                className='rock' 
                backgroundColor='hsl(349, 70%, 56%)' 
                boxShadow='0 5px 0 hsl(349, 70%, 56%, 0.493)'
                img={rock}
                gridArea='rock'
                setGeneralState = {props.setGeneralState}
                setChosenSignState = {props.setChosenSignState}
            />                       
        </div>
    )

}



export default Main;
