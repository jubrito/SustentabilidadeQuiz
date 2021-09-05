import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Componente que permite colocarmos informações no head da página
import { useRouter } from 'next/router';
// Configurado via objetos js, animações na montagem do componente
// motion é uma abstração pras tags do html que iremos animar
import { motion } from 'framer-motion';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import SeaWidget from '../src/components/SeaWidget';
import TurtleWidget from '../src/components/TurtleWidget';
import Credits from '../src/components/Credits';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import LogoAlura from '../src/components/LogoAlura';
import parse from "html-react-parser";
import BottleWidget from '../src/components/BottleWidget';

// Sem o Styled-Components
// function Title(props) {
//   return (
//     // .children: podemos ter um ou mais elementos filhos carregando dentro da tag
//     <h1>{props.children}</h1>
//   )
// }
// Com o Styled-Components conseguimos criar uma variável passando o style de maneira dinâmica
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
//   background-color: ${({ theme }) => {
//   return theme.colors.primary
// }};
// `

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [windowHeight, setWindowHeight] = useState('');
  const [windowWidth, setWindowWidth] = useState('');
  useEffect(()=> {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
  }, [])

  function submitForm(event) {
    event.preventDefault(); // impede o recarregamento da página que viola o SPA
    /*  # QUERY PARAM: Parâmetros que vem na própria rota opcionais para filtros, paginação,
      passar informações pra outra rota
      Insomnia: http://localhost:3000/users?search=ar (Buscando users que contenham "ar")
      http://localhost:3000/quiz?name=Juliana (Passando a informação do nome para a rota Quiz) */
    router.push(`/quiz?name=${name}`, { shallow: true });
  }

  return (
    // Ao invés de fazer assim abaixo, criamos o componente com o style do background
    // <div style={{ backgroundImage: `url (${db.bg})` }}>
    <QuizBackground backgroundImage={db.bg} backgroundImageResponsive={db.bg_mobile} isHomepage={true}>
      <Head>
        <title>{db.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta property="og:title" content={db.title} key="title" />
        <meta property="og:image" content={db.backgroundImage} />
        <meta name="description" content="O objetivo desse teste é te ajudar a encontrar oportunidades para deixar suas ações mais sustentáveis! Quiz criado por Juliana Witzke de Brito"></meta>
        <meta name="google-site-verification" content="h4778lwuG2KPHy--S9BxnxUsFRSchljthm2INr8jO_U" />
        <meta name="robots" content="index,follow" />
      </Head>
      <QuizContainer>
        <QuizLogo 
         as={motion.div}
         transition={{ delay: 0.2, duration: 0.5 }}
         variants={{
           // o elemento terá estados de animação
           show: { opacity: 1, y: '0' },
           hidden: { opacity: 0, y: '-100%' },
         }}
         initial="hidden"
         animate="show"
         logoShouldBeWhite={true}
        />
        <div className="relative">
          <Widget
            as={motion.section}
            // delay quanto tempo espera pra começar e duração em s
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              // o elemento terá estados de animação
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>QUIZ</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(changeEvent) => submitForm(changeEvent)}>
                <div className='description'>
                  {parse(db.description)}
                  <p>{db.number_of_questions} perguntas serão sorteadas aleatoriamente.</p>
                </div>
                <Button type="submit">
                  CLIQUE AQUI PARA JOGAR
                </Button>
              </form>
            </Widget.Content>
          </Widget>
        </div>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jubrito/SustentabilidadeQuiz"/>
      <Footer>
        <Credits
            as={motion.div}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0', display: 'flex' },
              hidden: { opacity: 0, y: '100%', display: 'none' },
            }}
            initial="hidden"
            animate="show"
          />  
      </Footer> 
      <SeaWidget isStopped={true} width="100%" height="100%" bottom="28px" innerHeight={windowHeight} innerWidth={windowWidth}/>   
      <TurtleWidget isStopped={true} innerHeight={windowHeight} innerWidth={windowWidth}/>   
      <BottleWidget isStopped={true} innerHeight={windowHeight} innerWidth={windowWidth}/>   
    </QuizBackground>
  );
}
