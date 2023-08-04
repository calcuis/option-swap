const B = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="b" name="choice" className="w-5 h-5" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>
        </>
    );
}

export default B;