

const ShoeCard1 = ({imgURL,changeBigShoeImg,bigShoe}) => {
    const handleClick = () => {
        if(bigShoe !== imgURL.bigShoe){
            changeBigShoeImg(imgURL.bigshoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${
    (imgURL===bigShoe) ? 'border-coral-red' : 'transparent'}
    cursor-pointer max-sm:flex-1`}
    onClick={handleClick}>
        <div className="flex sm:w-40 sm:h-40">
        {<img src={imgURL.thumbnail} 
        alt="shoe"
        width={127}
        height={103} 
        className="object-contain"/>}
        </div>
    </div>
  )
}

export default ShoeCard1