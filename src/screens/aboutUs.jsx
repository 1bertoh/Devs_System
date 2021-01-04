import React from "react";
import "./aboutUs.css";
import { useSelector } from "react-redux";

export default (props) => {
    const theme = useSelector((state) => state.changeTheme.theme);

    return (
        <div id={`about_us_${theme}`}>
            <h1>DevFamily</h1>
            <main id={`about_us_container`}>
                <h3>Quem Somos?</h3>
                <p>
                    Nam a ante lorem. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Duis
                    quis sem purus. Aliquam vehicula, metus pretium efficitur
                    ultricies, ex odio suscipit justo, quis hendrerit ante elit
                    nec mauris. Nunc id orci a dolor accumsan tincidunt id id
                    leo. Quisque facilisis nulla semper erat volutpat faucibus.
                    Donec dignissim nec dui aliquet viverra. Etiam ultrices ante
                    vitae mi mollis lobortis. Sed nisl arcu, tempus in congue
                    vel, blandit ac tortor. Donec non justo id ante eleifend
                    condimentum. Etiam pellentesque varius justo, non vestibulum
                    ipsum placerat ac. Duis ornare lacus in nunc tristique
                    suscipit. Donec mollis augue at leo varius, vitae commodo
                    ligula ultrices. Nulla facilisi. Etiam consequat dolor
                    augue, et varius ipsum aliquet nec.
                </p>
                <p>
                    Fusce quis suscipit neque, ut molestie risus. Mauris sed
                    justo quis justo molestie tincidunt. Quisque molestie
                    venenatis molestie. Aliquam at enim non ipsum dictum
                    eleifend. Sed posuere sed turpis ut congue. Donec eget mi
                    pharetra, egestas metus ut, varius nibh. Aenean justo nunc,
                    rutrum ac quam ut, euismod sagittis nisi. Nam vulputate
                    sagittis mattis. Proin dapibus sem semper turpis
                    sollicitudin, sed gravida libero fringilla. Pellentesque
                    feugiat augue eu ornare ornare. Ut suscipit in orci et
                    mattis. Sed scelerisque ornare arcu eget dictum. Vestibulum
                    tempor diam ac tincidunt dictum. Nullam in vulputate ante.
                </p>
                <p>
                    Sed ac urna mauris. Phasellus auctor, lorem vitae
                    pellentesque ornare, augue tellus tristique orci, in pretium
                    ex nisl et ligula. Orci varius natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Aenean at
                    varius lectus. Vestibulum id dictum orci. Sed placerat magna
                    non ante fermentum, nec auctor eros eleifend. Cras et
                    laoreet mauris. Aliquam vitae sapien ac leo sagittis
                    malesuada eu quis mauris.
                </p>
                <h3>Nossa História</h3>
                <p>
                    Mauris pulvinar porttitor suscipit. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Aliquam mi eros, pellentesque vitae nulla ac,
                    malesuada dignissim metus. Phasellus commodo nunc nulla, at
                    viverra nibh faucibus ut. Pellentesque finibus, leo vel
                    auctor vulputate, massa nulla efficitur elit, vel tempor
                    lectus odio sit amet nunc. Nunc facilisis lobortis libero
                    finibus ornare. Aliquam nisi ligula, rutrum at urna at,
                    venenatis tempor magna. In id eleifend nisi, in pharetra
                    felis. Fusce volutpat metus a posuere rhoncus. Ut iaculis
                    tincidunt turpis. Fusce non tortor semper mi pharetra
                    rhoncus a ac libero. Cras facilisis convallis neque, non
                    pharetra mauris mattis eget.
                </p>
                <p>
                    Ut at vestibulum libero, a efficitur nulla. Pellentesque
                    lobortis commodo justo, et volutpat enim lacinia non. Donec
                    vulputate lacus risus, sit amet pulvinar justo fermentum
                    sollicitudin. Nulla facilisi. In convallis leo ipsum, in
                    pretium mauris malesuada id. Mauris tincidunt felis ut
                    pellentesque egestas. Vivamus molestie iaculis imperdiet.
                    Sed tristique vulputate enim, at imperdiet mauris molestie
                    nec. Aliquam fermentum risus sit amet arcu dictum, vitae
                    dignissim arcu mattis. Proin viverra ante eget lorem
                    hendrerit, id ultricies metus iaculis. Quisque faucibus
                    tellus vitae erat ullamcorper cursus. Sed ut bibendum neque.
                    Mauris fermentum arcu a ultricies varius. Mauris faucibus
                    dui elit, condimentum posuere enim consectetur sed.
                </p>
            </main>
        </div>
    );
};
