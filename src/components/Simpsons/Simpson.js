const Simpson = ({simpson}) => {
    const {name,img} = simpson;
    return (
        <div>
            <div>name:{name}</div>
            <img src={img} alt ={name}/>

        </div>
    );
};

export {Simpson};