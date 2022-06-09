import "./categories.scss";

function Categories({categories}){
    return (
        <ol className="categories">
            {categories &&
                categories.map(category => (
                <li className="categoriesItem" key={category}>
                    {category}
                </li>
            ))}
        </ol>
    )
}

export default Categories;