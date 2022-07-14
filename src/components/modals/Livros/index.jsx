import React from 'react';
import * as S from './styled';

export default function Varinha() {
    return (
        <S.Container>
            <div className="item">
                <img src="/images/open-book.png" alt="" />
            </div>
            <h2>Lista de Livros:</h2>
            <ul>
                <li>
                    O Livro Padrão de Feitiços (1ª série), de Miranda Goshwak
                </li>
                <li>História da Magia, de Batilda Bagshot.</li>
                <li>Teoria da Magia, de Adalberto Waffling</li>
                <li>
                    Guia de Transfiguração para Iniciantes, de Emerico Switch
                </li>
                <li>Mil Ervas e Fungos Mágicos, de Fílida Spore.</li>
                <li>Bebidas e Poções Mágicas, de Arsênio Jigger</li>
                <li>Animais Fantásticos e seu Hábitat, de Newton Scamander</li>
                <li>
                    As Forças das Trevas: Um Guia de Autoproteção, de Quintino
                    Trimble
                </li>
            </ul>
            <p>Lojas: Floreios e Borrões</p>
        </S.Container>
    );
}
