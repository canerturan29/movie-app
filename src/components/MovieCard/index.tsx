import { IMovie } from '../../interfaces';
import './MovieCard.css';

export function MovieCard({ rating, imageURL, name, overview }: MovieCardProps) {
    return (
        <div className='CardContainer'>
            <div className='CardImage'>
                <img src={imageURL} alt={name} />
            </div>


            <div className='CardBody'>
                <div className='title'>
                    {name}
                </div>

                <div className='description'>
                    {overview}
                </div>

            </div>

            <div className='CardFooter'>


                <div className='Rating'>
                    {rating}
                </div>
            </div>

        </div>
    );
}

interface MovieCardProps extends IMovie {

}