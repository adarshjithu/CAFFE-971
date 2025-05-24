const Star = () => {
  return (
  <>
    {[1,2,3,4,5].map((obj:any,index:number)=>{
        return <span 
        key={index}
        className="inline-flex items-center justify-center w-4 h-4 rounded text-[#b38c50]  text-xs"
        aria-label="star"
        >
      ★
    </span>
    })}
    </>
  );
};

export default Star;
