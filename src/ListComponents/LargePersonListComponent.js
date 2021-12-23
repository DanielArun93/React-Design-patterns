export const LargePersonListComponent = ({ person }) => {
    const { name, age, haircolor, hobbies } = person
    return (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age} Years</p>
            <p>Hair Color: {haircolor}</p>
            <h2>Hobbies</h2>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    );
};