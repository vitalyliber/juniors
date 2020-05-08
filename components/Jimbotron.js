import React from "react";

const Jimbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Работа для junior разработчиков</h1>
      <p className="lead">
        Ресурс создан для поддержки начинающих разработчиков, которые недавно закончили
        обучение и готовы начать карьеру в IT.
      </p>
      <hr className="my-4" />
      <p>
        Если клиент готов платить минимум 1 доллар в час, то он может связаться
        с любым из представленных здесь разработчиков напрямую. Предполагается, что взаимодействие
        между клиентом и разработчиком будет осуществляться удаленно с почасовой формой оплаты.
      </p>
      <p className="lead">
        <a
          href="tg://resolve?domain=OneDollarPerHourDevsBot"
          className="btn btn-primary btn-lg"
        >
          Разместить резюме
        </a>
      </p>
    </div>
  );
};

export default Jimbotron;
