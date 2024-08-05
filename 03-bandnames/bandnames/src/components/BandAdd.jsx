import { useState } from "react";

export const BandAdd = ({ crearBanda }) => {

    const [valor, setValor] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('valor', valor);

        if (valor.trim().length > 0) {
            //
            crearBanda(valor);
            setValor('');
        }
    }

    return (
        <>
            <h3>Agregar Banda</h3>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Nuevo nombre de banda"
                    className="form-control"
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                />
            </form>
        </>
    )
}