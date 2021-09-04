import React, { useState, useEffect, useRef } from 'react';
// import db from '../../../db.json';
// Render das telas (da rota Quiz)
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import Widget from '../../components/Widget';
import AlternativesForm from '../../components/AlternativesForm';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import QuizContainer from '../../components/QuizContainer';
import QuizExplanations from '../../components/QuizExplanations';
import GitHubCorner from '../../components/GitHubCorner';
import Input from '../../components/Input';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';
import animationData from './animations/loading-recycle.json';
import animationData3 from './animations/mild-waves.json';
import parse from "html-react-parser";
import LinkButton from '../../components/LinkButton';
import Subtitle from '../../components/Subtitle';
import Footer from '../../components/Footer';
import Credits from '../../components/Credits';
import SeaWidget from '../../components/SeaWidget';
import TurtleWidget from '../../components/TurtleWidget';
import {BreakpointProvider} from '../../components/BreakpointProvider';
import {useBreakpoint} from '../../components/BreakpointProvider';
import ProgressBar from '../../components/ProgressBar';
import dynamic from 'next/dynamic';
import { Link, animateScroll as scroll } from "react-scroll";
import BottleWidget from '../../components/BottleWidget';

  // import Carousel from "react-spring-3d-carousel";
  const Carousel = dynamic(
    () => import ('react-spring-3d-carousel'),
    {
    ssr: false
    }
  )
// import {Carousel} from '3d-react-carousal';
function isIOS() {
  return (
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !window.MSStream
  );
}

function getIOSInputEventHandlers() {
  if (isIOS()) {
    return {};
  }

  return {
    onTouchStart: e => {
      e.currentTarget.style.fontSize = "16px";
    },
    onBlur: e => {
      e.currentTarget.style.fontSize = "";
    }
  };
}
function LoadingWidget({maxWidth}) {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  // Se tiver um botão por exemplo pra fazer a animação ocorrer teria que ser assim
  // useEffect(() => {
  //   setAnimationState({
  //     ...animationState,
  //     isStopped: !animationState.isStopped, // o contrário do que tiver
  //   })
  // }, []);

  const defaultOptions = {
    loop: true, // false não roda em loop infinito
    autoplay: true, // false não carrega a animação quando recarrega
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Widget
      as={motion.section}
      // delay quanto tempo espera pra começar e duração em s
      transition={{ delay: 0, duration: 0.5 }}
      initial="hidden"
      animate="show"
      style={{
        maxWidth: maxWidth
      }}
    >
      <Widget.Header>
        <h1>Carregando...</h1>
      </Widget.Header>
      <Widget.Content>
        <Lottie
          options={defaultOptions}
          height="auto"
          width="300px"
        />
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget({ results, totalQuestions, externalTextResults }) {
  const points = results.filter((x) => x).length;
  const [textResult, setTextResult] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [percentageResult, setPercentageResult] = useState("");
  
  useEffect(()=> {
    if (points < 4) {
      setTextResult(externalTextResults.indiferente);
      setFinalResult("indiferente");
    } else if (points >= 4 && points < 8) {
      setTextResult(externalTextResults.iniciante);
      setFinalResult("iniciante");
    } else if (points >= 8 && points < 12) {
      setTextResult(externalTextResults.engajado);
      setFinalResult("engajado");
    } else {
      setTextResult(externalTextResults.consciente);
      setFinalResult("consciente");
    }
  }, [externalTextResults]);
  return (
    <Widget
      as={motion.section}
      // delay quanto tempo espera pra começar e duração em s
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        // o elemento terá estados de animação
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 1, y: '0' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <h1>Resultado</h1>
      </Widget.Header>

      <Widget.Content>
        <ProgressBar result={(100-(100*(points/totalQuestions)))}/>
        <p>
          Você acertou
          {' '}
          {points+"/"+totalQuestions}
          {' '}
          perguntas
        </p>
        <p>{parse(textResult)}</p>
        <p>Se quiser tentar realizar o teste novamente, perguntas serão sorteadas aleatóriamente.</p>
        <LinkButton href="/" text="Refazer o teste"/>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
  handleExplanation,
  hasAlreadyConfirmed,
  maxWidth,
  ...props
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false); // do formulário
  // se o usuário selecionou uma alternativa, coloca como true pra poder habilitar o botão
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const questionId = `question__${questionIndex}`;
  var [hasAlreadyConfirmedDelay, setHasAlreadyConfirmedDelay] = useState(false);
  const [checked, setChecked] = useState(false);

  // delay de alguns segundos para o botão de próxima pergunta ser ativado
  useEffect(()=> {
    if (hasAlreadyConfirmed) {
      setTimeout(()=> {
          setHasAlreadyConfirmedDelay(true);
        }, 1000)
    } else {
      setHasAlreadyConfirmedDelay(false);
    }
  }, [hasAlreadyConfirmed])

  const [translateShow, setTranslateShow] = useState({ x: '', y:''})  
  const [translateHide, setTranslateHide] = useState({ x: '', y:''})  
  const breakpoints = useBreakpoint();
  // useEffect(() => {
  //   var large_screen, medium_screen, ipad_pro_screen, ipad_screen, surface_duo_screen, iphone_plus_screen, iphone_screen, motog4_screen, iphonese_screen;
  //   const matchingList2 = Object.keys(breakpoints).map(media => {
  //     var breakpoint_media = breakpoints[media];
  //     switch (media) {
  //       case 'iphonese_screen':
  //         iphonese_screen = breakpoint_media;
  //     }
  //   })
  // }, []);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (window.innerWidth >= 322 && window.innerWidth < 361) {
  //     } 
  //   }
  // }, [window.innerWidth])
    
  return (
    <Widget
      as={motion.section}
      // delay quanto tempo espera pra começar e duração em s
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        // o elemento terá estados de animação
        show: { opacity: 1, x: translateShow.x, y: translateShow.y, IDBIndex: 30 },
        hidden: { opacity: 1, x: translateHide.x, y: translateHide.y, IDBIndex: -1 },
      }}
      initial="hidden"
      animate="show"
      style={{
        maxWidth: maxWidth
      }}
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h1>
          {/* Não usa o $ antes do {} pois é sintaxe do React, se fosse sintaxe do js seria ${} */}
          {`Pergunta ${questionIndex + 1} de ${totalQuestions} `}
        </h1>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h1>
          {question.title}
        </h1>
        <p className="description">
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault(); // não atualiza a página
            setIsQuestionSubmited(true); // respondeu a pergunta
            setChecked(false);
            if(hasAlreadyConfirmed){
              setTimeout(() => {
                addResult(isCorrect);
                onSubmit(); // dispara o onsubmit do form (o método handleQuizPageSubmit)
                setIsQuestionSubmited(false);
                setSelectedAlternative(undefined);
              }, 1);
            }
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={hasAlreadyConfirmed && alternativeStatus}
                title={'Clique para selecionar essa opção'}
              >
                <Input
                  // style={{ display: 'none '}}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => {
                    setSelectedAlternative(alternativeIndex);
                  }}
                  type="radio"
                  checked={isSelected}
                  // se já clicou em confirmar (hasAlreadyConfirmed=true), o botão deve ser desabilitado
                  disabled={hasAlreadyConfirmed}
                  {...getIOSInputEventHandlers()}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {
            hasAlreadyConfirmed ? 
            <Button type="submit" onSubmit={() => handleQuizPageSubmit()} disabled={!hasAlreadyConfirmedDelay}>
              PRÓXIMA PERGUNTA
            </Button>
            : 
            window.innerWidth < 1024 ? 
            <Link
              activeClass="active"
              to="explanation"
              spy={true}
              smooth={true}
              offset={-270}
              duration={500}
            >
              <Button type="button" onClick={() => {handleExplanation()}} disabled={!hasAlternativeSelected || hasAlreadyConfirmed}>
                CONFIRMAR
              </Button>
            </Link>
            :
            <Button type="button" onClick={() => {handleExplanation()}} disabled={!hasAlternativeSelected || hasAlreadyConfirmed}>
              CONFIRMAR
            </Button>
          }
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
function QuestionExplanation({
  explanations,
  source,
  answer,
  animate,
  data_screen,
  myRef,
  carousel
}) {

  const [translateShow, setTranslateShow] = useState({ x: '', y:''})  
  const [translateHide, setTranslateHide] = useState({ x: '', y:''}) 
  const breakpoints = useBreakpoint();
  if (!carousel) {
    useEffect(() => {
      var large_screen, medium_screen, ipad_pro_screen, ipad_screen, surface_duo_screen, iphone_plus_screen, iphone_screen, motog4_screen, iphonese_screen;
      const matchingList2 = Object.keys(breakpoints).map(media => {
        var breakpoint_media = breakpoints[media];
        switch (media) {
          case 'iphonese_screen':
            iphonese_screen = breakpoint_media;
            // console.log(iphonese_screen)
          break;
          case 'motog4_screen':
            motog4_screen = breakpoint_media;
          break;
          case 'iphone_screen':
            iphone_screen = breakpoint_media;
          break;
          case 'iphone_plus_screen':
            iphone_plus_screen = breakpoint_media;
          break;
          case 'surface_duo_screen':
            surface_duo_screen = breakpoint_media;
          break;
          case 'ipad_screen':
            ipad_screen = breakpoint_media;
          break;
          case 'ipad_pro_screen':
            ipad_pro_screen = breakpoint_media;
          break;
          case 'medium_screen':
            medium_screen = breakpoint_media;
          break;
          case 'large_screen':
            large_screen = breakpoint_media;
          break;
        }
      })
    }, []);
    return (
      <>
          <QuizExplanations
          as={motion.section}
          // delay quanto tempo espera pra começar e duração em s
          transition={{ delay: 0, duration: 0, ease: "easeOut" }}
          variants={{
            // o elemento terá estados de animação
            show: { opacity: 1, transition: {delay: 0} },
            hidden: { opacity: 0, transition: {delay: 0} },
          }}
          initial="hidden"
          animate={animate}
          >
          <div ref={myRef} className={`explanations explanations--${animate}`}>
            <Subtitle id="explanation">
              <strong>Resposta correta:</strong> {answer}
            </Subtitle>
            <div className="explanations__content">
                {
                  explanations.map((explanation, explanationIndex) => {
                  return <div key={explanationIndex}>{parse(explanation)}</div>
                  })}
                  <p className="source">Fonte: 
                  {source.map((src, srcIndex) => {
                  return <a href={src.url} key={srcIndex} target="_blank">{src.title}</a>
                  })
                }
                </p>
            </div>
          </div>
          </QuizExplanations>
          </>
    );
  } else {
    const [windowScreen, setWindowScreen] = useState(false);
    useEffect(()=> {
      setTranslateShow({x: '-100%', y: '1%', z: '0px'});
      setTranslateHide({x: '-100%', y: '1%', z: '0px'});
    },[])
    useEffect(()=> {
      if (typeof window !== 'undefined') {
        setWindowScreen(true);
      } else {
        setWindowScreen(false);
      }
    },[window]);
    const CarouselResults = dynamic(
      () => import('../../components/Carousel3D'),
      { ssr: false }
    )
    let slides = [
      <div>
        <a href="https://www.ecycle.com.br/postos/reciclagem.php" target="_blank"><img src="./carousel_ecycle.jpg" alt="Encontre postos de reciclagem e doação mais próximos de você"  title="Encontre postos de reciclagem e doação mais próximos de você" /></a>
        <p><strong>Saiba onde descartar seus resíduos</strong>. Encontre postos de reciclagem e doação mais próximos de você.</p>
      </div>,
      <div>
        <img src="./carousel_led.jpg" alt="Lâmpada LED com plantas dentro, Arte: Juliana Witzke de Brito" />
        <p>Lâmpadas led consomem <strong>10 vezes menos energia que as incandescentes.</strong></p>
      </div>,
      <div>
        <img src="./carousel_embalagens.jpg" alt="Lixeira demonstrando a porcentagens de embalagens por lixo. Fonte: akatu, Arte: Juliana Witzke de Brito" />
        <p>A cada 5kg de lixo caseiro, 1kg é de embalagens. Por dia, no Brasil são descartadas <strong>25 mil toneladas de embalagens</strong>, equivalente a <strong>todo o cimento usado na construção do Maracanã</strong>.</p>
      </div>,
      <div>
        <img src="./carousel_oil.jpg" alt="Chuveiro saindo óleo e caindo no oceano. Arte: Juliana Witzke de Brito" />
        <p><strong>1 litro de óleo de cozinha</strong> contabina água suficiente para você <strong>tomar banho por 1 ano</strong>.</p>
      </div>,
      <div>
        <img src="./carousel_banho.jpg" alt="Piscina dentro de uma banheira. Fonte: akatu, Arte: Juliana Witzke de Brito" />
        <p>No Brasil, <strong>5 minutos de banho</strong> equivalem a <strong>128 piscinas olímpicas</strong> por dia.</p>
      </div>,
      <div>
        <img src="./carousel_eiffel.jpg" alt="Torre Eiffel com uma sacola plástica do lado. Fonte: akatu, Imagem: Juliana Witzke de Brito" />
        <p>Ao usar sacolas duráveis, uma família deia de usar <strong>em 1 ano</strong> sacolinhas descartáveis que, lado a lado, formariam uma <strong>faixa da altura da Torre Eiffel</strong>.</p>
      </div>
    ];
    return (
      <>
        <QuizExplanations.Carousel>
        {
          windowScreen ?
            <CarouselResults slides={slides} autoplay={true} pause={true} interval={10000}/>
          : ""
        }
        </QuizExplanations.Carousel>
      </>
    );
  }
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage({
  externalQuestions, externalBg, externalBgMobile, externalTextResults, projectName, gitHubUser, windowSize
}) {
  const [screenState, setScreenState] = useState(screenStates.LOADING); // estado inicial
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const explanations = question.explanation;
  const source = question.source;
  const answer = question.alternatives[question.answer];
  const [results, setResults] = useState([]);
  const bg = externalBg;
  const bg_mobile = externalBgMobile !== undefined ? externalBgMobile : externalBg;
  const [action, setAction] = useState("hidden");
  const [hasAlreadyConfirmed, setHasAlreadyConfirmed] = useState(false);
  const [windowWidth, setWindowWidth] = useState('');
  const [windowHeight, setWindowHeight] = useState('');
  
  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  const queries = {
    large_screen: '(max-width: 1403px)',
    medium_screen: '(max-width: 1216px)',
    ipad_pro_screen: '(max-width: 1025px)',
    ipad_screen: '(max-width: 769px)',
    surface_duo_screen: '(max-width: 541px)',
    iphone_plus_screen: '(max-width: 416px)',
    iphone_screen: '(max-width: 376px)',
    motog4_screen: '(max-width: 361px)',
    iphonese_screen: '(max-width: 321px)'
  }
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  
  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
  }, []);

  // Muda o estado de ação para "show", exibindo as explicações da pergunta
  useEffect(() => {
    if (hasAlreadyConfirmed){
      setAction("show");
      executeScroll;
    }
  }, [hasAlreadyConfirmed]);

  function handleQuizSubmit() {
    setAction("hidden");
    setHasAlreadyConfirmed(false);
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.LOADING);
      setTimeout(() => {
        setScreenState(screenStates.RESULT);
      }, 2 * 1000);
    }
  }
  // chamada quando o usuário clica no botão "confirmar"
  function handleExplanation() {
    setHasAlreadyConfirmed(true);
  }
  useEffect(()=> {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, [])
  return (
    // Ao invés de fazer assim abaixo, criamos o componente com o style do background
    // <div style={{ backgroundImage: `url (${db.bg})` }}>
    <>
    <BreakpointProvider queries={queries}>
    <QuizBackground backgroundImage={bg} backgroundImageResponsive={bg_mobile} windowSize={windowSize}>
      <QuizContainer>
        <QuizLogo 
         as={motion.section}
         // delay quanto tempo espera pra começar e duração em s
         transition={{ delay: 0, duration: 0 }}
         variants={{
           // o elemento terá estados de animação
           show: { opacity: 1, y: '0', display: 'flex' },
           hidden: { opacity: 0, y: '0', display: 'flex' },
         }}
         initial="hidden"
         animate="show"
         logoShouldBeWhite={false}
         />
        {/* Se for loading renderiza o LoadingWidget */}
        {screenState == screenStates.LOADING && (
          <>
            <div className="relative">
              <LoadingWidget/>
            </div>
          </>
        )}
        {screenState == screenStates.QUIZ && (
          <>
          <div className="relative">
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={handleQuizSubmit}
              handleExplanation={handleExplanation}
              addResult={addResult}
              hasAlreadyConfirmed={hasAlreadyConfirmed}
            />
              <QuestionExplanation
                explanations={explanations}
                source={source}
                animate={action}
                answer={answer}
                carousel={false}>
              </QuestionExplanation>
          </div>
          </>
        )}
        {screenState == screenStates.RESULT && (
          <>
          <div className="relative">
            <ResultWidget 
              results={results} 
              totalQuestions={totalQuestions} 
              externalTextResults={externalTextResults}
            />
            <QuestionExplanation
              carousel={true}
              explanations={explanations}
              source={source}
              animate={action}
              answer={answer}>
            </QuestionExplanation>
          </div>
          </>
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jubrito/SustentabilidadeQuiz"/>
      <Footer>
        <Credits
            as={motion.div}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0', display: 'flex' },
              hidden: { opacity: 1, y: '0', display: 'flex' },
            }}
            initial="hidden"
            animate="show"
          />  
      </Footer> 
      <SeaWidget isStopped={false} width="100%" height="100%" bottom="28px" innerHeight={windowHeight} innerWidth={windowWidth}/>  
      <TurtleWidget isStopped={false} innerHeight={windowHeight} innerWidth={windowWidth}/>   
      <BottleWidget isStopped={false} innerHeight={windowHeight} innerWidth={windowWidth}/>   
    </QuizBackground>
    </BreakpointProvider>
    </>
  );
}
