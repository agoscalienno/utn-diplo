import React from 'react';
import '../../styles/NovedadesPage.css'


const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='novedades'>
            <h1 className='titulo-novedad'>{title}</h1>
            <h2 className='copete-novedad'>{subtitle}</h2>
            <img src={imagen} />
            <div className='cuerpo-novedad' dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}
export default NovedadItem;