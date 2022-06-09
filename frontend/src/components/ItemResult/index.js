import react from 'react';
import "./itemresult.scss";
import Item from '../Item';

function ItemResult({items}){
    return (
        <ol className="itemsList">
            {items.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </ol>
    )
}

export default ItemResult;
