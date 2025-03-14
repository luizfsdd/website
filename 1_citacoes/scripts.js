const quotes = [
    {
      quote: "A persistência é o caminho do êxito.",
      author: "Charles Chaplin",
    },
    {
      quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
      author: "Steve Jobs",
    },
    {
      quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
    },
    {
      quote:
        "O fracasso é a oportunidade de começar de novo, com mais experiência.",
      author: "Henry Ford",
    },
    {
      quote: "Não espere por oportunidades, crie você mesmo as suas.",
      author: "Autor desconhecido",
    },
    {
      quote:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      author: "Zig Ziglar",
    },
    {
      quote:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
      author: "Winston Churchill",
    },
    {
      quote:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
      author: "Winston Churchill",
    },
    {
      quote: "Acredite em si próprio e todo o resto virá naturalmente.",
      author: "Elon Musk",
    },
    {
      quote:
        "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
      author: "Autor desconhecido",
    },

    { quote: "O único modo de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
  { quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier" },
  { quote: "A vida é 10% do que acontece com você e 90% de como você reage a isso.", author: "Charles R. Swindoll" },
  { quote: "O maior erro que você pode cometer é ter medo de cometer um erro.", author: "Elbert Hubbard" },
  { quote: "Você nunca será velho demais para estabelecer outro objetivo ou sonhar um novo sonho.", author: "C.S. Lewis" },
  { quote: "Não importa o quão devagar você vá, desde que não pare.", author: "Confúcio" },
  { quote: "A única maneira de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
  { quote: "Não espere. O tempo nunca será o certo.", author: "Napoleon Hill" },
  { quote: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", author: "Eleanor Roosevelt" },
  { quote: "A única limitação para a nossa realização de amanhã são as nossas dúvidas e hesitações de hoje.", author: "Franklin D. Roosevelt" },
  { quote: "Você precisa fazer aquilo que pensa que não consegue.", author: "Eleanor Roosevelt" },
  { quote: "Acredite em si próprio e todo o resto virá naturalmente.", author: "Elon Musk" },
  { quote: "A felicidade não é algo pronto. Ela vem das suas próprias ações.", author: "Dalai Lama" },
  { quote: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Vidal Sassoon" },
  { quote: "O segredo para seguir em frente é começar.", author: "Mark Twain" },
  { quote: "Não é sobre o quão bom você é, mas sobre o quão bom você quer ser.", author: "Paul Arden" },
  { quote: "O sucesso é a capacidade de ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill" },
  { quote: "A melhor maneira de prever o futuro é criá-lo.", author: "Abraham Lincoln" },
  { quote: "A jornada de mil milhas começa com um único passo.", author: "Lao Tzu" },
  { quote: "A vida é aquilo que acontece enquanto estamos ocupados fazendo outros planos.", author: "John Lennon" },
  { quote: "Quem não luta pelo que quer, não merece o que deseja.", author: "Autor Desconhecido" },
  { quote: "A ação é a chave fundamental para o sucesso.", author: "Pablo Picasso" },
  { quote: "Você não pode cruzar o mar simplesmente olhando para a água.", author: "Rabindranath Tagore" },
  { quote: "O maior prazer da vida é fazer o que as pessoas dizem que você não pode fazer.", author: "Walter Bagehot" },
  { quote: "Não tenha medo de desistir do bom para buscar o ótimo.", author: "John D. Rockefeller" },
  { quote: "O verdadeiro líder é aquele que conhece o caminho, anda pelo caminho e mostra o caminho.", author: "John C. Maxwell" },
  { quote: "Nós não vemos as coisas como são, nós as vemos como somos.", author: "Anaïs Nin" },
  { quote: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill" },
  { quote: "Não é o mais forte que sobrevive, nem o mais inteligente, mas o mais disposto à mudança.", author: "Charles Darwin" },
  { quote: "O melhor jeito de prever o futuro é criá-lo.", author: "Peter Drucker" },
  { quote: "Acredite que você pode, assim você já está no meio do caminho.", author: "Theodore Roosevelt" },
  { quote: "O que você obtém alcançando seus objetivos não é tão importante quanto o que você se torna ao alcançá-los.", author: "Zig Ziglar" },
  { quote: "Eu não falhei. Apenas encontrei 10.000 maneiras que não funcionam.", author: "Thomas Edison" },
  { quote: "Não é o que acontece com você, mas como você reage que importa.", author: "Epicteto" },
  { quote: "Se você quer ir rápido, vá sozinho. Se você quer ir longe, vá acompanhado.", author: "Provérbio Africano" },
  { quote: "O que você faz hoje pode melhorar todos os seus amanhãs.", author: "Ralph Marston" },
  { quote: "A mente é tudo. Você se torna aquilo que você pensa.", author: "Buda" },
  { quote: "Nossos maiores medos não são de sermos inadequados. Nossos maiores medos são de sermos poderosos além da conta.", author: "Marianne Williamson" },
  { quote: "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.", author: "Thomas Jefferson" },
  { quote: "O único limite para a nossa realização de amanhã são as nossas dúvidas e hesitações de hoje.", author: "Franklin D. Roosevelt" },
  { quote: "Faça o que você pode, com o que você tem, onde você está.", author: "Theodore Roosevelt" },
  { quote: "A melhor maneira de prever o futuro é criá-lo.", author: "Abraham Lincoln" },
  { quote: "A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa continuar em movimento.", author: "Albert Einstein" },
  { quote: "Tente não se tornar um homem de sucesso, mas sim um homem de valor.", author: "Albert Einstein" },
  { quote: "O importante não é vencer todos os dias, mas lutar sempre.", author: "Autor Desconhecido" },
  { quote: "Eu sou um grande crente de que qualquer coisa que vale a pena fazer vale a pena fazer bem.", author: "Jack Nicholson" },
  { quote: "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.", author: "Zig Ziglar" },
  { quote: "É nosso julgamento que define quem somos.", author: "J.K. Rowling" },
  { quote: "O melhor jeito de prever o futuro é criá-lo.", author: "Peter Drucker" },
  { quote: "Muitas das falhas da vida são de pessoas que não perceberam o quão perto estavam do sucesso quando desistiram.", author: "Thomas Edison" },
  { quote: "A vida é feita de escolhas. Quanto mais cedo você decidir, mais rápido você verá os resultados.", author: "Autor Desconhecido" },
  { quote: "Não desista. O começo é sempre o mais difícil.", author: "Autor Desconhecido" },
  { quote: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Vidal Sassoon" },
  { quote: "Aqueles que são ousados o suficiente para acreditar que podem mudar o mundo, são os que o fazem.", author: "Steve Jobs" }
  ];

  const quoteBtn = document.querySelector("#quoteBtn");
  const quoteText = document.querySelector(".text");
  const quoteAuthor = document.querySelector(".author");


  function getQuote() {
    const index = Math.floor(Math.random() * quotes.length); 
    
    quoteText.textContent = quotes[index].quote;
    quoteAuthor.textContent = quotes[index].author;

  }


  quoteBtn.addEventListener("click", getQuote);