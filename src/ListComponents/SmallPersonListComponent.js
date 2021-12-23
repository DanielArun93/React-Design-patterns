export const SmallPersonListComponent = ({ person }) => {
    const { name, age } = person;
    return (
        <>
            <p>Name: {name} - Age: {age} Years</p>
        </>
    );
};