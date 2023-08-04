const E = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="e" name="choice" className="w-5 h-5" /> {item.e}{values.choice==item.ans && item.ans=="e" &&"✔️"}</li>
        </>
    );
}

export default E;