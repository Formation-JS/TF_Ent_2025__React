import clsx from 'clsx';
import style from './ProductList.module.css';

export default function ProductList({ products, title }) {
    return (
        <>
            <p>{title}</p>
            <div className={style['card-container']}>
                {products.map(product => (
                    <ProductListItem key={product.id} {...product} />
                ))}
            </div>
        </>
    )
}

function ProductListItem({name, desc, price, inPromo}) {
    const priceFormated = price.toLocaleString('fr-be', {
        style: 'currency',
        currency: 'EUR'
    })

    return (
        <div className={style['card']}>
            <p className={style['title']}>{name} {inPromo && "(PROMO !)"}</p>
            {desc && (
                <p className={style['desc']}>{desc}</p>
            )}
            <p className={clsx(style['price'], inPromo && style['promo'])}>
                {priceFormated}
            </p>
        </div>
    )
}