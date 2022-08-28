import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="holder">
            <h2>Mundo Deco</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.copete}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}

        </section>
    );

}

export default NovedadesPage;

// return (
//     <main className="holder">
//         <h2>Mundo Deco</h2>
//         <div className="novedades">
//             <h3>Titulo</h3>
//             <h4>Subtitulo</h4>
//             <p>Descripcion - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magnam optio illum molestiae? Assumenda quis,
//                 magni repudiandae cupiditate illo, architecto commodi aliquam omnis modi iusto, libero dicta dignissimos vel
//                 eum.</p>
//             <hr />
//             <h3>Titulo</h3>
//             <h4>Subtitulo</h4>
//             <p>Descripcion - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magnam optio illum molestiae? Assumenda quis,
//                 magni repudiandae cupiditate illo, architecto commodi aliquam omnis modi iusto, libero dicta dignissimos vel
//                 eum.</p>
//             <hr />
//         </div>
//     </main>
// )
// }

// export default NovedadesPage