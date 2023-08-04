const A = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="a" name="choice" className="w-5 h-5" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>
        </>
    );
}

export default A;