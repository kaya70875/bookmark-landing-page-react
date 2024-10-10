import '../../App.scss';
interface HeroImg {
    isReverse?: boolean;
    currentImg: string;
    
}
export default function HeroImg({ isReverse = false , currentImg } : HeroImg) {
    return (
        <div className="hero__img">
            <img src={currentImg?.toString()} alt="hero-img" />

            <div className={`bg ${isReverse ? 'bg--reverse' : ''}`}></div>
        </div>
    )
}
