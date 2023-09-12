const itens = [
  {
    numero: '1',
    pergunta: 'Eu sou...',
    respostas: [
      {
        valor: '1',
        texto: ' Idealista, criativo e visionário'
      },
      {
        valor: '4',
        texto: 'Divertido, espiritual e benéfico'
      },
      {
        valor: '3',
        texto: 'Manter a cordialidade para gerar um ambiente harmônico'
      },
      {
        valor: '2',
        texto: 'Agir sempre de acordo com as regras e expectativas sobre mim'
      }
    ]
  },
  {
    numero: '2',
    pergunta: 'Eu gosto de...',
    respostas: [
      { valor: '2', texto: 'Ser piloto' },
      { valor: '4', texto: 'Conversar com os passageiros' },
      { valor: '3', texto: 'Planejar a viagem' },
      { valor: '1', texto: 'Explorar novas rotas' }
    ]
  },
  {
    numero: '3',
    pergunta: 'Se você quiser se dar bem comigo...',
    respostas: [
      {
        valor: '1',
        texto: ' Me dê liberdade'
      },
      {
        valor: '3',
        texto: 'Me deixe saber sua expectativa'
      },
      {
        valor: '2',
        texto: 'Lidere, siga ou saia do caminho'
      },
      {
        valor: '4',
        texto: 'Seja amigável, carinhoso e compreensivo'
      }
    ]
  },
  {
    numero: '4',
    pergunta: 'Para conseguir obter bons resultados é preciso...',
    respostas: [
      {
        valor: '1',
        texto: 'Ter incertezas'
      },
      {
        valor: '3',
        texto: 'Controlar o essencial'
      },
      {
        valor: '4',
        texto: 'Diversão e celebração'
      },
      {
        valor: '2',
        texto: 'Planejar e obter recursos'
      }
    ]
  },
  {
    numero: '5',
    pergunta: 'Eu me divirto quando...',
    respostas: [
      {
        valor: '2',
        texto: 'Estou me exercitando'
      },
      {
        valor: '1',
        texto: 'Tenho novidades'
      },
      {
        valor: '4',
        texto: 'Estou com os outros'
      },
      {
        valor: '3',
        texto: 'Determino as regras'
      }
    ]
  },

  {
    numero: '6',
    pergunta: 'Eu penso que...',
    respostas: [
      {
        valor: '4',
        texto: 'Unidos venceremos, divididos perderemos'
      },
      {
        valor: '2',
        texto: 'O ataque é melhor que a defesa'
      },
      {
        valor: '1',
        texto: 'É bom ser manso, mas andar com um porrete'
      },
      {
        valor: '3',
        texto: 'Um homem prevenido vale por dois'
      }
    ]
  },
  {
    numero: '7',
    pergunta: 'Minha preocupação é...',
    respostas: [
      {
        valor: '1',
        texto: 'Gerar a ideia global'
      },
      {
        valor: '4',
        texto: 'Fazer com que as pessoas gostem'
      },
      {
        valor: '3',
        texto: 'Fazer com que funcione'
      },
      {
        valor: '2',
        texto: 'Fazer com que aconteça'
      }
    ]
  },
  {
    numero: '8',
    pergunta: 'Eu prefiro... ',
    respostas: [
      {
        valor: '1',
        texto: 'Perguntas a respostas'
      },
      {
        valor: '3',
        texto: 'Ter todos os detalhes'
      },
      {
        valor: '2',
        texto: 'Vantagens a meu favor'
      },
      {
        valor: '4',
        texto: 'Que todos tenham a chance de ser ouvido'
      }
    ]
  },
  {
    numero: '9',
    pergunta: 'Eu gosto de...',
    respostas: [
      {
        valor: '2',
        texto: 'Fazer progresso'
      },
      {
        valor: '4',
        texto: 'Construir memórias'
      },
      {
        valor: '3',
        texto: 'Fazer sentido'
      },
      {
        valor: '1',
        texto: 'Tornar as pessoas confortáveis'
      }
    ]
  },
  {
    numero: '10',
    pergunta: 'Eu gosto de chegar... ',
    respostas: [
      {
        valor: '2',
        texto: 'Na frente'
      },
      {
        valor: '4',
        texto: 'Junto'
      },
      {
        valor: '3',
        texto: 'Na hora'
      },
      {
        valor: '1',
        texto: 'Em outro lugar'
      }
    ]
  }

  /* {
    numero: '11',
    pergunta: 'Um ótimo dia para mim é quando...',
    respostas: [
      {
        valor: '2',
        texto: 'Consigo fazer muitas coisas'
      },
      {
        valor: '4',
        texto: 'Me divirto com meus amigos'
      },
      {
        valor: '3',
        texto: 'Tudo segue conforme planejado'
      },
      {
        valor: '1',
        texto: 'Desfruto de coisas novas e estimulantes'
      }
    ]
  },
  {
    numero: '12',
    pergunta: 'Eu vejo a morte como... ',
    respostas: [
      {
        valor: '1',
        texto: 'Uma grande aventura misteriosa '
      },
      {
        valor: '4',
        texto: 'Oportunidade para rever os falecidos'
      },
      {
        valor: '3',
        texto: 'Um modo de receber recompensas'
      },
      {
        valor: '2',
        texto: 'Algo que sempre chega muito cedo'
      }
    ]
  },
  {
    numero: '13',
    pergunta: 'Minha filosofia de vida é...',
    respostas: [
      {
        valor: '2',
        texto: 'Há ganhadores e perdedores, e eu acredito ser um ganhador'
      },
      {
        valor: '4',
        texto: 'Para eu ganhar, ninguém precisa perder'
      },
      {
        valor: '3',
        texto: 'Para ganhar é preciso seguir as regras'
      },
      {
        valor: '1',
        texto: 'Para ganhar, é necessário inventar novas regras'
      }
    ]
  },
  {
    numero: '14',
    pergunta: 'Eu sempre gostei de...',
    respostas: [
      {
        valor: '1',
        texto: 'Explorar'
      },
      {
        valor: '3',
        texto: 'Evitar surpresas '
      },
      {
        valor: '2',
        texto: 'Focalizar a meta'
      },
      {
        valor: '4',
        texto: 'Realizar uma abordagem natural '
      }
    ]
  },
  {
    numero: '15',
    pergunta: 'Eu gosto de mudanças se... ',
    respostas: [
      {
        valor: '2',
        texto: 'Me der uma vantagem competitiva'
      },
      {
        valor: '4',
        texto: 'For divertido e puder ser compartilhado'
      },
      {
        valor: '1',
        texto: 'Me der mais liberdade e variedade '
      },
      {
        valor: '3',
        texto: 'Melhorar ou me der mais controle'
      }
    ]
  },

  {
    numero: '16',
    pergunta: 'Não existe nada de errado em...',
    respostas: [
      {
        valor: '2',
        texto: 'Se colocar na frente'
      },
      {
        valor: '4',
        texto: 'Colocar os outros na frente'
      },
      {
        valor: '1',
        texto: 'Mudar de ideia'
      },
      {
        valor: '3',
        texto: 'Ser consistente'
      }
    ]
  },
  {
    numero: '17',
    pergunta: 'Eu gosto de buscar conselhos de...',
    respostas: [
      {
        valor: '2',
        texto: 'Pessoas bem-sucedidas '
      },
      {
        valor: '4',
        texto: 'Anciões e conselheiros'
      },
      {
        valor: '3',
        texto: 'Autoridades no assunto'
      },
      {
        valor: '1',
        texto: 'Lugares, os mais estranhos'
      }
    ]
  },
  {
    numero: '18',
    pergunta: 'Meu lema é...',
    respostas: [
      {
        valor: '1',
        texto: 'Fazer o que precisa ser feito'
      },
      {
        valor: '3',
        texto: 'Fazer bem feito'
      },
      {
        valor: '4',
        texto: 'Fazer junto com o grupo'
      },
      {
        valor: '2',
        texto: 'Simplesmente fazer'
      }
    ]
  },
  {
    numero: '19',
    pergunta: 'Eu gosto de...',
    respostas: [
      {
        valor: '1',
        texto: 'Complexidade, mesmo se confuso '
      },
      {
        valor: '3',
        texto: 'Ordem e sistematização'
      },
      {
        valor: '4',
        texto: 'Calor humano e animação'
      },
      {
        valor: '2',
        texto: 'Coisas claras e simples'
      }
    ]
  },
  {
    numero: '20',
    pergunta: 'Tempo para mim é...',
    respostas: [
      {
        valor: '2',
        texto: 'Algo que detesto desperdiçar'
      },
      {
        valor: '4',
        texto: 'Um grande ciclo'
      },
      {
        valor: '3',
        texto: 'Uma flecha que leva ao inevitável'
      },
      {
        valor: '1',
        texto: 'Irrelevante'
      }
    ]
  },

  {
    numero: '21',
    pergunta: 'Se eu fosse bilionário...',
    respostas: [
      {
        valor: '4',
        texto: 'Faria doações para muitas entidades'
      },
      {
        valor: '3',
        texto: 'Criaria uma poupança avantajada'
      },
      {
        valor: '1',
        texto: 'Faria o que desse na cabeça'
      },
      {
        valor: '2',
        texto: 'Exibiria bastante com algumas pessoas'
      }
    ]
  },
  {
    numero: '22',
    pergunta: 'Eu acredito que...',
    respostas: [
      {
        valor: '2',
        texto: 'O destino é mais importante que a jornada'
      },
      {
        valor: '4',
        texto: 'A jornada é mais importante que o destino'
      },
      {
        valor: '3',
        texto: 'Um centavo economizado é um centavo ganho'
      },
      {
        valor: '1',
        texto: 'Bastam um navio e uma estrela para navegar'
      }
    ]
  },
  {
    numero: '23',
    pergunta: 'Eu acredito também que... ',
    respostas: [
      {
        valor: '2',
        texto: 'Aquele que hesita está perdido'
      },
      {
        valor: '3',
        texto: 'De grão em grão a galinha enche o papo'
      },
      {
        valor: '4',
        texto: 'O que vai, volta'
      },
      {
        valor: '1',
        texto: 'Um sorriso ou uma careta é o mesmo para quem é cego'
      }
    ]
  },
  {
    numero: '24',
    pergunta: 'Eu acredito ainda que...',
    respostas: [
      {
        valor: '3',
        texto: 'É melhor prudência do que arrependimento'
      },
      {
        valor: '1',
        texto: 'A autoridade deve ser desafiada'
      },
      {
        valor: '2',
        texto: 'Ganhar é fundamental'
      },
      {
        valor: '4',
        texto: 'O coletivo é mais importante do que o individual '
      }
    ]
  },
  {
    numero: '25',
    pergunta: 'Eu penso que...',
    respostas: [
      {
        valor: '1',
        texto: 'Não é fácil ficar encurralado'
      },
      {
        valor: '3',
        texto: 'É preferível olhar, antes de pular'
      },
      {
        valor: '4',
        texto: 'Duas cabeças pensam melhor que do que uma'
      },
      {
        valor: '2',
        texto: 'Se você não tem condições de competir, não compita'
      }
    ]
  }*/
]

const resultado = [
  {
    id: '1' /*I*/,
    nome: 'ÁGUIA',
    titulo: 'Criatividade e Liberdade',
    bio: 'A águia tem como característica principal “fazer diferente”. Pessoas com o perfil de águia são criativas e usam a sua intuição com frequência para antecipar o futuro, provocar mudanças radicais e inspirar ideias. Essas características fazem com que ela seja impaciente e rebelde, defendendo sempre o novo pelo novo sem se preocupar com o presente.',
    avatar: './img/aguia.png',
    link: './pasta/aguia.html',
    dados: '100%',
    corBorda: '#6DE1E3',
    corFundo: '#1FA9AB'
  },
  {
    id: '2' /*A*/,
    nome: 'TUBARÃO',
    titulo: 'Resultados',
    bio: 'A característica principal do tubarão é “fazer rápido”. Seu senso de urgência é apurado e por isso prima pela ação e iniciativa. As pessoas com perfil de tubarão. Os indivíduos com esse perfil fazem do modo mais fácil, podem ter problemas de relacionamento e tendem a resolver seus problemas sozinhos para não ter que repetir tarefas. Gostam de vencer os desafios que lhe são impostos e tem como foco principal os resultados.',
    avatar: './img/tubarao.png',
    link: './pasta/tubarao.html',
    dados: '100%',
    corBorda: '#BCA2E8',
    corFundo: '#9C74B3'
  },
  {
    id: '3' /*O*/,
    nome: 'LOBO',
    titulo: 'Ordem e Controle',
    bio: 'O Lobo tem como característica principal “fazer certo”. Pessoas com esse perfil são detalhistas e organizadas, não dando um passo sem pensar na estratégia. São pontuais, responsáveis, metódicos e prezam pela consistência, conformidade e qualidade. Por isso, tem dificuldades em se adaptar a mudanças e podem impedir o progresso por pensar demasiadamente nos detalhes.',
    avatar: './img/lobo.png',
    link: './pasta/lobo.html',
    dados: '100%',
    corBorda: '#A0C4E8',
    corFundo: '#72A4B3' /*#386F80*/
  },
  {
    id: '4' /*C*/,
    nome: 'GATO',
    titulo: 'Felicidade e Igualdade',
    bio: 'O Gato tem como característica principal o “fazer junto”. Pessoas com perfil do gato são sensíveis e tem um bom relacionamento no ambiente empresarial, mantendo a comunicação harmoniosa. Para isso podem esconder conflitos, colocar a felicidade acima dos resultados e manipular através dos sentimentos. Esses indivíduos têm grande aceitação social e facilidade de construir o consenso, o que provoca o reconhecimento da equipe e inspira a autoridade no trabalho em equipe.',
    avatar: './img/gato.png',
    link: './pasta/gato.html',
    dados: '100%',
    corBorda: '#82E9F4',
    corFundo: '#2CB1BF' /*#1A6A73*/
  }
]

document.addEventListener('alpine:init', () => {
  Alpine.store('escolhas', {
    listaDeEscolhas: {},

    adicionar(i, escolha) {
      this.listaDeEscolhas[i] = escolha
    },

    resultado() {
      const listaLetras = Object.values(this.listaDeEscolhas)
      const quantidadeEscolhas = listaLetras.reduce((acumulador, letra) => {
        acumulador[letra] = acumulador[letra] + 1 || 1
        return acumulador
      }, {})

      const chavesObjetos = Object.keys(quantidadeEscolhas).sort(function (
        a,
        b
      ) {
        return quantidadeEscolhas[b] - quantidadeEscolhas[a]
      })

      return resultado.filter(mascote => mascote.id === chavesObjetos[0])[0]
    }
  })
})
