import React from 'react';
import * as S from './styled';

export default function Varinha() {
    return (
        <S.Container>
            <div className="item">
                <img src="/images/open-book.png" alt="" />
            </div>
            <p>
                Lista: • O Livro Padrão de Feitiços (1ª série), de Miranda
                Goshwak • História da Magia, de Batilda Bagshot. • Teoria da
                Magia, de Adalberto Waffling. • Guia de Transfiguração para
                Iniciantes, de Emerico Switch. • Mil Ervas e Fungos Mágicos, de
                Fílida Spore. • Bebidas e Poções Mágicas, de Arsênio Jigger. •
                Animais Fantásticos e seu Hábitat, de Newton Scamander. • As
                Forças das Trevas: Um Guia de Autoproteção, de Quintino Trimble.
                Lojas: Floreios e Borrões
            </p>
        </S.Container>
    );
}
