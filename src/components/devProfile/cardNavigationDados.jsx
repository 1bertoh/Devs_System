import React from "react";
import { useSelector } from "react-redux";

export default (props) => {
    const devId = useSelector((state) => state.getDevId.devId) - 1;
    const dev = useSelector((state) => state.getDevs.devs[devId]);

    return (
        <div style={{ textAlign: "start" }}>
            <p>{console.log(dev)}</p>
            <h2>{dev && dev.name}</h2>
            <p>
                <span>Apelido:</span> {dev && dev.username}
            </p>
            <p>
                <span>E-mail:</span> {dev && dev.email}{" "}
            </p>
            <p>
                <span>Telefone:</span> {dev && dev.phone}
            </p>
            <p>
                <span>Website:</span> {dev && dev.website}
            </p>
            <dl>
                <dt>
                    <span>Compania</span>
                </dt>
                <dd>
                    <span>Nome:</span> {dev && dev.company.name}
                </dd>
                <dd>
                    <span>Slogan:</span> {dev && dev.company.catchPhrase}
                </dd>
                <dt> Endereço</dt>
                <dd>
                    <span>Cidade:</span> {dev && dev.address.city}
                </dd>
                <dd>
                    <span>Rua:</span> {dev && dev.address.street}
                </dd>
                <dd>
                    <span>CEP:</span> {dev && dev.address.zipcode}
                </dd>
            </dl>
        </div>
    );
};
