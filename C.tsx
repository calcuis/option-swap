const C = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="c" name="choice" className="w-5 h-5" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>
        </>
    );
}

export default C;