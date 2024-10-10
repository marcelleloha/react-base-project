import Base from "./Base";
import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";

const MeusDados = [
    {
        titulo:"Juntos pelo Futuro: Colaboração Botafogo e Barbie",
        texto: "Nesta página, celebramos uma parceria inspiradora entre o Botafogo e a Barbie, unindo o amor pelo esporte e o empoderamento feminino. O Botafogo, com sua rica tradição e paixão pelo futebol, encontra na Barbie uma aliada na promoção de valores como diversidade, inclusão e autoestima."
    },
    {
        titulo: "",
        texto: "Juntos, estamos criando iniciativas que incentivam as jovens a sonhar grande e a acreditar em suaspotencialidades. Através de eventos, campanhas e atividades interativas, queremos engajar a comunidade e promover uma mensagem poderosa: todos têm o direito de brilhar, independentemente de gênero ou origem. Venha fazer parte dessa jornada conosco, onde esporte e empoderamento se encontram para transformar vidas!"
    },
]

const SobreNós = () => {
    return (
        <Base>
          <ListContainer>
            {
              MeusDados.map((ele, index)=> (
                <Cartao 
                    key={index}
                    titulo={ele.titulo}
                    texto={ele.texto}
                />
              )) 
            }
          </ListContainer>
        </Base>
    )

}

export default SobreNós;