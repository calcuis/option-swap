const D = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="d" name="choice" className="w-5 h-5" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>
        </>
    );
}

export default D;